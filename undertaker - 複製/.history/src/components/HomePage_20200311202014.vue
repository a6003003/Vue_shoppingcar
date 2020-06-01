<template>
 
  <div>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in pics" :key="item.url">
        <img :src="item.url"/>
      </el-carousel-item>
    </el-carousel>
  </div>

  
</template>

<script>
export default {
data() {
    return {
      pics: [
        { url: require("C:\Users\PC\Desktop\drink.png") },
        { url: require("../assets/pic2.jpg") },
        { url: require("../assets/pic3.jpg") },
        { url: require("../assets/pic4.jpg") }
      ]
    };
  }
}

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