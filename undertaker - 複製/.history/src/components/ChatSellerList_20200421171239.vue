<template>
  <div id="wrapper">
    <div id="header"></div>
    <div id="left-sidebar">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>聊聊賣家</span>
        </div>
        <div v-for="seller in searchedFriendlist" :key="seller" class="text item">
          <el-button type="success" @click="CallSeller(seller)">{{seller.receiver}}</el-button>
        </div>
      </el-card>
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
      searchedFriendlist: []
    };
  },
  methods: {
    CallSeller(seller){
      

    },
    chat() {
      // console.log(this.inputValue);
      // console.log(this);
      // 二.获取自己输入内容,将内容渲染到页面
      this.messageList.push({
        message: this.inputValue,
        isSelf: true
      });
      this.inputValue = "";
    }
  },
  mounted () {
    
    var _this=this;
     //this.$router.push("/ChatRoom");
     getRequest
      ("/chat/selectchatroom/" + this.$store.getters.username).then(resp => {
        //const items = resp.data.data.items;
        console.log(resp.data);
        _this.searchedFriendlist=resp.data.chatroomEntitys;
      console.log(_this.searchedFriendlist);

  });
  }
};
</script>
<style>
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
.content {
  font-size: 20px;
  width: 435px;
  height: 662px;
  overflow: auto;
  padding: 5px;
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

#left-sidebar {
  width: 200px;
  float: left;

  position: relative;
  z-index: 2;
}

</style>