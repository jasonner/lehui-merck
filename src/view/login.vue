<template>
    <div class="content">
        <div  class="content-box">
            <div class="list1"><input type="text" maxlength="8" name="" id="" placeholder="NAME"/></div> 
            <div class="list2"><input type="text" name="" id="" placeholder="COUNTRY"></div>
            <div class="list3"><input @click="goPage()" type="button" value=""/></div>   
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return{
          
        }
    },
    computed: {
        
    },
    mounted(){
       
    },
    
    methods:{
       goPage:function(){
           this.$router.push('/thumbsUp');
       }
    }
}
</script>
<style scoped>
    @import url('../assets/css/animate.css');
    .content{
        height: 100%;
        width: 100%;
        background: #ffcc00;
    }
    .content-box{
        width: 100%;
        height:100%;
        background: url('../assets/img/page0/login-bg.png') center no-repeat;
        background-size: 100% 100%;
    }
    .list1 input{
        width: 26rem;
        height: 5rem;
        background:transparent;
        position: absolute;
        right: 15.5rem;
        top: 39%;
        box-sizing: border-box;
        border-radius: 50px;
        list-style: none;
        font-size: 30px;
        text-align: center;
        font-family: Verdana, Verdana-Bold;
        outline-color:#e62e8b;
        border: none;
        padding-top: 8px;
    }
    .list2 input{
        width: 26rem;
        height: 5rem;
        background:transparent;
        position: absolute;
        right: 15.5rem;
        top: 50%;
        box-sizing: border-box;
        border-radius: 50px;
        list-style: none;
        font-size: 30px;
        text-align: center;
        font-family: Verdana, Verdana-Bold;
        outline-color:#e62e8b;
        border: none;
       
    }
    .list3 input{
        width: 26rem;
        height: 5rem;
        background:transparent;
        position: absolute;
        right: 15.5rem;
        top:64%;
        box-sizing: border-box;
        border-radius: 50px;
        list-style: none;
        font-size: 30px;
        text-align: center;
        font-family: Verdana, Verdana-Bold;
        outline-color:#e62e8b;
        border: none;
    }
    input::-webkit-input-placeholder {
        color: #481c87;
    }
    input::-moz-input-placeholder {
        color: #481c87;
    }
    input::-ms-input-placeholder {
        color: #481c87;
    }
</style>