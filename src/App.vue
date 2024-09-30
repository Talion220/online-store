<script setup>
import { ref, onMounted } from "vue";
import VueHeader from "./widgets/header.vue";
let count = ref(0);
let arr = ref([1, 2, 3, 4, 5]);
function counter() {
  count.value++;
  arr.value = [1, 1, 1, 1, 1];
}
let res = ref(null);
setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
  })
    .then((response) => (res.value = response.json()))
    .then((response) => (res.value = response));
}, 1000);
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <VueHeader v-for="item in 3" :key="item" title="Заголовок" header="h1" />
  <div class="welcome">
    <h1>Welcome</h1>
    <div class="hello">hello world</div>
    <p>{{ count }}</p>
    <p>{{ res }}</p>
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
