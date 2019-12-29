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
        <div id="appWrapper">
            <add-movie @addmovie="addMovie" />
            <br>

            <label for="sortBy">Sort By:</label>
            <select name="sortBy" id="sortBy" v-model="sortBy">
                <option >Title</option>
                <option >Genre</option>
                <option >Rating</option>
            </select>
            
            <movie-list :movies="sortedMovies" />
            
        </div>
    `,
    data() {
        return {
            movies: [],
            sortBy: 'Title'       
        }
    },
    methods: {
        addMovie(movie) {
            this.movies.push(movie)
        }
    },
    computed: {
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
                        return a.rating - b.rating
                    })
                    break;
            }
            return this.movies
        }
    },
}