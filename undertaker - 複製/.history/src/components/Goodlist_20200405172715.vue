

  

<template>
 
    
      
     <div id="app">
    <div v-for="(item, index) in usergoodlist" :key="index">
    <div class="container">
      <div class="item_header item_body">
        <div class="item_detail">
          <div class="name">{{usergoodlist.GoodsName}}</div>
        </div>
        <div class="price">
          <span>價格</span>
          {{usergoodlist.GoodsPrice}}
        </div>

        <div class="Sender">
          <span>賣家</span>
          {{usergoodlist.SenderName}}
        </div>

        <div class="Date">
          <span>定單日期</span>
          {{usergoodlist.UpdateStatusDate}}
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
  mounted() {
    var _this = this;
    getRequest("/getgoodlist/" + this.$store.getters.username).then(
      resp => {
        console.log(resp.data);
        _this.usergoodlist = resp.data.goodlistEntitys;

        
      }
    );
  }
};
</script>

<style>
.item_header {
  display: flex;
  border-style: groove;
  width: 1000px;
  margin: 0 auto;
  height: 100px;
  background-color: #fff;
  border-radius: 3px;
  padding-left: 10px;
  font-size: large;
}
.item_header div {
  width: 200px;
  color: #888;
  line-height: 30px;
}
#postForm {
  width: 500px;
  height: 700px;
}
</style>