<template>
    <div class="content">
        <div class="list-box">
            <div class="clickIN"><img src="@/assets/img/page1/clickbtn.png" alt="" srcset=""></div>
            <div class="clickbg" @click="login()"></div>
        </div>
    </div>
</template>
<script>
// 引入插件
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import * as swiperAni from '@/assets/js/swiper.animate1.0.3.min.js';
// require('../util/transform.js');
export default {
    name:'index',
    data(){
        return{
            isactive:'3',
            // swiperOption: {
            //     // some swiper options/callbacks
            //     // 所有的参数同 swiper 官方 api 参数
            //     // ...
            //     direction: 'vertical', // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
            //     loop: false, // 是否开启循环
            //     setWrapperSize :false, // 开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
            //     autoHeight: true,
            //     pagination: {
            //         el: '.swiper-pagination',
            //     },
            //     height: window.innerHeight,
            //     width: window.innerWidth,
            //     on:{
            //     init: function(){
            //         swiperAni.swiperAnimateCache(this); //隐藏动画元素
            //         swiperAni.swiperAnimate(this); //初始化完成开始动画
            //     },
            //     slideChangeTransitionEnd: function(){
            //         swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //         //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            //     }
            //     }
            // }
        }
    },
    // components: {
    //     swiper,
    //     swiperSlide
    // },
    computed: {
        // swiper() {
        //     return this.$refs.mySwiper.swiper
        // }
    },
    mounted(){
        // console.log("this is current swiper instance object", this.swiper);
    },
    
    methods:{
       login:function(){
           this.$router.push('/login')
       }
    }
}
</script>
<style scoped>
    /* @import url('../assets/css/animate.css'); */
    .content{
        height: 100%;
        width: 100%;
        background: #ffcc00;
    }
    .list-box{
        width: 100%;
        height:100%;
        background: url('../assets/img/page0/bg.png') center no-repeat;
        background-size: 100% 100%;
    }
    .clickIN{
        position: absolute;
        top: 48%;
        right: 18rem;
        animation-name: fingerHandle;
        animation-duration: 20s;
        animation: fingerHandle 1s ease infinite both
    }
    
    @keyframes fingerHandle {
        0% {
            transform: none;
        }
        70% {
            transform: scale3d(.8, .8, .8);
        }
        100% {
            transform: none;
        }
    }

    .clickbg{
        width: 32rem;
        height: 10rem;
        position: absolute;
        right: 13rem;
        top: 20.4rem;
        background: transparent;
        cursor: pointer;
    }
</style>