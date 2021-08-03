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

            <!-- 点赞列表 -->
            <div class="thumbs-up-list">
                <div class="lsit-box" @click="getDetail()">
                    <div class="list-img"><img src="@/assets/img/page1/list1.png" alt="" srcset=""></div>
                    <div class="list-text">从核酸纯化到核酸扩增PCR/qPCR， 一站式 解决方案... </div>
                    <div class="list-num"><img src="@/assets/img/page1/dianzanY.png" alt="" srcset="">2588</div>
                </div>
                <div class="lsit-box" @click="getDetail()">
                    <div class="list-img"><img src="@/assets/img/page1/list2.png" alt="" srcset=""></div>
                    <div class="list-text">从核酸纯化到核酸扩增PCR/qPCR， 一站式 解决方案... </div>
                    <div class="list-num"><img src="@/assets/img/page1/dianzanY.png" alt="" srcset="">2588</div>
                </div>
                <div class="lsit-box" @click="getDetail()">
                    <div class="list-img"><img src="@/assets/img/page1/list3.png" alt="" srcset=""></div>
                    <div class="list-text">从核酸纯化到核酸扩增PCR/qPCR， 一站式 解决方案... </div>
                    <div class="list-num"><img src="@/assets/img/page1/dianzanY.png" alt="" srcset="">2588</div>
                </div>
                <div class="lsit-box" @click="getDetail()">
                    <div class="list-img"><img src="@/assets/img/page1/list4.png" alt="" srcset=""></div>
                    <div class="list-text">从核酸纯化到核酸扩增PCR/qPCR， 一站式 解决方案... </div>
                    <div class="list-num"><img src="@/assets/img/page1/dianzanY.png" alt="" srcset="">2588</div>
                </div>
                <div class="list-half">
                    <div class="list-img"><img src="@/assets/img/page1/list5.png" alt="" srcset=""></div>
                    <div class="list-img"><img src="@/assets/img/page1/list6.png" alt="" srcset=""></div>
                    <div class="list-img"><img src="@/assets/img/page1/list7.png" alt="" srcset=""></div>
                    <div class="list-img"><img src="@/assets/img/page1/list8.png" alt="" srcset=""></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return{
            isactive:'3',
        }
    },
   
    computed: {
        
    },
    mounted(){
       
    },
    methods:{
        goHome:function(index){
            this.isactive=index;
            console.log(index);
            if(index == '1'){
                this.$router.push('/index');
            }else if(index == '2'){
                this.$router.push('/hall');
            }else if(index == '3'){
                this.$router.push('/hall');
            };
        },
        getDetail:function(){
             this.$router.push('/posterDetail');
        }
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
        background: url('../assets/img/page1/bg.png') center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        overflow: scroll;
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

    /* 点赞列表 */
    .thumbs-up-list{
        width: 100%;
        margin-top: 6%;
       
    }
    .thumbs-up-list .lsit-box {
        width:17.03%;
        float: left;
        margin-right: 6rem;
        cursor: pointer;
    }
    .thumbs-up-list .lsit-box:nth-of-type(1){
        margin-left: 12rem;
    }
    .thumbs-up-list .lsit-box .list-img img{
        width:100%;
        height: 52.7%;
        height: 34rem;
        display: block;
    }
    .thumbs-up-list .lsit-box .list-text{
        font-size: 14px;
        font-family: NotoSansCJKsc, NotoSansCJKsc-Bold;
        font-weight: 700;
        text-align: left;
        color: #481c87;
    }
     .thumbs-up-list .lsit-box  .list-num{
        font-size: 24px;
        color: #e62e8b;
        margin-top: 10px;
        text-align: left;
     }
    .thumbs-up-list .lsit-box  .list-num img{
        width:24px;
        margin-right: 10px;
    }
    .thumbs-up-list .list-half{
        width:100%;
    }
     .thumbs-up-list .list-half .list-img:nth-of-type(1){
        margin-left: 12rem;
     }
    .thumbs-up-list .list-half .list-img{
        float: left;
        width:17.03%;
        margin-right: 6rem;
        margin-top: 2rem;
     }
    .list-half img{
        width:100%;
    }
</style>