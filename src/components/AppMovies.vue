<script>
import { store } from "../store";
import AppCardMovie from "./AppCardMovie.vue";
import AppCardSeries from "./AppCardSeries.vue";
export default {
    name: 'AppMovies',
    components: {
        AppCardMovie,
        AppCardSeries,
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <main>
        <div class="main-container">
            <div class="list-movies">
                <div class="row">
                    <h2>Film</h2>
                    <AppCardMovie :film="film" v-for="film in store.movies" :key="film.id" />
                </div>
            </div>

            <div class="list-series">
                <div class="row">
                    <h2>Series</h2>
                    <AppCardSeries :serie="serie" v-for="serie in store.series" :key="serie.id" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main-container {
    width: 100%;
    margin-top: 4.5em;
    height: 100vh;
    overflow: scroll;
    background-color: gray;

    .list-movies {
        width: 73%;
        margin: 0 auto;
    }

    .list-series {
        width: 73%;
        margin: 0 auto;
    }
}
</style>