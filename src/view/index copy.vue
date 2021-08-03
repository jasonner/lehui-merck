<template>
    <div class="content">
        <swiper :options="swiperOption" ref="mySwiper" id="fullpage">
            <swiper-slide>
                <div class="header-box">
                    <div class="header-list">
                        <h1>
                            <img src="@/assets/img/page1/logo.png" alt="" srcset="">
                        </h1>
                        <div class="menu-list">
                        <p>
                         <router-link  :to="{path:'/index',query: {name: 1}}">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</router-link></p>
                        <p><router-link :to="{path:'/index',query: {name: 1}}">注册/登陆</router-link></p>
                        <p><router-link :to="{path:'/index',query: {name: 1}}">患教手册</router-link></p>
                        <p><router-link :to="{path:'/index',query: {name: 1}}">案例分享</router-link></p>
                        <p><router-link :to="{path:'/index',query: {name: 1}}">订单查询</router-link></p>
                        <p><router-link :to="{path:'/index',query: {name: 1}}">个人中心</router-link></p> 
                        </div>
                    </div>
                    <div class="header-swiper">
                        <el-carousel  height="86rem"  class="container">
                            <el-carousel-item>
                                <img src="@/assets/img/page1/slider0.png" alt="" srcset="">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img src="@/assets/img/page1/slider1.png" alt="" srcset="">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img src="@/assets/img/page1/slider2.png" alt="" srcset="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <!-- 检查 -->
                <div class="inspect-box">
                    <div class="inspect">
                        <h6 class="ani" swiper-animate-delay="0.5s" swiper-animate-effect="flipInX"  swiper-animate-duration="0.5s">发现肺结节，犹豫是否再做进一步检查？</h6>
                        <div class="title ani" swiper-animate-effect="swing" swiper-animate-duration="0.5s" swiper-animate-delay="3s">进入自测了解结节的风险</div>
                        <div class="list">
                            <p class="p1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s">肺结节尺寸是否<br/>在5-30mm之间</p>
                            <p class="p2 ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1s" swiper-animate-delay="0.3s" >是否吸烟或者<br/>被动吸二手烟？</p>
                            <p class="p3 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s">是否有肿瘤家史？</p>
                        <div class="ziceImg-box">
                            <transition name="el-fade-in-linear">
                                <img src="@/assets/img/page1/ziceBg.png" class="transition-box" alt="" srcset="">
                            </transition>   
                            </div> 
                            <span class="spot"></span>
                        </div>
                        <div class="tip">温馨提示&nbsp;:&nbsp; &nbsp;如果您符合以上条件之一或者以上，请马上进入自测</div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="expert-recommendation-box">
                    <div class="expert-recommendation">
                        <h4><span></span>专家推荐<span></span></h4>
                        <el-carousel @change="swiperChange"  :interval="4000" type="card" indicator-position="none"  height="80rem" :autoplay="true">
                            <el-carousel-item v-for="item in swiperArr" :key="item.index">
                                <div class="content-box">
                                    <div class="list listImg1">
                                        <img :src="item.url" alt="" srcset="">
                                    </div>
                                </div>
                            </el-carousel-item>
                            <div v-for="item in textContent" :key="item.name">
                                <div class="text-content" v-if="item.key == selectIndex">
                                    <h6>{{item.name}}</h6>
                                    <p>
                                    {{item.p1}}
                                    </p>
                                    <p>
                                        {{item.p2}}
                                    </p>
                                    <p>
                                        {{item.p3}}
                                    </p>
                                </div>
                            </div>
                            
                        </el-carousel>
                        <div class="bg-left"></div>
                        <div class="bg-right"></div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <!-- CAC检测 -->
                <div class="cac-testing-box">
                    <div class="cac-testing">
                        <h4><span></span>CAC检测国际顶尖肺癌早诊技术<span></span></h4>
                        <div class="content">
                            <img class="bg1" src="@/assets/img/page1/bg1.png" alt="" srcset="">  
                            <div class="pos1 postList ani" swiper-animate-effect="zoomInUp" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                                <h3>严谨科学</h3>
                                <p>国际顶尖团队研发，中外</p>
                                <p>数据循证支持</p>
                                <button>点击了解</button>
                            </div>
                            <div class="pos2 postList ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                                <h3>创新技术</h3>
                                <p>CAC检测全球首个"5-10mm"</p>
                                <p>肺部结节在诊技术</p>
                                <button>点击了解</button>
                            </div>
                            <div class="pos3 postList ani" swiper-animate-effect="zoomInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                                <h3>舒适体验</h3>
                                <p>使用10ml外围血检测,上</p>
                                <p>门采血,无创便捷，</p>
                                <button>点击了解</button>
                            </div>
                            <div class="pos4 postList ani" swiper-animate-effect="zoomInUp" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
                                <h3>使用经验</h3>
                                <p>来自患者的亲身经历，</p>
                                <p>见证科技改变生命的故事</p>
                                <button>点击了解</button>
                            </div>
                            <button class="btn btn1"><img src="@/assets/img/page1/clickBtn.png" alt="" srcset=""></button>
                            <button class="btn btn2"><img src="@/assets/img/page1/clickBtn.png" alt="" srcset=""></button>
                            <button class="btn btn3"><img src="@/assets/img/page1/clickBtn.png" alt="" srcset=""></button>
                            <button class="btn btn4"><img src="@/assets/img/page1/clickBtn.png" alt="" srcset=""></button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <!-- 加入订阅 -->
                <div class="join-subscription-box">
                    <div class="join-subscription">
                        <img src="@/assets/img/page1/footr.png" alt="" srcset="">
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
// 引入插件
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import * as swiperAni from '@/assets/js/swiper.animate1.0.3.min.js';
require('../util/transform.js');
export default {
    name:'index',
    data(){
        return{
            swiperArr:[ 
                {url: require("@/assets/img/page1/user1.png"),index:0},
                {url: require("@/assets/img/page1/user2.png"),index:1},
                {url: require("@/assets/img/page1/user3.png"),index:2},
            ],
            selectIndex:0,
            textContent:[
                {
                    key:'0',
                    name:'白春学教授',
                    p1:'“我牵头进行的中国多项临床研究显示：针对5~10mm肺小结节，CAC良恶性判断准确率近80%，I期肺癌灵敏度达76.2%。仅需10ml外周血，3~7天即可出具检测结果，很适合肺癌早期诊断。”',
                    p2:'中国肺癌防治联盟主席，中山呼吸病防治联盟主席，上海控烟协会会长',
                    p3:'复旦大学附属中山医院教授，上海市呼吸病研究所所长，复旦大学呼吸病研究所所长'
                },
                {
                    key:'1',
                    name:'王悦虹教授',
                    p1:'“CAC&CT AI 总体诊断效能针对10mm以下结节，准确度可以达81.76%，可以为临床提供更好鉴别肺结节良恶性的手段”',
                    p2:'浙江大学医学院附属第一医院呼吸与危重症医学科副主任；美国MD Anderson 癌症中心访问学者；中华医学会呼吸病学分会胸膜疾病学组委员；中国医师协会呼吸医师分会肺癌工作组委员；中国肺癌防治联盟肺癌免疫治疗委员会副主委',
                    p3:''
                },
                 {
                    key:'2',
                    name:'刘红教授',
                    p1:'“肺结节患者规范诊治极具挑战性，需要影像、活检等多维度综合评估首诊患者肺结节的恶性概率；传统诊疗手段+新技术辅助肺结节良恶性准确鉴别(如CAC检测、CT AI等),为临床提供有效的决策参考,有其积极且深远的应用价值。”',
                    p2:'郑州大学第一附属医院呼吸与危重症医学二科副主任；医学博士，主任医师，教授，硕士生',
                    p3:'导师，省级知名专家'
                },

            ],
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                direction: 'vertical', // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
                loop: false, // 是否开启循环
                setWrapperSize :false, // 开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                autoHeight: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                height: window.innerHeight,
                width: window.innerWidth,
                on:{
                init: function(){
                    swiperAni.swiperAnimateCache(this); //隐藏动画元素
                    swiperAni.swiperAnimate(this); //初始化完成开始动画
                },
                slideChangeTransitionEnd: function(){
                    swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                }
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted(){
        console.log("this is current swiper instance object", this.swiper);
    },
    
    methods:{
        //获取专家下标
        swiperChange(item){
           console.log(item);
            this.selectIndex = item;
        },
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        },
    }
}
</script>
<style>
    @import url('../assets/css/animate.css');
    .content{
        height: 100%;
    }
    .swiper-container{
        width: 100%;
        height:100%;
    }
    .header-box{
        width: 1705px;
        margin:0 auto;
        display: flex;
    }
    .header-box .header-list{
        width: 398px;
        text-align: right;
        margin-right: 120px;
    }
    .header-box .header-list h1{
        margin-top: 100px;
    }
    .header-box .header-list h1 img{
        width: 175px;
        height: 76px;
    }
    .header-box .menu-list{
        margin-top: 165px;
    }
    .header-box .menu-list p{
        width: 148px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        border-top: 1px solid #919191;
        margin: 0;
        padding: 0;
        margin-left: 210px;
        font-size: 25px;
    }
    .header-box .menu-list p:nth-last-of-type(1){
        border-bottom: 1px solid #919191;
    }
    .header-box .header-swiper{
        width: 1200px;
    }
    .header-box .header-swiper img{
        width: 100%;
        margin-left: 60px;
    }
    .header-box .header-swiper .el-carousel__indicators--horizontal{
        bottom: 8rem;
        left: 48%;
    }
    .header-box .header-swiper .el-carousel__indicators--horizontal li{
        width: 18px;
        height: 18px;
        background: #dfdfdf;
        border-radius: 100%;
        margin: 0 35px;
        padding: 0;
    }
    .header-box .header-swiper .el-carousel__indicators--horizontal .is-active{
        background: #43b9f6;
        width: 18px;
        height: 18px;
    }
    .header-box .header-swiper .el-carousel__indicators--horizontal .el-carousel__button{
        height: 0;
    }


    /* 检查 */
    .inspect-box {
        width: 100%;
        margin: 0 auto;
        height: auto;
        margin-top: 260px;
    }
    .inspect-box .inspect{
        width: 1395px;
        height: auto;
        margin: 0 auto;
    }
    .inspect-box .inspect h6{
        font-size: 60px;
        font-weight: 400;
        color: #008086;
    }
    .inspect-box .inspect .title{
        font-size: 42px;
        margin-top: 32px;
        color: #282828;
    }
     .inspect-box .inspect .list{
        position: relative;
    }

    .inspect-box .inspect .ziceImg-box{
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
    }
    .inspect-box .inspect .ziceImg-box img{
        width: 100%;
        height: auto;
    }
    .inspect-box .inspect .list p{
        flex: 1;
        font-size: 30px;
        line-height: 50px;
        position: absolute;
        text-align: left;
        cursor: pointer;
    }
    .inspect-box .inspect .list .p1{
       left: 132px;
       top: 175px;
       /* animation-name: example;
       animation-duration: 30s;
       animation-iteration-count: infinite; */
    }
    .inspect-box .inspect .list .p2{
       left: 610px;
       top: 175px;
        /* animation-name: example;
       animation-duration: 20s;
       animation-iteration-count: infinite; */
    }
    .inspect-box .inspect .list .p3{
       left: 1058px;
       top: 200px;
       /* animation-name: example;
       animation-duration: 10s;
       animation-iteration-count: infinite; */
    }
    .inspect-box .inspect .list .spot{
        width: 30px;
        height: 30px;
        background:#fff;
        border-radius: 100%;
        position: absolute;
        left: 1365px;
        top: 280px;
        display: block;
        animation-name: sport;
        animation-duration: 10s;
        animation-iteration-count: infinite;
    }
    @keyframes example {
        0%   {opacity: 0;}
        25%  {opacity: 0.3;}
        50%  {opacity: 0.5;}
        100% {opacity: 1;}
    }

    @keyframes sport {
        0% {left: 10px;top: 275px;}
        3% {left: 15px;top: 316px;}
        6% {left: 35px;top: 360px;}
        9% {left: 70px;top: 400px;}
        12% {left: 110px;top: 420px;}
        15% {left: 150px;top: 450px;}
        18% {left: 195px;top: 455px;}
        21% {left: 245px;top: 455px;}
        24% {left: 295px;top: 445px;}
        27% {left: 345px;top: 425px;}
        30% {left: 385px;top: 400px;}
        33% {left: 415px;top: 365px;}
        36% {left: 445px;top: 325px;}
        39% {left: 475px;top: 135px;}
        42% {left: 495px;top: 90px;}
        45% {left: 535px;top: 60px;}
        47% {left: 575px;top: 30px;}
        50% {left: 615px;top: 10px;}
        53% {left: 660px;top: 0px;}
        56% {left: 710px;top: 0px;}
        59% {left: 760px;top: 10px;}
        62% {left: 800px;top: 30px;}
        65% {left: 835px;top: 50px;}
        68% {left: 865px;top: 80px;}
        71% {left: 900px;top: 125px;}
        74% {left: 930px;top: 325px;}
        77% {left: 955px;top: 365px;}
        80% {left: 1025px;top: 425px;}
        83% {left: 1070px;top: 445px;}
        86% {left: 1110px;top: 455px;}
        89% {left: 1210px;top: 445px;}
        92% {left: 1260px;top: 425px;}
        94% {left: 1300px;top: 400px;}
        96% {left: 1330px;top: 350px;}
        98% {left: 1350px;top: 325px;}
        100% {left: 1365px;top: 280px;}
    }
    .inspect-box .inspect .tip{
        width: 50%;
        height: 58px;
        background: #317fcc;
        color: #fff;
        font-size: 24px;
        margin: 0 auto;
        line-height: 58px;
        margin-top: 67px;
        border-radius: 60px;
        padding:  0 40px;
    }

    /*专家推荐 */
    .expert-recommendation-box{
        width: 100%;
        height: auto;
        margin-top: 86px;
    }
        
    .expert-recommendation-box .expert-recommendation{
        width: 1890px;
        height: auto;
        margin:  0 auto;
    }
    .expert-recommendation h4{
        font-size: 50px;
        color: #008086;
        width: 100%;
        text-align: center;
        margin-bottom: 42px;
        font-weight: 400;
    }
    .expert-recommendation h4 span{
        width: 534px;
        height: 2px;
        background: #008086;
        display: inline-block;
        margin-bottom:15px;
    }
    .expert-recommendation h4 span:nth-of-type(1){
        margin-right: 34px;
    }
    .expert-recommendation h4 span:nth-of-type(2){
        margin-left: 34px;
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item:nth-child(2n) {
        background-color: #fff;
        
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item:nth-child(2n+1) {
        background-color: #fff;
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item--card.is-active .list{
        background: #fefbd2;
        border-radius: 100%;
        margin:  0 auto;
        width: 560px;
        text-align: center;
        line-height: 592px;
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item--card.is-active{
        width: 560px;
        height: 560px;
        border-radius: 100%;
        transform: translateX(47.5rem) scale(1) !important;
    }
     .expert-recommendation-box .expert-recommendation .el-carousel__item--card.is-active img{
        width: 436px;
        height: 532px;
    }
    .expert-recommendation-box .expert-recommendation  .list img{
        width: 345px;
        height: 414px;
        vertical-align: middle;
        z-index: 10000;
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item--card.is-active .listImg1 img{
        margin-bottom: 0px;
        margin-right: 35px;
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item--card.is-active .listImg2 img{
        margin-bottom: 12px;
        margin-right: 12px;
    }
    .expert-recommendation-box .expert-recommendation .el-carousel__item--card.is-active .listImg3 img{
        margin-bottom: -10px;
        margin-right: 5px;
    }

    .expert-recommendation-box{
        position: relative;
    }
    .expert-recommendation-box .text-content{
        height: 422px;
        width: 100%;
        margin-top: 698px;
        position: absolute;
        bottom:120px;
        left: 0;
        z-index: 1000;
        background-image: linear-gradient(#fff, #fdf6d3);
        padding: 0 90px;
        box-sizing: border-box;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .expert-recommendation .bg-left{
        width: 550px;
        height: 510px;
        background: url('../assets/img/page1/swiperLeft.png');
        background-size: 100% 100%;
        /* background-position: 12px -140px; */
        position: absolute;
        left:520px;
        top: 145px;
        z-index: 10;
    }
    .expert-recommendation .bg-right{
        width: 550px;
        height: 510px;
        background: url('../assets/img/page1/swiperRight.png') ;
        background-size: 100% 100%;
        /* background-position: -1315px -140px; */
        position: absolute;
        right:520px;
        top: 145px;
        z-index: 10;
    }
    .expert-recommendation-box  .el-carousel{
        overflow: hidden;
    }
    .expert-recommendation-box  .text-content h6{
        font-size: 40px;
        color: #000;
        margin-top: 45px;
        font-weight: 400;
    }
    .expert-recommendation-box .text-content p{
        text-align: left;
        font-size: 24px;
        color: 333;
        line-height: 38px;
    }

    .expert-recommendation-box  .el-carousel__arrow--left{
        display: block !important;
        width: 500px;
        height: 500px;
        background:transparent !important;
        top: 295px;
        left: 130px;
        z-index: 1000;
        content: none;
    }
    .expert-recommendation-box  .el-carousel__arrow--left i{
        display: none;
    }

    .expert-recommendation-box  .el-carousel__arrow--right{
        display: block !important;
        width: 500px;
        height: 500px;
        background:transparent !important;
        top: 295px;
        right: 125px;
        z-index: 1000;
        content: none;
    }
    .expert-recommendation-box  .el-carousel__arrow--right i{
        display: none;
    }

    /* CAC检测 */
    .cac-testing-box{
        width: 100%;
        height: auto;
    }
    .cac-testing-box .cac-testing{
        width: 1890px;
        height: auto;
        margin: 0 auto;
        text-align: center;
    }
    .cac-testing-box .cac-testing h4{
        font-size: 50px;
        color: #008086;
        width: 100%;
        text-align: center;
        margin-bottom: 42px;
        font-weight: 400;
    }
    .cac-testing-box .cac-testing h4 span{
        width: 188px;
        height: 2px;
        background: #008086;
        display: inline-block;
        margin-bottom:15px;
    }
    .cac-testing-box .cac-testing h4 span:nth-of-type(1){
        margin-right: 20px;
    }
    .cac-testing-box .cac-testing h4 span:nth-of-type(2){
       margin-left: 20px;
    }
     .cac-testing-box .cac-testing img{
        width: 850px;
        margin: 0 auto;
     }
    .cac-testing-box .cac-testing  .bg1:hover{
         width: 850px;
        transform: scale(1); 
        -webkit-animation:mymove 20s infinite; /*Safari and Chrome*/
        /* animation-direction:alternate;轮流反向播放动画。 */
        animation-timing-function: ease-in-out; /*动画的速度曲线*/
        /* Safari 和 Chrome */
        -webkit-animation:mymove 20s infinite;
        /* -webkit-animation-direction:alternate;轮流反向播放动画。 */
        -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
    }
    @keyframes mymove
    {
        0%{
        transform: scale(1);  /*开始为原始大小*/
        }
        25%{
            transform: scale(0.9); /*放大1.1倍*/
        }
        50%{
            transform: scale(1);
        }
        75%{
            transform: scale(1);
        }
        100%{
             transform: scale(1);
        }
    }

    .cac-testing-box .cac-testing .content{
        position: relative;
        width: 1890px;
        height: auto;
        margin: 0 auto;

    }
    .cac-testing-box .cac-testing .content .postList{
        position: absolute;
    }
    .cac-testing-box .cac-testing .content .pos1{
        top: 150px;
        left: 392px;
        text-align: right;
    }
    .cac-testing-box .cac-testing .content .pos2{
        top: 120px;
        left: 1300px;
        text-align: left;
    }
    .cac-testing-box .cac-testing .content .pos3{
        top: 800px;
        left: 300px;
        text-align: right;
        
    }
    .cac-testing-box .cac-testing .content .pos4{
        top: 900px;
        left: 1100px;
        text-align:left;
        
    }
    .cac-testing-box .cac-testing .content .postList h3{
        font-size: 32px;
        margin-bottom: 24px;
    }
    .cac-testing-box .cac-testing .content .postList p{
        font-size: 24px;
        line-height: 30px;
        margin: 0;
        margin-top: 8px;
    }
    .cac-testing-box .cac-testing .content .postList button{
        padding: 5px 30px;
        background: #abc0d3;
        color: #fff;
        border: none;
        border-radius: 20px;
        font-size: 16px;
        margin-top: 30px;
        -webkit-animation:mymove 3s infinite; /*Safari and Chrome*/
        animation-direction:alternate;/*轮流反向播放动画。*/
        animation-timing-function: ease-in-out; /*动画的速度曲线*/
        /* Safari 和 Chrome */
        -webkit-animation:mymove 3s infinite;
        -webkit-animation-direction:alternate;/*轮流反向播放动画。*/
        -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
    }
    .cac-testing-box .cac-testing .content .btn{
        width: 150px;
        height: 150px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: transparent;
        border: none;
        border-radius: 100%;
    }
     .cac-testing-box .cac-testing .content .btn1{
         top: 120px;
         left: 960px;
     }
     .cac-testing-box .cac-testing .content .btn2{
         top: 480px;
         left: 618px;
     }
     .cac-testing-box .cac-testing .content .btn3{
         top: 598px;
         left: 1085px;
     }
     .cac-testing-box .cac-testing .content .btn4{
         top: 940px;
         left: 720px;
     }

    .cac-testing-box .cac-testing .content .btn img{
        width: 150px;
        height: 150px;
        z-index: 10000;
    }
  
    /* 加入订阅 */
    .join-subscription-box{
        width: 100%;
        margin-top: 250px;
    }

    .join-subscription-box img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }
</style>