import AddMovie from "./AddMovie.js"
import MovieList from './MovieList.js'
/* import MovieCard from './MovieCard.js' */

export default{
    name: "app",
    components: {
        AddMovie,
        MovieList
    },
    template: `
        <div id="appWrapper">
            <add-movie @addmovie="addMovie" />
            <br>
            
            <movie-list :movies="this.movies" />
            
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