<template>
    <div class="container">
        <div v-for ="(i, index) in result" class="block" :style="{width:width}">
            <img class="cover" :src="src[index]" alt="">
            <div class="info">{{title[index].slice(0,5)+"..."}}</div>
        </div>
    </div>
</template>    

<script>
    export default{
        props:["infos","floorNumber"],
        handleClick(id){
            
        },
        data(){
            return {
                timer:null,
                src:[],
                title:[],
                url:null,
                result:null,
                width:0,
                
                
            }
        },
        created (){
            //异步加载infos  等下更改
            this.timer=setInterval(()=>{
                if (this.infos!=null) {
                    clearInterval(this.timer)
                   
                   if (this.floorNumber==0) {
                        
                       this.result=this.infos.body.result
                       for(let i of this.result){
                        this.src.push(i.song.album.blurPicUrl)
                        this.title.push(i.name)
                       }
                   } else if(this.floorNumber==1){
                       this.result=this.infos.body.result
                       for (let i of this.result) {
                           this.src.push(i.picUrl)
                           this.title.push(i.name)
                       }
                   }  else if (this.floorNumber == 2) {
                        this.result = this.infos.body.result
                        console.log(this.result)
                        for (let i of this.result) {
                            this.src.push(i.picUrl)
                            this.title.push(i.artistName)
                        }
                    } else if (this.floorNumber == 3) {
                        this.result = this.infos.body.programs
                        for (let i of this.result) {
                            this.src.push(i.coverUrl)
                            this.title.push(i.name)
                        }
                    }  else if (this.floorNumber == 4) {
                        this.result = this.infos.body.programs
                        for (let i of this.result) {
                            this.src.push(i.picUrl)
                            this.title.push(i.name)
                        }
                    }
                 
                    if(this.floorNumber==4){
                        this.width=1/(this.result.length)
                    }else{

                        this.width=2/(this.result.length);
                    }
                        this.width=this.width.toFixed(2)*100+"%"
                    
                }
            },200)
               
             
        }
    }
</script>
<style>
 
    .cover{
        width: 100%;
    }
    /* .block{
        width: 33%;
    } */
</style>