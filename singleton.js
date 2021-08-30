// 单例模式：确保只有一个实例，并提供全局访问
// 单例的思想其实可以在vue创建全局confirm弹窗时体现，避免重复增删dom

const singleton = (function () {
  let instance = null
  return function () {
    if (instance) {
      return instance
    }
    instance = '....'
    return instance
  }
})()

// class中的写法
class singleton {
  constructor () {
    if (this.instance) {
      return this.instance
    }
    this.instance = '...'
    return this.instance
  }
}