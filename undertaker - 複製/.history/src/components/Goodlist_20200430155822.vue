<template>
<div id="goodlist">
  <el-container>
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
  <el-main>
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
          <el-button @click="callSellser(scope.row.senderName)">連絡賣家</el-button>
        </template>
    </el-table-column>
  </el-table>
  </el-main>
</el-container>

 


  
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
    
   callSellser(seller){
     this.$router.push("/ChatRoom");
     getRequest
      ("/chat/get/" + this.$store.getters.name + "/" + seller).then(resp => {
        //const items = resp.data.data.items;
        
      });
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
