import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "82a5b00f994f0cae8e98cfd515b47273",
    "x-app-id": "8f8e65a2"
  }
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getNutrients({commit, dispatch}, query) {
     try {
      let res = await api.post("" , query)
      console.log(res.data)
     } catch (error) {
       console.error(error);
     }
     
    }
  },
  modules: {
  }
})
