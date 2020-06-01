<template>
  <div>
    <div class="itemstyle">
      <goodskind v-bind:data="item" @childKind="parentMethod" />
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
import workout from "../components/Workout.vue";
export default {
  name: "drink",

  data() {
    return {
      member: []
      
    };
  },
  methods: {
    test() {

    },
    parentMethod(value){
      alert(value);
    },

    logout() {
      //localStorage.removeItem("token");

      this.$router.push("/login");
    },
    testbutton(index) {}
  },
  mounted() {
    var _this=this;
      getRequest("/goods/get/"+"飲料").then(resp => {
        //const items = resp.data.data.items;
       console.log("111111111111111111111");
        console.log(resp.data);
        console.log("111111111111111111111");
        
        _this.member=resp.data.goodsEntitys;
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

