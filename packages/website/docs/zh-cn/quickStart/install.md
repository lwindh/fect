# 安装

### 配置

请确保你的<fe-link href="https://nodejs.org/en/">NodeJS</fe-link>处于高版本(>=10),同时还需准备包管理器`NPM`或者`Yarn`

<fe-spacer />
<fe-dot type="success" />1. 运行命令下载包:
<fe-spacer y={0.5} />

<fe-tabs hideDivider>

  <fe-tab title="Yarn">
    <fe-snippet text="yarn add @fect-ui/vue" width="300px" />
  </fe-tab>

  <fe-tab title="Npm">
    <fe-snippet text="npm install @fect-ui/vue" width="300px" />
  </fe-tab>
</fe-tabs>

<fe-spacer />

<fe-dot type="success" />2. 引入包到你的 Vue3 项目中：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import FectUI from '@fect-ui/vue'
import '@fect-ui/vue/lib/main.css'

createApp(App)
  .use(FectUI)
  .mount('#app')
```

<fe-spacer y=".6" />
<fe-dot type="success" />3. 在任意处使用组件：

```html
<template>
  <fe-button>按钮</fe-button>
</template>
```

<fe-spacer y=".6" />
