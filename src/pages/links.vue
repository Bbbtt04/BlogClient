<script setup lang="ts">
import request from '@/utils/request'

const list: any = ref([])
onMounted(() => {
  request.get('/links').then((res) => {
    list.value = res.data.list
  })
})
</script>

<template>
  <div>
    <div flex items-center text-2xl>
      <i i-carbon-link />
      <span ml-2>大佬友链</span>
    </div>
    <div flex justify-between>
      <div
        v-for="item in list"
        :key="item.id" class="item"
        flex w-120 px-6 py-6
        mt-10 border rounded-5
      >
        <div w-24 h-21>
          <a :href="item.url" target="_blank ">
            <img
              :src="item.avatar" alt="item.name"
              rounded-full hover:rotate-360 transition duration-500 ease-in-out
              cursor="pointer"
            >
          </a>
        </div>
        <div>
          <div text-3xl text-center mb-3 font-extrabold>
            {{ item.name }}
          </div>
          <div p-2 color-gray>
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark .item {
  filter: drop-shadow(30px 10px 100px #1dbe66);
}
</style>
