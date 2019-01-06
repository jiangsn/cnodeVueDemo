<template>
    <div class="sidebar">
        <div class="author">
            <div class="bar">作者</div>
            <div class="layout">
                <img :src="info.avatar_url" alt="">
                <span>{{info.loginname}}</span>
                <p>积分：{{info.score}}</p>
            </div>
        </div>
        <div class="recent-topic">
           <div class="bar">最近创建的话题</div>
           <div v-for="topics in info.recent_topics" :key="topics.id" >
            <router-link :to="{name:'post_content',
                               params:{id:topics.id,name:topics.author.loginname}}">  
                 <div class="title" v-if=" fid != topics.id" >{{topics.title}}</div>
            </router-link>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SideBar',
    data(){
        return {
            info:{},
            fid:'',
        }
    },
    methods:{
        getUserInfo(){
               
            this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then(res=>{
                this.info = res.data.data
                 this.fid=this.$route.params.id
            })
        }
    },
    beforeMount(){
         this.getUserInfo()
    }


}
</script>


<style scoped>
.sidebar{
    float: left;     
    margin-left:10px;
    width: 280px;
    font-size: 14px;
}
.bar{
    color: #51585c;

    padding: 10px;
    background-color: #f6f6f6;
}
.layout{
    background-color: #fff;
    padding:10px;
    font-size: 13px;
}
.author{
     border-radius: 3px;
}
.author img{
    width:48px;
    height:48px;
    vertical-align: middle;
}
.title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: #778087;
    line-height: 1em;
    padding:10px;
}
.recent-topic{
    margin-top:10px;
    background-color: #fff;
    border-radius: 3px;
}

a{
    text-decoration: none;
}
</style>

