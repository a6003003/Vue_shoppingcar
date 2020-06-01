<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex2"
      router
      class="el-menu-demo"
      @open="handleOpen"
      @close="handleClose"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div id="block">
        <div id="right" v-for="(item, index) in member" :key="index">
          <!-- <button>{{item.name}} </button> -->
          <el-menu-item v-bind:index="item.path">{{item.name}}</el-menu-item>
        </div>
        <div id="left">
          <el-menu-item @click="logout()" index="/login">登出</el-menu-item>
          <el-tag>{{this.$store.getters.name}}上線中</el-tag>
        </div>
      
        
        
      </div>

      <!-- <el-menu-item index="/">首頁</el-menu-item>
  <el-menu-item index="/drink">人氣飲品</el-menu-item>
  <el-menu-item index="/food">人氣料理</el-menu-item>
  <el-menu-item index="/dessert">點心</el-menu-item>
  <el-menu-item index="/workout">健身必吃</el-menu-item>
  <el-menu-item index="/register">註冊</el-menu-item>
      <el-menu-item index="/sales">上架商品</el-menu-item>-->
    </el-menu>
    
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      member: []
    };
  },
  methods: {
    logout() {
      //localStorage.removeItem('token');
      this.$delCookie("token");
      this.$router.push("/login");
    },
    upload() {
      //localStorage.removeItem('token');
     
      this.$router.push("/upload");
    },
    register(){

    }
    
  },
  mounted() {
    // this.member = this.$store.getters.role;
    //  var strs= new Array(); //定義一陣列
    //   var tmp = "";
    //   var tmplist = [];
    //   strs=   this.member.split("},"); //字元分割
    //   for (var i=0;i<strs.length ;i++ )
    //   {
    //  //alert(strs[i]  );
    //  tmp = strs[i] +"}" ;
    //  tmplist.push(tmp)

    //   }
    //   this.member = tmplist;
    
    // [{"name":"sale","path":"/sales"},{"name":"userInfo","path":"/UserInfo"}, {"name":"register","path":"/register"},{"name":"Login","path":"/drink"}, {"name":"Login","path":"/food"},{"name":"Login","path":"/dessert"}, {"name":"Login","path":"/workout"}]
    // this.member = JSON.parse(this.$store.getters.role);
    // console.log(this.member);
  },
  
  created(){

     this.member = JSON.parse(this.$store.getters.role);
    console.log(this.member);

    //  this.member =JSON.parse(localStorage.getItem(item));
    // console.log(this.member);
  }
  
};
</script>
<style>
#block,
#left{
    display: inline;
     display: inline-block;
}
#right {
  display: inline-block;
}
</style>


