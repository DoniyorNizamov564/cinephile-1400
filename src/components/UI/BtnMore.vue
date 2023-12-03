<template>
    <router-link :to="`/${type}/${id}`" class="more">
        <font-awesome-icon :icon="['fas', 'bars-staggered']" class="more__icon" />
        Подробнее
    </router-link>
</template>

<script setup>
let props = defineProps({
    id: Number,
    type: {
        type: String,
        default: 'movie'
    }
})

</script>

<style lang="scss">

</style>