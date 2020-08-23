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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _detail = __webpack_require__(6);

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_detail2.default.el = '#root';
new Vue(_detail2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/lileiyoupin/Desktop/初识weex/weex-demo/src/components/detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-376851e1"
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
/* 7 */
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
  "detail": {
    "flexDirection": "column",
    "background": "blanchedalmond"
  },
  "form-item": {
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "50",
    "paddingBottom": 0,
    "paddingLeft": "50",
    "marginTop": "50"
  },
  "input": {
    "flex": 1,
    "background": "white"
  },
  "textarea": {
    "flex": 1,
    "background": "white"
  }
}

/***/ }),
/* 8 */
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

var storage = weex.requireModule("storage");
var navigator = weex.requireModule("navigator");
exports.default = {
  name: "detail",
  data: function data() {
    return {
      name: "",
      desc: ""
    };
  },
  created: function created() {
    var _this = this;

    storage.getItem("currentThing", function (e) {
      if (e.result === "success") {
        var currentData = JSON.parse(e.data);
        _this.name = currentData.name;
        _this.desc = currentData.desc;
      } else {
        console.log("失败");
      }
    });
  },

  methods: {
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
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["detail"]
  }, [_c('div', {
    staticClass: ["nav-bar"]
  }, [_c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": _vm.backPage
    }
  }, [_vm._v("")]), _c('text', {}, [_vm._v("事件详情")]), _c('text', {})]), _c('div', {
    staticClass: ["form-item"]
  }, [_c('text', [_vm._v("事件标题：")]), _c('text', [_vm._v(_vm._s(_vm.name))])]), _c('div', {
    staticClass: ["form-item"]
  }, [_c('text', [_vm._v("事件内容：")]), _c('text', [_vm._v(_vm._s(_vm.desc))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);