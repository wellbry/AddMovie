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
        
                <label for="sortBy">Sort By:</label>
                <select name="sortBy" id="sortBy" v-model="sortBy">
                    <option >Title</option>
                    <option >Genre</option>
                    <option >Rating</option>
                </select>

                <movie-card :movie="movie"
                v-for="movie in sortedMovies"
                v-bind:key="movie.index"
                @remove-movie="removeMovie"/>         
        </div>
    `,
    data() {
        return {
            sortBy: 'Title'
        }
    },
    methods: {
        removeMovie(movie){
            let index = this.movies.indexOf(movie)
            console.log(index);
            this.movies.splice(index, 1)
            this.$emit('remove-movie')
        }
    },
    computed: {
        sortedMovies() {
            let movies = this.movies.slice();
            switch (this.sortBy) {        
                case 'Title':
                    movies.sort(function (a, b) {
                        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
                        if (titleA < titleB)
                            return -1
                        if (titleA > titleB)
                            return 1
                        return 0
                    })
                    break;
                case 'Genre':
                    movies.sort(function (a, b) {
                        var genreA = a.genre.toLowerCase(), genreB = b.genre.toLowerCase()
                        if (genreA < genreB)
                            return -1
                        if (genreA > genreB)
                            return 1
                        return 0
                    })
                    break;
                case 'Rating':
                    movies.sort(function (a, b) {
                        return b.rating - a.rating
                    })
                    break;
            }
            return movies
        }
    },
}