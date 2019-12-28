

export default{
    template: `
        <form class="addMovieForm">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="title" required>
            <p>{{ title }}</p>

            <label for="myRating">Rating:</label>
            <input type="range" min="1" max="5" value="3" class="slider" id="myRating" v-model="rating" required>

            <label for="genre">Genre:</label>
            <select name="genre" id="genre" v-model="genre" required>
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="sci-fi">Sci-Fi</option>
            </select>
        
            <label for="description">Description:</label>
            <textarea rows="3" cols="30" name="description" id="description" v-model="description"></textarea required>

            <div class="buttonContainer">
                <input type="reset" value="Clear">
                <input type="submit" value="Add" @click.prevent="printMovie">
            </div>
                  
        </form>
    `,
    data() {
        return {
            title: '',
            rating: '',
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
            
        }
    },
}