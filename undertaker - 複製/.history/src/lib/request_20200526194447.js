import axios from 'axios'
import { Message } from 'element-ui'
// import { setcookie } from '../api/cookiesex'
import 'element-ui/lib/theme-chalk/index.css'


axios.defaults.withCredentials=false;//霈奄jax�𡉼撣圭ookie
///�虾隞亙冗撣軼ors herad 靘�撖衣𣶹頝函雯���... ?
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Message.error({ message: '超時請求!' })
    return Promise.resolve(err)
  }
)
axios.interceptors.response.use(
  data => {
    //console.log(data.config.url);   
           // delCookie('token');
            /* alert(data.status);*/
    if (data.status && data.status == 200 && data.data.status == 'error') {
      Message.error({ message: data.data.msg })

      return
    }
    
    /// 靘𧩹pring boot 皜祈岫�鍂���
    // console.log("test");
    // if(data.config.url == "http://localhost:9990/getSession"){
    // if(data.data.code ==200)
    //   Message.error({ message: '甈𢠃�鞾�𡑒�㗇�𣂼��', type: 'success' });
    // else
    //   Message.error({ message: '甈𢠃�𣂼歇蝬枏仃���', type: 'error' });}
    //if (data.data != '') Message.error({ message: data.data, type: 'success' })
    return data
  },
  err => {
    if (err.response.status == 504 || err.response.status == 404) {
      Message.error({ message: '服务器被吃了⊙﹏⊙∥' })
    } else if (err.response.status == 403) {
      Message.error({ message: '权限不足,请联系管理员!' })
    } else {
      Message.error({ message: '未知错误!' })
    }
    return Promise.resolve(err)
  }
)

//let base = 'http://61.71.47.141:8090'
//let base = 'http://bd1d7e4e.ngrok.io'
 let base = 'https://61.71.47.141:8090'
//server 2 let base = ''
//server 3 let base = ''
//test method json address http://localhost:9990/httpMethod2?id=10
export const postRequest = (url, params) => {
  // eslint-disable-next-line no-console
  console.log(`${base}${url}`)
  //url = url+gettootken()
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    // transformRequest: [
    //   function(data) {
        // let ret = ''
        // ret = JSON.stringify(data)
        // JSON.stringify BY @RequestBody 敹������牐�𢠃�躰��
        // for (let it in data) {
        //   ret +=
        //     encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        // }
        // eslint-disable-next-line no-console
        // console.log(ret)
        // eslint-disable-next-line no-console
        // console.log(data)
        // return ret
    //   }
    // ],
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded'

     'Content-Type': 'application/json'
    }
  })
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function(data) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
export const deleteRequest = url => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  })
}
export const getRequest = (url, params) => {
 // console.log(params.id)
 console.log(url+"/"); 
 // url=url+"/cookies.gettonen()"
 console.log("22222222222222222222222222");  
 console.log(params);   
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'

      'Content-Type': 'application/json'
    }
  })
}
