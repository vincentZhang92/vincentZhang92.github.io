<template>
  <div class="theme" :class="pageClasses">
    <nav-bar v-if="showNavbar" @toggle="toggleSidebar">
      <template #search>
        <slot name="navbar-search" />
      </template>
    </nav-bar>
    <side-bar :open="openSideBar">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </side-bar>

    <!-- TODO: make this button accessible -->
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <content v-if="isCustomLayout" />

    <template v-else-if="enableHome">
      <!-- A slot for customizing the entire homepage easily -->
      <slot name="home">
        <home>
          <template #hero>
            <slot name="home-hero" />
          </template>
          <template #features>
            <slot name="home-features" />
          </template>
          <template #footer>
            <slot name="home-footer" />
          </template>
        </home>
      </slot>
    </template>

    <layout-page v-else>
      <template #top>
        <slot name="page-top-ads" />
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <slot name="page-bottom-ads" />
      </template>
    </layout-page>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref, watch } from 'vue';
  import { useRoute, useData } from 'vitepress';
  import { isSideBarEmpty, getSideBarConfig } from './support/sideBar';

  // components
  import Home from './components/Home.vue';
  import NavBar from './components/NavBar.vue';
  import SideBar from './components/SideBar.vue';
  import LayoutPage from './components/Page.vue';

  // generic state
  const route = useRoute();
  const { site, theme, frontmatter } = useData();

  // custom layout
  const isCustomLayout = computed(() => !!frontmatter.value.customLayout);
  // home
  const enableHome = computed(() => !!frontmatter.value.home);

  // navbar
  const showNavbar = computed(() => {
    const themeConfig = theme.value;
    if (frontmatter.value.navbar === false || themeConfig.navbar === false) {
      return false;
    }
    return site.value.title || themeConfig.logo || themeConfig.repo || themeConfig.nav;
  });

  // sidebar
  const openSideBar = ref(false);

  const showSidebar = computed(() => {
    if (frontmatter.value.home || frontmatter.value.sidebar === false) {
      return false;
    }

    return !isSideBarEmpty(getSideBarConfig(theme.value.sidebar, route.data.relativePath));
  });

  const toggleSidebar = (to?: boolean) => {
    openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value;
  };

  const hideSidebar = toggleSidebar.bind(null, false);
  // close the sidebar when navigating to a different location
  watch(route, hideSidebar);
  // TODO: route only changes when the pathname changes
  // listening to hashchange does nothing because it's prevented in router

  // page classes
  const pageClasses = computed(() => {
    return [
      {
        'no-navbar': !showNavbar.value,
        'sidebar-open': openSideBar.value,
        'no-sidebar': !showSidebar.value
      }
    ];
  });
</script>
<style>
  #ads-container {
    margin: 0 auto;
  }

  @media (min-width: 420px) {
    #ads-container {
      position: relative;
      right: 0;
      float: right;
      margin: -8px -8px 24px 24px;
      width: 146px;
    }
  }

  @media (max-width: 420px) {
    #ads-container {
      /* Avoid layout shift */
      height: 105px;
      margin: 1.75rem 0;
    }
  }

  @media (min-width: 1400px) {
    #ads-container {
      position: fixed;
      right: 8px;
      bottom: 8px;
    }
  }
</style>
