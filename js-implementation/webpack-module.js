(() => {
  // 模块定义
  var __webpack_modules__ = ({
    'index.js': (module, exports, require) => {
      // eval()
    },
  })

  // 模块缓存
  var __webpack_module_cache__ = {}

  // 模块加载器
  function __webpack_require__(moduleId) {
    // 缓存判断
    var cachedModule = __webpack_module_cache__[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }

    // 模块初始化
    var module = __webpack_module_cache__[moduleId] = {
      exports: {},
    }

    // 执行模块代码
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

    // 返回模块
    return module.exports
  }

  // 暴露模块
  __webpack_require__.m = __webpack_modules__

  // 暴露缓存
  __webpack_require__.c = __webpack_module_cache__

  // 定义 esm 模块标识
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }

  // 执行入口模块
  __webpack_require__('index.js')
})()
