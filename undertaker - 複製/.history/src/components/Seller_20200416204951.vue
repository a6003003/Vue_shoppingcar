
<template>
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
                            <div v-html='item.htmlbutton'></div>
                         
                           </div>
                    </div>
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
