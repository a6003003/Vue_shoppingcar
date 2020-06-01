

<template>
  <el-container>
    <el-aside width="200px">
      
      <div class="friend-header">
        <span>好友列表</span>
     </div>
      <div id="left-sidebar" v-for="seller in searchedFriendlist" :key="seller" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        
        <el-button
          type="primary" plain
          style="width:100%;height:50px;"
          @click="CallSeller({name:seller.receiver , roomid :seller.roomID})"
        >{{seller.receiver}}</el-button>
      </div>

    </el-aside>
    
    <el-main>
      <div id="container">
    <div class="header">
      <span style="float: left;">{{this.nowchatname}}</span>
      <span style="float: right;">聊聊賣家</span>
    </div>
    <ul class="content" id="inner-content2">
     <li v-for="(item, index) in messageList" :key="index">
            <span :class="'span'+(item.isSelf?'right':'left')">{{item.message}}</span>
          </li>
    </ul>
    <div class="footer">
      <!-- 添加输入内容 -->
       <input
            id="text"
            type="text"
            placeholder="請輸入..."
            v-model="inputValue"
            @keyup.enter="sendMessage('sendOneMessage')"
          />
          <!-- 给发送也绑定一个事件 -->
          <span id="btn" @click="sendMessage('sendOneMessage')">傳送</span>
    </div>
  </div>
    </el-main>
  </el-container>
</template>

<script >
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";

export default {
  name: "ChatSellerList",

  data() {
    return {
      //输入内容,双向数据绑定
      inputValue: "",
      //聊天窗口内容
      messageList: [],
      socket: "",
      searchedFriendlist: [],
      nowchatname: "",
      nowchatroomId: ""
    };
  },
  methods: {
   /* chat() {
      
      this.messageList.push({
        message: this.inputValue,
        isSelf: true
      });
      this.inputValue = "";
    },
    Robot() {
      
      this.messageList.push({
        message: this.inputValue,
        isSelf: false
      });
      this.inputValue = "";
      console.log(this.messageList);
    },*/
    CallSeller(data) {
      // for (var i=0;i<searchedFriendlist.length;i++) {
        
    this.data='primary';//選擇好友變顏色
    this.messageList = [];
      // }
      this.nowchatroomId = data.roomid;
      this.nowchatname = data.name;
      var _this = this;
       getRequest("/chat/selectchatroombyroomid/" +   this.nowchatroomId).then(
      resp => {
        //const items = resp.data.data.items;
        //console.log(resp.data);
         var json = resp.data;
         //console.log(resp);
      var tmp = [];

      for (var i = 0; i < json.length; i++) {
        console.log(json[i].Sender);
        if (json[i].Sender == _this.$store.getters.name) json[i].isself = 1;
        tmp.push({
          message: json[i].MassageHistory,
          isSelf: json[i].isself
        });
      }
      // console.log(json[i].Sender);
      console.log(tmp);
      _this.messageList = tmp;
  
      }
    );
      console.log(data);
    },
    sendMessage(msg) {
      // 'sendOneMessage'
      
      var jsonObject = {
        code: this.nowchatname,
        data: {
          name: this.$store.getters.name,
          message: this.inputValue
        },
        message: this.inputValue,
        roomid: this.nowchatroomId,
        sender: this.$store.getters.name
      };
      console.log("Iam obj"+jsonObject);
      this.messageList.push({
        message: this.inputValue,
        isSelf: true
      });
      this.inputValue = "";
      // 向服?端?送消息
      var _this = this;
      this.socket.emit(msg, jsonObject, function(result) {
        //  output('<span class="ack-msg"> ?是回??果 ' + result + ':</span> ');
        //console.log("server return" + result);
      });

      this.socket.send();
    },
      scrollToBottom: function () {
     this.$nextTick(() => {
	    var container = this.$el.querySelector(".inner-content");
        container.scrollTop = container.scrollHeight;
     })
}
  },

  mounted() {
    var userName = "user" + Math.floor(Math.random() * 1000 + 1);
    // ????
    var opts = {
      //query: 'clientName=' + userName +'&clientName2=' + userName,
      query: "clientName=" + this.$store.getters.name
      //query2: 'clientName2=' + userName,
    };

    this.socket = io.connect("wss://61.71.47.141:8091", opts);
    var _this = this;
    this.socket.on("receiveMessage", function(data, ackServerCallback) {//監聽有沒有人傳訊息
      console.log("已經與伺服器傳送:" + ackServerCallback);
      var json = JSON.parse(data);
      var tmp = [];

      for (var i = 0; i < json.length; i++) {
        console.log(json[i].Sender);
        if (json[i].Sender == _this.$store.getters.name) json[i].isself = 1;
        tmp.push({
          message: json[i].MassageHistory,
          isSelf: json[i].isself
        });
      }
      // console.log(json[i].Sender);
      console.log("iam tmp"+tmp);
      _this.messageList = tmp;
    });
    this.socket.on("disconnect", function(data) {
      console.log("已經與伺服器斷現 error:" + data);
      //output('<span class="disconnect-msg">已??服?,用?名?: ' + data + '服?已??</span>');
    });

    var _this = this;
    //this.$router.push("/ChatRoom");
    getRequest("/chat/selectchatroom/" + this.$store.getters.name).then(
      resp => {
        //const items = resp.data.data.items;
        console.log(resp.data);
        _this.searchedFriendlist = resp.data.chatroomEntitys;
        console.log(_this.searchedFriendlist);
          _this.messageList.push({
        message: "Please click lef button thx haha!",
        isSelf: true
      });
      }
    );

   this.scrollToBottom();
  },
 
updated (){
      var div = document.getElementById('inner-content2')
 
             div.scrollTop = div.scrollHeight;
}



};
</script>

<style>
#left-sidebar{
  background: #eee;
      margin:top;
      position: relative;
      box-shadow: 20px 20px 55px #777;
}

#container {
      width: 450px;
      height: 780px;
      background: #eee;
      margin:top;
      position: relative;
      box-shadow: 20px 20px 55px #777;
    }
    in-left-sidebar{
      width: 100%;
height: 100%;
display: inline-table;
    }
    .header {
      background: #000;
      height: 40px;
      color: #fff;
      line-height: 34px;
      font-size: 20px;
      padding: 0 10px;
    }
    .friend-header{
      background: #000;
      height: 40px;
      color: #fff;
      line-height: 34px;
      font-size: 18px;
      padding: 0 10px;
      text-align: center;
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
      height: 620px;
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
</style>

