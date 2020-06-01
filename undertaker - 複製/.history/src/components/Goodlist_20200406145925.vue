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

<template>
    <el-table :data="usergoodlist">
    <el-table-column
      v-for="{ prop, label } in colConfigs"
      :key="prop"
      :prop="prop"
      :label="label">
       <img v-bind:src="item.img" height="150" width="150" />
    </el-table-column>
  </el-table>


 
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
      this.colConfigs = [
      { prop: 'img', label: '物品' },
      { prop: 'goodsName', label: '物品名稱' },
      { prop: 'senderName', label: '賣家' },
      { prop: 'goodsPrice', label: '總價' },
      { prop: 'updateStatusDate', label: '定單日期' },
    ]


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
.item_header .item_detail {
  width: 50%;
}
.item_body {
  margin-top: 20px;
  height: 100px;
  align-items: center;
  font-weight: bold;
}
.item_detail img {
  width: 80px;
  height: 80px;
  border-radius: 3px;
  /* margin-top: 10px; */
  float: left;
}
.item_detail .name {
  margin-left: 100px;
  margin-top: 20px;
}
</style>
