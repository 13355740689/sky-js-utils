# 个人javascript工具包

[![NPM version](https://img.shields.io/badge/npm-1.0.1-brightgreen.svg)](https://www.npmjs.com/package/sky-js-utils)


## Usage
Using NPM
```bash
npm install sky-js-utils --save-dev
```

Using YARN
```bash
yarn add sky-js-utils --dev 
```

Direct `<script>` Include
```html
<script src="utils.min.js"></script>
```

## 简介
纯html、js、css项目直接引入dist/utils.min.js文件
webpack项目，则通过上述Usage中的npm yarn

## 目录
- calc 
- date 
- reg 
- tools 

``` javacript
import skyUtils from 'sky-js-utils'
// 计算方法
skyUtils.calc.methodName()
// 日期处理
skyUtils.date.methodName()
// 正则校验
skyUtils.reg.methodName()
// 常用方法
skyUtils.tools.methodName()
```

## 测试
测试库采用jest，所有的测试用例在test目录中，四个js文件对应src中四个模块

## License
Distributed under [MIT License](http://opensource.org/licenses/MIT).

