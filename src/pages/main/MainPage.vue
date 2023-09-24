<script setup lang="ts">
import AGallery from '@/shared/ui/gallery/AGallery.vue';
import GenreListWidget from '@/widgets/GenreListWidget.vue';
import OngoingsWidget from '@/widgets/ongoing/OngoingsWidget.vue';
import RecommendationsWidget from '@/widgets/recommendations/RecommendationsWidget.vue';
</script>

<template>
  <div :class="$s.container">
    <a-gallery :class="$s.gallery" />

    <div :class="$s.genreCarouselContainer">
      <genre-list-widget
        :class="$s.genreCarousel"
        class="p-x-72"
      />

      <section />
    </div>

    <article
      class="p-x-72"
      :class="$s.article"
    >
      <ongoings-widget />
    </article>

    <article
      class="p-x-72"
      :class="$s.article"
    >
      <recommendations-widget />
    </article>
  </div>
</template>

<style module="$s" lang="scss">
@import "@/app/styles/mixins";

.gallery {
  padding: 30px;
  height: 590px;
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

.article {
  margin-bottom: 30px;
}
</style>
