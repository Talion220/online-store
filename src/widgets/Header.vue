<script setup></script>

<template>
  <header class="flex justify-between py-12 px-16 border-b">
    <router-link to="/" class="flex">
      <img src="/logo.png" alt="" class="w-10 h-10" />
      <div class="pl-4">
        <p class="font-bold">Online Store</p>
        <p>Онлайн магазин товаров</p>
      </div>
    </router-link>
    <div class="flex items-center">
      <router-link to="/basket" class="flex items-center">
        <img src="/cart.svg" alt="" class="w-4 h-4 mr-2" />
        <p>1205 руб.</p>
      </router-link>
      <router-link to="/favorites" class="flex items-center ml-8">
        <img src="/heart.svg" alt="" class="w-4 h-4 mr-2" />
        <p>Закладки</p>
      </router-link>
      <router-link to="/profile" class="flex items-center ml-8">
        <img src="/profile.svg" alt="" class="w-4 h-4 mr-2" />
        <p>Профиль</p>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.border-indigo-500 {
  border-bottom: 2px solid rgba(66, 183, 131, 1);
}

.border-indigo-700 {
  border-bottom: 2px solid rgba(66, 183, 131, 1);
}
</style>
