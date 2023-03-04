declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module 'prismjs'
declare module '@kangc/v-md-editor/lib/plugins/line-number/index'
declare module '@kangc/v-md-editor/lib/plugins/emoji/index'
declare module '@kangc/v-md-editor/lib/plugins/todo-list/index'
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index'
declare module '@kangc/v-md-editor/lib/plugins/align'
declare module 'ua-parser-js'
declare module 'md5'
