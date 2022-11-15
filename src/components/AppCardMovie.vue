<script>


export default {
    name: 'AppCardMovie',
    props: {
        film: Object,
    },
    methods: {
        getImgFlag(imgFlag) {
            return new URL(imgFlag, import.meta.url).href;
        },
        getStars(vote) {
            return Math.ceil(vote);
        }
    }
}
</script>
<template>
    <div class="card-movies">
        <div class="card-image">
            <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
        </div>
        <h2>Titolo: {{ film.title }}</h2>
        <h3>Titolo originale: {{ film.original_title }}</h3>
        <p>Lingua: {{ film.original_language }}
            <img :src="getImgFlag(`../assets/img/${film.original_language}.png`)" alt="">
        </p>
        <p>Voto:
            <span v-for="number in 5" :key="number">
                <i class="fa-solid fa-star" v-if="getStars(film.vote_average / 2) >= number"></i>
            </span>
        </p>
    </div>
</template>
<style lang="scss" scoped>
.card-movies {
    p {
        img {
            width: 2%;
        }
    }

}
</style>