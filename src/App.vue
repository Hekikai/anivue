<template>
  <the-layout>
    <header>
      <router-view />
      <slot />
    </header>
  </the-layout>
</template>

<script setup lang="ts">
import TheLayout from '@/layout/TheLayout.vue';
</script>

<style scoped lang="scss">
</style>
