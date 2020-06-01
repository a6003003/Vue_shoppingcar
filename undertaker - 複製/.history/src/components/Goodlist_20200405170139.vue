

  

<template>
  <div id="shoppingcar">
    <div v-for="(item, index) in allitemdata" :key="index">
      <shoppingcarcom1 v-bind:data="item" @childEvent="parentMethod" />
    </div>
    <button @click="selectStore()"> select haha   </button>
    <button @click="order()">Order</button>
      <div  v-html="response_url" >
        
      </div>

  </div>
</template>


      
  

  
<script>
import shoppingcarcom1 from "../components/ShoppingCarCom1";
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";

export default {
  name: "shoppingcar",

  components: {
    shoppingcarcom1
  },
  data() {
    return {
      allitemdata: [],
      response_url: "",
      
    };
  },
  methods: {
    selectStore() {
      var _this = this;
      getRequest("/goods/selectStoreMap").then(resp => {
        _this.response_url = resp.data;
        _this.$refs.form.$el.submit();
        console.log(_this.response_url);
      });
    },
    order(){
        postRequest("/goods/sendOrder", {
      "name":this.$store.getters.name,
      
    }).then(resp => {
      //console.log(Boolean(resp.data.token != null));
     console.log(resp.data.shopping_carEntitys);



      
    });
    },
    test() {
      //   this.$router.push({
      // path:this.$route.fullPath, // 获取当前连接，重新跳转
      // query:{
      //   _time:new Date().getTime()/1000  // 时间戳，刷新当前router
      // }
      // })
      // this.$router.go(-1)
    },
    parentMethod(value, value2) {
      //del
      //alert(  value);
      //this.allitemdata[0].id = value.id
      var all_price = 0;
      for (var i = 0; i < this.allitemdata.length; i++) {
        if (this.allitemdata[i].id == value) {
          this.allitemdata[i] = value2;

          //alert( value2.price);
        }
        all_price += this.allitemdata[i].price;
      }
      alert(all_price);
      //updata
    }
  },
  mounted() {
    var _this = this;
    getRequest("/shoppingcar/get/" + this.$store.getters.username).then(
      resp => {
        _this.allitemdata = resp.data.shopping_carEntitys;

        console.log("total=" + total);
        console.log("151351313113531631616");
        console.log(resp.data);
      }
    );
  }
};
</script>

<style>
.item_header {
  display: flex;
  border-style: groove;
  width: 1000px;
  margin: 0 auto;
  height: 100px;
  background-color: #fff;
  border-radius: 3px;
  padding-left: 10px;
  font-size: large;
}
.item_header div {
  width: 200px;
  color: #888;
  line-height: 30px;
}
#postForm {
  width: 500px;
  height: 700px;
}
</style>