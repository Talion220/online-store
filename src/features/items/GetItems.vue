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
  <div v-for="item in items" :key="item.id">
    <CardItem :item="item" />
  </div>
</template>
