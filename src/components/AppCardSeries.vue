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
        getStars(vote) {
            return Math.ceil(vote);
        }
    }
}
</script>
<template>
    <div class="cards g-3">
        <div class="cards-series">
            <!-- Card top -->
            <div class="cards-top">
                <img v-if="serie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt="">
                <img v-else class="not-found" src="../assets/img/not-found.png" alt="">
            </div>
            <!-- Card back -->
            <div class="cards-back">
                <h2>Titolo: {{ serie.name }}</h2>
                <h3>Titolo originale: {{ serie.original_name }}</h3>
                <p>Lingua: {{ serie.original_language }}
                    <img class="flag" :src="getImgFlag(`../assets/img/${serie.original_language}.png`)" alt="">
                </p>
                <p>Voto:
                    <span v-for="number in 5" :key="number">
                        <i class="fa-solid fa-star" v-if="getStars(serie.vote_average / 2) >= number"></i>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cards {
    width: calc(100% / 3);
    height: 100%;

    &-series {
        position: relative;
        height: 100%;
    }

    &-top {
        img {
            object-fit: cover;
            height: 100%;
        }

        .not-found {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-back {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: rgba(black, .8);
        color: white;
        padding: 1em;

        .flag {
            width: 25px;
        }
    }

    &:hover &-back {
        z-index: 998;
    }
}
</style>