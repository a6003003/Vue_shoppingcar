<div>
    <div class="itemstyle">
      <ul v-for="(item, index) in member" :key="index">
        <li>
          <img v-bind:src="item.img" height="150" width="150" />
          <br />
          {{ item.kind }}
          <br />
          {{ item.title }}
          <br />
          {{ "$$"+item.price }}
          <br />
          {{ "賣家"+item.seller }}
          <br />
          {{"上架日期:"}}{{ item.date }}
          <br />
          <el-button type="success" @click="AddShoppingCar(item)">加入購物車</el-button>
        </li>
      </ul>
    </div>
  </div>
<template>
  
  <el-row>
  <el-col :span="8" v-for="(item, index) in member" :key="index" :offset="index > 0 ? 8 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="item.img" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'
export default {
  
  name: "drink",

  data() {
    return {
      member: []
    };
  },
  methods: {
    AddShoppingCar(data){//自定義參數
    var _this = this;
      getRequest
      ("/shoppingcar/add/" + this.$store.getters.username + "/" + data.title +"/"+ "1").then(resp => {
        //const items = resp.data.data.items;
        console.log("5165165165165");
        console.log(resp.data.shopping_carEntity);
          this.$message({
          showClose: true,
          type: 'success',
          message: resp.data.msg,
        });
      });
    },
    
    

    logout() {
      //localStorage.removeItem('token');

      this.$router.push("/login");
    },
    testbutton(index) {}
  },
   mounted() {
    var _this = this;
    /*let url_str = "http://localhost:8090/goods/get/" + "飲料";
    this.$http
      .get(url_str)
      .then(function(response) {
        console.log(response.data);
        if (response.data != null) {
          _this.member = response.data;
        }
      })
      .catch(function(error) {
        console.log(error);
        this.$delCookie("token");
        alert("login failed");
        
      });*/
      var _this=this;
      getRequest("/goods/get/"+"健身必吃").then(resp => {
        //const items = resp.data.data.items;
       console.log("111111111111111111111");
        console.log(resp.data);
        console.log("111111111111111111111");
        
        _this.member=resp.data.goodsEntitys;
        console.log("111111111111111111111");
        console.log("Fuck"+ _this.member);
      });

  }
};
</script>
<style>
.itemstyle {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#ul li {
  　display: inline;
}
.bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>