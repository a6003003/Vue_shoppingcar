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

<!-- <el-container>
  <el-header>
       <h1>神明的店</h1>
        <div id="haha">
         
          <!-- <i class="el-icon-shopping-cart-full" ></i> -->
<!--         
        <el-input v-model="input" placeholder="請輸入內容"></el-input>

        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
  </el-header>
  <el-container>
    <el-aside width="200px" >
      
        <el-select v-model="value" placeholder="請選擇">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div> --> 
  <!-- <div id="wrapper">
    <div id="content-wrap">
      <div id="left-sidebar">
        <img
          src="https://www.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb_0.jpg"
          alt="Smiley face"
          height="100%"
          width="100%"
        />

      </div>
      <div id="content">
        <div id="inner-content">
          <h1>food title</h1>
          <hr />
          <h1>food 介紹</h1>
          <h1>money</h1>
          <button>購買</button>
        </div>
      </div>
    </div>
    <div id="footer">qewqwe</div>
  </div>-->
</template>

<script>
import { getRequest } from '../lib/request';

export default {
  name: "home",

  data() {
    return {
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
      ("/goods/findKeyWord/" +  _this.value +"/"+_this.input).then(resp => {
        console.log(resp.data);
       _this.menber=resp.data.goodsEntitys;
       console.log("321313131");
       console.log( _this.menber);
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

</style>