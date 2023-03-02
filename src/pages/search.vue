<script setup lang="ts">
import { indexData } from '@/api/article'

const route = useRoute()
const query = ref(route.query)
const list = ref([])

const getList = async (query?: any) => {
  const { data } = await indexData(query)
  list.value = data
}

onMounted(() => {
  getList(query.value)
})

watch(route, () => {
  query.value = route.query
  getList(query.value)
})
</script>

<template>
  <div>
    <article-list :list="list" />
  </div>
</template>

<style scoped>

</style>
