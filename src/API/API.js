// const axios = require('axios').default;
import axios from 'axios';
import qs from "qs";

let position = process.env.VUE_APP_SERVER_POSITION

function type(sort) {
  
    if (sort == "activity") {
      return 2
    }
    if (sort == "company") {
      return 1
    }
  return 
}
function resolveArticle(a) {
  let result = {
    id: a.id,
    title: a.title,
    digest: a.subtitle,
    author: a.author,
    content: a.article ? a.article : ""
  }
  result.time = new Date(a.updatedDate).getTime();
  result.sort = Number(a.type)
  return result
}
function resolveDownloadPath(d) {
  let result = {
    downloadPath: {
      teacher: {
        ios: "",
        android: ""
      },
      parents: {
        ios: "",
        android: ""
      }
    },
    CarouselList: []
  }
  for (let v of d.qrList.values()) {
    if (v.custType == 1) {
      if (v.osType == 1) result.downloadPath.teacher.ios = v.img
      if (v.osType == 2) result.downloadPath.teacher.android = v.img
    }
    else if (v.custType == 2) {
      if (v.osType == 1) result.downloadPath.parents.ios = v.img
      if (v.osType == 2) result.downloadPath.parents.android = v.img
    }
  }
  result.CarouselList = d.rotationList;
  return result
}

export default {
  async articleList(sort, page, count) {
    // type 1-公司 2-活动
    let sortType = type(sort)
    return axios.get(`${position}/queryNewsList`, {
      params: {
        pageIndex: page * count,
        pageSize: count,
        type: sortType
      }
    })
      .then((data) => {
        if (data.data.status == 1) {
          let result = []
          for (let v of data.data.result.values()) {
            result.push(resolveArticle(v))
          }
          result = result.filter((item) => {
            return item.sort == sortType
          })
          return {
            result,
            total: data.data.newsTotal
          }
        }
      })
      .catch((err) => {
        
      })
  },
  async article(id) {
    return axios.get(`${position}/queryNews/${id}`)
      .then((data) => {
        if (data.data.status == 1) {
          let result = resolveArticle(data.data.result)
          
          return result
        }
      })
      .catch((err) => {
        
      })
  },
  async getCarouselAndQr() {
    // 返回的数据结构 {
    //   rotationList: [
    //     {
    //       img
    //       skipUrl
    //     }
    //   ]
    //   qrList [
    //     {
    //       img
    //       osType 1-ios 2-安卓
    //       custType 1-老师端 2-家长端 
    //     }
    //   ]
    // }
    return axios.get(`${position}/queryPictureList`)
      .then((data) => {
        if (data.data.status == 1) {
          let result = resolveDownloadPath(data.data)
          return result
        }
      })
      .catch((err) => {
        return {
          downloadPath: {
            teacher: {
              ios: "",
              android: ""
            },
            parents: {
              ios: "",
              android: ""
            }
          },
          CarouselList: []
        }
      })
  },
  async postCustomer({ customerName, phone, address, customerType, organization = ''}) {
    /**
     * @param {Object} option
     * @param {String} option.customerName
     * @param {String} option.phone
     * @param {String} option.address
     * @param {Number} option.customerType
     * @param {String} option.organization
     */
    return axios.post(`${position}/addCustomer`, qs.stringify({
      customerName,
      phone,
      address,
      customerType,
      organization
    }))
  }
}