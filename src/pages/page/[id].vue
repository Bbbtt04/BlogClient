<script setup lang="ts">
import request from '@/utils/request'

const route = useRoute()
const { id } = route.params
const page: any = ref({})

onMounted(async () => {
  const { data } = await request({
    url: `/page/${id}`,
    method: 'get',
  })
  page.value = data
})
</script>

<template>
  <div>
    <Markdown :content="page.content" />
  </div>
</template>

<style scoped>

</style>
