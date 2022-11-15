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
</template>

<style lang="scss" scoped>

</style>