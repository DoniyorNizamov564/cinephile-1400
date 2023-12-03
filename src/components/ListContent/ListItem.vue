<template>
    <router-link :to="`/${type}/${item.id}`" class="list-content__item">
        <img v-lazy="imgUrl + item.poster_path" alt="" class="list-content__img">
        <h3 class="list-content__name">{{ item.title || item.name }}</h3>
    </router-link>
</template>

<script setup>
const props = defineProps(['item', 'type'])
import { imgUrl } from "../../static";
</script>

<style lang="scss"></style>