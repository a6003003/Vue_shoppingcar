
<template>
  <div>
    <el-table :data="sellergoodlist" style="width: 100%">
      <el-table-column prop="img" label="商品">
        <template slot-scope="scope">
          <img :src="scope.row.img" style="width: 100px;height: 100px" />
        </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名稱"></el-table-column>
      <el-table-column prop="receiverName" label="買家"></el-table-column>
      <el-table-column prop="goodsPrice" label="總價"></el-table-column>
      <el-table-column prop="updateStatusDate" label="定單日期"></el-table-column>
      <el-table-column prop="cvsstoreName" label="取貨門市"></el-table-column>
      
      <el-table-column label="列印">
        <template slot-scope="scope">
          <p v-html="scope.row.htmlbutton"></p>
        </template>
      </el-table-column>
      
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="TradeInfo(scope.row)">查看貨運狀況</el-button>
        </template>
      </el-table-column>
    </el-table>
   
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
      response_url: "",
      sellergoodlist: [],
      flush: false
    };
  },
  methods: {
    printTrade(row) {
      var That = this;
      That.flush = false;
      console.log("KK" + row.allPayLogisticsID);
      console.log("KK" + row.checkMacValue);
      console.log("KK" + row.merchantID);
      That.response_url = "";
      postRequest("/goods/printTrade", {
        allPayLogisticsID: row.allPayLogisticsID,
        checkMacValue: row.checkMacValue,
        merchantID: row.merchantID //超商類型
      }).then(resp => {
        That.response_url = resp.data;
        console.log(That.response_url);
        That.flush = false;
      });
    },
    TradeInfo(row) {
      var That = this;
      console.log("查看" + row.allPayLogisticsID);
      console.log("查看" + row.checkMacValue);
      console.log("查看" + row.merchantID);
      postRequest("/goods/tradeInfo", {
        allPayLogisticsID: row.allPayLogisticsID,
        checkMacValue: row.checkMacValue,
        merchantID: row.merchantID //超商類型
      }).then(resp => {});
    }
  },

  created() {
    var That = this;
    getRequest("/goods/getsellerlist/" + this.$store.getters.name).then(
      resp => {
        console.log(resp.data);
        That.sellergoodlist = resp.data.goodlistEntitys;
      }
    );
  }
};
</script>

<style>
</style>
