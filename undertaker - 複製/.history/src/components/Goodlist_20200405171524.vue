

  

<template>
  <div id="shoppingcar">
    <div v-for="(item, index) in allitemdata" :key="index">
      <shoppingcarcom1 v-bind:data="item" @childEvent="parentMethod" />
    </div>
    <button @click="selectStore()"> select haha   </button>
    <button @click="order()">Order</button>
      <div  v-html="response_url" >
        
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