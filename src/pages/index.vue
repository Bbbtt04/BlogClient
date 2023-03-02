<script setup>
import { indexData } from '@/api/article'

const data = ref([])

onMounted(() => {
  indexData().then((res) => {
    data.value = res.data
  })
})
</script>

<template>
  <div>
    <article-list :list="data" />
  </div>
</template>

<style scoped>

</style>
