<template>
  <li>
    <h3>添加新图：</h3>
    <input
      type="file"
      id="saveImage"
      name="myphoto"
      accept="image/png, image/gif, image/jpeg"
      ref="new_image"
    />
    <el-button @click="addImage">确认添加</el-button>
  </li>
</template>

<script>
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";
export default {
  name: "Upload",

  data() {
    return {};
  },
  methods: {
    addImage() {
      let self = this;
      if (self.$refs.new_image.files.length !== 0) {
        var formData = new FormData();
        formData.append("image_data", self.$refs.new_image.files[0]);
        //单个文件进行上传
        self.$ajax
          .post("/addImage", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {});
      }
    }
  }
};
</script>
<style>
</style>