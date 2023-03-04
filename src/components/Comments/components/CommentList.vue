<script setup lang="ts">
defineProps({
  avatar: {
    type: String,
    default: null,
  },
  author: {
    type: Object,
    default() {
      return null
    },
  },
  content: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div pt-4>
    <div flex>
      <img :src="avatar" :alt="author.name" class="rounded-full w-[52px] h-[52px]">
      <div ml-3 flex-1 overflow-hidden>
        <div>
          <span font-medium>{{ author.name }}</span>
          <span text-xs color-gray ml-3>{{ author.browser }}</span>
          <span text-xs color-gray ml-3>{{ author.os }}</span>
        </div>
        <div>
          <slot name="actions" />
        </div>
        <div
          class="pt-1 pb-4 border-b border-gray-100 dark:border-gray-8"
        >
          <slot name="content">
            <markdown
              :content="content"
            />
          </slot>
        </div>
      </div>
    </div>
    <div class="ml-10 mt-5 sub-comment">
      <slot />
    </div>
  </div>
</template>

<style scoped>
::v-deep .vuepress-markdown-body {
  padding: 0;
}
</style>
