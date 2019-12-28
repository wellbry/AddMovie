

export default {
    props: {
        title: String,
        rating: Number,
        genre: String,
        description: String
    },
    template: `
        <div class="movieCard">
            <p class="movieCardTitle">   
                <span>
                    {{ title }}
                </span>
                <span>
                    {{ rating }}/5
                </span>
            </p>
            <p class="movieCardGenre">
                {{ genre }}
            </p>
            <p class="movieCardDescription">
                {{ description }}
            </p>

        </div>
    `,
}