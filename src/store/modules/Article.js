// import axios from "axios";
import {
  UPDATE_ARTICLE,
  UPDATE_LIST,
  LOADING,
  UNLOADING,
  UPDATE_PAGE
} from "../mutations";

// import myData from "../mock.js";
import api from "../../API/API";

export default {
  namespaced: true,
  state() {
    return {
      activity: {
        list: {},
        listByPage: {
          // '0': []
        },
        total: 0,
        page: 0,
        limit: 4,
        lastTime: 0,
        max: 10800000,
        isLoading: false,
        allById: []
      },
      company: {
        list: {},
        listByPage: {
          // '0': []
        },
        total: 0,
        page: 0,
        limit: 4,
        lastTime: 0,
        max: 10800000,
        isLoading: false,
        allById: []
      },
      allById: [],
      limit: 4
    };
  },
  mutations: {
    [UPDATE_LIST](state, { sort, data, page, total }) {
      // data是一个数组，每个元素是一篇文章的摘要
      let comeArticles = {};
      let pageArray = [];
      for (let elem of data.values()) {
        elem.isLoading = false;
        comeArticles[elem.id] = elem;
        if (!state[sort].allById.includes(elem.id)) {
          state[sort].allById.push(elem.id);
          state.allById.push(elem.id);
          pageArray.push(elem.id);
        }
      }
      state[sort].list = Object.assign({}, state[sort].list, comeArticles);
      state[sort].lastTime = new Date().getTime();
      state[sort].listByPage[page] = pageArray;
      state[sort].total = total;
      state[sort].page = page;
    },
    [UPDATE_ARTICLE](state, { sort, data }) {
      let old = state[sort].list[data.id];
      state[sort].list[data.id] = Object.assign({}, old, data);
      if (!state[sort].allById.includes(data.id)) {
        state[sort].allById.push(data.id);
        state.allById.push(data.id);
      }
    },
    [LOADING](state, { sort, id }) {
      if (id != 0 && id) {
        if (!state[sort].list[id]) {
          state[sort].list[id] = {};
          state[sort].list[id].isLoading = true;
        }
        state[sort].list[id].isLoading = true;
      } else {
        state[sort].isLoading = true;
      }
    },
    [UNLOADING](state, { sort, id }) {
      if (id != 0 && id) {
        state[sort].list[id].isLoading = false;
      } else {
        state[sort].isLoading = false;
      }
    },
    [UPDATE_PAGE](state, { sort, page }) {
      state[sort].page = page;
    }
  },
  actions: {
    async getArticleList({ commit, state }, { sort, page }) {
      if (!state[sort].listByPage[page]) {
        commit(LOADING, { sort });
        let data = await api.articleList(sort, page, state.limit);
        commit(UPDATE_LIST, {
          sort,
          data: data.result,
          page,
          total: data.total
        });
        commit(UNLOADING, { sort });
      } else {
        commit(UPDATE_PAGE, { sort, page });
      }
    },
    async getArticleById({ commit }, { sort, id }) {
      commit(LOADING, { sort, id });
      let data = await api.article(id);
      // let data = myData[`${sort}Article`].filter((item) => {
      //   return item.id == id;
      // });
      commit(UPDATE_ARTICLE, { sort, data });
      commit(UNLOADING, { sort, id });
    }
  },
  getters: {
    allNewsByTime(state) {
      let ids = state.allById.slice(0, 5);
      let data = ids.map(id => {
        if (state.activity.list[id]) {
          return state.activity.list[id];
        } else {
          return state.company.list[id];
        }
      });
      return data;
    }
  }
};

function assign() {}
