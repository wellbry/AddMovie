

export default{
    template: `
        <form class="addMovieForm">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="title" required>

            <label for="myRating">Rating:</label>
            <input type="range" min="1" max="5" class="slider" id="myRating" v-model="rating" required>

            <label for="genre">Genre:</label>
            <select name="genre" id="genre" v-model="genre" required>
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="sci-fi">Sci-Fi</option>
            </select>
        
            <label for="description">Description:</label>
            <textarea rows="3" cols="30" id="description" v-model="description"></textarea required>

            <div class="buttonContainer">
                <input type="reset" value="Clear">
                <input type="submit" value="Add" @click.prevent="addMovie">
            </div>
                  
        </form>
    `,
    data() {
        return {
            title: '',
            rating: '3',
            genre: '',
            description: '',
        }
    },
    methods: {
        printMovie() {
            console.log(this.title);
            console.log(this.rating);
            console.log(this.genre);
            console.log(this.description);           
        },
        addMovie() {
            let movie = {
                title: this.title,
                rating: this.rating,
                genre: this.genre,
                description: this.description,
            }
            console.log(movie);
            this.$emit('addmovie', movie)       
        },
    },
}