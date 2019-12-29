import Movie from './Movie.js'

export default{
    template: `
        <form class="addMovieForm">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="title">

            <label for="myRating">Rating:</label>
            <input type="range" min="1" max="5" class="slider" id="rating" v-model="rating">

            <label for="genre">Genre:</label>
            <select name="genre" id="genre" v-model="genre">
                <option disabled value="">Please select one</option>
                <option v-for="genre in genres">{{ genre }}</option>
            </select>

            <label for="imageUrl">Image url:</label>
            <input type="url" v-model="imageUrl">
        
            <label for="description">Description:</label>
            <textarea rows="3" cols="30" id="description" v-model="description"></textarea>

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
            imageUrl: '',
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
                this.imageUrl,
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
            this.imageUrl = ''
        }
    },
}