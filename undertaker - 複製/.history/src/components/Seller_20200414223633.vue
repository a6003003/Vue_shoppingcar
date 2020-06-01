
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
        <!--<el-button @click="printTrade(scope.row)">列印</el-button>
        <div v-html="response_url"></div>-->
        <el-button @click="TradeInfo(scope.row)">查看貨運狀況</el-button>
        <div v-html="response_url"></div>
      </template>
      
      </el-table-column>
      
    </el-table>
      <div>
    <!-- <div v-html="response_url"></div> -->
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
  
  name: "Seller",

  data() {
    return {
      response_url:"",
      sellergoodlist: [],
       flush: false,
    };
  },
  methods: {
  printTrade(row){
      var That= this;
      That.flush = false;
      console.log("KK"+row.allPayLogisticsID);
      console.log("KK"+row.checkMacValue);
      console.log("KK"+row.merchantID);
      That.response_url = "";
      postRequest("/goods/printTrade", {
        allPayLogisticsID:row.allPayLogisticsID,
        checkMacValue:row.checkMacValue,
        merchantID:row.merchantID,//超商類型
        }).then(resp => {
           That.response_url = resp.data;
          console.log(That.response_url);
          That.flush = false;
        
        
      });
  },
  TradeInfo(row){
      var That= this;
      console.log("查看"+row.allPayLogisticsID);
      console.log("查看"+row.checkMacValue);
      console.log("查看"+row.merchantID);
      postRequest("/goods/tradeInfo", {
        allPayLogisticsID:row.allPayLogisticsID,
        checkMacValue:row.checkMacValue,
        merchantID:row.merchantID,//超商類型
        }).then(resp => {
           
        
        
      });
  }
  },
  
   created() {
   var _this = this;
    getRequest("/goods/getsellerlist/" + this.$store.getters.name).then(
      resp => {
        console.log(resp.data);
        _this.sellergoodlist = resp.data.goodlistEntitys;
        console.log( "Haaaa"+_this.sellergoodlist);
        _this.response_url= _this.sellergoodlist.htmlbutton;
        console.log( "Haaaa"+_this.response_url);
      }
    );
  }
};

</script>

<style>

</style>
