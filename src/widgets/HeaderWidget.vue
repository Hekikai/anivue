<script setup lang="ts">
import ALink from '@/shared/ui/link/ALink.vue';
import AnivueLogo from '@/shared/icons/AnivueLogo.vue';
import ANotifyIcon from '@/shared/icons/ANotifyIcon.vue';
import AProfileIcon from '@/shared/icons/AProfileIcon.vue';
import ASearchIcon from '@/shared/icons/ASearchIcon.vue';
</script>

<template>
  <nav
    :class="$s.nav"
    class="p-x-72"
  >
    <div>
      <a-link
        to="/"
        :class="$s.logo"
        type="primary"
      >
        <anivue-logo :class="$s.logoSvg" />
        <span>Anivue</span>
      </a-link>
    </div>

    <ul :class="$s.links">
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
          to="/dorama"
        />
      </li>
    </ul>

    <ul :class="$s.navButtons">
      <li>
        <a-link
          to="/manga"
          type="primary"
        >
          <a-search-icon />
        </a-link>
      </li>
      <li>
        <a-link
          to="/manga"
          type="primary"
        >
          <a-notify-icon />
        </a-link>
      </li>
      <li>
        <a-link
          to="/manga"
          type="primary"
        >
          <a-profile-icon />
        </a-link>
      </li>
    </ul>
  </nav>
</template>

<style module="$s" lang="scss">
.nav {
  display: flex;
  padding: 18px 0;
  background-color: var(--neutral-50);
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;

  span {
    color: currentColor;
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
  }
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
