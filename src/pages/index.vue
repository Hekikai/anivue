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
  top: 0;

  z-index: -1;

  &::after {
    content:'';
    position:absolute;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    display:inline-block;
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.65)), color-stop(100%,rgba(0,0,0,0))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* IE10+ */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C */
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
