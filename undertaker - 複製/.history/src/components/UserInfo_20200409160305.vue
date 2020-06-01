UserInfo.vue
<template>
<el-table
      :data="userData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="phonenumber"
        label="電話號碼">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="修改資料">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改資料</el-button>
          </template>
    </el-table-column>
    </el-table>

</template>
<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'

export default {
  name: "userinfo",
 
  data() {
    return {
      userData:[{"id":1250,"username":"1111","password":"1111","name":"jason","token":"0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c","role":"[{\"name\":\"首頁\",\"path\":\"/\"},{\"name\":\"使用者資訊\",\"path\":\"/UserInfo\"}, {\"name\":\"註冊\",\"path\":\"/register\"},{\"name\":\"拍賣中心\",\"path\":\"/sales\"},{\"name\":\"購物車\",\"path\":\"/shoppingcar\"},{\"name\":\"飲料\",\"path\":\"/drink\"}, {\"name\":\"美食\",\"path\":\"/food\"},{\"name\":\"點心\",\"path\":\"/dessert\"}, {\"name\":\"健身必吃\",\"path\":\"/workout\"}]","phonenumber":"0912345678","address":"地一公墓"}],
    };
  },
 
  methods:{
    
  },

/* mounted() {
     var _this=this;
     getRequest
      ("/users/get/" + this.$store.getters.username).then(resp => {
        console.log(resp.data.userEntity);
        _this.userData=resp.data.userEntity;
        console.log(_this.userData);
      });
  }
  
};*/
</script>
<style>

#header {
    background-color: #dddddd;
}

#left-sidebar {
    width: 200px;
    float: left;
    background-color: #aafed6;
    position: relative;
    z-index: 2;
}

#content {
    background-color: #eeeeee;
    float: left;
    width: 100%;
    box-sizing: border-box;
    margin-left: -200px;
    padding-left: 200px;
}
        
</style>
