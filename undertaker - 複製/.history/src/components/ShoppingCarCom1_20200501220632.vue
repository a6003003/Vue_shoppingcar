
<template>
 <div id="app">
    <div class="container">
      <div class="item_header item_body">
        <div class="item_detail">
          <img v-bind:src="itemdata.img" height="100" width="100" />
          <div class="name">{{itemdata.item}}</div>
          {{itemdata.seller}}
        </div>

       
        <div class="price">
          <span>單價$</span>
          {{itemdata.price/(itemdata.count)}}
        </div>

        <div class="count">
          <button @click="delcount()">-</button>
          {{itemdata.count}}
          <button @click="addcount()">+</button>
        </div>
        <div class="amount">{{"總計:$"+itemdata.price}}</div>
        <div class="operate">
          <el-button type=" " icon="edit" @click="delitem()">刪除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Login from '../components/Login.vue';
// import axios from 'axios';
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";
export default {
  name: "shoppingcarcom1",

  props: {
    data: []
  },

  data() {
    return {
      itemdata: [],
      itemtitle: "",
     
    };
  },
  methods: {
    test() {
      // this.$emit('childEvent', this.itemdata.id,this.itemdata);
    },
    addcount() {
      this.update(1);
    },
    delcount() {
      this.update(-1);
    },
    delitem() {
      //this.$emit('childEvent', this.itemdata.item,this.itemdata.price);
      var _this = this;
      getRequest("/shoppingcar/del/" + this.itemdata.id).then(resp => {
        console.log(resp.data);

        this.$message({
          showClose: true,
          type: "success",

          message: resp.data.msg
        });
        let NewPage = "_empty" + "?time=" + new Date().getTime() / 1000;
        // 之后将页面push进去
        this.$router.push(NewPage);
        // 再次返回上一页即可
        this.$router.go(-1);
        _this.$emit("childEvent", _this.itemdata.id, _this.itemdata);
      });
    },
    update(count) {
      var _this = this;
      getRequest(
        "/shoppingcar/add/" +
          this.$store.getters.username +
          "/" +
          this.itemdata.item +
          "/" +
          count
      ).then(resp => {
        console.log(resp.data);
        _this.itemdata = resp.data.shopping_carEntity;
        console.log(resp.data.shopping_carEntity);
        if(_this.itemdata.count<=0){
          _this.delitem(_this.itemdata);
        }
        // alert(data.title + "已加入購物車");
        _this.$emit("childEvent", _this.itemdata.id, _this.itemdata);
      });
    }
  },
  mounted() {
    this.itemdata = this.data;
  }
};
</script>

<style>
.item_header .item_detail {
  width: 50%;
}
.item_body {
  margin-top: 20px;
  height: 100px;
  align-items: center;
  font-weight: bold;
}
.item_detail img {
  width: 80px;
  height: 80px;
  border-radius: 3px;
  /* margin-top: 10px; */
  float: left;
}
.item_detail .name {
  margin-left: 100px;
  margin-top: 20px;
}
</style>