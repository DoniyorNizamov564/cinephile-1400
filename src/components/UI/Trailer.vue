<template>
    <router-link :to="`/`" class="more">
        <font-awesome-icon :icon="['fas', 'play']"  class="more__icon"/>
        Смотреть трейлер
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