import { reactive } from "vue";

export const store = reactive({
    // API
    apiMoviesUrl: "https://api.themoviedb.org/3/search/movie",
    apiSeriesUrl: "https://api.themoviedb.org/3/search/tv",
    myApiKey: "560c871a13ba72571f152bde705e44e9",
    // KEY
    searchKey: "",
    // LOADING
    loading: false,
    // ARRAY RESULT
    movies: [],
    series: [],
});