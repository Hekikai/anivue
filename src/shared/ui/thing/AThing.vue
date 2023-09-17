<script setup lang="ts">
import type { AThingSize, AThingType } from '@/shared/ui/thing/types';

withDefaults(defineProps<{
  text: string
  type?: AThingType
  size?: AThingSize
}>(), {
  type: 'default',
  size: 'lg',
});
</script>

<template>
  <section
    :class="[
      $s.thingContainer, $s[type], $s[size]]"
  >
    <div
      v-if="$slots['left-icon']"
      :class="[$s.leftIcon, $s[size], $s[type]]"
    >
      <slot
        name="left-icon"
      />
    </div>

    <span>
      {{ text }}
    </span>

    <div
      v-if="$slots['right-icon']"
      :class="[$s.leftIcon, $s[size], $s[type]]"
    >
      <slot
        name="right-icon"
      />
    </div>
  </section>
</template>

<style module="$s" lang="scss">
.thingContainer {
  display: flex;
  flex-direction: row;
  gap: 2px;

  &.filled {
    padding: 4px 10px;
    background-color: var(--neutral-50);
    border-radius: 8px;
  }

  &.lg {
    &.default, &.filled {
      font-size: 18px;
      font-weight: 400;
      line-height: 115%;
    }
  }

  &.md {
    &.default, &.filled {
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
  }

  &.sm {
    &.default, &.filled {
      font-size: 14px;
      font-weight: 400;
      line-height: 143%;
    }
  }

  &.xs {
    &.default, &.filled {
      font-size: 12px;
      font-weight: 400;
      line-height: 150%;
    }
  }
}

.leftIcon, .rightIcon {
  &.lg, &.md {
    width: 24px;
    height: 24px;
  }

  &.sm {
    width: 20px;
    height: 20px;
  }

  &.xs {
    width: 18px;
    height: 18px;
  }
}
</style>
