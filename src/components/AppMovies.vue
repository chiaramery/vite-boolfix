<script>
import { store } from "../store";
import AppCardMovie from "./AppCardMovie.vue";
export default {
    name: 'AppMovies',
    components: {
        AppCardMovie,
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
        <h2>Film</h2>
        <div class="row">
            <ul>
                <li v-for="film in store.movies" :key="film.id">
                    <AppCardMovie :film="film" />
                </li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>