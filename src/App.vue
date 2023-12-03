<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Contact/>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Contact from "./components/Footer/Contact.vue";

</script>

<style lang="scss">

</style>