
<template>
<div>
  <el-table
      :data="sellergoodlist"
      style="width: 100%">
      <el-table-column
        prop='img'
        label="商品">
        <template slot-scope="scope">
              <img :src="scope.row.img" style="width: 100px;height: 100px" >
            </template>
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名稱">
      </el-table-column>
      <el-table-column
        prop="receiverName"
        label="買家">
      </el-table-column>
      <el-table-column
        prop="goodsPrice"
        label="總價">
      </el-table-column>
      <el-table-column
        prop="updateStatusDate"
        label="定單日期">
      </el-table-column>
      <el-table-column
        prop="cvsstoreName"
        label="取貨門市">
      </el-table-column>
       <el-table-column>
       <template slot-scope="scope">
        <el-button @click="printTrade(scope.row)" type="text" size="small">列印</el-button>
      </template>
      </el-table-column>
      
    </el-table>
<div v-html="response_url"></div>
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
  
  name: "Seller",

  data() {
    return {
      response_url:"",
      sellergoodlist: [],
    };
  },
  methods: {
  printTrade(row){
      var That= this;
      console.log("KK"+row.allPayLogisticsID);
      this.response_url = "";
      postRequest("/goods/printTrade/", {
       
        allPayLogisticsID:this.sellergoodlist.allPayLogisticsID,
        checkMacValue:this.sellergoodlist.checkMacValue,
        merchantID:this.sellergoodlist.merchantID,//超商類型
        }).then(resp => {
           That.response_url = resp.data;
           
          //_this.$refs.form.$el.submit();
          console.log(That.response_url);
         
        
        
      });
  }
  },
   created() {
   var _this = this;
    getRequest("/goods/getsellerlist/" + this.$store.getters.name).then(
      resp => {
        console.log(resp.data);
        _this.sellergoodlist = resp.data.goodlistEntitys;
       
        
      }
    );
  }
};

</script>

<style>

</style>
