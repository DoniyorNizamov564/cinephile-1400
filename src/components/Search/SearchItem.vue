<template>
    <router-link :to="`/${item.media_type}/${item.id}`" class="search__item">
        <img v-lazy="imgUrl + item.poster_path" alt="" class="search__img">
        <h3 class="search__name">{{ item.title || item.name }}</h3>
    </router-link>
</template>

<script setup>
const props = defineProps(['item'])
import { imgUrl } from '../../static'
</script>

<style lang="scss">

</style>