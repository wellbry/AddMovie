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
                <movie-card :movie="movie" v-for="movie in movies" v-bind:key="movie.title"/>
            </div>
        </div>
    `,
}