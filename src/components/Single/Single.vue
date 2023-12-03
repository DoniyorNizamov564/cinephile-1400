<template>
    <section class="single">
        <SingleContent :type="type" :current="getInfoId"/>
        <Additiinal/>
        <Recommend/>

    </section>
</template>

<script setup>
const props = defineProps(['type']);
import SingleContent from './SingleContent.vue';
import Additiinal from './Additional.vue';
import Recommend from './Recommend.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed, onBeforeUnmount } from 'vue';
import { useDetails } from '../../store/details';
const detailsStore = useDetails()
const route = useRoute()
const routeId = computed(()=>{return route.params.id})
detailsStore.getDetails(routeId.value, props.type)
const getInfoId = computed(()=> props.type == 'movie' ? detailsStore.movieInfo 
: detailsStore.tvInfo)
onBeforeUnmount(()=>{
    detailsStore.movieInfo = null
    detailsStore.tvInfo = null
    

})

</script>

<style lang="scss">

</style>