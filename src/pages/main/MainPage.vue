<script setup lang="ts">
import ALink from '@/shared/ui/link/ALink.vue';
import GenreListWidget from '@/widgets/GenreListWidget.vue';
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.baz" />

    <genre-list-widget
      :class="$style.genreCarousel"
      class="p-x-72"
    />

    <section class="p-x-72">
      <div :class="$style.ongoingHeader">
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
    </section>
  </div>
</template>

<style module lang="scss">
.baz {
  height: 590px;
  background-color: #0D9488;
}

.container {
  display: flex;
  flex-direction: column;
}

.genreCarousel {
  padding-top: 40px;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.ongoingHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
