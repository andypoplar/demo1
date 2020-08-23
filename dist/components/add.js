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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _add = __webpack_require__(1);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_add2.default.el = '#root';
new Vue(_add2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "/Users/lileiyoupin/Desktop/初识weex/weex-demo/src/components/add.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-56e6ce41"
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
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "nav-bar": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "background": "white",
    "paddingTop": "25",
    "paddingRight": "15",
    "paddingBottom": "25",
    "paddingLeft": "15"
  },
  "add": {
    "flexDirection": "column",
    "background": "blanchedalmond"
  },
  "form-item": {
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "50",
    "paddingBottom": 0,
    "paddingLeft": "50",
    "marginTop": "150"
  },
  "input": {
    "flex": 1,
    "background": "white"
  },
  "textarea": {
    "flex": 1,
    "background": "white"
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
  "add-btn": {
    "flex": 1,
    "textAlign": "center"
  },
  "clear": {
    "flex": 1,
    "textAlign": "center"
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var storage = weex.requireModule("storage");
var navigator = weex.requireModule("navigator");
exports.default = {
  name: "add",
  data: function data() {
    return {
      name: "",
      desc: ""
    };
  },

  methods: {
    addRecord: function addRecord() {
      var currentMessage = {
        name: this.name,
        desc: this.desc
      };
      var currentList = [];
      storage.getItem("todoThings", function (e) {
        if (e.result === "success") {
          currentList = JSON.parse(e.data);
          console.log("成功");
        } else {
          console.log("失败");
          currentList = [];
        }
      });

      currentList.push(currentMessage);
      storage.setItem("todoThings", JSON.stringify(currentList), function (e2) {
        if (e2.result === "success") {
          console.log(333333);
          navigator.pop({
            animated: "true"
          });
        }
      });
    },
    backPage: function backPage() {
      navigator.pop({
        animated: 'true'
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
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["add"]
  }, [_c('div', {
    staticClass: ["nav-bar"]
  }, [_c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": _vm.backPage
    }
  }, [_vm._v("")]), _c('text', {}, [_vm._v("添加事件")]), _c('text', {})]), _c('div', {
    staticClass: ["form-item"]
  }, [_c('text', [_vm._v("事件标题：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入事件名称",
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        _vm.name = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["form-item"]
  }, [_c('text', [_vm._v("事件内容：")]), _c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "type": "text",
      "placeholder": "请输入事件内容",
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        _vm.desc = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["btns-footer"]
  }, [_c('text', {
    staticClass: ["add-btn"],
    on: {
      "click": _vm.addRecord
    }
  }, [_vm._v("添加")]), _c('text', {
    staticClass: ["clear"]
  }, [_vm._v("清空")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);