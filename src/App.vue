<script setup>
import { ref } from "vue";
import VueHeader from "./widgets/header.vue";
let count = ref(0);
function counter() {
  count.value++;
}
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <VueHeader />
  <div class="welcome">
    <h1>Welcome</h1>
    <div class="hello">hello world</div>
    <p>{{ count }}</p>
    <button @click="counter">Счетчик</button>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hello {
  font-size: 26px;
}
</style>
