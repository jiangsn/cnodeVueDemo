<template>
    <div class="header">
        <img src="../assets/cnodejs_light.svg" alt="logo">
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>


<style scoped>
 
    .header{
        background-color: #5a5555;
        height:50px;
    }
    img{
        max-width: 120px;
        margin-left: 50px;
        margin-top:10px;
    }
    a{
        text-decoration: none;
        color: #ccc;
        font-size: 14px;
        text-shadow: none;
    }
    ul{
        list-style: none;
        float: right;
    }
    li{
        display:inline-block;
        margin:0 12px;
    }
    li:nth-last-child(1){
        display:inline-block;
        margin-right:80px;
    }

</style>
