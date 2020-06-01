
<template>
  <div class="web-im">
       <div class="dis-flex">
            <div class="user-list"> 
                <div class="user" @click="triggerGroup">群1</div>
              
                 </div> <div class="msg-content"> <div class="header im-title">{{title}}</div> <div class="content im-record"> 
                     
                         <template v-if="item.type===1">
                          <p class="join-tips">{{item.msg}}</p> </template> 
                          <template v-else> <div class="img">{{item.nickname}}</div> 
                          <p class="message-box">{{item.msg}}</p> </template> 
                          </div> </div> <div class="footer im-input"> <input type="text" v-model="msg" placeholder="請輸入內容">
                           <button @click="send">發送</button> 
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
      
    };
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style>

</style>