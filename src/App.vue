<template>
  <div id="app">
    <TopNavBar></TopNavBar>
    <!--3. 页面中渲染 -->
    <div class="main clearfix">
      <router-view name="main"></router-view>
      <router-view name="SideBar"></router-view>
    </div>
  </div>
</template>

<script>
//1. 引入Header组件
import TopNavBar from "./components/TopNavBar";

export default {
  name: "App",
  //2.注册Header组件
  components: {
    TopNavBar
  }
};
</script>

<style scoped>
.main {
  width: 90%;
  margin: 15px auto;
}
@media only screen and (max-width: 425px) {
  .main {
    width: 100%;
    margin: 0;
  }
  .SideBar {
    display: none;
  }
  .allcount {
    display: none;
  }
}

@media screen and (max-width: 425px) {
}

.clearfix::before {
  content: "";
  display: block;
  clear: both;
}
</style>
