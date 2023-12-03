<template>
<Transition name="upcoming">
    <section v-if="content.length" class="rate">
        <h2 class="rate__title">
            ТОП
            <span>10</span>
        </h2>
        <swiper :breakpoints="brackpoints" :modules="modules" :slides-per-view="1" :space-between="25" navigation>
            <swiper-slide class="rate__item" v-for="item, index in content">
                <router-link :to="'/movie/' + item.id">
                    <img v-lazy="imgUrl + item.poster_path" alt="" class="rate__img">
                    <div class="rate__content">{{ index + 1}}</div>
                </router-link>
            </swiper-slide>            
        </swiper>
    </section>
    <div v-else class="loading">
        <div class="loading__spiner"></div>
    </div>
</Transition>
</template>

<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imgUrl } from "../../static";
import { useTop } from "../../store/topRate";
let topStore = useTop();
topStore.getTop();
let content = computed(()=>topStore.moviesList)

let modules = ref([Navigation]);
let brackpoints = ref({
    1600: {
      slidesPerView: 3.2,
    },
    1400: {
      slidesPerView: 2.6,
    },
    1200: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 1.7,
    },
    768: {
      slidesPerView: 1.2,
    },
    600: {
      slidesPerView: 1.5
    },
    450: {
      slidesPerView: 1.2
    },
    
    250: {
      slidesPerView: 1
    },
    
    
})
</script>

<style lang="scss">

</style>