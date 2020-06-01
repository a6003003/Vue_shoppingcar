<template>
  <div id="chat"> 
    <ChatHeader></ChatHeader>  
    <div id="dialogue">
      <ul class="dialogue-list"  v-for="(item, index) in messageList">  
        <div class="system-text" v-if="item.type === 1">
          <span class="tip">{{ item.msg }}</span>
        </div>
        <li class="dialogue-li" v-if="item.type === 2">
          <div class="dialogue-user">
            <img src="../../assets/images/1.png" v-if="item.msgUser.userImg === 1"/>
            <img src="../../assets/images/2.png" v-if="item.msgUser.userImg === 2"/>
            <img src="../../assets/images/3.png" v-if="item.msgUser.userImg === 3"/>
            <img src="../../assets/images/4.png" v-if="item.msgUser.userImg === 4"/>
            <img src="../../assets/images/5.png" v-if="item.msgUser.userImg === 5"/>
            <img src="../../assets/images/6.png" v-if="item.msgUser.userImg === 6"/>
            <img src="../../assets/images/7.png" v-if="item.msgUser.userImg === 7"/>
            <img src="../../assets/images/8.png" v-if="item.msgUser.userImg === 8"/>
            <img src="../../assets/images/9.png" v-if="item.msgUser.userImg === 9"/>
            <img src="../../assets/images/10.png" v-if="item.msgUser.userImg === 10"/>
             <span class="dialogue-user-name">{{ item.msgUser.userName }}</span>   
          </div>
          <div class="dialogue-text">{{ item.msg }}</div>
        </li>
        <li class="dialogue-li dialogue-my" v-if="item.type === 3">
          <div class="dialogue-user">
            <img src="../../assets/images/1.png" v-if="userInfo.userImg === 1"/>
            <img src="../../assets/images/2.png" v-if="userInfo.userImg === 2"/>
            <img src="../../assets/images/3.png" v-if="userInfo.userImg === 3"/>
            <img src="../../assets/images/4.png" v-if="userInfo.userImg === 4"/>
            <img src="../../assets/images/5.png" v-if="userInfo.userImg === 5"/>
            <img src="../../assets/images/6.png" v-if="userInfo.userImg === 6"/>
            <img src="../../assets/images/7.png" v-if="userInfo.userImg === 7"/>
            <img src="../../assets/images/8.png" v-if="userInfo.userImg === 8"/>
            <img src="../../assets/images/9.png" v-if="userInfo.userImg === 9"/>
            <img src="../../assets/images/10.png" v-if="userInfo.userImg === 10"/>     
            <span class="dialogue-my-name">{{ item.msgUser.userName }}</span>                   
          </div>
          <div class="dialogue-text">{{ item.msg }}</div>
        </li>       
      </ul>
    </div>

    <footer id="dialogue-footer">
      <div class="dialogue-tool">
        <span class="dialogue-tool-face" title="选择表情"><Icon type="happy-outline"></Icon></span>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <i-button type="ghost" icon="ios-cloud-upload-outline">上传</i-button>
        </Upload>            
        <Input type="text"  @on-enter="sendMssage" v-model="inputValue" class="dialog-text"/>
        <Button type="success" class="dialog-send" @click="sendMssage">发送</Button>
      </div>
    </footer>    
  </div>

</template>

<script>
 import ChatHeader from '../common/chat-header.vue'
 export default {
  components: {
   ChatHeader
 },
 data () {
  return {
    headerConfig: {
      left: 'conn',
      right: '设置'
    },
    userInfo: {},
    userNameList: ['加菲猫 ', '流氓兔', '蜡笔小新', '樱木花道', '机器猫', '皮卡丘', '史努比', '蓝精灵', '紫龙', '芭比 '],
    onlineUserList: [],
    messageList: [],
    inputValue: '',
    connectState: false
  };
},
created () {
  this.userInfo = {};
            this.messageList = [];// type = 1 提示信息     type = 2 对方内容     type = 3 我发送内容
          },
          mounted () {
            this.connectEvent();
          },
          updated () {
            this.scroll();
          },
          methods: {
            connectEvent () {
              var me = this;
              var randomNum = Math.floor(Math.random() * 10);
              this.userInfo = {
                userId: this.getUserId(),
                userName: this.userNameList[randomNum],
                userImg: randomNum + 1
              };
              this.httpServer = io.connect('http://localhost:3000');
              this.httpServer.emit('login', this.userInfo);
              this.onlineUserList.push(this.userInfo);
              this.httpServer.on('login', function (obj) {
                console.log(obj);
                me.onlineUserList = obj.onlineUserList;
                me.messageList.push({type: 1, msg:  obj.msgUser.userName + ' 加入聊天', msgUser: obj.msgUser});
              });
                this.httpServer.on('loginSuccess', function (obj) { // 1 成功
                  if (obj.sign === 1) {
                    me.onlineUserList = obj.onlineUserList;
                        me.connectState = true; // 登录状态
                        me.headerConfig.left = me.userInfo.userImg.toString();
                        console.log('连接好了');
                      }
                    });
                this.httpServer.on('logout', function (obj) {
                  me.messageList.push({type: 1, msg: obj.msgUser.userName + ' 退出聊天', msgUser: obj.msgUser});
                });
                this.httpServer.on('message', function (obj) {
                  console.log(obj);
                  me.onlineUserList = obj.onlineUserList;
                  me.messageList.push({type: 2, msg: obj.msg, msgUser: obj.user});
                });
              },
              getUserId () {
                return (new Date().getTime() + '' + Math.floor(Math.random() * 100000 + 100)) - 0;
              },
              loginEvent () {
                console.log('加入聊天室事件');
                console.log(this.connectState);
                if (!this.connectState) {
                  this.$refs.confirm.modelOpen();
                }
              },
              sendMssage () {
                this.inputValue = this.trim(this.inputValue);
                if (this.inputValue.length > 0) {
                  if (this.connectState) {
                    this.httpServer.emit('message', {msg: this.inputValue, user: this.userInfo});
                    this.messageList.push({type: 3, msg: this.inputValue, msgUser: this.userInfo});
                    this.inputValue = '';
                  } else {
                    this.$refs.confirm.modelOpen();
                  }
                }
              },
              trim (s) {
                return s.replace(/(^\s*)|(\s*$)/g, '');
              },
              confirmBtnEvent (num) {
                if (num === 1) {
                  this.connectEvent();
                }
              },
              scroll () {
                document.getElementById('dialogue').scrollTop = document.getElementById('dialogue').scrollHeight;
              },
      }
};
</script>

<style>
 
</style>