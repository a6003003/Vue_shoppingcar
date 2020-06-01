<div>
    <div class="itemstyle">
      <ul v-for="(item, index) in usergoodlist" :key="index">
        <li>
          {{"物品名稱:"+item.goodsName}}
          <br />
          {{"總價:"+item.goodsPrice}}
          <br />
          {{"賣家:"+item.senderName}}
          <br />
          {{"定單日期:"+item.updateStatusDate}}
          <br />
    
        </li>
      </ul>
    </div>
  </div>
  

<template>
  
  <div id="app">
    <div class="container">
      <div class="item_header item_body">
        <div class="item_detail">
           <div v-for="(item, index) in usergoodlist" :key="index">
          <img v-bind:src="item.img" height="100" width="100" />
          <div class="name">{{item.goodsName}}</div>
        </div>

        <div class="price">
          <span>總計$</span>
          {{item.goodsPrice}}
        </div>

        <div class="seller">
          <span>賣家:</span>
          {{item.senderName}}
        </div>

        <div class="date">
          <span>定單日期</span>
          {{item.updateStatusDate}}
        </div>

        
       
        </div>
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
  
  name: "goodlist",

  data() {
    return {
      usergoodlist: [],
    };
  },
  methods: {
   
  },
   mounted() {
   var _this = this;
    getRequest("/goods/getgoodlist/" + this.$store.getters.username).then(
      resp => {
        console.log(resp.data);
        _this.usergoodlist = resp.data.goodlistEntitys;
        console.log( "Iam:user"+_this.usergoodlist);
        
      }
    );
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
