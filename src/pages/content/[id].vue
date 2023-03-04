<script setup lang="ts">
import { getArticle } from '@/api/article'
import { formatDate } from '@/utils'
const route = useRoute()
const id: any = route.params.id

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
    <div flex justify-between items-center px-10 text-gray>
      <div>最后编辑于：{{ formatDate(article.updateAt, 'YYYY年MM月DD日') }}</div>
      <div>
        <div i-carbon-tag />
      </div>
    </div>
    <Comments :id="id" mt-10 />
  </div>
</template>

<style scoped>

</style>
