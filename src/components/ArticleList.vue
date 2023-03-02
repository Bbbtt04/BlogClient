<script setup lang="ts">
defineProps<{
  list: any
}>()
</script>

<template>
  <div>
    <div v-for="(arr, index) in list" :key="arr.index" mt-20>
      <span text-8xl color-gray-500>{{ index }}</span>
      <article-card :list="arr" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
