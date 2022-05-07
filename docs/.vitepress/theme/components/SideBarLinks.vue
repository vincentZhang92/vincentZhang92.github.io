<template>
  <ul v-if="items.length > 0" class="sidebar-links">
    <side-bar-link v-for="item of items" :item="item" />
  </ul>
</template>
<script setup lang="ts">
  import { useSideBar } from '../composables/sideBar';
  import { SideBarLink } from './SideBarLink';

  const items = useSideBar();
</script>
