<script setup lang="ts">
import ACard from '@/shared/ui/card/ACard.vue';
import ALink from '@/shared/ui/link/ALink.vue';
</script>

<template>
  <section>
    <div :class="$s.ongoingHeader">
      <h3 class="heading-3">
        Сейчас на экранах
      </h3>
      <a-link
        to="/anime"
        type="secondary"
        size="sm"
      >
        Смотреть еще
      </a-link>
    </div>
    <main :class="$s.ongoingContainer">
      <a-card
        v-for="n in 8"
        :key="n"
      />
    </main>
  </section>
</template>

<style module="$s" lang="scss">
.ongoingHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.ongoingContainer {
  display: flex;
  gap: 24px;
  overflow: hidden;
}
</style>
