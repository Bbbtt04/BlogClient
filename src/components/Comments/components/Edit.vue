<script setup lang="ts">
const props = defineProps({
  isClose: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['onClose', 'onSubmit'])

const formVal = ref({
  name: '',
  email: '',
  content: '',
})

function close() {
  emits('onClose')
}

function handleSubmit() {
  if (props.isClose)
    emits('onClose')

  emits('onSubmit', formVal.value)
}
</script>

<template>
  <div border border-gray-100 p-5 pt-0 rounded dark:bg-transparent>
    <div flex>
      <input v-model="formVal.name" placeholder="昵称" class="w-64 p-3 pl-0 outline-none" dark:bg-transparent>
      <input v-model="formVal.email" placeholder="邮箱" class="w-64 p-3 pl-0 outline-none" dark:bg-transparent>
    </div>
    <div>
      <textarea
        v-model="formVal.content" rows="5"
        class="w-full outline-none mt-5 bg-transparent" placeholder="这里发条友善的评论..."
      />
    </div>
    <div flex justify-between items-center mt-5>
      <fa-brands-markdown />
      <div>
        <button
          class="bg-gray btn hover:bg-gray-300 mr-5"
          @click="close"
        >
          取消
        </button>
        <button class="btn" @click="handleSubmit">
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  background-image: url('~/image/comment.gif');
  background-size: 300px;
  background-repeat: no-repeat;
  background-position:right bottom;
  transition:  all .4s;
}
textarea:focus {
  background-position: 200% bottom;
}
</style>
