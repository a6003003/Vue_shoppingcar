<el-aside width="200px">
     <el-menu
      :default-active="activeIndex2"
      router
      class="el-menu-demo"
      @open="handleOpen"
      @close="handleClose"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      
      <el-menu-item index="/goodlist">
        <i class="el-icon-menu"></i>
        <span slot="title">待出貨</span>
       
      </el-menu-item>

      <el-menu-item index="/goodlistShipped">
        <i class="el-icon-document"></i>
        <span slot="title">已出貨</span>
      </el-menu-item>
    </el-menu>
  
  
  </el-aside>
<template>
<el-container>
  
  
  <el-main>
  <el-table
    :ref="ref"
    v-loading="listLoading"
    :data="sellergoodlist"
    :border="isBorder"
    :element-loading-text="loadingText"
    :header-cell-style="{ backgroundColor: '#e5e9f2', color: '#333' }"
    highlight-current-row
    stripe
    empty-text="暫無數據"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      v-for="(item, index) in tableConfig"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :show-overflow-tooltip="item.showOverflowTooltip"
    >
      <template slot-scope="scope">
        <!-- format = img, 顯示圖片 -->
        <span v-if="item.format == 'img'">
          <img alt="圖片" class="image-size" :src="scope.row[item.prop]" />
        </span>
        
        
        <span v-else-if="item.format == 'html'">
          <p v-html="scope.row[item.prop]"></p>
        </span>

        
        <span v-else>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
          <el-button @click="CreateTestTrade(scope.row)">建立門市標測資料</el-button>
         
        </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
          <el-button @click="TradeInfo(scope.row)">查看貨運狀況</el-button>
        </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
          <el-button @click="CallBuyer(scope.row.receiverName)">連絡顧客</el-button>
        </template>
    </el-table-column>
  </el-table>
  </el-main>
</el-container>
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
      tradeStatus:"未列印",
      response_url: "",
      sellergoodlist: [],
      flush: false,
      tableConfig: [
        {
          label: "商品",

          prop: "img",
          format: "img"
        },
        {
          label: "商品名稱",
          prop: "goodsName"
          // 顯示圖片
        },
        {
          label: "買家",

          prop: "receiverName"
        },
        {
          label: "總價",

          prop: "goodsPrice"
        },
        {
          label: "定單編號",

          prop: "merchantTradeNo"
        },
        {
          label: "定單時間",

          prop: "updateStatusDate"
        },
        {
          label: "商店類型",

          prop: "logisticsSubType"
        },
        {
          label: "取貨門市",

          prop: "cvsstoreName"
        },
        {
          label: "列印",
          width: "120px",
          prop: "htmlbutton",
          format: "html"
        }
      ]
    };
  },
  methods: {
    CallBuyer(buyer){
     this.$router.push("/ChatRoom");
     getRequest
      ("/chat/get/" + buyer + "/" + this.$store.getters.name).then(resp => {
        //const items = resp.data.data.items;
        
      });
    },
    print(scope){
       alert("haha");
       this.tradeStatus="已列印";
    },
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
    },
    CreateTestTrade(row){
      var That = this;
      console.log("查看" + row.logisticsSubType);
      console.log("查看" + row.checkMacValue);
      console.log("查看" + row.merchantID);
      postRequest("/goods/createTestTrade", {
        logisticsSubType: row.logisticsSubType,
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
  },
  /*updated() {
    var That=this;
    if(this.tradeStatus="未列印"){
    this.print(row)
    That.tradeStatus="已列印";
    }
  }*/
};
</script>

<style>
</style>
