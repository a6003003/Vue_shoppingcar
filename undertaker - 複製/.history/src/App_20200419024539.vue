<template>
  <div id="app">
<router-view name="nav"></router-view>
 <router-view name="view"></router-view>






   



</div>
 
</template>

<style>
 
   #header {
    background-color: #dddddd;
}

#left-sidebar {
    width: 200px;
    float: left;
    background-color: #aafed6;
    position: relative;
    z-index: 2;
}

#content {
    background-color: #eeeeee;
    float: left;
    width: 300px;
    box-sizing: border-box;
    margin-left: -200px;
    padding-left: 200px;
}
#wrapper {
    background-color: #eeeeee;
    float: left;
    width: 400px;
    box-sizing: border-box;
    margin-left: -200px;
    padding-left: 200px;
}
</style>
