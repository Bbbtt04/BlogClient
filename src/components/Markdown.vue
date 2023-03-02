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
    <VMdPreview :text="props.content" />
  </div>
  <!-- {{ props.content.id }} -->
  <!-- {{ text }} -->
</template>

<style scoped>

</style>
