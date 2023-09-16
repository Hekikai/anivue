<template>
  <the-layout>
    <header-widget />
    <router-view />
  </the-layout>
</template>

<script setup lang="ts">
import HeaderWidget from '@/widgets/HeaderWidget.vue';
import TheLayout from '@/layout/TheLayout.vue';
</script>

<style scoped lang="scss">
</style>
