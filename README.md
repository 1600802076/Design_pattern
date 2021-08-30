# Design_pattern

javascript 设计模式示例
锤子理论：当你有了一把锤子，看什么都像锤子

// 闭包与立即执行函数结合使用的作用，可以创建局部作用域避免全局变量污染
const func = (function () {
let val = 123
return function (name) {
console.log(val + name)
}
})()

func('123')
func('456')

// 一个直观的例子看立即执行函数的作用
const func = function () {
let val = 123
return function (name) {
console.log(val + name)
}
}

func('123') // 如果这样用，func('123')返回的其实还是一个函数，需要继续 func()('123')才能达到预期效果
