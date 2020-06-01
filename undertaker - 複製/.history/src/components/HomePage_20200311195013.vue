<template>
   <div> 
<v-carousel>
  <v-carousel-item v-for="i in 4" :key="i">
     <v-img contain :src="items[i]"></v-img>
  </v-carousel-item>
</v-carousel>
</div>
  
</template>

<script>
export default {
data() {
    items: [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.ettoday.net%2Farticle%2F661215.htm&psig=AOvVaw3G166VT_5gg-U9aM5a0amj&ust=1584013547602000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiD67eskugCFQAAAAAdAAAAABAD',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffairylolita.com%2Ftao-yuan%2F&psig=AOvVaw2n-J9Ir_3CQzh0RUMKWdA5&ust=1584013639569000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDq1OOskugCFQAAAAAdAAAAABAD',
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficook.tw%2Frecipes%2F224010&psig=AOvVaw09aL6wosrBlLuQeP3JJWl3&ust=1584013680062000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjxkvmskugCFQAAAAAdAAAAABAD",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficook.tw%2Frecipes%2F237186&psig=AOvVaw3rk3Zwh1KLkwk-T8ubhC-x&ust=1584013766108000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCG05-tkugCFQAAAAAdAAAAABAD",
      ]
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