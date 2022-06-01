## 创建项目
> npm create vite@latest

## 目录结构
.
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # 后台 API 接口封装
│   ├── assets              # 需要打包的静态资源
│   ├── components          # 公共组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── styles              # 样式
│     └── index.scss        # 全局通用样式
│   ├── utils               # 工具模块
│   ├── views               # 路由页面
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   ├── shims-vue.d.ts      # 补充 .vue 模块类型声明
│   └── vite-env.d.ts       # 补充 vite 类型声明
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts

## eslint 安装

* npm install eslint --save-dev
* npx eslint --init
* 配置 .eslintrc.js 文件 修改 'plugin:vue/vue3-strongly-recommended',
* 添加脚本 "lint": "eslint src/**/*.{js,jsx,vue,ts,tsx} --fix",

## commitlint 安装
> https://github.com/conventional-changelog/commitlint

``` js
'# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}

# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev

# Activate hooks
npx husky install
# or
yarn husky install

cat <<EEE > .husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE

chmod a+x .husky/commit-msg
```
## 安装 vue-router

* npm install vue-router@4
* 初始化路由实例
``` js
// src\router\index.ts
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```
* 配置 eslint 防止  Component name "index" should always be multi-word  vue/multi-word-component-names 报错

``` js
  overrides: [
    {
      files: [
        'src/views/index.vue',
        'src/views/**/index.vue'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ],
```

## Vuex 安装

* npm install vuex@next --save
* 配置
``` js
// src\store\index.ts
import { createStore } from 'vuex'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export default store
```
* ts 支持
> https://vuex.vuejs.org/zh/guide/typescript-support.html#usestore-%E7%BB%84%E5%90%88%E5%BC%8F%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E

## 配置模块路径别名

``` js
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 注意：在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块：npm i -D @types/node
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

``` js
// tsconfig.json
{
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  ...
}

```



