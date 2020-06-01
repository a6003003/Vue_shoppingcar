
<template>
  <div class="web-im">
  <div class="left">
    <div class="aside content">
      <div class="header">
     
      </div>
      <div class="body user-list">
        ...
      </div>
      <div class="footer">
      
      </div>
    </div>
  </div>
  <div class="right content">
    <div class="header">...</div>
    <div class="body im-record" id="im-record">
      
    </div>
    <div class="footer im-input">
     
    </div>
  </div>
</div>
</template>

<script>
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
} from "../lib/request";
export default {
  name: "drink",

  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style>
.web-im
  display flex
.left
  width 220px
.right
    flex 1
.content
  display: flex;
  flex-direction: row;
  flex: 1;
  box-sizing: border-box;
  min-width: 0;
  flex-direction: column;
  .header
    box-shadow 1px -1px 2px 2px #eee
    line-height 40px
    height 40px
    font-size 24px
    z-index 10
    background #fff
  .body
    flex 1
    overflow-y auto
    box-shadow 1px 1px 1px #eee
  .footer
    box-shadow 1px 1px 8px #eee
    height 60px
</style>