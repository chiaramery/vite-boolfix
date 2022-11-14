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
    }
}
</script>

<template>
    <div class="card-movies">
        <h2>Titolo: {{ film.title }}</h2>
        <h3>Titolo originale: {{ film.original_title }}</h3>
        <p>Lingua: {{ film.original_language }}
            <img :src="getImgFlag(`../assets/img/${film.original_language}.png`)" alt="">
        </p>
        <p>Voto: {{ film.vote_count }}</p>
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