import AddMovie from "./AddMovie.js"
import MovieList from './MovieList.js'
/* import MovieCard from './MovieCard.js' */

export default {
    name: "app",
    components: {
        AddMovie,
        MovieList
    },
    template: `
        <div id="appWrapperVert">
            <div id="appWrapperHor">
                <add-movie @addmovie="addMovie" />
                <br>

                <movie-list :movies="movies" @remove-movie="storeMovies" />
                
            </div>
        </div>
    `,
    data() {
        return {
            movies: [],
            /* sortBy: 'Title' */   
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
    /* computed: {
        sortedMovies() {
            switch (this.sortBy) {
                case 'Title':
                    this.movies.sort(function (a, b) {
                        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
                        if (titleA < titleB)
                            return -1
                        if (titleA > titleB)
                            return 1
                        return 0
                    })
                    break;
                case 'Genre':
                    this.movies.sort(function (a, b) {
                        var genreA = a.genre.toLowerCase(), genreB = b.genre.toLowerCase()
                        if (genreA < genreB)
                            return -1
                        if (genreA > genreB)
                            return 1
                        return 0
                    })
                    break;
                case 'Rating':
                    this.movies.sort(function (a, b) {
                        return b.rating - a.rating
                    })
                    break;
            }
            return this.movies
        }
    }, */
    created() {
        this.movies = JSON.parse(localStorage.getItem('movies'))
    },
}