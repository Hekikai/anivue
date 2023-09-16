<script setup lang="ts">
type AButttonType = 'primary' | 'secondary' | 'tertiary'
type AButtonSize = 'md' | 'xs';

withDefaults(defineProps<{
  type: AButttonType
  size?: AButtonSize
  text?: string
}>(), {
  size: 'md',
  text: '',
});
</script>

<template>
  <button
    class="text-base-medium"
    :class="[$style.button, $style[type], $style[size], !text && $style.noText]"
  >
    <slot name="left-icon" />
    {{ text }}
    <slot name="right-icon" />
  </button>
</template>

<style module lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--neutral-900);
  border-radius: 14px;

  cursor: pointer;
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

  &:hover {
    background-color: var(--lime-300);
  }

  &:disabled {
    color: var(--neutral-400);
    background-color: var(--lime-200);
    cursor: not-allowed;
  }
}

.secondary {
  background-color: var(--lime-200);

  &:active {
    color: var(--neutral-700);
    background-color: var(--lime-300);
  }

  &:hover {
    background-color: var(--lime-100);
  }

  &:disabled {
    color: var(--neutral-400);
    background-color: var(--lime-50);
    cursor: not-allowed;
  }
}

.tertiary {
  background-color: var(--neutral-100);

  &:hover {
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
