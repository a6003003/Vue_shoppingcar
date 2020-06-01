<template>
 <div class="friendlist">
 	<ul>
        <li v-for="item in searchedFriendlist" class="frienditem"  :class="{ noborder: !item.initial}">
            <div class="list_title" v-if="item.initial">{{item.initial}}</div>
            <div class="friend-info" :class="{ active: item.id === selectFriendId }" @click="selectFriend(item.id)">
                <img class="avatar"  width="36" height="36" :src="item.img">
                <div class="remark">{{item.remark}}</div>
            </div>
        </li>
    </ul>
 </div>
</template>

<script>
import { getRequest ,postRequest ,deleteRequest ,putRequest} from '../lib/request'
export default {
  
  name: "ChatSellerList",

  data() {
    return {
     searchedFriendlist: [{"id":1250,"username":"1111","password":"1111","name":"jason","token":"0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c","role":"[{\"name\":\"首頁\",\"path\":\"/\"},{\"name\":\"使用者資訊\",\"path\":\"/UserInfo\"}, {\"name\":\"註冊\",\"path\":\"/register\"},{\"name\":\"拍賣中心\",\"path\":\"/sales\"},{\"name\":\"購物車\",\"path\":\"/shoppingcar\"},{\"name\":\"飲料\",\"path\":\"/drink\"}, {\"name\":\"美食\",\"path\":\"/food\"},{\"name\":\"點心\",\"path\":\"/dessert\"}, {\"name\":\"健身必吃\",\"path\":\"/workout\"}]","phonenumber":"0912345678","address":"地一公墓"},{"id":1251,"username":"1234","password":"1111","name":"Mike","token":"03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4","role":"[{\"name\":\"首頁\",\"path\":\"/\"},{\"name\":\"使用者資訊\",\"path\":\"/UserInfo\"}, {\"name\":\"註冊\",\"path\":\"/register\"},{\"name\":\"拍賣中心\",\"path\":\"/sales\"},{\"name\":\"購物車\",\"path\":\"/shoppingcar\"},{\"name\":\"飲料\",\"path\":\"/drink\"}, {\"name\":\"美食\",\"path\":\"/food\"},{\"name\":\"點心\",\"path\":\"/dessert\"}, {\"name\":\"健身必吃\",\"path\":\"/workout\"}]","phonenumber":"0914777777","address":"垃圾車"}]
    };
  },
  methods: {
   
  },
   mounted() {
   }
};
</script>

<style lang="stylus" scoped>
.friendlist
    height: 540px
    overflow-y: auto
    .frienditem
        border-top: 1px solid #dadada
        &:first-child,&.noborder
            border-top: none
        .list_title
            box-sizing: border-box
            width: 100%
            font-size: 12px
            padding: 15px 0 3px 12px
            color: #999
        .friend-info
            display: flex
            padding: 12px
            transition: background-color .1s
            font-size: 0
            &:hover 
                background-color: rgb(220,220,220)
            &.active 
                background-color: #c4c4c4
            .avatar
                border-radius: 2px
                margin-right: 12px
            .remark
                font-size: 14px
                line-height: 36px
</style>