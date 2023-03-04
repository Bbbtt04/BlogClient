<script setup lang="ts">
import request from '@/utils/request'

const route = useRoute()
const { id } = route.params
const page: any = ref({})
const postId: any = id

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
    <Comments :id="postId" />
  </div>
</template>

<style scoped>

</style>
