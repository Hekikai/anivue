<script setup lang="ts">
import AArrowForward from '@/shared/icons/AArrowForward.vue';

type AGalleryNavigationDirection = 'forward' | 'backward'
type AGalleryNavigationType = 'empty' | 'filled'
type AGalleryNavigationSize = 'default' | 'small'

withDefaults(defineProps<{
  direction: AGalleryNavigationDirection
  type?: AGalleryNavigationType
  size?: AGalleryNavigationSize
}>(), {
  type: 'filled',
  size: 'default',
});
</script>

<template>
  <button :class="[$s.button, $s[type], $s[size]]">
    <slot name="navigation">
      <a-arrow-forward :class="[$s.navigation, $s[size], $s[direction]]" />
    </slot>
  </button>
</template>

<style module="$s" lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  color: var(--neutral-700);
  transition: all 0.2s ease;

  &:active {
    scale: 0.9;
  }

  &.default {
    width: 50px;
    height: 70px;
  }

  &.small {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  &.empty {
    color: var(--neutral-400);
    background: none;
  }

  &.filled {
    // TODO: think about rgb calculation
    //background: rgba(var(--neutral-300), 0.64);
    background-color: var(--neutral-300);
    backdrop-filter: blur(11px);
  }
}

.navigation {
  width: 24px;
  height: 24px;

  &.small {
    width: 20px;
    height: 20px;
  }

  &.backward {
    transform: rotatey(-180deg);
  }
}
</style>
