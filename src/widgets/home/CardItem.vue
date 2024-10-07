<script setup>
defineProps({
  item: Object,
});
</script>
<template>
  <section>
    {{ item.title }}
  </section>
</template>

<style scoped></style>
