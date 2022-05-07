<template>
  <div class="edit-link">
    <a v-if="url" class="link" :href="url" target="_blank" rel="noopener noreferrer">
      {{ text }} <OutboundLink class="icon" />
    </a>
  </div>
</template>
<script setup lang="ts">
  import { useEditLink } from '../composables/editLink';
  import OutboundLink from './icons/OutboundLink.vue';

  const { url, text } = useEditLink();
</script>
