import Vue from 'vue'
import {setCookie, getCookie,delCookie} from '../lib/cookie.js'

const plugin = {
    install () {
    Vue.prototype.$setCookie = setCookie
    Vue.prototype.$getCookie = getCookie
    Vue.prototype.$delCookie = delCookie
    }
}
Vue.use(plugin)//全局方法使用插件
export default plugin