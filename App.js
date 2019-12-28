import AddMovie from "./AddMovie.js"
import MovieCard from './MovieCard.js'

export default{
    name: "app",
    components: {
        AddMovie,
        MovieCard
    },
    template: `
        <div id="appWrapper">
            <add-movie @addmovie="addMovie" />
            <br>
            
            <div v-for="movie in movies">
                <movie-card :movie="movie"/>
            </div>
            
        </div>
    `,
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        addMovie(movie){
            this.movies.push(movie)
        }
    },
}