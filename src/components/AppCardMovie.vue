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
    <div class="cards g-3">
        <div class="cards-movies">
            <!-- Card top -->
            <div class="cards-top">
                <img v-if="film.poster_path" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
                <img v-else class="not-found" src="../assets/img/not-found.png" alt="">
            </div>
            <!-- Card back -->
            <div class="cards-back">
                <h2>Titolo: {{ film.title }}</h2>
                <h3>Titolo originale: {{ film.original_title }}</h3>
                <p>Lingua: {{ film.original_language }}
                    <img class="flag" :src="getImgFlag(`../assets/img/${film.original_language}.png`)" alt="">
                </p>
                <p>Voto:
                    <span v-for="number in 5" :key="number">
                        <i class="fa-solid fa-star" v-if="getStars(film.vote_average / 2) >= number"></i>
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

    &-movies {
        height: 100%;
        position: relative;
    }

    &-top {
        img {
            height: 100%;
            object-fit: cover;
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