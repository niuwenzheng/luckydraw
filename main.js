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
