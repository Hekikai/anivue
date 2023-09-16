<template>
  <the-layout>
    <a-header />
    <router-view />
  </the-layout>
</template>

<script setup lang="ts">
import AHeader from '@/components/header/AHeader.vue';
import TheLayout from '@/layout/TheLayout.vue';
</script>

<style scoped lang="scss">
</style>
