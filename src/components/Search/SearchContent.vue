<template>
    <section class="search container">
        <input v-model="searchValue" type="text" class="search__input" placeholder="Найти фильм, сериал...">
        <div class="search__wrapper">
            <SearchItem v-for="item, index in multiData" :item="item" :key="index"/>
        </div>
        <div v-if="loading" class="loading">
            <div class="loading__spiner"></div>
        </div>
    </section>
</template>

<script setup>
import SearchItem from './SearchItem.vue';
import { useSearch } from "../../store/search";
import { computed, onBeforeUnmount, ref } from "vue";
let timer = null
function searchArray(cb, delay) {
    clearTimeout(timer)
    timer =  setTimeout(()=>{
        cb()
    }, delay)
}
const searchStore = useSearch();
const searchValue = computed({
    get: ()=>{
        return searchStore.search
    },
    set: (val)=>{
        searchStore.search = val
        searchArray(searchStore.getSearch, 500)
        // searchStore.getSearch();
    }
})

const multiData = computed(()=>searchStore.searchList) 
onBeforeUnmount(()=>{
    searchStore.search = ''    
    searchStore.searchList = []    

})
const currentPage = ref(1)
const loading = ref(false)
const totalPages = computed(()=>searchStore.totalPages)
async function getContent(){
    if(!loading.value && currentPage.value < totalPages.value){
        loading.value = true
        currentPage.value++
        await searchStore.getSearch( currentPage.value)
        loading.value = false
    }
}
window.addEventListener('scroll', ()=>{
    let download = window.scrollY + window.innerHeight >= document.body.clientHeight - footer.clientHeight
    if (download) {
        getContent();
    }
})

</script>

<style lang="scss">

</style>