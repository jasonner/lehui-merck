<template>
    <div class="content">
        <div class="list-box">
            <img class="agenda-img" src="@/assets/img/page0/agenda.png" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {
    name:'agenda',
    data(){
        return{
           
        }
    },
    computed: {
    },
    mounted(){
    },
    methods:{
        
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
        background: url('../assets/img/page0/agenda-bg.png') center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        position: relative;
        overflow: scroll;
    }

    .agenda-img{
        width: 27.5%;
        /* width: 90%; */
        margin: 0 auto;
        margin-top: 1%;
        margin-bottom: 10%;
        z-index: 1000;
    }

</style>