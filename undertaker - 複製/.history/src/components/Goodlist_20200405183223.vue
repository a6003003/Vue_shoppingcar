
<div>
    <div class="itemstyle">
      <ul v-for="(item, index) in usergoodlist" :key="index">
        <li>
          
          {{ item.kind }}
          <br />
          {{ item.title }}
          <br />
          {{ "$$"+item.price }}
          <br />
          {{ "賣家"+item.seller }}
          <br />
          {{"上架日期:"}}{{ item.date }}
          <br />
          <el-button type="success" @click="AddShoppingCar(item)">加入購物車</el-button>
        </li>
      </ul>
    </div>
  </div>
  

<template>
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
