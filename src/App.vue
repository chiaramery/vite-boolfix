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
      console.log("prova fuori axios");
      //FILM
      axios
        .get(this.store.apiMoviesUrl, {
          params: this.store.element
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          console.log("terminata chiamata film");
          this.store.loading = false;
        })

      //SERIE
      axios
        .get(this.store.apiSeriesUrl, {
          params: this.store.element
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          this.store.loading = false;
          console.log("terminata chiamata serie tv");
        })
    },
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