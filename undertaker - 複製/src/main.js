import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {setinStore} from './router'
import Vuex from 'vuex'
import axios from 'axios'
import plugin from './plugin/plugin1'
import VueElElements from 'vue-el-element'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import VueCarousel from 'vue-carousel';
import { getRequest ,postRequest ,deleteRequest ,putRequest} from './lib/request'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client';
import store from './store/index.js'

// Vue.use(Table); 
// Vue.use(TableColumn);
Vue.use(ElementUI);
Vue.use(Vuex);
//router(store)
//import cookie from './lib/cookie.js'
setinStore(store);
Vue.prototype.$http = axios
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.websocketio = io
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'https://61.71.47.141:8091',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },

// }))
// options: {   query: 'clientName=' +'test'  } //Optional options
Vue.use(axios,router,VueElElements)
//this.$router
new Vue({
    router,
    axios,
    VueCarousel,
    store,
    ElementUI,
  render: h => h(App)
}).$mount('#app')


