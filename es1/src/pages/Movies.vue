<template>
    <div class="row">
        <div class="col">
            <div class="card" v-for="movie in movies" :key="movie._id">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img v-if="movie.poster" v-bind:src=movie.poster class="card-img" alt="" @error="replaceByDefault">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ movie.title }}</h5>
                            <p v-if="movie.hasOwnProperty('imdb') && movie.imdb.rating != null" class="card-text">{{movie.imdb.rating}}/10</p>
                            <p class="card-text">{{ movie.plot }}</p>
                            <!--<p class="card-text">Release date: {{ movie.released ? movie.released.substring(0,10) : 'N/A' }}</p>-->
                            <p class="card-text">Release date: {{ movie.released ? movie.released.substring(0,10) : 'N/A' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {defineComponent} from "vue";
export default defineComponent({
    name: "Movies",
    data() {
        return {
            movies: []
        }
    },
    methods: {
        list_movies(){
            axios.get("http://localhost:3000/movies")
                .then(response => {
                    console.log(response.data)
                    const movies = response.data;

                    movies.forEach((movie)=>{
                        if(movie.poster!=null){
                            movie.poster = movie.poster.replace("http://ia.media-imdb.com/","https://m.media-amazon.com/")
                        }
                        else{
                            movie.poster = "https://www.stillisolutions.com/wp-content/uploads/2017/09/no-image-box-300x155.png";
                        }
                    })
                    this.movies = movies;
                })
                .catch(error => {
                    //console.log(error);
                })

        },
        replaceByDefault(event) {
            event.target.src = "https://www.stillisolutions.com/wp-content/uploads/2017/09/no-image-box-300x155.png"
        },
        init(){
            this.list_movies();
        }
    },
    mounted(){
        this.init()
    }
})
</script>

<style scoped>

</style>