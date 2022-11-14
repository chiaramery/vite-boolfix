<script>
export default {
    name: 'AppCardMovie',
    props: {
        film: Object,
    }
}
</script>

<template>
    <div class="card-movies">
        <h2>Titolo: {{ film.title }}</h2>
        <h3>Titolo originale: {{ film.original_title }}</h3>
        <p>Lingua: {{ film.original_language }}</p>
        <p>Voto: {{ film.vote_count }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card-movies {
    color: red;
}
</style>