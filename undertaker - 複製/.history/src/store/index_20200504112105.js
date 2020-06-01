import Vuex from 'vuex'
import Vue from 'vue'
import {setCookie, getCookie,delCookie} from '../lib/cookie.js'
import axios from 'axios';
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'

//import router from './router'
Vue.use(Vuex)
//Vue.use(router)

export default new Vuex.Store({
  state: {
    userData: [] // The TV inventory
  },

  getters: {
    // Here we will create a getter
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