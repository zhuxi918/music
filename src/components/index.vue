<template>
    <div>
        <div class="header">
            <h1>主题</h1>
        </div>
        <div class="subhead">
            <div class="title">音乐</div>
            <div class="title">视频</div>
            <div class="title">电台</div>
        </div>
        <div class="main">
            <div class="bannerContainer">
            <div class="banner" :style="{width:bannerWidth}">
               
                    <img :style="{width:imgWidth}" :src="i.pic" v-for=" i in imgSrc" alt="">
                
            </div>
        </div>
            <div class="menu">

            </div>
            <Floor v-for="(i,index) in floorCounter" :floorNumber="index"></Floor>
        </div>
        <Footer></Footer>
    </div>
</template>            
<script>
    export default{
        data(){
            return {
                imgSrc:[],
                floorCounter:[0,1,2,3,4],
                bannerWidth:1,
                imgWidth:1
            }
        },
        created:function(){ 
            this.$http.get("http://localhost:3000/banner").then((result)=>{
                this.imgSrc=result.body.banners;
                this.bannerWidth=this.imgSrc.length*100+"%"
                this.imgWidth=((1/this.imgSrc.length).toFixed(3)-0.001)*100+"%"
         
                console.log(this.imgWidth)
            })
        }
    }
           
            
        
    
</script>
<style>
    .header{
        background:#c20c0c;
        text-align: center;
        font-size:1vw;
    }
    .subhead{
        display: flex;
    }
    .title{
        width: 33.3%;
        text-align: center;
        
    }
    .banner{
       width: 100%
         
    }
    .banner img{
       display: block;
       width: 100%;
      float: left;
    }
    .bannerContainer{
        overflow: hidden
    }
 
</style>