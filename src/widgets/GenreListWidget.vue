<script setup lang="ts">
import { markRaw } from 'vue';
import AButton from '@/shared/ui/button/AButton.vue';
import ACyberpunkIcon from '@/shared/icons/ACyberpunkIcon.vue';
import ADramaIcon from '@/shared/icons/ADramaIcon.vue';
import AFantasyIcon from '@/shared/icons/AFantasyIcon.vue';
import AFemaleIcon from '@/shared/icons/AFemaleIcon.vue';
import AMagicIcon from '@/shared/icons/AMagicIcon.vue';
import AMaleIcon from '@/shared/icons/AMaleIcon.vue';
import APsychologyIcon from '@/shared/icons/APsychologyIcon.vue';
import ARomanceIcon from '@/shared/icons/ARomanceIcon.vue';
import ASportIcon from '@/shared/icons/ASportIcon.vue';
import ATragedyIcon from '@/shared/icons/ATragedyIcon.vue';

const genreList = [
  { text: 'Спорт', leftIcon: markRaw(ASportIcon) },
  { text: 'Драма', leftIcon: markRaw(ADramaIcon) },
  { text: 'Сёнен', leftIcon: markRaw(AMaleIcon) },
  { text: 'Романтика', leftIcon: markRaw(ARomanceIcon) },
  { text: 'Фэнтези', leftIcon: markRaw(AFantasyIcon) },
  { text: 'Сёдзё', leftIcon: markRaw(AFemaleIcon) },
  { text: 'Психология', leftIcon: markRaw(APsychologyIcon) },
  { text: 'Киберпанк', leftIcon: markRaw(ACyberpunkIcon) },
  { text: 'Магия', leftIcon: markRaw(AMagicIcon) },
  { text: 'Трагедия', leftIcon: markRaw(ATragedyIcon) },
];
</script>

<template>
  <ul :class="$style.genreList">
    <li
      v-for="genre in genreList"
      :key="genre.text"
    >
      <a-button
        type="secondary"
        size="xs"
        :text="genre.text"
      >
        <template #left-icon>
          <component
            :is="genre.leftIcon"
            :class="$style.genreLeftIcon"
          />
        </template>
      </a-button>
    </li>
  </ul>
</template>

<style module lang="scss">
.genreList {
  position: relative;
  display: flex;
  gap: 14px;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    box-shadow: 0 0 40px 40px var(--neutral-50);
    display: block;
  }
}

.genreLeftIcon {
  width: 24px;
  height: 24px;
}
</style>
