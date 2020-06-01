<template>
  <div id="wrapper">
    <div id="header"></div>

    <div id="left-sidebar">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>聊聊賣家</span>
        </div>
        <div v-for="seller in searchedFriendlist" :key="seller" class="text item">
          <el-button type="success" @click="CallSeller(seller)">{{seller.name}}</el-button>
        </div>
      </el-card>
    </div>

    <div id="container">
      <div id="inner-content">
        <span style="float: left;">微信聊天界面</span>
        <span style="float: right;">14:21</span>
      </div>
      <ul class="content">
        <li v-for="(item, index) in messageList" :key="index">
          <span :class="'span'+(item.isSelf?'right':'left')">{{item.message}}</span>
        </li>
      </ul>

      <div class="footer">
        <!-- 添加输入内容 -->
        <input
          id="text"
          type="text"
          placeholder="说点什么吧..."
          v-model="inputValue"
          @keyup.enter="chat"
        />
        <!-- 给发送也绑定一个事件 -->
        <span id="btn" @click="chat">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";
export default {
  name: "drink",

  data() {
    return {
      inputValue: "",
      messageList: [],
      searchedFriendlist: [
        {
          id: 1250,
          username: "1111",
          password: "1111",
          name: "jason",
          token:
            "0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c",
          role:
            '[{"name":"首頁","path":"/"},{"name":"使用者資訊","path":"/UserInfo"}, {"name":"註冊","path":"/register"},{"name":"拍賣中心","path":"/sales"},{"name":"購物車","path":"/shoppingcar"},{"name":"飲料","path":"/drink"}, {"name":"美食","path":"/food"},{"name":"點心","path":"/dessert"}, {"name":"健身必吃","path":"/workout"}]',
          phonenumber: "0912345678",
          address: "地一公墓"
        },
        {
          id: 1251,
          username: "1234",
          password: "1111",
          name: "Mike",
          token:
            "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
          role:
            '[{"name":"首頁","path":"/"},{"name":"使用者資訊","path":"/UserInfo"}, {"name":"註冊","path":"/register"},{"name":"拍賣中心","path":"/sales"},{"name":"購物車","path":"/shoppingcar"},{"name":"飲料","path":"/drink"}, {"name":"美食","path":"/food"},{"name":"點心","path":"/dessert"}, {"name":"健身必吃","path":"/workout"}]',
          phonenumber: "0914777777",
          address: "垃圾車"
        }
      ]
    };
  },
  methods: {
    chat() {
      // console.log(this.inputValue);
      // console.log(this);
      // 二.获取自己输入内容,将内容渲染到页面
      this.messageList.push({
        message: this.inputValue,
        isSelf: true
      });
    },
    CallSeller(sellerName) {}
  }
};
</script>
<style>
#container {
  width: 450px;
  height: 780px;
  background: #eee;
  margin: 80px auto 0;
  position: relative;
  box-shadow: 20px 20px 55px #777;
}

.header {
  background: #000;
  height: 40px;
  color: #fff;
  line-height: 34px;
  font-size: 20px;
  padding: 0 10px;
}
.footer {
  width: 430px;
  height: 50px;
  background: #666;
  position: absolute;
  bottom: 0;
  padding: 10px;
}
.footer input {
  width: 360px;
  height: 45px;
  outline: none;
  font-size: 20px;
  text-indent: 10px;
  position: absolute;
  border-radius: 6px;
  right: 80px;
}
.footer span {
  display: inline-block;
  width: 62px;
  height: 48px;
  background: #ccc;
  font-weight: 900;
  line-height: 45px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  right: 10px;
  border-radius: 6px;
}
.footer span:hover {
  color: #fff;
  background: #999;
}
/* #user_face_icon {
      display: inline-block;
      background: red;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      position: absolute;
      bottom: 6px;
      left: 14px;
      cursor: pointer;
      overflow: hidden;
    } */
img {
  width: 60px;
  height: 60px;
}

.content li {
  margin-top: 10px;
  padding-left: 10px;
  width: 412px;
  display: block;
  clear: both;
  overflow: hidden;
}
.content li img {
  float: left;
}
.content li span {
  background: #7cfc00;
  padding: 10px;
  border-radius: 10px;
  float: left;
  margin: 6px 10px 0 10px;
  max-width: 310px;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px #ccc;
}
.content li img.imgleft {
  float: left;
}
.content li img.imgright {
  float: right;
}
.content li span.spanleft {
  float: left;
  background: #fff;
}
.content li span.spanright {
  float: right;
  background: #7cfc00;
}
#header {
  grid-area: header;
  background-color: #dddddd;
}

#left-sidebar {
  background-color: #aafed6;
  grid-area: lsidebar;
}

#wrapper {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-areas: "header header " "lsidebar content " "footer footer ";
}
</style>