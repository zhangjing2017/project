### react技术栈
- react react-router4 redux react-redux
### 初始化package.json
```
npm init -y
```
### webpack
```angular2html
npm install webpack webpack-dev-server
```
### babel
```angular2html
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```
### react
```angular2html
npm install react redux react-redux react-router-dom react-dom -S
```
### fetch
```angular2html
npm install es6-promise whatwg-fetch -D
```
### express
```angular2html
npm install express -S
```
### scripts
```angular2html
"start","webpack-dev-server --port 5000 --open --progress --colors","build","webpack -p"
```
### swipe插件
```angular2html
npm install swipe-js-iso react-swipe --save
```
### 目录结构
- components 组件 木偶组件
- containers 页面组件，或者自己的subpage目录下
  - Home
    - subpage 智能组件 
    - index.js
- index.js用来控制显示哪一个页面
- store 只有一个
- actions 用户发布动作
- reducers 定义规则的
- action-types action的名字



















