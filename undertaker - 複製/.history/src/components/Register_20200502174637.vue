
<template>
  <div id="wrapper3">
    <div id="header"></div>
    <div id="left-sidebar"></div>
    <div id="content">
      <div id="inner-content2">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <h1 style="height:200px margin: auto">註冊中心</h1>
          <el-form-item label="請輸入用戶名稱" prop="users">
            <el-input v-model="ruleForm.users" placeholder="請輸入用戶名稱"></el-input>
          </el-form-item>

          <el-form-item label="請輸入帳號" prop="username">
            <el-input v-model="ruleForm.username" placeholder="請輸入帳號"></el-input>
          </el-form-item>

          <el-form-item label="請輸入密碼" prop="password">
            <el-input v-model="ruleForm.password" placeholder="請輸入密碼"></el-input>
          </el-form-item>

          <el-form-item label="請輸入手機號碼" prop="phonenumber">
            <el-input v-model="ruleForm.phonenumber" placeholder="請輸入手機號碼"></el-input>
          </el-form-item>

          <el-form-item label="請輸入地址" prop="address">
            <el-input v-model="ruleForm.address" placeholder="請輸入地址"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="success" @click="register('ruleForm')">加入會員</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div id="right-sidebar"></div>
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
  name: "Register",
  data() {
    return {
      ruleForm: {
        users: "",
        username: "",
        password: "",
        phonenumber: "",
        address: ""
      },
      rules: {
        users: [
          { required: true, message: "請輸入名字", trigger: "blur" },
          { min: 4, max: 10, message: "長度在4個到10個字", trigger: "blur" }
        ],
        username: [
          { required: true, message: "請輸入帳號", trigger: "blur" },
          { min: 4, max: 10, message: "長度在4個到10個字", trigger: "blur" }
        ],
        password: [
          { required: true, message: "請輸入密碼", trigger: "blur" },
          { min: 4, max: 10, message: "長度在4個到10個字", trigger: "blur" }
        ],
        phonenumber: [
          { required: true, message: "請輸入手機號碼", trigger: "blur" },
          { min: 10, max: 10, message: "手機格式錯誤", trigger: "blur" }
        ],
        address: [{ required: true, message: "請輸入地址", trigger: "blur" }]
      }

      /*users: "",
        username: "",  
        password: "",
        phonenumber:"",
        address:"",*/
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          console.log(_this.ruleForm.users);
          postRequest("/users/register", {
            users: _this.ruleForm.users,
            username: _this.ruleForm.username,
            phonenumber: _this.ruleForm.phonenumber,
            password: _this.ruleForm.password,
            address: _this.ruleForm.address
          }).then(resp => {
             let _this = this;
            if (resp.data.msg == "註冊成功") {
              _this.$message({
                showClose: true,
                type: "success",
                message: resp.data.msg
              });
            } else {
               let _this = this;
              _this.$message({
                showClose: true,
                type: "error",
                message: resp.data.msg
              });
            }
          });
        } else {
           let _this = this;
          _this.$message({
            showClose: true,
            type: "error",
            message: "註冊失敗"
          });
        }
      });
    }
  }
};
</script>
<style>
#header {
  grid-area: header;
  background-color: #dddddd;
}

#right-sidebar {
  grid-area: rsidebar;
  background-color: #aafed6;
}

#left-sidebar {
  background-color: #aafed6;
  grid-area: lsidebar;
}

#content {
  background-color: #eeeeee;
  grid-area: content;
  position: relative;
}

#wrapper {
  display: grid;
  grid-template-columns: 200px auto 200px;
  grid-template-areas: "header header header " "lsidebar content rsidebar" "footer footer footer ";
}
</style>