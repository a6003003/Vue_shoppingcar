

  

<template>
  <div>
    <div class="itemstyle">
      <ul v-for="(item, index) in usergoodlist" :key="index">
        <li>
          {{"物品名稱:"+item.GoodsName}}
          <br />
          {{"總價:"+item.GoodsPrice}}
          <br />
          {{"賣家:"+item.SenderName}}
          <br />
          {{"定單日期:"+item.UpdateStatusDate}}
          <br />
    
        </li>
      </ul>
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
        console.log( _this.usergoodlist);
        
      }
    );
  }
};

</script>

<style>

</style>
