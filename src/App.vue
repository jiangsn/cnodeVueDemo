<template>
  <div id="app">
    <Header></Header><!--3. 页面中渲染 -->
   <div class="main">
    <PostList></PostList>
   </div>
   

  </div>
</template>

<script>
//1. 引入Header组件
import Header from "./components/Header";
import PostList from "./components/PostList";


export default {
  name: 'App',
  //2.注册Header组件
  components:{
      Header,
      PostList,
  }
}
</script>

<style>
.main{
  width: 80%;
  margin:0 auto;
}
</style>
