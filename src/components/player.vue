<template>
    <div>
    <div class="header">
        <h1>主题</h1>
    </div>
        <div class="record">
           
            <div class="background">
                <img :src="cover" alt="">
            </div>
            <div class="container">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon-test"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="play()">
                    <use :xlink:href="playerCtrl" ref="img" ></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon-test4"></use>
                </svg>
            </div>
        </div>
        <div class="ctrl">
            <audio :src="music" ref="player"></audio>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                id:"33894312",
                music:"",
                cover:"",
                playerCtrl:"#icon-icon-test2",
                songs:[],
                turn:false

            }
        },
        update(){

        },
        created(){
            this.$http.get("http://localhost:3000/music/url?id="+this.id).then((result)=>{
                console.log(result.body.data[0])
                this.music=result.body.data[0].url
            })
              this.$http.get("http://localhost:3000/song/detail?ids=" + this.id).then((result) => {
                console.log(result.body.songs[0].al.picUrl)
                this.cover=result.body.songs[0].al.picUrl
            })
        },
       methods:{
           play(){
               
               if(this.$refs.player.paused){
                 this.$refs.player.play()
                 this.playerCtrl="#icon-icon-test1"


               }
               else{
                this.playerCtrl="#icon-icon-test2"

               this.$refs.player.pause()
                   
               }
           }
       }

    }
</script>
<style>
    .container .icon{
        display: block;
        width: 20%;


    }
    div.background{
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
    }
    .background img{
        width: 80%;
        height: 80%;
        border-radius: 50%;
    }
    .container{
        margin:0 auto;
        display: flex;
        justify-content: space-between;
    }
</style>