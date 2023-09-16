<script setup lang="ts">
</script>

<template>
  <main :class="$style.main">
    <slot />
  </main>
</template>

<style module lang="scss">
.main {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
