<template>
   
 <div id="container">
    <div class="header">
      <span style="float: left;">微信聊天界面</span>
      <span style="float: right;">14:21</span>
    </div>
    <ul class="content">
      <li v-for="(item, index) in messageList" :key="index">
        
      </li>
    </ul>
    <div class="footer">
      <!-- 添加输入内容 -->
      <input id="text" type="text" placeholder="说点什么吧..." v-model="inputValue" @keyup.enter="chat">
      <!-- 给发送也绑定一个事件 -->
      <span id="btn" @click="chat">发送</span>
    </div>
  </div>

</template>

<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'
export default {
  
  name: "drink",

  data() {
    return {
      messageList: []
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
          })
          this.inputValue='';  //最后清除文本框
  },
    
    

 
   mounted() {
    

  }
};
</script>
<style>
.itemstyle {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#ul li {
  　display: inline;
}
</style>