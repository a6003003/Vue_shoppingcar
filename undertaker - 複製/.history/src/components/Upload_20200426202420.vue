<template>
   <div>
     
    <li>
      <h3>添加新图：</h3>
      <input type="text" v-model="name" />
      <br />
      <br />
      <input
        type="file"
        id="saveImage"
        name="photo"
        accept="image/png, image/gif, image/jpeg"
        ref="new_image"
      />
      <br />
      <br />
      <el-button @click="addImage">确认添加</el-button>
    </li>
  </div>
</template>

<script>
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";
import axios from 'axios'
export default {
  name: "Upload",

  data() {
    return {};
  },
  methods: {
   addImage: function() {
      let self = this;
      if (self.$refs.new_image.files.length !== 0) {
        let formData = new FormData();
        // 文本框数据
        formData.append("name", this.name);
        console.log("163163"+this.name);
        // 通过append向form对象添加数据
        formData.append("image_data", self.$refs.new_image.files[0]);
        console.log("163163"+self.$refs.new_image.files[0]);
        //单个文件进行上传
        console.log("IAM formdata:"+formData);
        axios
          .post("https://61.71.47.141:8090/upload", formData, {
            "Content-Type": "multipart/form-data"
          })
          .then(response => {
            console.log(response.data);
          });
      }
    }
  }
};
</script>
<style>
</style>