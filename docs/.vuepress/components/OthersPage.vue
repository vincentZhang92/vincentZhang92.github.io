<template>
  <ul>
    <li v-for="page in othersPages" :key="page.key">
      <a :href="page.regularPath" class="">{{ formatPageTitle(page) }}</a>
    </li>
  </ul>
</template>
<script>
  export default {
    computed: {
      othersPages() {
        const { pages } = this.$site;
        const othersPages = pages.filter(page => page.relativePath.startsWith('others/pages'));
        return othersPages.sort((prev, next) => {
          if (prev.lastUpdatedTimestamp && next.lastUpdatedTimestamp) {
            return prev.lastUpdatedTimestamp - next.lastUpdatedTimestamp;
          } else {
            return 1;
          }
        });
      }
    },
    methods: {
      formatPageTitle(page) {
        if (page.lastUpdated) {
          return `${page.title} - ${page.lastUpdated}`;
        } else {
          return page.title;
        }
      }
    }
  };
</script>
