

<el-table :data="usergoodlist">
    <el-table-column
      v-for="{ prop, label } in colConfigs"
      :key="prop"
      :prop="prop"
      :label="label">
    </el-table-column>
    <el-table-column>
      <el-button type=" " icon="edit" @click="call">連絡賣家</el-button>
    </el-table-column>
    
  </el-table>

  <div id="app">
        <div class="container">
            <div class="item_header">
                <div class="goodsImg">商品</div>
                <div class="goodsName">商品名稱</div>
                <div class="seller">賣家</div> 
                <div class="amount">總計</div>
                <div class="date">定單日期</div>
            </div>
            <div class="item_container" v-for="(item, index) in usergoodlist" :key="index" >
                    <div class="item_header item_body">
                            <div class="item_detail">
                                <img v-bind:src="item.img" alt="">
                                <div class="name">{{item.goodsName}}</div>
                            </div>
                            <div class="seller">{{item.senderName}}</div>
                            <div class="amount"><span>$</span>{{item.goodsPrice}}</div>
                            <div class="date">{{item.updateStatusDate}}</div>
                            
                         
                           </div>
                    </div>
            </div>


        </div>
        
<template>
  <el-table
      :data="usergoodlist"
      style="width: 100%">
      <el-table-column
        prop="img"
        label="商品">
        <img v-bind:src="prop" alt="">
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名稱">
      </el-table-column>
      <el-table-column
        prop="senderName"
        label="賣家">
      </el-table-column>
      <el-table-column
        prop="goodPrice"
        label="總價">
      </el-table-column>
      <el-table-column
        prop="updateStatusDate"
        label="定單日期">
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
     /* this.colConfigs = [
        
      { prop: 'img', label: '物品' },
      { prop: 'goodsName', label: '物品名稱' },
      { prop: 'senderName', label: '賣家' },
      { prop: 'goodsPrice', label: '總價' },
      { prop: 'updateStatusDate', label: '定單日期' },
    ]
*/

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

</style>
