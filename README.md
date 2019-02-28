luckydraw for nodejs 为抽奖准备的后台算法
=====

## 概述

[luckydraw](https://github.com/niuwenzheng/luckydraw) 是一个为node后台提供的抽奖算法，包括“定量定员模式、人均成本模式、定量不定员模式”，更改参数，可以解决多数抽奖逻辑问题。

## 使用
`npm install luckydraw`
## 文档
```
// 引用luckydraw
const lucky = require('luckydraw');

// 定员定量，适用于公司年会抽奖(参数：抽奖人数，是否允许重复抽奖)
// 初始抽奖参数(或上次的抽奖结果)
  let CJ={
        CJout:null,
        CJoutList:[]
    }

// 返回抽奖状态对象{CJout：上一轮获奖编号，CJoutList：获奖编号数组}
console.log(lucky.jPgetNumber(CJ,100,false))
console.log(lucky.jPgetNumber(CJ,100,true))

// 测试定员定量(参数：测试次数，抽奖人数，是否允许重复抽奖)
lucky.test_jPgetNumber(10,CJ,100,false)


// 人均成本模式，适用于扩大用户流量（参数：奖品价值数组，人均成本）
console.log(lucky.jPgetEvPrice([10,20,40],10))

// 测试人均成本模式（参数：测试次数，奖品价值数组，人均成本）
lucky.test_jPgetEvPrice(10,[10,20,40],10)

// 定量不定员模式，适用新老用户活动（实验中，若使用自行测试-最好先别用-，大奖延迟未使用）
// 初始化奖品参数（或存储的上一次结果）
let JP={
    priceLsit:[10,20,30,50,100],//奖品价值数组
    numberList:[100,50,10,5,1],// 对应数量数组
    lastList:[100,50,10,5,1],// 剩余数量数组
    lastGet:false // 是否下次必中（第一次启用时设置为false）
}
// 设置活动起始时间
// 起始时间
let JPstartTime=new Date(2019,2,28,16,0,0)
let JPendTime=new Date(2019,3,1,20,0,0)

// 参数：奖品初始状态，开始时间，结束时间，是否大奖延迟（未使用）
lucky.jPgetRation(JP,JPstartTime,JPendTime,false)

// 定量不定员模式测试方法(参数：测试间隔时间,奖品初始状态，开始时间，结束时间，是否大奖延迟（未使用）)
lucky.test_jPgetRation(10000000,JP,JPstartTime,JPendTime,false)
```
## 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request。
