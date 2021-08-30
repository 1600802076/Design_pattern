// 高阶函数运用

// 防抖
const debounce = (fn, delay) => {
  let timer = null
  return function () {
    const _self = this
    const _args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_self, _args)
    }, delay)
  }
}

// 节流（时间戳）
const throttle = (fn, delay = 100) => {
  let prev = Date.now()
  return function () {
    const _self = this
    const _args = arguments
    const now = Date.now()
    if (now - prev >= delay) {
      fn.apply(context, args)
      prev = Date.now()
    }
  }
}

// 节流（定时器）
const throttle = (fn, delay = 100) => {
  let timer = null
  return function () {
    const _self = this
    const _args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(_self, _args)
        timer = null
      }, delay)
    }
  }
}

// 节流（时间戳 + 定时器）
const throttle = function (fn, delay = 100) {
  let timer = null
  let startTime = Date.now()
  return function () {
    const curTime = Date.now()
    const _self = this
    const _args = arguments
    clearTimeout(timer)
    if (delay - (curTime - startTime) <= 0) {
      func.apply(_self, _args)
      startTime = Date.now()
    } else {
      timer = setTimeout(func, remaining)
    }
  }
}

window.addEventListener('resize', debounce(() => {
  console.log('123')
}, 100))