<template>
<div id="login">
<el-container>
  <el-aside width="400px"></el-aside>
  <el-main>
  
    <el-form status-icon label-width="50px" class="demo-ruleForm" label-position="top">
         <h1 style="height:200px margin: auto">拍賣網站</h1>
        
          <el-form-item label="請輸入帳號">
            <el-input v-model="username" placeholder="請輸入帳號"></el-input>
          </el-form-item>

          <el-form-item label="請輸入密碼">
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="success" @click="login()">登入</el-button>
            <el-button type="success" @click="register()">註冊</el-button>
            
          </el-form-item>
        </el-form>

  </el-main>
<el-aside width="600px"></el-aside>
</el-container>
</div>
  
</template>
<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'
export default {
  name: "login",
  
  data() {
    return {
      username: "",
      password: "",
     
    };
  },
  mounted() {
    
  },
  
  methods: {
    login() {
      if(this.username==""||this.password==""){
        this.$message.error('欄位不可為空');
      }
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
        router: this.$router
      });
    },

    register() {
      this.$router.push("/register");
    },
   

  }
  
};
</script>
<style scoped>
  .el-header, .el-footer {
    
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
  
    text-align: left;
   
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  body{
    background-color: rgba(0, 0, 0,.2);
    font-family: Microsoft JhengHei;
}
</style>