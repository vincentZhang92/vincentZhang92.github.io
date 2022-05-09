<template>
  <div class="page-tags-container">
    <span v-for="(tag, index) in tags" :key="tag" class="page-tag" :class="getTagsClass(index)">
      {{ tag }}
    </span>
  </div>
</template>
<script>
  const TAG_TYPE = ['primary', 'success', 'warning', 'danger'];
  export default {
    computed: {
      tags() {
        const { tags } = this.$page.frontmatter || {};
        if (Array.isArray(tags)) {
          return tags;
        } else {
          return [];
        }
      }
    },
    methods: {
      getTagsClass(index) {
        const tagTypeIndex = index % 4;
        const tagType = TAG_TYPE[tagTypeIndex];
        return [`tag--${tagType}`];
      }
    }
  };
</script>
<style scoped>
  .page-tag {
    --tag-bg-color: #ecf5ff;
    --tag-border-color: #d9ecff;
    --tag-text-color: #409eff;

    background-color: var(--tag-bg-color);
    border-color: var(--tag-border-color);
    color: var(--tag-text-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    padding: 0 9px;
    font-size: 12px;
    line-height: 1;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
    margin-right: 0.5rem;
    user-select: none;
  }
  .page-tag.tag--success {
    --tag-bg-color: #f0f9eb;
    --tag-border-color: #e1f3d8;
    --tag-text-color: #67c23a;
  }
  .page-tag.tag--warning {
    --tag-bg-color: #fdf6ec;
    --tag-border-color: #faecd8;
    --tag-text-color: #e6a23c;
  }
  .page-tag.tag--danger {
    --tag-bg-color: #fef0f0;
    --tag-border-color: #fde2e2;
    --tag-text-color: #f56c6c;
  }
</style>
