import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Drink from '../components/Drink.vue';
import Header from '../components/Header.vue';
import UserInfo from '../components/UserInfo.vue';
import Register from '../components/Register.vue';
import Food from '../components/Food.vue';
import Workout from '../components/Workout.vue';
import Dessert from '../components/Dessert.vue';
import Sales from '../components/Sales.vue';
import Goodlist from '../components/Goodlist.vue';
import ChatRoom from '../components/ChatRoom.vue';
import Seller from '../components/Seller.vue';
import { setCookie, getCookie, delCookie } from '../lib/cookie.js'

import ShoppingCar from '../components/ShoppingCar.vue';
Vue.use(VueRouter)
var store = "";
export function setinStore(store2) {

  store = store2;
  console.log(store.getters.id);

}
const routes = [
  {
    path: '/',
    components: {
      nav: Header,
      view: Home
    }
  },
  {
    path: '/Login',
    name: 'Login',
    components: {
      view: Login
    }
  },
  {
    path: '/Seller',
    name: 'Seller',
    components: {
      nav: Header,
      view: Seller
    }
  },
  {
    path: '/UserInfo',
    name: 'userInfo',
    components: {
      nav: Header,
      view: UserInfo

    }
  },{
    path: '/ChatRoom',
    name: 'ChatRoom',
    components: {
      nav: Header,
      view: ChatRoom

    }
  },
  {
    path: '/goodlist',
    name: 'goodlist',
    components: {
      nav: Header,
      view: Goodlist

    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      nav: Header,
      view: Register
    }
  },
  {
    path: '/drink',
    name: 'drink',
    components: {
      nav: Header,
      view: Drink
    }
  },
  {
    path: '/food',
    name: 'food',
    components: {
      nav: Header,
      view: Food
    }
  },
  {
    path: '/dessert',
    name: 'dessert',
    components: {
      nav: Header,
      view: Dessert
    }
  },
  {
    path: '/workout',
    name: 'workout',
    components: {
      nav: Header,
      view: Workout
    }
  },
  {
    path: '/sales',
    name: 'sales',
    components: {
      nav: Header,
      view: Sales
    }
  },
  {
    path: '/shoppingcar',
    name: 'shoppingcar',
    components: {
      nav: Header,
      view: ShoppingCar
    },
    
    
    // },
    // {
    //   path: '/shoppingcar',
    //   name: 'shoppingcar',
    //   components: {
    //     nav: Header,
    //     view: ShoppingCar
    //   }
    // }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router



