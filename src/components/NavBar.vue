<script setup lang="ts">
import request from '@/utils/request'

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
  <header class="header z-40 shadow dark:drop-shadow ">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      icon
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
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
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
