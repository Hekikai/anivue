<script setup lang="ts">
defineProps<{
  to: string
  title?: string
}>();
</script>

<template>
  <li>
    <NuxtLink
      :to="to"
      :active-class="$style.activeLink"
      :class="$style.link"
    >
      <slot>
        {{ title }}
      </slot>
    </NuxtLink>
  </li>
</template>

<style module lang="scss">
.link {
  color: var(--neutral-800);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  transition: color 0.2s ease;
  text-decoration: none;

  &:hover, &:focus {
    outline-width: 0;
    color: var(--lime-700)
  }
}

.activeLink {
  color: var(--lime-600)
}
</style>
