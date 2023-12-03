<template>
<Transition name="upcoming">
    <section v-if="content.length" class="content">
        <router-link :to=" type == 'movie' ? '/movie' : '/tv'" class="content__title">
            {{ type == 'movie' ? 'Фильмы' : 'Сериалы'}}
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="content__icon" />
        </router-link>
        <swiper :breakpoints="brackpoints" :modules="modules" :slides-per-view="1" :space-between="25" navigation>
            <swiper-slide class="content__item" @click="getInfo(item)" v-for="item, index in content">
                <img v-lazy="imgUrl + item.poster_path" alt="" class="content__img">
                <router-link :to="`/${type}/${item.id}`" class="content__media-link"></router-link>
            </swiper-slide>            
            <swiper-slide class="content__item">
                <router-link :to=" type == 'movie' ? '/movie' : '/tv'" class="content__link">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="content__icon" />
                    <span>{{ type == 'movie' ? 'Все фильмы' : 'Все сериалы'}}</span>
                </router-link>
            </swiper-slide>            
        </swiper>
        <div ref="inf">
          <InfoBlock :current="current" :open="open" @close="close" :type="type"/>          
        </div>
    </section>
    <div v-else class="loading">
        <div class="loading__spiner"></div>
    </div>
</Transition>
</template>

<script setup>
const props = defineProps(['type'])
import InfoBlock from '../InfoBlock/InfoBlock.vue';
import { usePopular } from "../../store/popular";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imgUrl } from "../../static";
import { useDetails } from "../../store/details";
let modules = ref([Navigation]);
let brackpoints = ref({
    1600: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 4.2,
    },
    1200: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 2.8,
    },
    768: {
      slidesPerView: 2.1,
    },
    600: {
      slidesPerView: 1.7
    },
    450: {
      slidesPerView: 1.2
    },
    
    250: {
      slidesPerView: 1
    },
    
    
})
let popularStore = usePopular();
popularStore.getPopular(props.type);
const content = computed(() => props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList)
let detailsStore = useDetails();
let inf = ref();
const open = ref(false)
const current = ref(null);

async function getInfo(item) {
  current.value = null;
  open.value = true;
  await detailsStore.getDetails(item.id, props.type);
  current.value = props.type == 'movie' ? detailsStore.movieInfo : detailsStore.tvInfo;  
  window.scroll({
    top: inf.value.offsetTop - headerId.offsetHeight,
    behavior: 'smooth'
  })
}

function close() {
  open.value = null;
  current.value = null;
}

</script>

<style lang="scss"></style>