<script setup lang="ts">
import { formatDate } from '@/utils'
import request from '@/utils/request'

const logs: any = ref([])

onMounted(() => {
  request.get('/logs').then((res) => {
    logs.value = res.data
  })
})
</script>

<template>
  <div>
    <div flex items-center text-2xl>
      <div class="i-carbon-catalog-publish" />
      <h1 ml-2>
        更新日志
      </h1>
    </div>
    <section
      class="
        mt-20 relative box
        before:bg-blue dark:before:bg-emerald-5
        before:w-[2px]
        before:absolute before:top-7 before:bottom-0
        md:before:left-1/2 before:right-2 md:before:right-0
      "
    >
      <ul class="timeline space-y-12">
        <li
          v-for="(log, i) in logs" :key="log.id"
          class="timeline-box"
        >
          <p class="font-bold text-lg">
            {{ formatDate(log.date, 'YYYY-MM-DD') }}
          </p>
          <div class="text-sm leading-6">
            {{ log.desc }}
          </div>
          <span
            class="absolute top-5 right-5 text-black dark:text-gray text-6xl font-bold opacity-20"
          >
            {{ logs.length - i }}</span>
        </li>
        <p class="clear-both" />
      </ul>
    </section>
  </div>
</template>

<style scoped>
.timeline-box {
  @apply hover:-translate-y-1 hover:shadow-[0_4px_0_0_#07beff] hover:before:border-4 duration-300 dark:shadow-emerald-300 dark:hover:drop-shadow-lg drop-shadow-color-emerald-7;
  @apply md:w-[47%] w-11/12 bg-gray-100 p-5 relative top-[-5%] float-left dark:bg-dark-300;
  @apply before:absolute before:top-6 before:absolute before:bg-white before:w-3 before:h-3 before:rounded-full before:border before:border-solid before:border-blue before:border-2 before:dark:border-emerald before:dark:bg-dark-300;
  @apply md:odd:float-left odd:after:right-[-10px] odd:after:border-r-0;
  @apply odd:before:right-[-8.1%] ;
  @apply even:before:right-[-8.1%] md:even:before:right-[0] md:even:before:left-[-7.5%];
  @apply even:after:left-[100%] even:after:border-r-0 md:even:after:border-r-[10px] md:even:float-right md:even:after:left-[-10px] md:even:after:border-l-0;
  @apply after:border-y-transparent after:border-solid after:border-[10px] after:absolute after:top-5 after:border-x-gray-100 ;
}

.timeline-box::after {
  content: ''
}
.timeline-box::before {
  content: ''
}
.box::before {
  content:''
}
</style>
