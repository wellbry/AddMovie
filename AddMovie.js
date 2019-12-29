import Movie from './Movie.js'

export default{
    template: `
        <form class="addMovieForm">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="title" required>

            <label for="myRating">Rating:</label>
            <input type="range" min="1" max="5" class="slider" id="myRating" v-model="rating" required>

            <label for="genre">Genre:</label>
            <select name="genre" id="genre" v-model="genre" required>
                <option disabled value="">Please select one</option>
                <option v-for="genre in genres">{{ genre }}</option>
            </select>
        
            <label for="description">Description:</label>
            <textarea rows="3" cols="30" id="description" v-model="description"></textarea required>

            <div class="buttonContainer">
                <input type="reset" value="Clear" @click.prevent="clearForm">
                <input type="submit" value="Add" @click.prevent="addMovie">
            </div>
                  
        </form>
    `,
    data() {
        return {
            title: '',
            rating: 3,
            genre: '',
            description: '',
            genres: [
                'Action',
                'Drama',
                'Comedy',
                'Sci-Fi'
            ]
        }
    },
    methods: {
        addMovie() {
            let movie = new Movie(
                this.title,
                this.rating,
                this.genre,
                this.description,
            )
            console.log(movie);
            this.$emit('addmovie', movie)
            this.clearForm()
        },
        clearForm(){
            this.title = ''
            this.rating = 3
            this.genre = ''
            this.description = ''
        }
    },
}