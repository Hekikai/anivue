<script setup lang="ts">
import ALink from '~/components/header/ALink.vue';
import AnivueLogo from '~/components/icons/AnivueLogo.vue';
import ANotifyIcon from '~/components/icons/ANotifyIcon.vue';
import AProfileIcon from '~/components/icons/AProfileIcon.vue';
import ASearchIcon from '~/components/icons/ASearchIcon.vue';
</script>

<template>
  <nav :class="$style.nav">
    <div>
      <a-link
        to="/"
        :class="$style.logo"
        type="primary"
      >
        <anivue-logo :class="$style.logoSvg" />
        <span>Anivue</span>
      </a-link>
    </div>

    <ul :class="$style.links">
      <li>
        <a-link
          type="primary"
          size="sm-bold"
          title="Аниме"
          to="/anime"
        />
      </li>
      <li>
        <a-link
          type="primary"
          size="sm-bold"
          title="Манга"
          to="/manga"
        />
      </li>
      <li>
        <a-link
          type="primary"
          size="sm-bold"
          title="Дорамы"
          to="/dorams"
        />
      </li>
    </ul>

    <ul :class="$style.navButtons">
      <li>
        <a-link
          to="/page"
          type="primary"
        >
          <a-search-icon />
        </a-link>
      </li>
      <li>
        <a-link
          to="/page"
          type="primary"
        >
          <a-notify-icon />
        </a-link>
      </li>
      <li>
        <a-link
          to="/page"
          type="primary"
        >
          <a-profile-icon />
        </a-link>
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
