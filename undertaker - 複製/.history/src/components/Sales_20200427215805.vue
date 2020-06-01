 <label>請上傳商品圖片:</label>
           <el-upload
       ref="new_image"
      :auto-upload="false"
      :file-list="fileList"
      :multiple="false"
      :limit="1"
      name="photo"
      :on-exceed="handleExceed"
      :http-request="uploadFiles"
      accept="image/png, image/gif, image/jpeg"
      action
      :on-change="changeUpload"
    >
      <el-button slot="trigger" size="mini" type="primary">選取圖片</el-button>
      <span></span>
      <el-button @click="uploadFiles" size="mini" type="primary">點選上傳</el-button>
    </el-upload>

    
      
      <h3>添加新图：</h3>
      
      
      <input
        type="file"
        id="saveImage"
        name="photo"
        accept="image/png, image/gif, image/jpeg"
        ref="new_image"
      />
      <br />
      
      <el-button @click="addImage">确认添加</el-button>
  
<template>
<div id="wrapper2">
 <div id="left-sidebar1"></div>
  <div id="content1">
    <div id="inner-content3">
      <el-form status-icon label-width="50px" class="demo-ruleForm">
          <el-form-item >
             
             請輸入物品名稱：<el-input v-model="goodsName" placeholder="請輸入物品名稱"></el-input>
          </el-form-item>

          <el-form-item> 
            請輸入物品價格：
            <el-input v-model="goodsPrice" placeholder="請輸入物品價格"></el-input>
          </el-form-item>

          <el-form-item>
            商品分類:
            <br>
              <el-select v-model="goodKind" filterable placeholder="商品分類">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
          </el-form-item>

          <el-form-item>
            
             <h3>添加新图：</h3>
      <br/>
      
      <input
        type="file"
        id="saveImage"
        name="photo"
        accept="image/png, image/gif, image/jpeg"
        ref="new_image"
      />
      <br />
      
      <el-button @click="addImage">确认添加</el-button>
           
          </el-form-item>
          <el-form-item>
上傳日期: <el-date-picker
      v-model="goodsDate"
      type="date"
      placeholder="選擇日期"> 
    </el-date-picker>

        </el-form-item>
        <el-form-item>
        <el-button type=" " icon="edit" @click="addGoods">上傳商品</el-button>
        </el-form-item>
        </el-form>
    </div>
  </div>
   

 
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
  name: "sales",

  data() {
    return {
     
      preview: null,
      image: null,
      options: [
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
      goodsName: "",
      goodsPrice:"",
      goodsDate: "",
      goodKind: "",
      goodsImg:"", 

     
    };
  },
  updated(){
    var time =new Date(this.goodsDate );
    console.log(time);
  },
  methods: {
    selectTime() {
     // console.log(goodsDate);
    },
    test() {
      //localStorage.removeItem('token');
      //console.log(this.$store.getters.test);
      

      alert(this.$store.getters.role);
    },
    uploadFiles() {
      var That = this;//你在雷 期他地方沒改
      var selectimg = this.$refs.upload.$refs["upload-inner"].$refs.input; //獲取檔案資料
      var fileList = selectimg.files;
      var imgFile;
      var reader = new FileReader(); //html5讀檔案
      reader.readAsDataURL(fileList[0]); //轉BASE64
      reader.onload = function(e) {
        //讀取完畢後呼叫介面
        imgFile = e.target.result;
        var obj = {
          itemValue: imgFile
        };
        // console.log(  imgFile);
        // console.log(obj);
        console.log("----------------------fdgfdgfdgfdg---------------------");
      //  this.itemValue = obj.itemValue;
        That.goodsImg  =obj.itemValue;
        console.log( That.goodsImg);
        That.$message({
          showClose: true,
          type: 'success',
          message: '照片上傳成功',
        });
       //return  obj;
    //    console.log(this.itemValue);
        /*return BaseApi.uploadFiles(obj).then((res)=>{
    if(res.status=='SUCCESS'){
      alertBox('圖片上傳成功！','success',true).then(()=>{
        return That.getSysLogo(); //呼叫獲取base64資料介面
      });
    }else{
      alert('圖片上傳失敗',res);
      return ''
    }
  })*/
      };
    },
    addImage: function() {
      let self = this;
      if (self.$refs.new_image.files.length !== 0) {
        let formData = new FormData();
        // 文本框数据
       
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
            self.goodsImg=response.data;
          });
      }
    },
    addGoods() {
      var _this=this;
      postRequest("/goods/save", {
          img: _this.goodsImg,
          kind: _this.goodKind,
          title: _this.goodsName,
          seller: _this.$store.getters.name,
          price: _this.goodsPrice,
          date: _this.goodsDate
      }).then(resp => {
          _this.$message({
          showClose: true,
          type: 'success',
          message: resp.data.msg,
        });

      });
    }
    
  
      
    
  }
};
</script>
<style>






#left-sidebar1 {
    width: 200px;
    float: left;
    background-color: #dddddd;
    position: relative;
    z-index: 2;
}

#content1 {
    background-color: #eeeeee;
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding-right: 200px;
    margin-left: -200px;
    padding-left: 200px;
}
        
        
</style>




