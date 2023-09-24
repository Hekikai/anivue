<script setup lang="ts">
import { computed, ref } from 'vue';
import AGalleryNavigation from '@/shared/ui/gallery/gallery-navigation/AGalleryNavigation.vue';
import AsideTitleInfoWidget from '@/widgets/AsideTitleInfoWidget.vue';

const sliderRef = ref<HTMLDivElement | null>(null);
const sliderInnerRef = ref<HTMLDivElement | null>(null);

const showNavigation = ref(false);
const currentSlide = ref(1);
const foo = computed(() => {
  return `-${currentSlide.value * 1290}px`;
});
const changeSlide = (direction: 'forward' | 'backward') => {
  // TODO: make with array slides length

  if (direction === 'forward') {
    if (currentSlide.value === 2) {
      currentSlide.value = 0;
      return;
    }
    currentSlide.value++;
    return;
  }
  if (currentSlide.value === 0) {
    currentSlide.value = 2;
    return;
  }
  currentSlide.value--;
};
</script>

<template>
  <div
    ref="sliderRef"
    :class="$s.slider"
    @mouseenter="showNavigation = true"
    @mouseleave="showNavigation = false"
  >
    <transition-group name="v-fade">
      <a-gallery-navigation
        v-if="showNavigation && currentSlide !== 2"
        :class="$s.sliderNavigation"
        direction="forward"
        @click="changeSlide('forward')"
      />

      <a-gallery-navigation
        v-if="showNavigation && currentSlide > 0"
        :class="[$s.sliderNavigation, $s.back]"
        direction="backward"
        @click="changeSlide('backward')"
      />
    </transition-group>
    <div
      ref="sliderInnerRef"
      :class="$s.sliderInner"
    >
      <div :class="$s.slideImg">
        <img
          src="@/shared/assets/img/main.jpg"
          alt="alt"
        />
        <!--        TODO: remove widget from UI! -->
        <aside-title-info-widget :class="$s.titleAside" />
      </div>
      <div :class="$s.slideImg">
        <img
          src="@/shared/assets/img/main.jpg"
          alt="alt"
        />
        <aside-title-info-widget :class="$s.titleAside" />
      </div>
      <div :class="$s.slideImg">
        <img
          src="@/shared/assets/img/main.jpg"
          alt="alt"
        />
        <aside-title-info-widget :class="$s.titleAside" />
      </div>
    </div>
  </div>
</template>

<style module="$s"  lang="scss">
.slider {
  width: 100%;
  position: relative;

  overflow: hidden;
  cursor: pointer;
}

.sliderInner {
  position: absolute;
  top: 0;
  // TODO: dynamically calculate
  transition: left 0.2s ease;
  left: v-bind(foo);

  padding: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1296px);
  column-gap: 32px;
}

.slideImg {
  position: relative;
  max-height: 530px;
  height: 100%;

  border-radius: 24px;

  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(90deg, rgba(23, 23, 23, 0.66) 0%, rgba(23, 23, 23, 0.56) 23.74%,
        rgba(23, 23, 23, 0.46) 38.08%, rgba(23, 23, 23, 0.33) 49.39%, rgba(23, 23, 23, 0.13) 60.1%,
        rgba(23, 23, 23, 0.00) 69.14%);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 24px;
  }

  &::before {
    position: absolute;
    content: '';
    background: rgba(23, 23, 23, 0.36);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 24px;
  }

  & > img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;

    border-radius: 24px;
    user-select: none;
  }
}

.titleAside {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;

  z-index: 2;
}

.sliderNavigation {
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  &.back {
    left: 3%;
  }
}
</style>
