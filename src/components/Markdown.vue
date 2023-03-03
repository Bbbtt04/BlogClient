<script setup lang="ts">
import VMdPreview from '@kangc/v-md-editor/lib/preview'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <VMdPreview :text="props.content" class="md" />
  </div>
</template>

<style scoped>
::v-deep .vuepress-markdown-body {
  background:none;
  font-size: 16px;
}
::v-deep .vuepress-markdown-body {
  @apply dark:color-gray-300
}
</style>
