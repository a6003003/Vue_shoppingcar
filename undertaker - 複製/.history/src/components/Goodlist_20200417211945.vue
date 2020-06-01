

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
    :ref="ref"
    v-loading="listLoading"
    :data="usergoodlist"
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
          <el-button @click="TradeInfo(scope.row)">查看貨運狀況</el-button>
        </template>
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
     

    return {
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
          label: "賣家",
          prop: "senderName"
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
          label: "取貨門市",
          prop: "cvsstoreName"
        },
        
      ],
      usergoodlist: [],
    };
  },
  methods: {
   callSellser(){
     this.$router.push("/ChatRoom");
   }
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
