<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from './components/AppHeader.vue';
import AppMovies from "./components/AppMovies.vue";

export default {
  components: {
    AppHeader,
    AppMovies,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.store.loading = true;
      //FILM
      axios
        .get(this.store.apiMoviesUrl, {
          params: this.store.myApiKey
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
        .catch((error) => {
          console.log("Error", error);
        })
        .finally(() => {
          this.store.loading = false;
        })
    }
  }
}

</script>

<template>
  <AppHeader @movieSearch="getMovies" />
  <AppMovies />
</template>

<style lang="scss">
@use "../src/styles/general.scss" as *;
</style>