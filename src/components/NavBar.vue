<script setup lang="ts">
import request from '@/utils/request'
const router = useRouter()
const visible = ref(false)

const defaultMenus = ref([
  { name: '首页', path: '/' },
  { name: '归档', path: '/archive' },
  { name: '建站', path: '/log' },
  { name: '友联', path: '/links' },
])

function addMenus(list: Array<any> | undefined) {
  list?.forEach((item) => {
    const obj: any = {}
    obj.name = item.name
    obj.path = `/page${item.path}`
    defaultMenus.value.push(obj)
  })
}

onMounted(async () => {
  const { data } = await request({
    url: '/page',
    method: 'Get',
  })
  addMenus(data.list)
})
</script>

<template>
  <header class="z-40 shadow h-20 dark:drop-shadow">
    <div class="flex justify-between px-5 items-center xl:w-1000px mx-auto">
      <div class="logo" @click="router.push('/')">
        <img src="@/assets/image/logo.png" alt="">
      </div>
      <nav class="nav hidden md:flex items-center">
        <Search />
        <router-link v-for="menu in defaultMenus" :key="menu.path" :to="menu.path">
          {{ menu.name }}
        </router-link>
        <a href="https://github.com/Bbbtt04" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
        <button icon-btn @click="toggleDark()">
          <div dark:i-carbon-moon i-carbon-sun />
        </button>
      </nav>
      <div
        class="i-carbon-menu w-10 h-10 bg-gray-500 md:hidden"
        @click="visible = !visible"
      />
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 5rem;
  height: 5rem;
  cursor: pointer;
}
.nav > *{
  margin-left: 20px;
}
</style>
