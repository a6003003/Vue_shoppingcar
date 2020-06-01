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
             <li>
      <h3>添加新图：</h3>
      
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




