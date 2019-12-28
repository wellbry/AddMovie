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
            <add-movie />
            <br>
            <movie-card 
                title="FightClub"
                :rating="this.rating"
                genre="Comedy"
                description="Placeholder"
            />
        </div>
    `,
    data() {
        return {
            rating: 4,
        }
    },
    methods: {

    },
}