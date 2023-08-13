<script setup lang="ts">
import TitleAside from '~/components/main/TitleAside.vue';
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.gradient">
      <img
        src="~/assets/images/main.jpg"
        alt="Изображение тайтла"
      />
    </div>

    <title-aside />
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
    background: linear-gradient(0deg, rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0.4)),
            linear-gradient(180deg, rgba(23, 23, 23, 0.3) 0%, rgba(23, 23, 23, 0.21) 3.62%,
            rgba(23, 23, 23, 0.15) 7.21%, rgba(23, 23, 23, 0.06) 12.18%, rgba(23, 23, 23, 0) 17.4%,
            rgba(23, 23, 23, 0) 17.4%), linear-gradient(90deg, rgba(23, 23, 23, 0.3) 0%,
            rgba(23, 23, 23, 0.255) 17.17%, rgba(23, 23, 23, 0.21) 27.54%, rgba(23, 23, 23, 0.15) 35.72%,
            rgba(23, 23, 23, 0.06) 43.46%, rgba(23, 23, 23, 0) 50%), linear-gradient(0deg, #FAFAFA 0%,
            rgba(253, 253, 253, 0.8) 3.36%, rgba(250, 250, 250, 0.6) 6.02%, rgba(250, 250, 250, 0.2) 13.47%,
            rgba(250, 250, 250, 0) 20.06%);
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
</style>
