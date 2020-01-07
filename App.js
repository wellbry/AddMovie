import AddMovie from "./AddMovie.js"
import MovieList from './MovieList.js'

export default {
    name: "app",
    components: {
        AddMovie,
        MovieList
    },
    template: `
        <div id="appWrapperVert">

            <div id="appWrapperHor">

                <h1>My favourite Movies</h1>
    
                <add-movie @addmovie="addMovie" />
                <br>

                <movie-list :movies="movies" @remove-movie="storeMovies" />
                
            </div>
        </div>
    `,
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        addMovie(movie) {
            this.movies.push(movie)
            localStorage.setItem('movies', JSON.stringify(this.movies));
        },
        storeMovies() {
            localStorage.setItem('movies', JSON.stringify(this.movies));
        }
    },
    created() {
        this.movies = JSON.parse(localStorage.getItem('movies'))
    },
}