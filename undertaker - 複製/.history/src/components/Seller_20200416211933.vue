
<template>
<el-table :data="usergoodlist">
    <el-table-column
      v-for="{ prop, label } in colConfigs"
      :key="prop"
      :prop="prop"
      :label="label">
    </el-table-column>
    <template slot-scope="scope">
          <!-- format = img, 顯示圖片 -->
          <span v-if="prop.format == 'img'">
            <img title="點擊查看大圖" alt="圖片" class="image-size" :src="scope.row[prop]" />
          </span>
    
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
  name: "Seller",

  data() {
    return {
      response_url: "",
      sellergoodlist: [],
      flush: false,
      colConfigs: [
        {
          label: '商品',
          width: '120px',
          prop: 'img',
          format: 'img'
        },
        {
          label: '商品名稱',
          width: '120px',
          prop: 'goodsName',
          // 顯示圖片
        },
        {
          label: '買家',
          width: '120px',
          prop: 'receiverName'
        },
        {
          label: '總價',
          width: '120px',
          prop: 'goodsPrice',
          
        },
        {
          label: '定單編號',
          width: '120px',
          prop: 'merchantTradeNo',
          
        },
        {
          label: '定單時間',
          width: '120',
          prop: 'updateStatusDate'
        },
        {
          label: '取貨門市',
          width: '120px',
          prop: 'cvsstoreName',
        },
        {
          label: '列印',
          width: '120px',
          prop: 'htmlbutton',
          format: 'html'
        },
       
      ],
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
        That.colConfigs = resp.data.goodlistEntitys;
      }
    );
  }
};
</script>

<style>
</style>
