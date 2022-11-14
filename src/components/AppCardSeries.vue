<script>
export default {
    name: 'AppCardSeries',
    props: {
        serie: Object,
    },
    methods: {
        getImgFlag(imgFlag) {
            return new URL(imgFlag, import.meta.url).href;
        },
    }
}
</script>


<template>
    <div class="card-series">
        <div class="card-image">
            <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="">
        </div>
        <h2>Titolo: {{ serie.name }}</h2>
        <h3>Titolo originale: {{ serie.original_name }}</h3>
        <p>Lingua: {{ serie.original_language }}
            <img :src="getImgFlag(`../assets/img/${serie.original_language}.png`)" alt="">
        </p>

        <p>Voto: {{ serie.vote_count }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card-series {
    p {
        img {
            width: 2%;
        }
    }
}
</style>