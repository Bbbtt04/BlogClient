<script setup lang="ts">
import md5 from 'md5'
import request from '@/utils/request'
import { formatDate, parseBrowser, parseOS } from '@/utils/index'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
})
const total = ref(0)
const list: any = ref([])
const page = ref(1)
const oldPage = ref(1)
const count = ref(0)
const replyShow = ref(false)
const commentInfo: any = ref({})

async function fetch(query?: any) {
  const { data } = await request({
    url: `/comments/content/${props.id}`,
    params: query,
  })
  total.value = data.total
  if (oldPage.value === page.value) {
    list.value = data.data
  }
  else {
    oldPage.value = page.value
    list.value.push(...data.data)
  }
  count.value = data.count
}

function getAvatar(email: string) {
  if (/@qq.com/.test(email))
    return `https://q1.qlogo.cn/g?b=qq&nk=${email.split('@')[0]}&s=100`
  else
    return `https://gravatar.loli.net/avatar/${md5(email)}?s=52&d=retro`
}
function moreComment() {
  page.value++
}
function closeShow() {
  replyShow.value = false
}
/* 回复 */
function handleReply(parentId: string, replyName: string, replyEmail: string) {
  commentInfo.value = {
    parentId, replyName, replyEmail,
  }
  replyShow.value = true
}
/* submit */
function handleSubmit(formVal: any) {
  if (!formVal.name || !formVal.email || !formVal.content)
    return

  request({
    url: '/comments',
    method: 'post',
    data: { ...formVal, postId: props.id },
  }).then(() => {
    fetch()
  })
}
function handleSubmitReply(formVal: any) {
  if (!formVal.name || !formVal.email || !formVal.content)
    return

  request({
    url: '/comments',
    method: 'post',
    data: { ...formVal, postId: props.id, ...commentInfo.value },
  }).then(() => {
    fetch()
  })
}

watch(page, () => {
  fetch({ page: page.value })
})

onMounted(() => {
  fetch({ page: page.value })
})
</script>

<template>
  <div x-auto pb-30>
    <Edit @on-submit="handleSubmit" />
    <div mt-5>
      {{ total }} 条评论
    </div>
    <template v-if="list.length">
      <CommentList
        v-for="comment in list"
        :key="comment.id"
        :content="comment.content"
        :avatar="getAvatar(comment.email)"
        :author="{ name: comment.name, os: parseOS(comment.userAgent), browser: parseBrowser(comment.userAgent) }"
      >
        <template #actions>
          <div text-gary-400 flex>
            <span text-xs mt-1 color-gray>{{ formatDate(comment.createdAt, 'MM-DD') }}</span>
            <span
              icon-btn cursor-pointer ml-5
              @click="handleReply(comment.id, comment.name, comment.email)"
            >回复</span>
          </div>
        </template>
        <template v-if="comment.children">
          <CommentList
            v-for="reply in comment?.children"
            :key="reply.id"
            :avatar="getAvatar(reply.email)"
            :author="{
              name: reply.name,
              os: parseOS(reply.userAgent),
              browser: parseBrowser(reply.userAgent),
            }"
          >
            <template #actions>
              <div text-gary-400 flex>
                <span text-xs mt-1 color-gray>{{ formatDate(comment.createdAt, 'MM-DD') }}</span>
                <span
                  icon-btn cursor-pointer ml-5
                  @click="handleReply(comment.id, reply.name, reply.email)"
                >回复</span>
              </div>
            </template>
            <template #content>
              <div flex items-center>
                <span text-red-400>@ {{ reply.replyName ?? 'empty' }}</span>
                <markdown :content="reply.content" ml-5 />
              </div>
            </template>
          </CommentList>
        </template>
      </CommentList>
      <div
        v-if="page * 10 < count + 1"
        class="p-2 text-center rounded cursor-pointer hover:text-emerald"
        @click="moreComment"
      >
        加载更多评论
      </div>
    </template>
    <template v-else>
      <div w-50 mx-auto bg-transparent>
        <div text-gray mt-30>
          快做第一个评论的人吧~~
        </div>
      </div>
    </template>
    <transition name="slide-in-right">
      <div
        v-show="replyShow"
        class="w-[900px] bg-white z-[100] fixed
        top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded
        border drop-shadow-2xl
        dark:bg-dark
        "
      >
        <h1 class="bg-white p-3" dark:bg-dark>
          回复 <span class="underline decoration-red-400 decoration-4">{{ commentInfo.replyName }}</span> ：
        </h1>
        <Edit :is-close="true" @on-close="closeShow" @on-submit="handleSubmitReply" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-in-right-enter-active {
  animation: slide-in-right .4s;
}

.slide-in-right-leave-active {
  animation: slide-in-right .4s reverse;
}

@keyframes slide-in-right {
  0% {
    transform: translate3d(100%, -50%, 0);
    opacity: 0;
  }
  100% {
    transform :translate3d(-50%, -50%, 0);
    opacity: 1;
  }
}
</style>
