<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

type ALinkType = 'primary' | 'secondary'
type ALinkSize = 'lg' | 'md' | 'sm' | 'sm-bold' | 'xs'

withDefaults(defineProps<{
  to: string
  type: ALinkType
  title?: string
  size?: ALinkSize
}>(), {
  size: 'lg',
  title: '',
});

const isOnIndexPage = computed(() => useRoute().name === 'index');
</script>

<template>
  <NuxtLink
    :to="to"
    :active-class="$style.activeLink"
    class="text-sm"
    :class="[$style.link, $style[type], $style[size], isOnIndexPage && $style.indexLink]"
  >
    <slot>
      {{ title }}
    </slot>
  </NuxtLink>
</template>

<style module lang="scss">
.link {

  transition: color 0.2s ease;
  text-decoration: none;
  outline-width: 0;

  &.primary {
    color: var(--neutral-800);

    &:hover, &:focus {
      color: var(--lime-700);
    }

    &:active {
      color: var(--lime-600);
    }
  }

  &.secondary {
    color: var(--neutral-800);

    &:hover, &:focus {
      color: var(--neutral-700);
    }

    &:active {
      color: var(--neutral-500);
    }
  }

  &.lg {
    font-size: 18px;
    font-weight: 400;
    line-height: 155%;
  }

  &.md {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }

  &.sm-bold {
    font-size: 14px;
    font-weight: 500;
    line-height: 142%;
  }

  &.sm {
    font-size: 14px;
    font-weight: 400;
    line-height: 142%;
  }

  &.xs {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
