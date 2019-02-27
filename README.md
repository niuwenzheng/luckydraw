luckydraw for nodejs 为抽奖准备的后台算法
=====

[![npm version](https://img.shields.io/npm/v/weui-wxss.svg)](https://www.npmjs.org/package/weui-wxss)
[![Gitter](https://badges.gitter.im/weui/weui.svg)](https://gitter.im/weui/weui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## 概述

[luckydraw](https://github.com/weui/weui) 是一个为node后台提供的抽奖算法，包括“定量定员模式、人均成本模式、定量不定员模式”，更改参数，可以解决多数抽奖逻辑问题。


## 预览
用[theLuckydraw](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)

<img src='https://cloud.githubusercontent.com/assets/2395166/20168869/48a75b02-a75f-11e6-89aa-503d65c8ad8e.png' width='344' alt='preview' />

## 使用

- npm install luckydraw

## 文档

// 引用luckydraw
const lucky = require('luckydraw');

// 定员定量，适用于公司年会抽奖(参数：抽奖人数，是否允许重复抽奖)
console.log(lucky.jPgetNumber(100,false))
console.log(lucky.jPgetNumber(100,false))
console.log(lucky.CJre)//抽奖状态对象{CJout：上一轮获奖编号，CJoutList：获奖编号数组}

// 测试定员定量(参数：测试次数，抽奖人数，是否允许重复抽奖)
lucky.test_jPgetNumber(10,100,false)


// 人均成本模式，适用于扩大用户流量（参数：奖品价值数组，人均成本）
console.log(lucky.jPgetEvPrice([10,20,40],10))

// 测试人均成本模式
lucky.test_jPgetEvPrice(10,[10,20,40],10)

## 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request。
