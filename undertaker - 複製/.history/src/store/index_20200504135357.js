import Vuex from 'vuex'
import Vue from 'vue'
import {setCookie, getCookie,delCookie} from '../lib/cookie.js'
import axios from 'axios';
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'


Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate" 
export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: this.$setCookie(this.userData)
})],

  
  state: {
    userData: []
  },

  getters: {
   
    test: state => "test",
    id: state => state.userData.id,
    username: state => state.userData.username,
    password: state => state.userData.password,
    name: state => state.userData.name,
    token: state => state.userData.token,
    role: state => state.userData.role,
    phonenumber: state => state.userData.phonenumber,
    address: state => state.userData.address,
  },

  

  actions: {

   login({ commit }, payload) {
    
    postRequest("/users/login", {
      "username": payload.username,
      "password": payload.password,
    }).then(resp => {
     
      if (resp.data.userEntity.token != null) {
        setCookie('token', resp.data.userEntity.token);
        payload.router.push('/');
        console.log(resp.data.userEntity);
        commit("setUserData", resp.data.userEntity);



      }
    });

  },

// Here we will create Larry

    
  
  },
  mutations: {
    setUserData(state,data){
 
      this.state.userData = data;

    }

  }


}

);