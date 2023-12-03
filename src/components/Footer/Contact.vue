<template>
    <footer class="footer" id="footer">
        <ul class="footer__menu">
            <li v-for="item, index in links">
                <a :href="item.url" class="footer__link">
                    <font-awesome-icon :icon="item.icon" />
                </a>
            </li>
        </ul>
        <p class="footer__desc">© 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних</p>
        <p class="footer__desc">Данные получены с сайта themoviedb.org</p>
        <img src="../../assets/img/proweb.svg" alt="" class="footer__logo">
    </footer>
</template>

<script setup>
import { ref } from "vue";
let links = ref([
    {url: 'https://web.telegram.org/', icon: ['fab', 'telegram']},
    {url: 'https://m.vk.com/', icon: ['fab', 'vk']},
    {url: 'https://www.facebook.com/?locale=ru_RU', icon: ['fab', 'facebook']},
    {url: 'https://www.instagram.com/', icon: ['fab', 'instagram']},
    {url: 'https://www.tiktok.com/', icon: ['fab', 'tiktok']},
    {url: 'https://www.youtube.com/?hl=ru', icon: ['fab', 'youtube']},
    {url: 'https://twitter.com/?lang=ru', icon: ['fab', 'twitter']},
    {url: 'https://ru.linkedin.com/', icon: ['fab', 'linkedin']},
])
</script>

<style lang="scss">

</style>