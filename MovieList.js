import MovieCard from './MovieCard.js'

export default {
    components: {
        MovieCard
    },
    props: { 
        movies: Array,
    },
    template: `
        <div class="movieList">
            <div >
                <movie-card :movie="movie" v-for="movie in movies" v-bind:key="movie.index" @removemovie="removeMovie"/>
            </div>
        </div>
    `,
    methods: {
        removeMovie(movie){
            let index = this.movies.indexOf(movie)
            console.log(index);
            this.movies.splice(index, 1)
        }
    },
}