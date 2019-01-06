<template>
  <div class="userinfo">
    <div class="homepage">
      <div class="breadcrumb">
        <span>主页 /</span>
      </div>

      <div class="info">
        <img :src="user.avatar_url" alt>
        {{user.loginname}}
      </div>
      <ul>
        <li>
          <span>{{user.score}}积分</span>
        </li>
        <li v-if="user.loginname">
          <router-link :to="{name:'topicsCollect',params:{name:user.loginname}}">
            <span>{{collect}}个话题收藏</span>
          </router-link>
        </li>
        <li>
          <span>{{user.githubUsername}}</span>
        </li>
        <li>
          <span>注册时间{{user.create_at | formatDate}}</span>
        </li>
      </ul>
    </div>
    <div class="recentCreateTopics">
      <div class="breadcrumbNext">
        <span>最近创建话题</span>
      </div>
      <div class="content" v-for="topics in user.recent_topics" :key="topics.id">
        <img :src="topics.author.avatar_url" alt>
        <span>{{topics.title}}</span>
        <span>{{topics.last_reply_at | formatDate}}</span>
      </div>
    </div>
    <div class="recentPartakeTopics">
      <div class="breadcrumbNext">
        <span>最近参与的话题</span>
      </div>

      <div class="content" v-for="topics in user.recent_replies" :key="topics.id">
        <img :src="topics.author.avatar_url" alt>
        <span>{{topics.title}}</span>
        <span>{{topics.last_reply_at | formatDate}}</span>
      </div>
    </div>
    <!-- 侧边栏-->
    <div class="Sidebar">
      <div class="personInfo"></div>
    </div>
  </div>
</template>



<script>
export default {
  name: "userinfo",

  data() {
    return {
      user: {},
      collect: ""
    };
  },

  methods: {
    getuser() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.user = res.data.data;
        })
        .catch(err => {});
    },
    getTopicCollect() {
      this.$axios
        .get(
          `https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`
        )
        .then(res => {
          this.collect = res.data.data.length;
        });
    }
  },

  beforeMount() {
    this.getuser();
    this.getTopicCollect();
  }
};
</script>


<style scoped>
.breadcrumb {
  background-color: #f6f6f6;
  color: #80bd01;
  border-radius: 3px 3px 0 0;
  padding: 10px;
}
.homepage {
  font-size: 14px;
  background-color: #fff;
  color: #778087;
  margin-top: 10px;
}

.info {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}

.homepage img {
  width: 40px;
  height: 40px;
  vertical-align: top;
}
.homepage ul {
  padding: 10px;
  list-style: none;
  line-height: 2em;
  margin: 0;
}

.homepage ul li:last-child {
  color: #ababab;
}
.recentCreateTopics {
  margin-top: 10px;
}
.breadcrumbNext {
  color: #444;
  font-size: 14px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  padding: 10px;
}
.content img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.content {
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  padding: 10px;
}
.content span:last-child {
  float: right;
}

.recentPartakeTopics {
  margin-top: 10px;
}
</style>
