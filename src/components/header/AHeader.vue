<script setup lang="ts">
import AHeaderLink from '~/components/header/AHeaderLink.vue';
import AnivueLogo from '~/components/icons/AnivueLogo.vue';
import ANotifyIcon from '~/components/icons/ANotifyIcon.vue';
import AProfileIcon from '~/components/icons/AProfileIcon.vue';
import ASearchIcon from '~/components/icons/ASearchIcon.vue';
</script>

<template>
  <nav :class="$style.nav">
    <div>
      <a-header-link
        to="/"
        :class="$style.logo"
      >
        <anivue-logo :class="$style.logoSvg" />
        <span>Anivue</span>
      </a-header-link>
    </div>

    <ul :class="$style.links">
      <li>
        <a-header-link
          title="Аниме"
          to="/anime"
        />
      </li>
      <li>
        <a-header-link
          title="Манга"
          to="/manga"
        />
      </li>
      <li>
        <a-header-link
          title="Дорамы"
          to="/dorams"
        />
      </li>
    </ul>

    <ul :class="$style.navButtons">
      <li>
        <a-header-link to="/page">
          <a-search-icon />
        </a-header-link>
      </li>
      <li>
        <a-header-link to="/page">
          <a-notify-icon />
        </a-header-link>
      </li>
      <li>
        <a-header-link to="/page">
          <a-profile-icon />
        </a-header-link>
      </li>
    </ul>
  </nav>
</template>

<style module lang="scss">
.nav {
  display: flex;
  padding: 18px 0;
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 110%;
}

.logoSvg {
  width: 35px;
  height: 30px;
}

.logoTitle {
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;

  color: var(--neutral-900);
  text-decoration: none;

  &:focus, &:active {
    outline-width: 0;
  }
}

.links {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-left: 50px;
}

.navButtons {
  display: flex;
  align-items: center;
  gap: 18px;

  margin-left: auto;

  li {
    width: 24px;
    height: 24px;
  }
}
</style>
