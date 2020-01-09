import Vue from "vue";
import Vuex from "vuex";
import { CHANGE_CURRENT_PAGE, CAROUSEL_DOWNLOAD_PATH_DATA } from "./mutations";
import nav from "./nav";
import article from "./modules/Article";
import api from "../API/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nav,
    isLoading: false,
    downloadPath: {
      teacher: {
        ios: "www.baidu.com",
        android: "www.bilibili.com"
      },
      parents: {
        ios: "www.github.com",
        android: "www.google.com"
      }
    },
    CarouselList: []
  },
  mutations: {
    [CHANGE_CURRENT_PAGE](state) {
      // to 表示要到达的页面
      state.currentPage.title = "1";
    },
    [CAROUSEL_DOWNLOAD_PATH_DATA](state, data) {
      state.downloadPath = { ...data.downloadPath };
      state.CarouselList = [...data.CarouselList];
    }
  },
  actions: {
    async getCarouselAndQr({ commit }) {
      let data = await api.getCarouselAndQr();
      commit(CAROUSEL_DOWNLOAD_PATH_DATA, data);
    }
  },
  modules: {
    article
  }
});
