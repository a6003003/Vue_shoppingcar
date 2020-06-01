<template>
 
  <div>
    
  </div>

  
</template>

<script>
export default {
data() {
    return {
      pics: [
        { url: require("C:\Users\PC\Desktop\drink.png") },
        { url: require("C:\Users\PC\Desktop\workout.png") },
        { url: require("C:\Users\PC\Desktop\food.png") },
        { url: require("C:\Users\PC\Desktop\dessert.png") }
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