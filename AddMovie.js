import Movie from './Movie.js'

export default {
    template: `
        <form class="addMovieForm">

            <div class="addMovieVertContainer">
                <label for="title">Title:</label>
                <input type="text" v-model="title" class="inputField">
            </div>

            <div class="addMovieVertContainer">
                <label for="myRating">Rating:</label>
                <span class="inputField">
                    1 <input type="range" min="1" max="5" id="rating" v-model="rating" > 5
                </span>
            </div>

            <div class="addMovieVertContainer">
                <label for="genre">Genre:</label>
                <select name="genre" v-model="genre" class="inputField">
                    <option disabled value="">Please select one</option>
                    <option v-for="genre in genres">{{ genre }}</option>
                </select>
            </div>

            <div class="addMovieVertContainer">
                <label for="imageUrl">Image url:</label>
                <input type="url" v-model="imageUrl" class="inputField">
            </div>
        
            <div class="addMovieDescriptionContainer">
                <label for="description">Description:</label>
                <div>
                    <textarea rows="5" v-model="description" class="inputField"></textarea>

                    <div class="buttonContainer">
                        <input type="reset" value="Clear" @click.prevent="clearForm">
                        <input type="submit" value="Add" @click.prevent="addMovie">
                    </div>
                </div>
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
            if (this.title == '') {
                alert('Please enter movie title')
            } else {
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
            }
        },
        clearForm() {
            this.title = ''
            this.rating = 3
            this.genre = ''
            this.description = ''
            this.imageUrl = ''
        }
    },
}