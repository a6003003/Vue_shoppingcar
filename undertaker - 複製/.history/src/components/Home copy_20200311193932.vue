<template>
  
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  
</template>

<script>


</script>
<style>
#content-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}

#footer {
    background-color: #dddddd;
}

#left-sidebar {
  margin: 70px;
    flex: 0 0 200px;
    background-color: #aafed6;
    position: relative;
    z-index: 2;
}

#content {
    background-color: #eeeeee;
    flex: 1;
    box-sizing: border-box;
  
}
        
</style>