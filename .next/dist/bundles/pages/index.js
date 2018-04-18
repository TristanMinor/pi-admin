module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({"2":"chunks/src_systems_json_cee083d2400a4976a0a737c38760ea8a"}[chunkId]||chunkId) + "-" + {"2":"84f6bbd9ceb8c9303a1a"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return require('next/dynamic').SameLoopPromise.resolve();
/******/ 	};
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);

var _jsxFileName = '/Users/marek/Documents/GitHub/pi-admin/pages/index.js';



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'div',
    {
      className: 'jsx-98403214',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'select',
      { size: '20', className: 'jsx-98403214',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
        { as: '/system/_yxf8pjwlhx9', href: '/system?id=_yxf8pjwlhx9', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'option',
          {
            className: 'jsx-98403214',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          props.systems._yxf8pjwlhx9.name
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
        { as: '/system/_ggghpez789b', href: '/system?id=_ggghpez789b', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'option',
          {
            className: 'jsx-98403214',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          props.systems._ggghpez789b.name
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
      styleId: '98403214',
      css: 'select.jsx-98403214{height:95vh;width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUdxQixZQUNBLFlBQ2QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmVrL0RvY3VtZW50cy9HaXRIdWIvcGktYWRtaW4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlbGVjdCBzaXplPVwiMjBcIj5cbiAgICAgICAgPExpbmsgYXM9e2Avc3lzdGVtL195eGY4cGp3bGh4OWB9IGhyZWY9e2Avc3lzdGVtP2lkPV95eGY4cGp3bGh4OWB9PlxuICAgICAgICAgIDxvcHRpb24+e3Byb3BzLnN5c3RlbXMuX3l4ZjhwandsaHg5Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgYXM9e2Avc3lzdGVtL19nZ2docGV6Nzg5YmB9IGhyZWY9e2Avc3lzdGVtP2lkPV9nZ2docGV6Nzg5YmB9PlxuICAgICAgICAgIDxvcHRpb24+e3Byb3BzLnN5c3RlbXMuX2dnZ2hwZXo3ODliLm5hbWV9PC9vcHRpb24+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L3NlbGVjdD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWxlY3Qge1xuICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgbGV0IGRhdGEgPSBhd2FpdCBpbXBvcnQoJy4uL3NyYy9zeXN0ZW1zLmpzb24nKVxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHN5c3RlbXM6IGRhdGFcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
    })
  );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
            var weakId = /*require.resolve*/("./src/systems.json");

            try {
              var weakModule = __webpack_require__(weakId);

              return resolve(weakModule);
            } catch (err) {}

            __webpack_require__.e/* require.ensure */(2).then((function (require) {
              try {
                var m = __webpack_require__("./src/systems.json");

                m.__webpackChunkName = 'src_systems_json_cee083d2400a4976a0a737c38760ea8a';
                resolve(m);
              } catch (error) {
                reject(error);
              }
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
          });

        case 2:
          data = _context.sent;

          console.log(data);

          return _context.abrupt('return', {
            systems: data
          });

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/dynamic":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map