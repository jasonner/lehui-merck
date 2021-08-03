<template>
    <div class="content">
        <div class="list-box">
            <div class="header-box">
                <div class="left">
                    <img src="@/assets/img/page1/logo.png" alt="" srcset="">
                </div>
                <div class="right">
                    <div :class="{active:isactive=='1'}" @click="goHome('1')">HOME</div>
                    <div :class="{active:isactive=='2'}" @click="goHome('2')">INTRODUCTION</div>
                    <div :class="{active:isactive=='3'}" @click="goHome('3')">POSTER DISPLAY</div>
                </div>
            </div>
            <!-- 议程 -->
            <div class="agenda">
                <img src="@/assets/img/page0/agenda.png" alt="" srcset="">
            </div>
            <!-- 场地 -->
            <div class="spot">
                <img src="@/assets/img/page0/spot.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return{
            isactive:'2',
        }
    },
    computed: {
    },
    mounted(){
    },
    methods:{
        goHome:function(index){
            this.isactive=index;
            if(index == '1'){
                this.$router.push('/index');
            }else if(index == '2'){
                this.$router.push('/hall');
            }else if(index == '3'){
                this.$router.push('/thumbsUp');
            }
        },
    }
}
</script>
<style scoped>
    .content{
        height: 100%;
        width: 100%;
        background: #ffcc00;
      
       
    }
    .list-box{
        width: 100%;
        height:100%;
        background: url('../assets/img/page0/hall-bg.png') center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        position: relative;
    }
    .header-box{
        width: 100%;
        height: 4.5rem;
        line-height:4.5rem;
        padding-top: 2%;
        box-sizing: border-box;
       
    }

    .header-box .left{
        width: 15%;
        margin-left: 3.706%;
        float: left;
    }
    .header-box .left img{
        width: 100%;
     
    }
    .header-box .right{
        width: 48.8%;
        height: 4.5rem;
        font-size: 59px;
        font-family: Verdana, Verdana-Bold;
        font-weight: 700;
        color: #481c87;
        display: flex;
        text-align: right;
        float: right;
    }
    .header-box .right div{
        opacity: 1;
        font-size: 24px;
        font-family: Verdana, Verdana-Bold;
        font-weight: 700;
        text-align: right;
        color: #481c87;
        margin-right:3.7%;
        z-index: 1000;
        cursor: pointer;
        float: right;
        margin-left: 4rem;
    }
    .header-box .right div:nth-of-type(1){
        margin-left: 8rem;
    }
    .header-box .right .active{
        height: 4.5rem;
        color: #e62e8b;
        background: url('../assets/img/page1/select-bg.png') center no-repeat;
        background-size: 100% 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .agenda{
        position: absolute;
        top:30%;
        left: 5rem;
        width: 44.5%;
        height: 53%;
        border-radius: 20px;
        overflow: scroll;
        padding: 10px 0;
        box-sizing: border-box;
        border: 5px solid #e62e8b;
        cursor: pointer;
    }
    .agenda img{
        width: 97%;
        margin: 0 auto;
        height: auto;
    }
    .spot{
        position: absolute;
        top:30%;
        right: 5rem;
        width: 44.5%;
        height: 53%;
        border-radius: 20px;
        cursor: pointer;
    }
    .spot img{
        width: 100%;
        height: 100%;
    }
</style>