

  

<template>
 
    
      
   <div>
    <div class="itemstyle">
      <ul v-for="(item, index) in usergoodlist" :key="index">
        <li>
          {{"物品名稱:"+usergoodlist.GoodsName}}
          <br />
          {{"總價:"+usergoodlist.GoodsPrice}}
          <br />
          {{"賣家:"+usergoodlist.SenderName}}
          <br />
          {{"定單日期:"+usergoodlist.UpdateStatusDate}}
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
  mounted() {
    var _this = this;
    getRequest("/getgoodlist/" + this.$store.getters.username).then(
      resp => {
        console.log(resp.data);
        _this.usergoodlist = resp.data.goodlistEntitys;

        
      }
    );
  }
  
</script>

<style>

</style>