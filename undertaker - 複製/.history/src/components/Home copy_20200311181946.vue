
<template>
  <div>
    <div id="wrapper">
  <div id="content-wrap">
    <div id="left-sidebar">
     <img src="https://www.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb_0.jpg" alt="Smiley face" height="100%" width="100%">
    </div>
    
    <div id="content">
      <div id="inner-content">
        <h1>food title</h1>
   <hr>
        <h1>food 介紹</h1>
        <h1>money</h1>
        <button>購買</button>
      </div>
    </div>
  </div>
  <div id="footer">
    qewqwe
  </div>
</div>
 
   
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