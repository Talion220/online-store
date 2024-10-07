<script setup>
import CardItem from "@/widgets/home/CardItem.vue";
import { onMounted, ref } from "vue";
import { getItems } from "@/api/items/items";
let items = ref([]);

onMounted(() => {
  getItems().then((data) => {
    items.value = data;
  });
});
</script>

<template>
  <article
    class="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <CardItem :item="item" v-for="item in items" :key="item.id" />
  </article>
</template>
