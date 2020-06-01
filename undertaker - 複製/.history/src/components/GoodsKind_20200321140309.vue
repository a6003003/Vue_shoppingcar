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
          <el-button type="success" @click="AddShoppingCar(index)">加入購物車</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "drink",

  data() {
    return {
      member: []
    };
  },
  methods: {
    test() {},

    logout() {
      //localStorage.removeItem("token");

      this.$router.push("/login");
    },
    testbutton(index) {}
  },
  mounted() {
    var _this = this;
    let url_str = "http://localhost:8090/goods/get/" + "健身必吃";
    this.$http
      .get(url_str)
      .then(function(response) {
        /* 成功拿s到資料，然後... */
        console.log(response.data);
        if (response.data != null) {
          _this.member = response.data;
        }
      })
      .catch(function(error) {
        console.log(error);
        this.$delCookie("token");
        alert("login failed");
        /* 失敗，發生錯誤，然後...*/
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

