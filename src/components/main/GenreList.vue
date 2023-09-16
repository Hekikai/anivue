<script setup lang="ts">
import AButton from '@/components/button/AButton.vue';
import ACyberpunkIcon from '@/components/icons/ACyberpunkIcon.vue';
import ADramaIcon from '@/components/icons/ADramaIcon.vue';
import AFantasyIcon from '@/components/icons/AFantasyIcon.vue';
import AFemaleIcon from '@/components/icons/AFemaleIcon.vue';
import AMagicIcon from '@/components/icons/AMagicIcon.vue';
import AMaleIcon from '@/components/icons/AMaleIcon.vue';
import APsychologyIcon from '@/components/icons/APsychologyIcon.vue';
import ARomanceIcon from '@/components/icons/ARomanceIcon.vue';
import ASportIcon from '@/components/icons/ASportIcon.vue';
import ATragedyIcon from '@/components/icons/ATragedyIcon.vue';

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
  display: flex;
  gap: 14px;

  overflow-x: scroll;
}

.genreLeftIcon {
  width: 24px;
  height: 24px;
}
</style>
