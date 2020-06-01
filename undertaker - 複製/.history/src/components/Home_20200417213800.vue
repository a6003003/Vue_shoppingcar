<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="250px" style="background-color: rgb(255, 255, 255)">
   
  <el-button type="danger" plain>毒品窩</el-button>
      
        <el-select v-model="value" placeholder="請選擇">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <hr>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <div id="haha">
        
          

        <el-input v-model="input" placeholder="請輸入內容"></el-input>

        <el-button style="height:40px ;

   margin: auto;" type="primary" icon="el-icon-search" @click="seracher()">搜索</el-button>
      </div>
    </el-header>
    
    <el-main>
       <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in allgoods" :key="item">
        <h3 class="small">{{ item.img }}</h3>
      </el-carousel-item>
    </el-carousel>
       </div>
         <div class="itemstyle">
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
          <el-button type="success" @click="AddShoppingCar(item)">加入購物車</el-button>
        </li>
      </ul>
      </div>
    </el-main>
  </el-container>
</el-container>


</template>

<script>
import { getRequest } from '../lib/request';

export default {
  name: "home",

  data() {
    return {
      allgoods:[],
      member: [],
      input: "",
      options: [
        {
          value: "",
          label: "請選擇"
        },
        {
          value: "飲料",
          label: "飲料"
        },
        {
          value: "健身必吃",
          label: "健身必吃"
        },
        {
          value: "美食",
          label: "美食"
        },
        {
          value: "點心",
          label: "點心"
        }
      ],
      value: ""
    };
  },
  methods :{ 
    AddShoppingCar(data){
    var _this = this;
    let url_str = "http://localhost:8090/shoppingcar/add/"+this.$store.getters.id +"/"+ data.title +"/"+"1";
    this.$http
      .get(url_str)
      .then(function(response) {
        /* 成功拿s到資料，然後... */
        console.log(response.data);
        alert("haha");
      })
      .catch(function(error) {
        console.log(error);
     
        alert("login failed");
        /* 失敗，發生錯誤，然後...*/
      });
    },
    
    seracher(){
       var _this = this;
       this.input = this.input =="" ? "*" :this.input;//if(input=" ")  input="*""  else input=input
       this.value = this.value =="" ? "*" :this.value;

    getRequest
      ("/goods/findKeyWord/" +  this.value +"/"+this.input).then(resp => {
        console.log(resp.data);
      _this.member=resp.data.goodsEntitys;
       console.log("321313131");
       console.log( _this.member);
      });
   /* let url_str = "http://localhost:8090/goods/findKeyWord/"+   this.value +"/"+this.input;
    this.$http
      .get(url_str)
      .then(function(response) {
        
        console.log(response.data);
        _this.member =response.data;
        alert("haha");
      })
      .catch(function(error) {
        console.log(error);
     
        alert("login failed");
        
      });*/

    }
  },
  mounted() {
      var _this=this;
      getRequest("/goods/getAll").then(resp => {
        _this.allgoods=resp.data.goodsEntitys;
       console.log(_this.allgoods);
      });

  }
};
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

#haha {
  display: flex;
}
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
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>