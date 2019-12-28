

export default{
    template: `
        <form class="addMovieForm">
            <label for="title">Title:</label>
            <input type="text" name="title" id="title">

            <label for="myRating">Rating:</label>
            <input type="range" min="1" max="5" value="3" class="slider" id="myRating">

            <label for="genre">Genre:</label>
            <select name="genre" id="genre">
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="sci-fi">Sci-Fi</option>
            </select>
        
            <label for="description">Description:</label>
            <textarea rows="3" cols="30" name="description" id="description"></textarea>

            <div class="buttonContainer">
            <input type="reset" value="Clear">
            <input type="submit" value="Add">
            </div>
                  
        </form>
    `,
}