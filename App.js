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
            
            <movie-card :movie="movie"/>
            
        </div>
    `,
    data() {
        return {
            movie: Object,
        }
    },
    methods: {
        addMovie(movie){
            this.movie = movie
        }
    },
}