
<template>
  <div id="shoppingcar">
    <!-- <div  v-for="(item, index) in allitemdata" :key="index">
    <shoppingcarcom1 v-bind:data="item" />
    </div> -->
  </div>
</template>
<script>
import shoppingcarcom1 from '../components/ShoppingCarCom1';
// import axios from 'axios';

export default {
  name: "shoppingcar",

  components:{
shoppingcarcom1
  },
  data() {
    return {
      allitemdata: []
    };
  },
  methods: {

 
  },
  mounted() {
  
    // let url_str = "http://localhost:8090/shoppingcar/get/"+this.$store.getters.id ;
    // this.$http
    //   .get(url_str)
    //   .then(function(response) {
    //     /* 成功拿s到資料，然後... */
    //     console.log(response.data);
    //     this.allitemdata = response.data;
    //     alert("haha");
    //   })
    //   .catch(function(error) {
    //     console.log(error);
     
    //     alert("login failed");
    //     /* 失敗，發生錯誤，然後...*/
    //   });
  }
};
</script>

<style>
#shoppingcar,
#buy {
  display: inline-block;
}
</style>