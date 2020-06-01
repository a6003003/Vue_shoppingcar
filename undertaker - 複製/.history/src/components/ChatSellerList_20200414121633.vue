<template>
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>聊聊賣家</span>
  </div>
  <div>
    <ui v-for="seller in searchedFriendlist" :key="seller" class="text item">
  
    </div>
     
</el-card>
</template>

<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'
export default {
  
  name: "ChatSellerList",

  data() {
    return {
     searchedFriendlist: [{"id":1250,"username":"1111","password":"1111","name":"jason","token":"0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c","role":"[{\"name\":\"首頁\",\"path\":\"/\"},{\"name\":\"使用者資訊\",\"path\":\"/UserInfo\"}, {\"name\":\"註冊\",\"path\":\"/register\"},{\"name\":\"拍賣中心\",\"path\":\"/sales\"},{\"name\":\"購物車\",\"path\":\"/shoppingcar\"},{\"name\":\"飲料\",\"path\":\"/drink\"}, {\"name\":\"美食\",\"path\":\"/food\"},{\"name\":\"點心\",\"path\":\"/dessert\"}, {\"name\":\"健身必吃\",\"path\":\"/workout\"}]","phonenumber":"0912345678","address":"地一公墓"},{"id":1251,"username":"1234","password":"1111","name":"Mike","token":"03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4","role":"[{\"name\":\"首頁\",\"path\":\"/\"},{\"name\":\"使用者資訊\",\"path\":\"/UserInfo\"}, {\"name\":\"註冊\",\"path\":\"/register\"},{\"name\":\"拍賣中心\",\"path\":\"/sales\"},{\"name\":\"購物車\",\"path\":\"/shoppingcar\"},{\"name\":\"飲料\",\"path\":\"/drink\"}, {\"name\":\"美食\",\"path\":\"/food\"},{\"name\":\"點心\",\"path\":\"/dessert\"}, {\"name\":\"健身必吃\",\"path\":\"/workout\"}]","phonenumber":"0914777777","address":"垃圾車"}]
    };
  },
  methods: {
   
  },
   mounted() {
   }
};
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>