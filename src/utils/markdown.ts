import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'

import type { App } from 'vue'

VMdPreview.use(githubTheme, {
  Hljs: hljs,
})

const setupMarkdown = (app: App) => {
  app.use(VMdPreview)
}

export default setupMarkdown
