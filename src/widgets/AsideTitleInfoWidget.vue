<script setup lang="ts">
import AButton from '@/shared/ui/button/AButton.vue';
import ABookmarkOutlineIcon from '@/shared/icons/ABookmarkOutlineIcon.vue';
import APlayIcon from '@/shared/icons/APlayIcon.vue';
</script>

<template>
  <aside :class="$style.titleAside">
    <h6 class="text-xs">
      JoJo's Bizarre Adventure: Golden Wind
    </h6>
    <h1 class="heading-1">
      Невероятные приключения ДжоДжо: Золотой ветер
    </h1>
    <ul>
      <li>Lorem</li>
      <li />
      <li>Lorem</li>
      <li />
      <li>Lorem</li>
      <li />
      <li>Lorem</li>
    </ul>
    <p class="text-base">
      Джорно Джованна — юный, но весьма амбициозный парень, являющийся сыном знаменитого Дио Брандо.
      Однако, в отличие от своего отца, Джорно избрал совсем иной путь к достижению свой мечты
    </p>
    <footer :class="$style.titleFooter">
      <a-button
        text="Начать просмотр с 1 серии"
        type="primary"
      />

      <a-button
        text="Трейлер"
        type="tertiary"
      >
        <template #left-icon>
          <a-play-icon />
        </template>
      </a-button>

      <a-button
        type="tertiary"
      >
        <template #right-icon>
          <a-bookmark-outline-icon />
        </template>
      </a-button>
    </footer>
  </aside>
</template>

<style module lang="scss">
.titleAside {
  max-width: 570px;
  width: 570px;

  h6 {
    color: var(--neutral-100);
    opacity: 0.8;
  }

  h1 {
    color: var(--neutral-50);
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    color: var(--neutral-50);
    margin-bottom: 18px;

    li:nth-child(2n) {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      opacity: 0.64;
      background-color: var(--neutral-300);
    }
  }

  p {
    color: var(--neutral-50);
    margin-bottom: 36px;
  }
}

.titleFooter {
  display: flex;
  gap: 14px;
}
</style>
