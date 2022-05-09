<template>
  <ul class="timeline">
    <li v-for="page in othersPages" :key="page.key" class="timeline-item">
      <div class="timeline-item__tail" />
      <div class="timeline-item__node" />
      <div class="timeline-item__wrapper">
        <div class="timeline-item__timestamp">{{ getLastUpdated(page) }}</div>
        <div class="timeline-item__content">
          <a :href="page.regularPath">{{ page.title }}</a>
          <div>
            <span
              v-for="(tag, index) in getTags(page)"
              :key="tag"
              class="timeline-item__tag"
              :class="getTagsClass(index)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
  import dayjs from 'dayjs';
  const TAG_TYPE = ['primary', 'success', 'warning', 'danger'];
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
      getTags(page) {
        const { tags } = page.frontmatter || {};
        if (Array.isArray(tags)) {
          return tags;
        } else {
          return [];
        }
      },
      getTagsClass(index) {
        const tagTypeIndex = index % 4;
        const tagType = TAG_TYPE[tagTypeIndex];
        return [`tag--${tagType}`];
      },
      getLastUpdated(page) {
        return page.lastUpdated ? page.lastUpdated : dayjs().format('YYYY-MM-DD HH:mm:ss');
      }
    }
  };
</script>
<style scoped>
  .timeline {
    list-style: none;
    padding-left: 0;
  }
  .timeline-item {
    position: relative;
    padding-bottom: 20px;
  }
  .timeline-item__tail {
    position: absolute;
    top: 1px;
    left: 5px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
  }
  .timeline .timeline-item:last-child .timeline-item__tail {
    display: none;
  }
  .timeline-item__node {
    position: absolute;
    left: -1px;
    top: 1px;
    width: 14px;
    height: 14px;
    background-color: #e4e7ed;
    border-color: #e4e7ed;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline-item__wrapper {
    position: relative;
    padding-left: 28px;
    top: -3px;
  }
  .timeline-item__timestamp {
    margin-bottom: 8px;
    padding-top: 4px;
    color: #909399;
    line-height: 1;
    font-size: 14px;
  }
  .timeline-item__content {
    color: #303133;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    overflow: hidden;
    transition: 0.3s;
    padding: 20px;
  }
  .timeline-item__content a {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0;
    line-height: 1.25;
    font-size: 1.15rem;
    font-weight: 600;
    color: #606266;
    cursor: pointer;
  }
  .timeline-item__tag {
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
    margin-top: 15px;
    margin-right: 0.5rem;
    user-select: none;
  }
  .timeline-item__tag.tag--success {
    --tag-bg-color: #f0f9eb;
    --tag-border-color: #e1f3d8;
    --tag-text-color: #67c23a;
  }
  .timeline-item__tag.tag--warning {
    --tag-bg-color: #fdf6ec;
    --tag-border-color: #faecd8;
    --tag-text-color: #e6a23c;
  }
  .timeline-item__tag.tag--danger {
    --tag-bg-color: #fef0f0;
    --tag-border-color: #fde2e2;
    --tag-text-color: #f56c6c;
  }
</style>
