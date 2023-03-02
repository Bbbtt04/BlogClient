<script setup lang="ts">
import request from '@/utils/request'
import { formatDate } from '@/utils/index'

const archive: any = ref([])

const getArchive = async () => {
  const res = await request('/site/index')
  archive.value = res.data
}

onMounted(() => {
  getArchive()
})
</script>

<template>
  <div>
    <div v-for="(item, index) in archive" :key="index">
      <div class="collection-title" mt-10>
        <h2 text-2xl>
          {{ index }} 年
        </h2>
        <router-link
          v-for="article in item" :key="article?.id"
          :to="`/content/${article?.id}`"
          flex ml-5 mt-3 hover:text-red
        >
          <!-- formatDate(article.createdAt) -->
          <h1>{{ formatDate(article.createdAt, 'MM-DD') }}</h1>
          <span ml-3 text-base>{{ article.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collection-title h2 {
  display: inline;
  background: linear-gradient(to bottom,transparent 56%, rgba(189, 202, 219, 0.3) 0%) no-repeat;
}
.dark .collection-title h2 {
  display: inline;
  background: linear-gradient(to bottom,transparent 56%, rgba(57, 161, 89, 0.3) 0%) no-repeat;
}
</style>
