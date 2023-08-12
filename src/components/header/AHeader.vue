<script setup lang="ts">
import AHeaderLink from '~/components/header/AHeaderLink.vue';
import AnivueLogo from '~/components/icons/AnivueLogo.vue';
import ANotifyIcon from '~/components/icons/ANotifyIcon.vue';
import AProfileIcon from '~/components/icons/AProfileIcon.vue';
import ASearchIcon from '~/components/icons/ASearchIcon.vue';
</script>

<template>
  <nav :class="$style.nav">
    <div :class="$style.logo">
      <anivue-logo :class="$style.logoSvg" />
      <span :class="$style.logoTitle">
        Anivue
      </span>
    </div>

    <ul :class="$style.links">
      <a-header-link
        title="Аниме"
        to="/anime"
      />
      <a-header-link
        title="Index"
        to="/"
      />
      <a-header-link
        title="Index"
        to="/"
      />
    </ul>

    <ul :class="$style.navButtons">
      <a-header-link
        :class="$style.navIcon"
        to="/"
      >
        <a-search-icon />
      </a-header-link>

      <a-header-link
        :class="$style.navIcon"
        to="/"
      >
        <a-notify-icon />
      </a-header-link>

      <a-header-link
        :class="$style.navIcon"
        to="/"
      >
        <a-profile-icon />
      </a-header-link>
    </ul>
  </nav>
</template>

<style module lang="scss">
.nav {
  display: flex;
  padding: 18px 72px;
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.logoSvg {
  width: 35px;
  height: 30px;
}

.logoTitle {
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  color: var(--neutral-900)
}

.links {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-left: 50px;
}

.navButtons {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 18px;
}

.navIcon {
  width: 24px;
  height: 24px;
  color: var(--neutral-800);
}
</style>
