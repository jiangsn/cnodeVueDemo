<template>
  <div>
    <!--    数据未返回的时候             -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <div>
      <ul>
        <li class="topbar" v-if="!isLoading">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>文档</span>
          <span>招聘</span>
        </li>
        <li v-for="post in posts" :key="post.id">
          <img v-bind:src="post.author.avatar_url" alt>
          <span class="allcount">
            <span class="reply_count">{{post.reply_count}}</span>
            /{{post.visit_count}}
          </span>
          <span :class="[{post_good:(post.good == true),post_top:(post.top == true),
           'topiclist-tab':(post.good != true && post.top !=true )}]">
            <span>{{post| tabFormatter}}</span>
          </span>
          <span>{{post.title}}</span>
          <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<!--API https://cnodejs.org/api/v1/topics ;par limit;page-->
<script>
export default {
  name: "PostList",
  data() {
    return {
      isLoading: false,
      posts: []
    };
  },
  methods: {
    // ES6语法
    /*getData:function(){}  等于 getData(){}  */
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 10
        })
        .then(res => {
          this.isLoading = false;

          this.posts = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getData();
  }
};
</script>


<style scoped>
ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
.allcount {
  width: 70px;
  text-align: center;
  font-size: 12px;
  display: inline-block;
}
.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.post_top,
.post_good {
  background-color: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
}
.topbar {
  height: 40px;
  background-color: #f5f5f5;
}

.topbar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

.last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
    cursor: pointer;
  }
.loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
>


2018-12-23T08:06:23.181Z