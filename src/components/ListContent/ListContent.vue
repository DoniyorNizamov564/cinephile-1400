<template>
    <div class="list-content container">
        <h2 class="list-content__title">{{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</h2>
        <div class="list-content__wrapper">
            <ListItem v-for="item, in allContent" :key="item.id" :item="item" :type="type" />
        </div>
        <div v-if="loading" class="loading">
            <div class="loading__spiner"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['type']);
import ListItem from './ListItem.vue';
import { computed, ref } from "vue";
import { usePopular } from "../../store/popular";
const popularStore = usePopular();
const currentPage = ref(1);
const loading = ref(false);

const content = computed(() => props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList)
let allContent = ref([]);
async function getContent() {
    if (!loading.value) {
        loading.value = true;
        await popularStore.getPopular(props.type, currentPage.value);
        let state = props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList;
        allContent.value.push(...state);
        loading.value = false;
        currentPage.value++;
    }
}
getContent();

window.addEventListener('scroll', ()=>{
    let download = window.scrollY + window.innerHeight >= document.body.clientHeight - footer.clientHeight
    if (download) {
        getContent();
    }
})

</script>

<style lang="scss"></style>