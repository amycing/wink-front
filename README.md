# wink-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


|--- dist                项目打包后的文件夹（npm run build）
|
|--- node_modules        存放第三方依赖（npm install 执行产生）
|
|--- public              存放静态文件夹
|   |--- favicon.ico     是网站图标 
|   |--- index.html      页面入口文件
|
|--- src                 存放源码文件夹
|   |--- assets         存放 css、图片等文件
|   |--- http           用于存放、封装 axios 请求
|   |--- components     存放全局共用组件
|   |--- views          存放视图组件
|   |--- router         存放路由配置
|   |--- store          存放 vuex 配置
|   |--- mock           项目 mock 模拟数据
|   |--- utils          存放全局公用方法
|   |--- i18n           国际化 language
|   |--- App.vue        入口组件
|   |--- main.js        入口 js， 加载组件、初始化等
|
|--- .gitignore         指定文件无需提交到git上
|
|--- .env.development   开发环境配置文件
|
|--- .env.production    生产环境配置文件
|
|--- balel.config.js    使用一些预设
|
|--- package.json       项目描述及依赖
|
|--- package-lock.json  版本管理使用的文件
|
|--- vue.config.js      项目配置文件
|
|--- README.md          项目介绍