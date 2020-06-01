<template>
   <carousel autoplay loop autoplay-speed="2000" v-model="current">
    <carousel-item v-for="item in starwars">
        <div class="card" >
            <div class="card-body"><h3>{{ item.name }}</h3></div>
            <img class="card-img-bottom" :src="item.img" style="width:100%;height:100%">
        </div>
    </carousel-item>
</carousel>
  
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