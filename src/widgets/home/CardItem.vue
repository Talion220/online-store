<script setup>
defineProps({
  item: Object,
});
</script>
<template>
  <section
    class="bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:scale-105 hover:shadow-xl"
  >
    <img src="/heart.svg" alt="" />

    <img :src="item.imageUrl" alt="" />

    <p class="mt-2">{{ item.title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ item.price }} руб.</b>
      </div>

      <img src="/plus.svg" alt="" />
    </div>
  </section>
</template>

<style scoped></style>
