<script setup lang="ts">
defineProps<{
  list: any
}>()

const formatDate = (time: string) => {
  return useDateFormat(time, 'MMMM DD , aa', { locales: 'en-US' }).value
}
</script>

<template>
  <div v-for="item in list" :key="item.id" mt-8>
    <div min-h-45 border-2 rounded-2 px-4 py-4 dark:border-gray>
      <span text-2xl hover:title duration-100 cursor="pointer"> # {{ item.title }}</span>
      <div mt-3 color-gray-400>
        {{ formatDate(item.createdAt) }}
      </div>
      <p color-warmgray mt-2>
        {{ item.outline }}
      </p>
      <div class="footer" flex mt-5 justify-between>
        <div>
          <span
            v-for="tag in item.tags" :key="tag.name"
            mr-3 px-1 py-1 rounded hover:border duration-150 cursor="pointer"
            border-dark dark:hover:border-emerald dark:hover:color-emerald
          >
            {{ tag.name }}
          </span>
        </div>
        <div
          text-xl bg-gray-200 color-black px-2 py-1 rounded-2
          cursor="pointer" hover:bg-gray-300 duration-150
          dark:bg-emerald dark:hover:bg-emerald-200
        >
          {{ item.category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
