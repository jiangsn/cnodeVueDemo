<template>

  <div class="article">

    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <div v-else>
      <div class="topic_header" >
        <div class="topic_title">
          <span class="post_top">{{post | tabFormatter}}</span>
          {{post.title}}
        </div>
        <ul class="details">
          <li>发布于：{{post.create_at | formatDate}}</li>
          <li>作者：{{post.author.loginname}}</li>
          <li>{{post.visit_count}}次浏览</li>
          <li>来自：{{post | tabFormatter}}</li>
        </ul>
           <div class="topic" v-html="post.content"></div>
      </div>
   
      <!--回复 -->

      <div class="count">
        <span v-if="post.replies" >{{post.replies.length}} 回复</span>
      </div>

      <div v-for="(reply,index) in post.replies" :key='index' class="reply">
      <router-link :to="{name:'userinfo',params:{name:reply.author.loginname}}"> <img :src="reply.author.avatar_url" alt="头像"></router-link> 
        <span>{{reply.author.loginname}}</span>
        <span>{{index+1}}楼</span>
        <span class="applause far fa-thumbs-up" v-if="reply.ups.length > 0">
          {{reply.ups.length}}
        </span>
        <div class='content' v-html="reply.content"></div>
      </div>
      </div>
    </div>

</template>
<!--replies-->

<script>
export default {
  name: "articledetail",
  data() {
    return {
      isLoading: false,
      post: {}
    };
  },
  methods: {
    getAriticleDate() {
     
      this.$axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)

        .then(res => {
          if (res.data.success == true) {
            this.isLoading= false;
      
            this.post = res.data.data;
          
          }
        })

        .catch(err => {
         
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getAriticleDate();
    
  },
  //检测路由变化
  watch:{
    '$route'(to,from){
      this.getAriticleDate();
    }
  }



};
</script>

<style>


@import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');

.article{
  max-width: 75%;
  min-width: 75%;
  float: left;
 
}
/* .loading {
  width: 60px; height: 40px;
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
} */


.loading {
 width: 60px; height: 40px;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
}





.post_top,
.post_good {
  background-color: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.topic_title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
 
  line-height: 130%;
}
.topic_header ul {
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}
.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}
.topic_header li::before {
  content: "•";
}
.topic_header {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
}
blockquote {
    padding: 0 0 0 15px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
}
.topic{
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.markdown-text img{
  max-width:100%;
}
.markdown-text p{
  font-size:15px;
  line-height: 1.7em;
}
.markdown-text p a{
 color: #08c;
 text-decoration: none;
}

.markdown-text p h2{
  font-size: 26px;
}
h1,h2,h3,h4,h5,h6{
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
}
.count{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
}
.reply{
    font-size: 14px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    padding: 15px;
}
.reply .content{
    padding-left: 50px;
    color: #333;
   
}

.reply .content p{
  margin-top:0px;
  font-size: 15px;
   
}
.reply img{
  width: 30px;
  height: 30px;
  vertical-align: top;
}
.applause{
  float: right;

}
@media screen and (max-width:425px){
  .article{
    max-width: 100%;
  }
  .sidebar{
    display: none;
  }
}

</style>

