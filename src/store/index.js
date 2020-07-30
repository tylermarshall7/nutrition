import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/",
  timeout: 3000,
  headers: {
    "x-app-key": "82a5b00f994f0cae8e98cfd515b47273",
    "x-app-id": "8f8e65a2"
  }
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  mutations: {
    setFoods(state, foodData) {
      state.foods = foodData
    }
  },
  actions: {
    async getNutrients({commit, dispatch}, query) {
     try {
      let res = await api.post("search/instant" , query)
      console.log(res.data.branded)
      commit("setFoods", res.data.branded)
     } catch (error) {
       console.error(error);
     }
     
    }
  },
  modules: {
  }
})
