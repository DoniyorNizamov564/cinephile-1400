<template>
<Transition name="upcoming">
    <div v-if="getUpcomingArray.length" class="upcoming">
        <UpcomingItem v-for="item, index in getUpcomingArray" :key="index" 
        :movie="item" :index="index"
        :slideView="slideView"
        :next="getUpcomingArray[index + 1 == getUpcomingArray.length ? 0 : index + 1]"
        @nextSlide="nextSlide"
        />
    </div>
    <div v-else class="loading">
        <div class="loading__spiner"></div>
    </div>
</Transition>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from "../../store/upcoming";
import { computed, ref } from "vue";
let upcomingStore = useUpcoming();
setTimeout(() => {
    upcomingStore.getUpcoming();    
}, 1000);
const getUpcomingArray = computed(()=> upcomingStore.list )
let slideView = ref(0);
let timeout = null;

function nextSlide() {
    clearTimeout(timeout)
    autoplay()
}

function autoplay() {
    if (slideView.value == getUpcomingArray.value.length - 1) {
        slideView.value = 0;
    } else {
        slideView.value++
    }
    timeout = setTimeout(autoplay, 5000);
}
autoplay();
</script>

<style lang="scss">
.upcoming-enter-active,
.upcoming-leave-active {
  transition: 0.5s linear;
}

.upcoming-enter-from {
    opacity: 0;
    transform: scale(0);
    // position: absolute;
    top: 0;
}
.upcoming-enter-to {
    opacity: 1;
    transform: scale(1);
    position: relative;
}

.upcoming-leave-from {
  opacity: 1;
  transform: scale(1);
  position: relative;
//   width: 100%;
//   height: 100%;
}
.upcoming-leave-to {
  opacity: 0;
  transform: scale(0);
//   position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>