UserInfo.vue
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
      
<template>
<div>
  <p>{{userData}}</p>
  </div>

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

created() {
     var _this = this;
     getRequest
      ("/users/get/" + this.$store.getters.username).then(resp => {
        console.log(resp.data);
        _this.userData=resp.data;
        
        console.log("Fuck"+_this.userData);
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
