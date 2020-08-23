// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lileiyoupin/Desktop/初识weex/weex-demo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wraper": {
    "background": "antiquewhite"
  },
  "thing": {
    "background": "white",
    "paddingTop": "20",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottom": "1px solid #ccc"
  },
  "thing-right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "btn-success": {
    "fontSize": "25",
    "border": "1px solid black",
    "paddingTop": "2",
    "paddingRight": "14",
    "paddingBottom": "2",
    "paddingLeft": "14",
    "borderRadius": "10",
    "marginRight": "10"
  },
  "title": {
    "fontSize": "32",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "btns-footer": {
    "position": "absolute",
    "bottom": "0",
    "width": "750",
    "height": "100",
    "background": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "add": {
    "flex": 1,
    "textAlign": "center"
  },
  "clear": {
    "flex": 1,
    "textAlign": "center"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(15);

var storage = weex.requireModule("storage"); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule("navigator");
exports.default = {
  name: "App",
  components: {},
  data: function data() {
    return {
      todoThings: [],
      doneThings: []
    };
  },
  created: function created() {
    if (weex.config.env.platform === "Web") {
      this.onShow();
    }
  },

  methods: {
    clickFinish: function clickFinish(index) {
      this.doneThings.push(this.todoThings[index]);
      this.todoThings.splice(index, 1);
    },
    onHide: function onHide() {
      storage.setItem("todoThings", JSON.stringify(this.todoThings));
      storage.setItem("doneThings", JSON.stringify(this.doneThings));
    },
    onShow: function onShow() {
      var _this = this;

      console.log("页面加载完成");
      storage.getItem("todoThings", function (e) {
        if (e.result === "success") {
          _this.todoThings = JSON.parse(e.data);
        } else {
          _this.todoThings = [];
        }
      });

      storage.getItem("doneThings", function (e) {
        if (e.result === "success") {
          _this.doneThings = JSON.parse(e.data);
        } else {
          _this.doneThings = [];
        }
      });
    },
    addTodo: function addTodo() {
      if (weex.config.env.platform === "Web") {
        this.onHide();
      }
      navigator.push({
        url: (0, _utils.getEntryUrl)('components/add'),
        animated: "true"
      });
    },
    clearTodo: function clearTodo() {
      this.todoThings = [];
      this.doneThings = [];
      this.onHide();
    },
    itemThing: function itemThing(item) {
      if (weex.config.env.platform === "Web") {
        this.onHide();
      }
      storage.setItem("currentThing", JSON.stringify(item));

      navigator.push({
        url: (0, _utils.getEntryUrl)('components/detail'),
        animated: "true"
      });
    }
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "iconfont",
      src: "url('http://at.alicdn.com/t/font_1967490_nkafodhsmlb.ttf')"
    });
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wraper"],
    on: {
      "viewappear": _vm.onShow,
      "viewdisappear": _vm.onHide
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("待办事件")]), _c('div', {
    staticClass: ["things-wrap"]
  }, _vm._l((_vm.todoThings), function(item, index) {
    return _c('div', {
      key: item.name,
      staticClass: ["thing"],
      on: {
        "click": function($event) {
          _vm.itemThing(item)
        }
      }
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: ["thing-right"]
    }, [_c('text', {
      staticClass: ["btn-success"],
      on: {
        "click": function($event) {
          _vm.clickFinish(index)
        }
      }
    }, [_vm._v("完成")]), _c('text', {
      staticClass: ["iconfont"]
    }, [_vm._v("")])])])
  })), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事件")]), _c('div', {
    staticClass: ["things-wrap"]
  }, _vm._l((_vm.doneThings), function(item) {
    return _c('div', {
      key: item.name,
      staticClass: ["thing"],
      on: {
        "click": function($event) {
          _vm.itemThing(item)
        }
      }
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v(_vm._s(item.name))]), _vm._m(0, true)])
  })), _c('div', {
    staticClass: ["btns-footer"]
  }, [_c('text', {
    staticClass: ["add"],
    on: {
      "click": _vm.addTodo
    }
  }, [_vm._v("添加")]), _c('text', {
    staticClass: ["clear"],
    on: {
      "click": _vm.clearTodo
    }
  }, [_vm._v("清空")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["thing-right"]
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntryUrl = getEntryUrl;
function getEntryUrl(name) {
  if (weex.config.env.platform === "Web") {
    return './' + name + '.html';
  } else {
    // 真机调试
    var arr = weex.config.bundleUrl.split('/');
    arr.pop();
    arr.push(name + '.js');
    return arr.join('/');
  }
}

/***/ })
/******/ ]);