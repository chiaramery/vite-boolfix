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
            <ul>
                <h2>Film</h2>
                <li v-for="film in store.movies" :key="film.id">
                    <AppCardMovie :film="film" />
                </li>
            </ul>
        </div>
    </div>

    <div class="list-series">
        <div class="row">
            <ul>
                <h2>Series</h2>
                <li v-for="serie in store.series" :key="serie.id">
                    <AppCardSeries :serie="serie" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>