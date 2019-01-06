<template>

    <div class="loginwrapper">
    <div class="login">
        <div><input v-model="token" type="text" name="AccessToken" id="" placeholder="Access Token"></div>
        <div><input type="submit" value="Sign in" v-on:click="login(token)"></div>
    </div>
    </div>
</template>



<script>
export default {
    data(){
        return {
            token:'',
        }
    },
    methods:{
        login:function(value){
            if(value){
                this.$axios.post('https://cnodejs.org/api/v1/accesstoken/',{
                    params:{
                        accesstoken:this.token
                    }               
                })
                .then(res=>{

                })
                .catch(err=>{
                    alert(err)
                })


            }else{
                alert("没有输入")
            }
        }
    }

}
</script>



<style scoped>

.loginwrapper{
 width: 100vh;
 margin: auto;
 border: 1px solid;
}


.login{
    width: 300px;
    padding: 70px 20px;
    background-color: rgb(68, 68, 68);;
}
</style>
