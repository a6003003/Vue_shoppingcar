<template>
  <div id="workoutgoods">
    <div class="itemstyle">
      <ul v-for="(item, index) in member" :key="index">
        <li>
          <img v-bind:src="item.img" style="width:180px;height:180px;" alt=""/>
          <br />
          {{"分類:"+item.kind }}
          <br />
          {{"商品:"+item.title }}
          <br />
          {{ "價格:"+item.price }}
          <br />
          {{ "賣家:"+item.seller }}
          <br />
          {{"上架日期:"}}{{ item.date }}
          <br />
          <el-button type="success" @click="AddShoppingCar(item)">加入購物車</el-button>
        </li>
      </ul>
    </div>
  </div>
  
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
    AddShoppingCar(data){
    var _this = this;
      getRequest
      ("/shoppingcar/add/" + this.$store.getters.username + "/" + data.title +"/"+ "1").then(resp => {//
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
#workout{

}
.itemstyle{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  
}
#ul li {
  　display: inline;
  padding: 100px;
  
}
</style>