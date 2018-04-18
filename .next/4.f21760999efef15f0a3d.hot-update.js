webpackHotUpdate(4,{

/***/ "./components/Systems.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);

var _jsxFileName = "/Users/marek/Documents/GitHub/pi-admin/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "select",
    { size: "20", __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "option",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      props.systems._yxf8pjwlhx9.name
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "option",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      props.systems._ggghpez789b.name
    )
  );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new (__webpack_require__("./node_modules/next/dynamic.js").SameLoopPromise)(function (resolve, reject) {
            var weakId = /*require.resolve*/("./src/systems.json");

            try {
              var weakModule = __webpack_require__(weakId);

              return resolve(weakModule);
            } catch (err) {}

            __webpack_require__.e/* require.ensure */(3).then((function (require) {
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

          return _context.abrupt("return", {
            systems: data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/marek/Documents/GitHub/pi-admin/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/marek/Documents/GitHub/pi-admin/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f21760999efef15f0a3d.hot-update.js.map