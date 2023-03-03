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
.md > div{
  background-color: red;
}
</style>
