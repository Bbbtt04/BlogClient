<script setup>
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  visible: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['onClose'])

const router = useRouter()
const list = ref(null)
const top = computed(() => {
  return `${80 + 40 * props.menu.length}px`
})
const height = computed(() => {
  return `${innerHeight - 80 + 40 * props.menu.length}px`
})

function onClose() {
  emits('onClose')
}
watch(() => router.currentRoute.value.path, () => {
  onClose()
}, { immediate: true })
</script>

<template>
  <div class="bg-blue-gray-50 w-100% fixed dark:bg-dark">
    <transition name="fade">
      <div
        v-if="visible" ref="list"
        class="drop-list"
      >
        <router-link
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          class="px-5 py-2"
        >
          {{ item.name }}
        </router-link>
        <div class="mobile-header-backdrop" @click="onClose" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-tp,
.fade-enter-leave{
  height: 0;
}

.drop-list {
  transition: all .3s ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mobile-header-backdrop {
  position: fixed;
  top: v-bind(top);
  left: 0;
  right: 0;
  bottom: 0;
  height: v-bind(height);
  background-color: rgba(18,18,18,0.6);
}
</style>
