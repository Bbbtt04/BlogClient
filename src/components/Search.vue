<script setup lang="ts">
const router = useRouter()
const text = ref('')

const handleSearch = () => {
  router.push({
    path: '/search',
    query: {
      content: text.value,
    },
  })
}
</script>

<template>
  <div class="relative flex items-center">
    <input
      v-model="text"
      placeholder="搜索文章" px-3
      py-1.5 rounded
      border
      border-gray-300
      focus:outline-none
      focus:ring-2
      focus:ring-teal-600
      focus:border-transparent
      dark:bg-black
    >
    <div
      absolute
      right-1
      top-2
      text="xl gray4"
      m="x-4 y-auto"
      transition-all-500
      transform
      hover:rotate-100
      i-carbon-search
      cursor-pointer
      @click="handleSearch"
    />
  </div>
</template>
