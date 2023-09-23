<script setup lang="ts">
</script>

<template>
  <main :class="$s.main">
    <slot />
  </main>
</template>

<style module="$s" lang="scss">
.main {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
