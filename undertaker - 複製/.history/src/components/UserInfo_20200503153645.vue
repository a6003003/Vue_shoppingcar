<el-table
      :data="userData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
         <el-button
          size="mini"
          @click="EditName(scope.$index, scope.row)">修改資料</el-button>
      </el-table-column>
      <el-table-column
        prop="phonenumber"
        label="電話號碼">
         <el-button
          size="mini"
          @click="EditPhone(scope.$index, scope.row)">修改資料</el-button>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
         <el-button
          size="mini"
          @click="EditAddress(scope.$index, scope.row)">修改資料</el-button>
      </el-table-column>
      
    </el-table>
UserInfo.vue
<template>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="姓名">
    <el-input v-model="formLabelAlign.name">{{this.userData.name}}</el-input>
  </el-form-item>
  <el-form-item label="手機號碼">
    <el-input v-model="formLabelAlign.region">{{this.userData.phonenumber}}</el-input>
  </el-form-item>
  <el-form-item label="地址">
    <el-input v-model="formLabelAlign.type">{{this.userData.address}}</el-input>
  </el-form-item>
</el-form>



</template>
<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'

export default {
  name: "userinfo",
 
  data() {
    return {
      userData:[],
    };
  },
 
  methods:{
    
  },

mounted() {
     var that = this;
     getRequest
      ("/users/get/" + this.$store.getters.username).then(resp => {
        
        that.userData=[resp.data.userEntity];//單筆資料記得括號 不然會型態錯誤
        
        
      });
  }
  
};
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
