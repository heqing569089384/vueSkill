import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken,
  setToken
} from '../utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    token:getToken()
  },
  mutations: {
    increment(state){
      state.count++
    },
    TOKEN:(state,token)=>{
      console.log(token)
      state.token = token
    }
  },
  actions: {
    AddLogin({commit},res){
      return new Promise((resolve,reject)=>{
        if(res.success){
          console.log(res);
          setToken(res.token)
          commit("TOKEN",res.token)
          resolve(res);
        }else{
          reject(res)
        }
      })
    }
  },
  modules: {
  }
})
