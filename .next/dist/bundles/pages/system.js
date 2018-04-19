module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
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
/******/ 			var chunk = require("../../" + ({"2":"chunks/src_systems_json_cee083d2400a4976a0a737c38760ea8a"}[chunkId]||chunkId) + "-" + {"2":"8954abbdd596446fe5a6"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/System.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/marek/Documents/GitHub/pi-admin/components/System.js";

var System = function System(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "form",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", value: "" + props.system.name, __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      props.system.id
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (System);

/***/ }),

/***/ "./components/Systems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/marek/Documents/GitHub/pi-admin/components/Systems.js";




var Systems = function Systems(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-98403214",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "select",
      { size: "20", className: "jsx-98403214",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      props.systems.map(function (_ref) {
        var system = _ref.system;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
          { key: system.id, as: "/system/" + system.id, href: "/system?id=" + system.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "option",
            {
              className: "jsx-98403214",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            system.name
          )
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "98403214",
      css: "select.jsx-98403214{height:95vh;width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3lzdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHcUIsWUFDQSxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvU3lzdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyZWsvRG9jdW1lbnRzL0dpdEh1Yi9waS1hZG1pbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgU3lzdGVtcyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWxlY3Qgc2l6ZT1cIjIwXCI+XG4gICAgICB7cHJvcHMuc3lzdGVtcy5tYXAoKHtzeXN0ZW19KSA9PiAoXG4gICAgICAgIDxMaW5rIGtleT17c3lzdGVtLmlkfSBhcz17YC9zeXN0ZW0vJHtzeXN0ZW0uaWR9YH0gaHJlZj17YC9zeXN0ZW0/aWQ9JHtzeXN0ZW0uaWR9YH0+XG4gICAgICAgICAgPG9wdGlvbj57c3lzdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlbGVjdCB7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN5c3RlbXNcbiJdfQ== */\n/*@ sourceURL=components/Systems.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Systems);

/***/ }),

/***/ "./pages/system.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Systems_js__ = __webpack_require__("./components/Systems.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_System_js__ = __webpack_require__("./components/System.js");

var _jsxFileName = '/Users/marek/Documents/GitHub/pi-admin/pages/system.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var PageSystem = function PageSystem(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Systems_js__["a" /* default */], { systems: props.systems, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_System_js__["a" /* default */], { system: props.system, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    })
  );
};

PageSystem.getInitialProps = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var objectOfSystems, arrayOfSystems, i, id, objectSystem;
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
            objectOfSystems = _context.sent;
            arrayOfSystems = [];

            // Minus 1 becasue there is some weird redundant object at the end

            for (i = 0; i < Object.keys(objectOfSystems).length - 1; i++) {
              arrayOfSystems[i] = {
                system: {
                  name: Object.values(objectOfSystems)[i].name,
                  id: Object.keys(objectOfSystems)[i]
                }
              };
            }

            // Get selected system

            id = context.query.id;
            objectSystem = objectOfSystems[id];

            objectSystem.id = id;

            return _context.abrupt('return', {
              systems: arrayOfSystems,
              system: objectSystem
            });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PageSystem);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/system.js");


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
//# sourceMappingURL=system.js.map