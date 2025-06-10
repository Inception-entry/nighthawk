<h1 align="center">react 项目仓库</h1>
<br/>
## 🔗 在线 Demo

-   在线预览 [nighthawk(夜鹰)] TODO:后续开发

## 👨🏻‍💻 项目说明

-   开发配置文档说明 [Monorepo：Turborepo + pnpm + Changesets](https://tech.uupt.com/?p=1185)


## 🪅 特性

-   📦 开箱即用，无需配置
-   📝 全面注释说明，学习低成本
-   🚀 启动编译迅速
-   🌱 极易定制, 拓展容易

## 🚀 技术栈

[![react](https://img.shields.io/badge/react-18.2.0-brightgreen.svg)](https://github.com/facebook/react/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-brightgreen.svg)](https://github.com/microsoft/TypeScript)[![webpack](https://img.shields.io/badge/webpack-5.64.4-brightgreen.svg)](https://github.com/facebook/react/) [![axios](https://img.shields.io/badge/axios-1.9.0-brightgreen.svg)](https://github.com/axios/axios) [![mobx](https://img.shields.io/badge/mobx-6.8.0-brightgreen.svg)](https://github.com/mobx) [![react-router](https://img.shields.io/badge/react--router-7.1.5-brightgreen.svg)](https://github.com/remix-run/react-router) [![MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)]()

[![koa](https://img.shields.io/badge/koa-2.14.1-brightgreen.svg)]() [![koa-bodyparser](https://img.shields.io/badge/koa--bodyparser-4.3.0-brightgreen.svg)](https://github.com/koajs/bodyparser) [![koa-router](https://img.shields.io/badge/koa--router-12.0.0-brightgreen.svg)](https://github.com/koajs/router) [![koa2-cors](https://img.shields.io/badge/koa2--cors-2.0.6-brightgreen.svg)](https://github.com/zadzbw/koa2-cors) [![reflect-metadata](https://img.shields.io/badge/reflect--metadata-0.1.13-brightgreen.svg)](https://github.com/microsoft/reflect-metadata) [![sqlite3](https://img.shields.io/badge/sqlite3-5.1.4-brightgreen.svg)](https://sqlite.org/) [![typeorm](https://img.shields.io/badge/typeorm-0.3.12-brightgreen.svg)](https://typeorm.io/)

-   React v18
-   react-dom v18
-   TypeScript v4
-   webpack v5
-   axios v1
-   mobx v6
-   mobx-react-lite v3
-   react-router v7

-   koa: v2
-   koa-bodyparser: v4
-   koa-router: v12
-   koa2-cors: v2
-   reflect-metadata: v0
-   sqlite3: v5
-   typeorm: v0

## 环境要求

- Node.js >= 22.11.0
- npm >= 10.9.0


## 📁 项目结构

```
├── .changeset/          # Changesets配置目录
├── .vscode/             # VSCode配置目录
├── apps/                # 应用程序目录
│   ├── docs/            # 文档应用
│   ├── dumi-docs/       # Dumi文档应用
│   ├── koa-ts/          # Koa TypeScript后端应用
│   ├── react-mst/       # React MST应用
│   └── web/             # Web应用
├── packages/            # 共享包目录
│   ├── eslint-config/   # ESLint配置包
│   ├── typescript-config/# TypeScript配置包
│   └── ui/              # UI组件包
├── package.json         # 项目配置文件
├── pnpm-workspace.yaml  # PNPM工作空间配置
└── turbo.json           # Turborepo配置文件
```

## 🚀 运行项目

```
npm
$ npm run dev
```

## 📦 打包编译

```
$ npm run build
```

## 📝 格式化代码
```
$ npm run lint
$ npm run format
```

## 🏷 分支说明

|分支      | 说明          |
|----------| ------------ |
| main     | 主分支        |
| develop  | 开发分支      |

## 代码提交规范

```
git <type>: <subject>
git commit -m “feat: 项目初始化”
```

### type 参考:

```
fix       🐛 Bug修复
feature   ✨ 引入新特性
docs      📝 文档书写改动
prune     🔥 移除代码或文件
perf      ⚡ 性能相关优化
rocket    🚀 部署功能
style     💄 style修改
init      🎉 初始化提交
release   🔖 发布版本
wip       🚧 正在进行中, 且有可能出现不稳定运行的提交
config    🔧 修改配置文件
refactor  🔨 重构(既不增加新功能, 也不修改bug的代码改动)
merge     🔀 合并分支
```
## 📄 许可证

[MIT](LICENSE)