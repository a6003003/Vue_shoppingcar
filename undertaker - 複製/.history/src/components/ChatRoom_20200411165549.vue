<template>
   <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="(item, index) in member" :key="index" class="infinite-list-item">{{item.name}</li>
  </ul>
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
      getRequest("/goods/getAll/").then(resp => {
       
        console.log(response.data);
        _this.member=response.data;
        
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