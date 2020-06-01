import Vuex from 'vuex'
import Vue from 'vue'
import {setCookie, getCookie,delCookie} from '../lib/cookie.js'
import axios from 'axios';
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'

//import router from './router'
Vue.use(Vuex)
//Vue.use(router)

export default new Vuex.Store({
  created(){
    　　　　　　　　//在頁面載入時讀取sessionStorage裡的狀態資訊
                if (sessionStorage.getItem("store") ) {
                    this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
                }
    
                //在頁面重新整理時將vuex裡的資訊儲存到sessionStorage裡
                window.addEventListener("beforeunload",()=>{
                    sessionStorage.setItem("store",JSON.stringify(this.$store.state))
                })
            },
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