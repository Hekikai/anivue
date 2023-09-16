<script setup lang="ts">
import ALink from '@/shared/ui/link/ALink.vue';
import GenreListWidget from '@/widgets/GenreListWidget.vue';
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.baz" />

    <div :class="$style.genreCarouselContainer">
      <genre-list-widget
        :class="$style.genreCarousel"
        class="p-x-72"
      />

      <section />
    </div>

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
@import "@/app/styles/mixins/index";

.baz {
  height: 590px;
  background-color: #0D9488;
}

.container {
  display: flex;
  flex-direction: column;
}

.genreCarouselContainer {
  display: flex;
  position: relative;

  section {
    position: absolute;
    top: 0;
    bottom: 50%;
    right: 0;
    box-shadow: -8px 25px 10px 20px var(--neutral-50);
  }
}

.genreCarousel {
  padding-top: 40px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  overflow-x: auto;

  @include hide-scrollbar()
}

.ongoingHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
