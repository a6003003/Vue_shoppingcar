
<template>
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

        <el-button type=" " icon="edit" @click="printTrade()">列印定單</el-button>
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
  
  name: "Seller",

  data() {
    

    return {
      sellergoodlist: [],
    };
  },
  methods: {
  
  },
   mounted() {
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
