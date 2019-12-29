

export default {
    props: { 
        movie: Object
    },
    template: `
        <div class="movieCard" @click="removeMovie">
            <p class="movieCardTitle">   
                <span>
                    {{ movie.title }}
                </span>
                <span>
                    {{ movie.rating }}/5
                </span>
            </p>
            <p class="movieCardGenre">
                {{ movie.genre }}
            </p>
            <p class="movieCardDescription">
                {{ movie.description }}
            </p>
        </div>
    `,
    methods: {
        removeMovie(){
            this.$emit('remove-movie', this.movie)
        }
    },
}