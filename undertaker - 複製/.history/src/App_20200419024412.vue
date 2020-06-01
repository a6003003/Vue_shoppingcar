<template>
  <div id="app">
<router-view name="nav"></router-view>
 <router-view name="view"></router-view>





<!-- 
   
<div id="wrapper">
  <div id="header"></div>
  <div id="left-sidebar"><router-view name="sellerList"></router-view></div>
  <div id="content">
    <div id="inner-content">
      <router-view name="Chat"></router-view>
    </div>
  </div>
</div> -->


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
