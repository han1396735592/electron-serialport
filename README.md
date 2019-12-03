# my-project

> An electron-vue project

#### Build Setup

``` bash
# 安装electron
cnpm i electron -g

# 安装electron-prebuilt
cnpm install -g electron-prebuilt

# install dependencies
npm install

# 安装serialport
 
cnpm install --save serialport

cnpm install --save-dev electron-rebuild 

# rebuild
./node_modules/.bin/electron-rebuild -v 2.0.18

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
