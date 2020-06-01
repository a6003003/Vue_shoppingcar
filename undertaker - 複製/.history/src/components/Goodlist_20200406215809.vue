
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
  
  name: "goodlist",

  data() {
      return {
      usergoodlist: [],
    };
  },
  methods: {
   
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
body{
    background-color: rgba(0, 0, 0,.2);
}
.item_header{
    display: flex;
    width: 1000px;
    margin: 0 auto;
    height: 30px;
    background-color: #fff;
    border-radius: 3px;
    padding-left: 10px;
}
.item_header div{
    width: 200px;
    color: #888;
    line-height: 30px;
}
.item_header .item_detail{
    width: 50%;
}
.item_body{
    margin-top: 20px;
    height: 100px;
    align-items: center;    
}
.item_detail img{
    width: 80px;
    height: 80px;
    border-radius: 3px;
    /* margin-top: 10px; */
    float: left;
}
.item_detail .name{
    margin-left: 100px;
    margin-top: 20px;
} 
</style>
