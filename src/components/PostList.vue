<template>
  <div>
    <!--    数据未返回的时候             -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <!--    数据未返回的时候             -->
    <div v-else>
      <ul>
        <li class="topbar">
          <!-- {{this.$route.params.tab}} -->
          <span @click="getData()" :class="{currenttab:tab == 'all'}">全部</span>
          <span @click="getData('good')" :class="{currenttab:tab == 'good'}">精华</span>
          <span @click="getData('share')" :class="{currenttab:tab == 'share'}">分享</span>
          <span @click="getData('ask')" :class="{currenttab:tab == 'ask'}">问答</span>
          <span @click="getData('job')" :class="{currenttab:tab == 'job'}">招聘</span>
        </li>
        <li v-for="post in posts" :key="post.id" class="content">
          <router-link :to="{name:'userinfo',params:{name:post.author.loginname}}">
            <img v-bind:src="post.author.avatar_url" alt>
          </router-link>
          <div class="allcount">
            <span class="reply_count">{{post.reply_count}}</span>
            <span class="seperator">/</span>
            <span class="visit">{{post.visit_count}}</span>
          </div>
          <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
          <span
            :class="[{post_good:(post.good == true),post_top:(post.top == true),
           'topiclist-tab':(post.good != true && post.top !=true )}]"
          >
            <span>{{post| tabFormatter}}</span>
          </span>
          <router-link :to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
            <span class="posttitle">{{post.title}}</span>
          </router-link>
        </li>
        <li>
          <pagination @handleList="renderList"></pagination>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pagination from "./pagination";

export default {
  name: "PostList",

  data() {
    return {
      isLoading: false,
      posts: [],
      postpage: 1,
      tab: "All"
    };
  },

  computed:{
    t:function(){
      return this.$route.params.tab
    } 
  },


  components: {
    pagination
  },

  methods: {
    // ES6语法
    /*getData:function(){}  等于 getData(){}  */
    getData(tab) {
      if (!tab) {
        this.tab = "all";
      } else {
        this.tab = tab;
      }


      this.$axios
  
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postpage,
            limit: 20,
            tab: tab
          }
        })
        .then(res => {
             
          this.isLoading = false;
          this.posts = res.data.data;
        })
        
        
        .catch(err => {
             
          console.log(err);
        });
    },

    renderList(value) {
      this.postpage = value;
  
      this.getData();
    }
  },


  beforeMount() {
    this.isLoading = true;
    this.getData();
  
  },



};
</script>


<style scoped>
ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
  padding-left: 0;
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

.content img {
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
.seperator {
  margin: 0 -3px;
  font-size: 10px;
}

.post_top,
.post_good {
  background-color: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  font-size: 12px;
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
.topbar .currenttab {
  background-color: #80bd01;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
.toobar span:hover {
  color: #9e78c0;
}

.last_reply {
  text-align: right;
  min-width: 50px;

  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
  cursor: pointer;
}
/* .loading {
  width: 60px; height: 40px;
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
} */

.loading {
  width: 60px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto; /* 有了这个就自动居中了 */
}

a {
  color: black;
  text-decoration: none;
}

@media screen and (max-width: 425px) {
  .post_top,
  .post_good {
    font-size: 12px;
  }

  div.allcount {
    display: none;
  }

  ul li:not(:first-child) {
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 10px 10px 10px 10px;
  }

  li span.posttitle {
    max-width: 70%;
  }
}
</style>
>


