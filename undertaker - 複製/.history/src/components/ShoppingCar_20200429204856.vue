

  

<template>
  <div id="shoppingcar">
    <div v-for="(item, index) in allitemdata" :key="index">
      <shoppingcarcom1 v-bind:data="item" @childEvent="parentMethod" />
    </div>
    
    
 <el-container>
   <el-aside width="350px"></el-aside>

  
   <el-container>
  <el-main>
    {{"總價格:"+all_price+"元"}}
    <br />
    <br />
     <el-select v-model="storeType" placeholder="請選擇商店類型">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br />
    <br />
 
   <el-button type="primary" @click="selectStore()">新增門市</el-button>
   <el-button type="primary" @click="reflash()">更新門市</el-button>
   <br />
   <br />
  
    <el-select v-model="storeName" placeholder="請選擇我的門市">
      <el-option
        v-for="item in userStore"
        :key="item.cvsstoreID"
        :label="item.cvsstoreName"
        :value="item.cvsstoreName"
      ></el-option>
    </el-select>
 
  <br />
<br /> 
    <el-button type="primary" @click="order()">下定單</el-button>
  
 

    <div>
    <div v-html="response_url"></div>
    </div>
  </el-main>
  </el-container>
</el-container>

    
    
    
    
    
    
    
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
      all_price:0,
      response_url: "",
      userStore: [],
      flush: false,
      options: [
        {
          value: "FAMI",
          label: "全家"
        },
        {
          value: "UNIMART",
          label: "7-ELEVEN 超商"
        },
        {
          value: "HILIFE",
          label: "萊爾富"
        },
        {}
      ],
      userStore: [],
      storeName: "",
      storeType: ""
    };
  },
  methods: {
    chat(){
this.$router.push("/ChatRoom");
    },
    seller(){
this.$router.push("/Seller");
    },
    selectStore() {//選擇門市
      var _this = this;
      this.flush = false;
      this.response_url = "";
      postRequest("/goods/selectStoreMap/", {
        username:this.$store.getters.username,
        name: this.$store.getters.name,
        LogisticsSubType:_this.storeType,//超商類型
        }).then(resp => {
           _this.response_url = resp.data;
           
          //_this.$refs.form.$el.submit();???????????postCreateCVS??????仁?在哪理處發??????
          console.log(_this.response_url);
         
          _this.flush = false;
        
      });
      
    },
    order() {
     
      let _this = this ;
       
      postRequest("/goods/sendOrder", {
        username:this.$store.getters.username,
        name: this.$store.getters.name,
        //cvsstoreID:_this.value2,
        CVSStoreName:_this.storeName,
        LogisticsSubType:_this.storeType,
        
        
        

      }).then(resp => {
        
      });
      
        

    },
    goodlist(){
this.$router.push("/goodlist");
    },
    reflash() {
      var _this = this;
      this.flush = false;
      getRequest("/goods/userstore/" + this.$store.getters.name+"/"+_this.storeType).then(resp => {
        //_this.$refs.form.$el.submit();
        console.log(resp.data);
        _this.userStore = resp.data.selectstoreEntitys;

        _this.flush = true;
        //       const elem = _this.$refs.myBtn;
        // elem.submit();
      });
    },
    //   test() {
    //   this.$router.push({
    // path:this.$route.fullPath, // 获取当前连接，重新跳转
    // query:{
    //   _time:new Date().getTime()/1000  // 时间戳，刷新当前router
    // }
    // })
    // this.$router.go(-1)
    // },
    parentMethod(value, value2) {
      //del
      //alert(  value);
      //this.allitemdata[0].id = value.id
      var _this=this;
      var all=0;
      for (var i = 0; i < this.allitemdata.length; i++) {
        if (this.allitemdata[i].id == value) {
          this.allitemdata[i] = value2;

          //alert( value2.price);
        }
         all += this.allitemdata[i].price;
        _this.all_price=all;
      }
      alert(all_price);
      //updata
    }
  },
 created() {
    var _this = this;
    getRequest("/shoppingcar/get/" + this.$store.getters.username).then(
      resp => {
        _this.allitemdata = resp.data.shopping_carEntitys;

        
       var all=0;
      for (var i = 0; i < this.allitemdata.length; i++) {
        all += this.allitemdata[i].price;
        _this.all_price=all;
        console.log("FUCK");
        console.log(_this.all_price);
      }
      }
      
    );
    
      
  },
  mounted(){
    var _this=this;
     
  },
  updated() {
    if (this.flush == false) {
      document.getElementById("chargeForm").click();
    }
    this.flush = false;
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