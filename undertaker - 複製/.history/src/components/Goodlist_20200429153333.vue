<template>
<div>
 <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>


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
      ("/chat/get/" + seller + "/" + this.$store.getters.name).then(resp => {
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
