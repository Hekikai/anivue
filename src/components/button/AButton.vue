<script setup lang="ts">
type AButttonType = 'primary' | 'secondary' | 'tertiary'

defineProps<{
  type: AButttonType
  text: string
}>();
</script>

<template>
  <button
    class="text-base-medium"
    :class="[$style.button, $style[type]]"
  >
    {{ text }}
  </button>
</template>

<style module lang="scss">
.button {
  height: 52px;
  padding: 14px 26px;

  color: var(--neutral-900);
  border-radius: 14px;

  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
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
</style>
