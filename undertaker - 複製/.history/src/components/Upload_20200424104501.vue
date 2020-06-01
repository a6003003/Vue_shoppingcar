<template>
  <form class="form-horizontal" enctype="multipart/form-data">

<div v-if="menu.type == 1" class="form-group">
    <div class="col-sm-2 control-label">圖片</div>
        <div class="col-sm-10">
	    <div class="ui-upfile">
                <div style="width: 150px;height: 140px;display:none;" class="file-area" />
            </div>
            <input type="hidden" name="menuImgUrl" class="menu-image-url" v-model="menu.menuImgUrl">
            <input type='button' class='btn' value='上傳圖片' onclick="document.getElementById('file').click()" style="background-color: #48aae3c7;"/>
            <input type="file" class="menu-image-url" value=""  id="file"  @change="onUpload"  style="filter:alpha(opacity:0);opacity:0;width:0px">	 		
        </div>
    </div>

</template>

<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'
export default {
  
  name: "upload",

  data() {
    return {
     
    };
  },
  methods: {
   
    onUpload(e){
            var files = e.target.files[0];
        	var formFile = new FormData();
          formFile.append("file", files);
           
           postRequest("/goods/upload", {
        allPayLogisticsID: row.allPayLogisticsID,
       
      }).then(resp => {


      });


           $.ajax({
                url: baseURL + 'sys/upload/uploadPic',//這裡是請求後臺的上傳檔案介面
                type: 'POST',
                dataType: 'json',
                cache: false,
                data: formFile,
                processData: false,
                contentType: false,
                success: function(r){    
                	
                    if (r.code === 0) {
                    	vm.menu.menuImgUrl = r.fileUrl;
                    	$(".file-area").css("display","block");
                        $(".file-area").html("<img src= '"+ r.fileUrl +"'>");
                    }else{
                    	alert("檔案上傳失敗：" + r.msg);
                    }
                }
            });
        },
    
  }

   
  
};
</script>
<style>

</style>