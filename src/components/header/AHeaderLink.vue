<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from '#app';

defineProps<{
  to: string
  title?: string
}>();

const isOnIndexPage = computed(() => useRoute().name === 'index');
</script>

<template>
  <NuxtLink
    :to="to"
    :active-class="$style.activeLink"
    class="text-sm"
    :class="[$style.link, isOnIndexPage && $style.indexLink]"
  >
    <slot>
      {{ title }}
    </slot>
  </NuxtLink>
</template>

<style module lang="scss">
.link {
  color: var(--neutral-800);

  transition: color 0.2s ease;
  text-decoration: none;

  &:hover, &:focus {
    outline-width: 0;
    color: var(--lime-700)
  }
}

.indexLink {
  color: var(--neutral-300);
}

.activeLink {
  color: var(--lime-600)
}
</style>
