<template>
  <main class="home" aria-labelledby="main-title">
    <home-hero />
    <slot name="hero" />
    <home-features />
    <div class="home-content">
      <content />
    </div>
    <slot name="features" />
    <home-footer />
    <slot name="footer" />
  </main>
</template>
<script setup lang="ts">
  import HomeHero from './HomeHero.vue';
  import HomeFeatures from './HomeFeatures.vue';
  import HomeFooter from './HomeFooter.vue';
</script>
<style scoped>
  .home {
    padding-top: var(--header-height);
  }

  .home-content {
    max-width: 960px;
    margin: 0px auto;
    padding: 0 1.5rem;
  }
</style>
