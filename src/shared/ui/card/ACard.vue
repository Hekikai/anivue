<script setup lang="ts">
import AStarIcon from '@/shared/icons/AStarIcon.vue';
import AThing from '@/shared/ui/thing/AThing.vue';

type ACardSize = 'big' | 'small'

withDefaults(defineProps<{
  type?: ACardSize
}>(), {
  type: 'big',
});
</script>

<template>
  <article :class="[$s.cardContainer, $s[type]]">
    <img
      :class="$s.cardImage"
      src="@/shared/assets/img/card-image.png"
      alt="Изображение тайтла"
    />
    <footer>
      <h5 :class="$s.cardTitle">
        Название тайтла
      </h5>
      <p :class="$s.cardDescription">
        <a-thing
          text="8.8"
          size="sm"
        >
          <template #left-icon>
            <a-star-icon :class="$s.cardGrade" />
          </template>
        </a-thing>
        <a-thing
          :class="$s.cardGenre"
          text="/ Боевые искусства"
          size="sm"
        />
      </p>
    </footer>
  </article>
</template>

<style module="$s" lang="scss">
.cardContainer {
  max-width: 196px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  cursor: pointer;
  border-radius: 12px;

  & > footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
  }

  &.small {
    max-width: 141px;
  }
}

.cardImage {
  object-fit: cover;
  height: auto;
}

.cardTitle {
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: var(--neutral-800)
}

.cardDescription {
  display: flex;
  align-items: center;
  gap: 4px;
}

.cardGrade {
  color: var(--accent-400);
}

.cardGenre {
  color: var(--neutral-600);
}
</style>
