<script>
import axios from "axios";

export default {
    name: "MoviePreview",
    props: ['id'],
    data() {
        return {
            movie: {}
        }
    },
    methods: {
        getMovie(){
            axios.get('http://localhost:3000/id').then(response=>{
                    const movie = response.data
                    if(movie.poster!=null || movie.poster!==""){
                        movie.poster = movie.poster.replace("http://ia.media-imdb.com/","https://m.media-amazon.com/");
                    }else{
                        movie.poster = "https://www.stillisolutions.com/wp-content/uploads/2017/09/no-image-box-300x155.png";
                    }
                    this.movie = movie;
                }
            ).catch(err=>{
                console.log(err)
            })
        }
    },
    mounted() {
        this.getMovie();
    },
}
</script>

<template>
    <div v-if="movie" class="filmCard">
        <div class="filmCardImg"><img alt=""></div>
        <div class="filmCardTxt">
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.plot }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>