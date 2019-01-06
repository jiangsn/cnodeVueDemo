<template>
    <div class="pagination">
        <button v-on:click="changeBtn1"
        >首页</button>
        <button :class="{disable:CurrentPage == 1}"
        @click="changeBtn1"
        >上一页</button>

        <button v-for="btn in pagebtn" :key="btn" 
        :class="[{CurrentPage:btn == CurrentPage},'default']" 
        @click="changeBtn1(btn)">
            {{btn}}
        </button>
          <button @click="changeBtn1">下一页</button>
    </div>
</template>

<script>
export default {
    name:'pagination',

    data(){
        return {
                pagebtn:[1,2,3,4,5,'...'],
                CurrentPage:1,
        }
    },
    methods:{
        changeBtn1(value){
      
            if(typeof value !== "number"){
                     
                switch(value.target.innerText){
                    case '下一页':
                        if(this.pagebtn[4] === this.CurrentPage){
                             this.pagebtn.shift() 
                     
                             this.pagebtn.splice(4,0,this.pagebtn[3]+1)
                             this.CurrentPage++;
                        }else{
                            this.CurrentPage++;
                        }
                    
                        break;
                    case '上一页':
                        if(this.CurrentPage  !==  1){ 
                            if(this.CurrentPage === this.pagebtn[0]){
                                this.pagebtn.splice(4,1)
                                this.pagebtn.splice(0,0, this.pagebtn[0]-1)
                                this.CurrentPage--;
                            }else{
                                this.CurrentPage--;
                                }
                        }
                        break;
                    case '首页':
                          if(this.CurrentPage !== 1 ){  
                            this.CurrentPage = 1;
                            this.pagebtn=[1,2,3,4,5,'...'];
                          }
                           break;
                }
            }else{
                this.CurrentPage = value;
                if(value === this.pagebtn[4]){
                    this.pagebtn.shift() // 移除第一个元素
                    this.pagebtn.splice(4,0,this.pagebtn[3]+1)
                }
            }

             this.$emit('handleList',this.CurrentPage)
        }


     


    }

}

</script>

<style scoped>
button{
    color: #778087;
    border: 1px solid #ddd; 
    outline: none;
    cursor: pointer;
    background-color: #fff;
    border-radius: 3px;
    padding:10px;
    margin:0 10px;
}
.pagination{
    padding:5px;
}
.CurrentPage{
     background-color: black;
}
.disable{
    cursor:default;
    background-color: azure;
}
@media screen and (max-width:425px){
    .pagination{
       margin:0;
       padding:0;
   
    }
    .pagination button{
       margin:0;
       padding:5px;
       border: 1px solid #ddd;
   
    }
 
.default{
    display: none;
}



}
</style>
