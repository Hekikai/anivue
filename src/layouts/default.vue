<script setup lang="ts">
import AHeader from '~/components/header/AHeader.vue';
</script>

<template>
  <main :class="$style.main">
    <a-header />
    <slot />
  </main>
</template>

<style module lang="scss">
.main {
  padding: 0 72px;
}
</style>
