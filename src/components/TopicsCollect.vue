<template>
    <div class="Collect">

                <div class="breadcrumb">
                    <span>主页 / </span>
                    <span>{{this.$route.params.name}}收藏的话题</span>
                </div>
                <div v-if='post !== null' v-for="post in Collect" :key="post.ids" class="inner">
                <img :src=post.author.avatar_url alt="">
                <div class="replycount">
                <span class="repliescount">{{post.reply_count}}</span>
                   <span class="repliescount seperator">/</span>
                <span class="visitcount">{{post.visit_count}}</span>
                </div>
                <span class="title">{{post.title}}</span>
                <div class="float">
                <span>最后回复：{{post.last_reply_at |formatDate}}</span>
                <span>创建时间：{{post.create_at |formatDate}}</span>
                </div>
            </div>
            {{author}}
    </div>
</template>

<script>
export default {
    name: "topicsCollect",
    data(){
        return {
            loginname:'',
            Collect:[],
         
        }
    },

    methods:{
        getTopicCollect(){
          
            this.$axios
            .get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`)
            .then(res=>{
                   
               this.Collect =  res.data.data
            })
        },
      

    },
    beforeMount(){
         
         this.getTopicCollect();
    }
}
</script>


<style scoped>
    .Collect{
        margin-top:10px;
    }
    .breadcrumb{
        padding:10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        font-size:14px;
    }
     .breadcrumb span:last-child{
     color: #999;
      vertical-align: top;
    }
    div img{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
    }
    .repliescount{
        font-size: 14px;
        color: #9e78c0;
    }
    .seperator{
        margin: 0 -3px;
        font-size: 10px;
    }
    .visitcount{
        font-size: 10px;
        color: #b4b4b4;
    }
    .replycount{
        width: 70px;
        display: inline-block;
        text-align: center;
    }
    .title{
               font-size: 16px;
    }
    .inner{
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        padding:10px;
    }
    .float{
        float:right;
        color: #778087;
        font-size: 11px;
        text-align: left;
    }
    .float span:last-child{
       position: absolute;
    }
</style>


