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

            <!-- 视频 -->
            <div :class=" {videoActive:videoActive}" class="video-box" @mousedown="move">
               <video-player class="video-player vjs-custom-skin" 
                    ref="videoPlayer" 
                    :playsinline="true" 
                    :options="playerOptions"
                    id="video-player"
                    >
                </video-player>
                <div class="list-num"><img src="@/assets/img/page1/dianzanY.png" alt="" srcset="">2588</div>
            </div>
            
            <!-- 海报详情 -->
            <div class="poster-details-box">
                <div class="poster-details">
                    <div class="poster-details-left">
                        <h5>POSTER DETAILS</h5>
                        <P>我们的一抗、二抗和重组单克隆抗体受到广泛引用，可满足您的ELISA、蛋白质免疫印迹、免疫组化或其他分析需求。拥有Sigma-Aldrich®抗体、Millipore®抗体、Upstate抗体、Chemicon抗体和Calbiochem抗体等客户熟知并高度信赖的品牌，我们深感自豪。ZooMAb®重组单克隆抗体可提供超高的可重现性，且至少经过三种应用验证：无杂交瘤、无防腐剂、无动物源成分生产。</P>
                        <div class="img-box">
                            <img src="@/assets/img/page3/detailList.png" alt="" srcset="">
                        </div>
                    </div>
                    <div class="poster-details-right">
                        <h5>COMMENTS</h5>
                        <div class="submit-box">
                            <div class="submit-left">
                                <input type="textarea" name="" placeholder="Please enter your comments ..." id="">
                            </div>
                            <div class="submit-right">
                                <input type="button" value="Submit">
                            </div>
                        </div>

                        <!-- 评论区 -->
                        <div class="comment-area">
                            <div class="marquee">
                                <div class="list" v-for="item in 10" :key="item">
                                    <h5><span>李丽</span> 中国 </h5>
                                    <p>有时候点进二喵的视频根本不是为了学技术，完 全是为了听那憨憨的声音</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    name:'index',
    data(){
        return{
            isactive:'3',
            videoActive:false,
            positionX:0,
            positionY:0,
            playerOptions: {
                // playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
                autoplay: true, // 如果为true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: true, // 是否视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                type: "video/mp4", // 类型
                src: 'https://mp4i.vodfile.m1905.com/202108040137/441a39239f2c1c3a2840b791fa5dc456/video/2021/08/02/v20210802IE2Q35W8PO1QLKAW/v20210802IE2Q35W8PO1QLKAW.mp4' // url地址
                }],
                poster: '', // 封面地址
                notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                timeDivider: true, // 当前时间和持续时间的分隔符
                    durationDisplay: true, // 显示持续时间
                    remainingTimeDisplay: true, // 是否显示剩余时间功能
                    fullscreenToggle: true // 是否显示全屏按钮
                }
            }
        }
    },
    components: {
        videoPlayer
    },
    computed: {
    
    },
    mounted(){
        setTimeout(() => {
            this.$refs.videoPlayer.player.play() // 播放
            console.log('播放');
        }, 2000);
        //this.$refs.videoPlayer.player.pause() // 暂停
        //this.$refs.videoPlayer.player.src(src) // 重置进度条复制代码
        window.addEventListener('scroll',this.handleScroll);
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
        handleScroll(){
            this.scroll = document.documentElement.scrollTop||document.body.scrollTop
            if(this.scroll>620){
                this.videoActive = true;
            }else{
                this.videoActive = false;
            }
        },

        move(e){
            if(this.videoActive){
                let odiv = document.getElementById('video-player');//获取目标元素
                console.log(odiv);
                //算出鼠标相对元素的位置
                var disX = e.clientX - odiv.offsetLeft;
                var disY = e.clientY - odiv.offsetTop;
                document.onmousemove = (e)=>{//鼠标按下并移动的事件
                    //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                    if(e.clientX - disX<0){
                        var left = 10;
                    }else if(e.clientX>document.documentElement.clientWidth-odiv.offsetWidth){
                        var left = document.documentElement.clientWidth-odiv.offsetWidth; 
                    }else{
                        var left = e.clientX - disX;
                    }
                    if(e.clientY - disY<0){
                        var top = 10;
                    }else if(e.clientY>document.documentElement.clientHeight-odiv.offsetHeight){
                        var top = document.documentElement.clientHeight-odiv.offsetHeight;
                    }else{
                        var top = e.clientY - disY;
                    }   
                    //绑定元素位置到positionX和positionY上面
                    this.positionX = top;
                    this.positionY = left;
                    
                    //移动当前元素
                    odiv.style.left = left + 'px';
                    odiv.style.top = top + 'px';
                };
                document.onmouseup = (e) => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    this.$refs.videoPlayer.player.play() // 播放
                };
            }
            
        }
    },
    destroyed() {
        window.removeEventListener('scroll',this.handleScroll);
    }
}
</script>
<style>
    .content{
        min-height:100%;
        width: 100%;
        background: #ffcc00;
    }
    .list-box{
        width: 100%;
        min-height:100%;
        background: url('../assets/img/page3/detail-bg.png') center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        position: relative;
        padding-bottom: 8rem;
    }
    .header-box{
        width: 100%;
        height: 7rem;
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

    /* 视频 */
    .video-box{
        width: 100%;
        height:620px;
        margin-top: 4rem;
    }
    .video-box .video-player{
        width: 60%;
        margin: 0 auto;
    }
    .video-box .list-num{
        font-size: 24px;
        color: #e62e8b;
        margin-top: 20px;
        text-align: right;
        width: 80%;
    }
    .video-box  .list-num img{
        width:24px;
        margin-right: 10px;
    }
    .video-box .video-js .vjs-big-play-button{
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        left: 45%;
        top: 40%;
    }
     .videoActive{
         position: relative;
     }
    .videoActive .video-player{
        position: fixed;
        width: 18%;
        left: 1rem;
        top: 14rem;
    }

    /* 海报详情 */
    .poster-details-box{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        margin-top: 5.28rem;
    }
    .poster-details{
        width: 60%;
        height:auto;
        margin:  0 auto;
        display: flex;
    }
    .poster-details .poster-details-left,.poster-details .poster-details-right{
        flex: 1;
        width: 50%;
        text-align: left;
        margin: 0 auto;
    }
    .poster-details .poster-details-left{
        margin-right: 30px;
    }
    .img-box{
        width: 100%;
    }
    .poster-details-left .img-box img{
        width: 100%;
        text-align: left;
        margin: 0 auto;
        display: block;
        margin-right: 1rem;
    }
    .poster-details div h5{
        font-size: 45px;
        font-family: Verdana, Verdana-Bold;
        font-weight: 700;
        text-align:left;
        color: #e62e8b;
    }
    .poster-details .poster-details-left p{
        font-size: 18px;
        font-family: NotoSansCJKsc, NotoSansCJKsc-Bold;
        font-weight: 700;
        text-align: left;
        color: #481c87;
        line-height: 35px;
    }
    .poster-details-right .submit-box{
        display: flex;
        margin-top: 4rem;
    }

    .submit-left{
        width: 90%;
        background: url('../assets/img/page3/comments-bg.png') center no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin-left: -20px;
        padding-left: 3rem;
        box-sizing: border-box;
    }
    .submit-left input{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border: none;
        background: transparent;
        font-size: 24px;
        font-family: Verdana, Verdana-Bold;
        font-weight: 700;
        text-align: left;
        color: #ffcc00;
        line-height: 52px;

    }
    .submit-left input::-webkit-input-placeholder {
         color: #ffcc00;
    }
    .submit-leftinput::-moz-input-placeholder {
         color: #ffcc00;
    }
    .submit-left input::-ms-input-placeholder {
         color: #ffcc00;
    }
    .submit-right{
        width: 30%;
        background: url('../assets/img/page3/submit-bg.png') center no-repeat;
        background-size: 100% 100%;
        margin-left: 20px;
        box-sizing: border-box;
        margin-top: 30px;
        margin-right: -90px;
    }
     .submit-right input{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border: none;
        background: transparent;
        font-size: 24px;
        font-family: Verdana, Verdana-Bold;
        font-weight: 700;
        text-align: center;
        color: #ffcc00;
        line-height: 52px;
     }

    /* 评论区 */
    .comment-area{
        width: 100%;
        height: 80%;
        background: url('../assets/img/page3/text-bg.png') center no-repeat;
        background-size: 100% 100%;
        margin-top: 4rem;
        box-sizing: border-box;
        padding:45px 120px;
        box-sizing: border-box;
    }
    .comment-area .marquee{
        height: 60rem;
        text-align: left;
        overflow: scroll;
    }
    .comment-area .marquee p{
        font-size: 17px;
        font-family: NotoSansCJKsc, NotoSansCJKsc-Regular;
        font-weight: 400;
        text-align: left;
        color: #481c87;
        line-height: 30px;
    }
    .comment-area .marquee .list{
        border-bottom: 2px solid #000;
        margin-top: 20px;
    }
     .comment-area .marquee .list:nth-of-type(1){
         margin-top: 0px;
     }
    .comment-area .marquee .list h5{
        font-size: 18px;
        font-family: NotoSansCJKsc, NotoSansCJKsc-Bold;
        font-weight: 700;
        text-align: left;
        color: #481c87;
    }
    .comment-area .marquee .list h5 span{
         font-size: 20px;
    }
</style>