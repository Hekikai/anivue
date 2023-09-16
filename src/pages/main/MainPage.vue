<script setup lang="ts">
import ALink from '@/components/header/ALink.vue';
import GenreList from '@/components/main/GenreList.vue';
import TitleAside from '@/components/main/TitleAside.vue';
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.gradient">
      <img
        src="@/assets/images/main.jpg"
        alt="Изображение тайтла"
      />
    </div>

    <title-aside />

    <genre-list :class="$style.genreCarousel" />

    <section>
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
.gradient {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  z-index: -1;

  &::after {
    content:'';
    position:absolute;
    display: inline-block;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0.4));
  }

  img {
    display: block;
    height: 760px;
    width: 100%;

    object-fit: cover;
    user-select: none;
  }
}
.container {
  display: flex;
  flex-direction: column;
}

.genreCarousel {
  padding: 40px 0 20px 0;
  margin-bottom: 30px;
}

.ongoingHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
