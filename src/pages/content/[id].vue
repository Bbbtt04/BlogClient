<script setup lang="ts">
import { getArticle } from '@/api/article'
const route = useRoute()
const id = route.params.id

const article: any = ref({})
onMounted(async () => {
  const { data } = await getArticle(id)
  article.value = data
})
</script>

<template>
  <div>
    <div fcc text-6xl h-80 font-extrabold>
      <div>
        # {{ article.title }}
      </div>
    </div>
    <div>
      <markdown :content="article.content" />
    </div>
  </div>
</template>

<style scoped>

</style>
