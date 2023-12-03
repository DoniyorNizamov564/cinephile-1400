<template>
<Transition name="upcoming-item">
    <div class="upcoming__item" v-if="slideView == index">
        <img v-lazy="imgUrlFull + movie.backdrop_path" alt="" class="upcoming__bg">
        <div class="upcoming__content">
            <h2 class="upcoming__title">{{ movie.title }}</h2>
            <p class="upcoming__desc text-limit">{{ movie.overview }}</p>
            <BtnMore :id="movie.id"/>
        </div>
        <div class="upcoming__next" @click="$emit('nextSlide')">
            <img v-lazy="imgUrl + next.backdrop_path" alt="" class="upcoming__next-img">
            <div class="upcoming__next-content">
                <p class="upcoming__next-name">Следующий</p>
                <h3 class="upcoming__next-title">{{ next.title }}</h3>
                <div class="upcoming__next-line"></div>
            </div>
        </div>
    </div>
</Transition>
</template>

<script setup>
const props = defineProps({
  movie: Object,
  index: Number,
  slideView: Number,
  next: Object
})

import { imgUrl, imgUrlFull } from "../../static";

</script>

<style lang="scss">
.upcoming-item-enter-active,
.upcoming-item-leave-active {
  transition: 0.5s linear;
}

.upcoming-item-enter-from {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
    top: 0;
}
.upcoming-item-enter-to {
    opacity: 1;
    transform: translateX(0);
    position: relative;
}
.upcoming-item-leave-from {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}
.upcoming-item-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
  top: 0;
}
</style>