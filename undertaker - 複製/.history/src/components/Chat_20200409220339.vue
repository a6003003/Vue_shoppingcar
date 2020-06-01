<template>
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
</template>

<script>
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";
export default {
  name: "drink",

  data() {
    return {
      member: []
    };
  },
  methods: {
    AddShoppingCar(data) {
      //自定義參數
      /*var _this = this;
    let url_str = "http://localhost:8090/shoppingcar/add/"+this.$store.getters.id +"/"+ data.title +"/"+"1";
    this.$http
      .get(url_str)
      .then(function(response) {
       
        alert(data.title+"已加入購物車");
      })
      .catch(function(error) {
        console.log(error);
     
        alert("login failed");
       
      });*/
      var _this = this;
      getRequest(
        "/shoppingcar/add/" + this.$store.getters.username + "/" + data.title +"/"+ "1"
      ).then(resp => {
        //const items = resp.data.data.items;
        console.log(resp.data);

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
    getRequest("/goods/get/" + "點心").then(resp => {
      //const items = resp.data.data.items;
      console.log("111111111111111111111");
      console.log(resp.data);
      console.log("111111111111111111111");

      _this.member = resp.data.goodsEntitys;
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
</style>