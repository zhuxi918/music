<template>
    <div>
        <h3>>floor{{title[floorNumber]}}</h3>
        
        <Item :infos="infos" :floorNumber="type"></Item>
    </div>
</template>
<script>
    export default {
        props:["floorNumber"],
        data(){
            return {
                title:["推荐歌曲","最新歌曲","推荐MV"],
                types:[
                     "/personalized/newsong",
                     "/personalized/djprogram",
                     "/personalized/mv",
                     "/program/recommend",
                     "/personalized/privatecontent"
                     

            ],
               infos:null,
               type:this.floorNumber
               
            }
        },
        created(){
            this.getInfo(this.types[this.floorNumber])
            
        },
        methods:{
            getInfo(type){

                this.$http.get("http://localhost:3000"+type).then((result)=>{
                   
                   this.infos=result;
                   
                })
            }
        }
    }
</script>