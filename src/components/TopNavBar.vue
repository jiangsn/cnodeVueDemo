<template>
    <div class="navbar" >
        <div class="navbar-inner">
        <img src="../assets/cnodejs_light.svg" alt="logo">
        <ul>
            <!-- <li><router-link  :to="{name:'root',params:{tab:'all'}}">首页</router-link></li> -->
              <li><router-link  :to="{name:'root'}">首页</router-link></li>
            <li><a href="#" >关于</a></li>
         
            <li><router-link :to="{name:'login'}">登录</router-link></li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    name:'navbar',
}
</script>

<style scoped>
  
    .navbar{
        background-color: rgb(68, 68, 68);;
        height:50px;
        width: 100%; 
    }
    .navbar-inner{
        width: 90%;
        margin: 0 auto;
      
        max-width: 1400px;
    }
    .navbar img{
        max-width: 120px;
     
        margin-top:10px;
    }
    .navbar a{
        text-decoration: none;
        color: #ccc;
        font-size: 13px;
        text-shadow: none;
    }
    .navbar ul{
        list-style: none;
        float: right;
       
    }
    .navbar li{
        display:inline-block;
        margin:0 12px;
    }
</style>
