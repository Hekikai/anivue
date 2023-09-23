<script setup lang="ts">
import type { AButtonSize, AButttonType } from '@/shared/ui/button/types';

withDefaults(defineProps<{
  type?: AButttonType
  size?: AButtonSize
  text?: string
}>(), {
  type: 'primary',
  size: 'md',
  text: '',
});
</script>

<template>
  <button
    class="text-base-medium"
    :class="[$s.button, $s[type], $s[size], !text && $s.noText]"
  >
    <slot name="left-icon" />
    {{ text }}
    <slot name="right-icon" />
  </button>
</template>

<style module="$s" lang="scss">
@import "@/app/styles/mixins";

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--neutral-900);
  border-radius: 14px;

  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;

  &:active {
    transform: scale(0.9);
  }
}

.primary {
  background-color: var(--lime-400);

  &:active {
    color: var(--neutral-700);
    background-color: var(--lime-500);
  }

  @include on-hover {
    background-color: var(--lime-300);
  }

  &:disabled {
    color: var(--neutral-400);
    background-color: var(--lime-200);
  }
}

.secondary {
  background-color: var(--lime-200);

  &:active {
    color: var(--neutral-700);
    background-color: var(--lime-300);
  }

  @include on-hover {
    background-color: var(--lime-100);
  }

  &:disabled {
    color: var(--neutral-400);
    background-color: var(--lime-50);
  }
}

.tertiary {
  background-color: var(--neutral-100);

  @include on-hover {
    background-color: var(--neutral-200);
  }

  &:active {
    color: var(--neutral-700);
    background-color: var(--neutral-200);
  }

  &:disabled {
    color: var(--neutral-400);
    background-color: var(--neutral-100);
  }
}

.md {
  height: 52px;
  padding: 14px 26px;
  gap: 8px;

  &.noText {
    padding: 14px 16px;
  }
}

.xs {
  height: 44px;
  padding: 10px 18px;
  gap: 6px;

  &.noText {
    padding: 10px;
  }
}
</style>
