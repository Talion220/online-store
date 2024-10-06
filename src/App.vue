<script setup>
import Headers from "./widgets/Header.vue";
</script>

<template>
  <div class="bg-white rounded-lg w-4/5 m-auto mt-10 shadow-xl">
    <Headers />
    <router-view />
  </div>
</template>

<style scoped></style>
