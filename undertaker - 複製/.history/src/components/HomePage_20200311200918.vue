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
        { url: require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.commonhealth.com.tw%2Farticle%2Farticle.action%3Fnid%3D80188&psig=AOvVaw1jwNlheEnly0Ol6ZxVEZti&ust=1584014841603000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjEn6CxkugCFQAAAAAdAAAAABAD") },
        { url: require("https://www.google.com/url?sa=i&url=https%3A%2F%2Ffairylolita.com%2Ftao-yuan%2F&psig=AOvVaw0S0-_OtWdKy5px2tFnp9VW&ust=1584014877936000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKirlrKxkugCFQAAAAAdAAAAABAD") },
        { url: require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.momoshop.com.tw%2Fgoods%2FGoodsDetail.jsp%3Fi_code%3D7102317&psig=AOvVaw2Inn6_WJfeeMyVm2VwUlzm&ust=1584014911217000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCXmcKxkugCFQAAAAAdAAAAABAO") },
        { url: require("https://www.google.com/url?sa=i&url=https%3A%2F%2Ficook.tw%2Frecipes%2F237186&psig=AOvVaw1LkmOsGdRTR5vKAbj_bdqB&ust=1584014951844000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDrr9SxkugCFQAAAAAdAAAAABAD") }
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