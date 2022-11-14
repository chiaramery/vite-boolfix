<script>
import { store } from "../store";
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header>
        <div class="wrapper-header d-flex justify-content-between align-items-center">
            <div class="title">
                <h1>BOOLFIX</h1>
            </div>
            <div class="user-input d-flex">
                <input type="text" class="form-control" v-model="this.store.searchKey">
                <button class="btn btn-danger" @click="$emit('movieSearch')">Search</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: gray;

    .user-input {
        height: 10%;
        width: 20%;
    }
}
</style>