UserInfo.vue
<template>

</template>
<script>


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
     var _this=this;
     getRequest
      ("/users/get/" + this.$store.getters.username).then(resp => {
        _this.userData=resp.data.userEntity;
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
