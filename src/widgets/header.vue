<script setup>
defineProps({
  title: String,
  header: String,
});
</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <header>{{ header }}</header>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
