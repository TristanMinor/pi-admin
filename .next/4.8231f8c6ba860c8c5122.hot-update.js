webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);

var _jsxFileName = "/Users/marek/Documents/GitHub/pi-admin/pages/index.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    "div",
    {
      className: "jsx-3973105865",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      "select",
      { size: "20", className: "jsx-3973105865",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "option",
        {
          className: "jsx-3973105865",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        props.systems._yxf8pjwlhx9.name
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        "option",
        {
          className: "jsx-3973105865",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        props.systems._ggghpez789b.name
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
      styleId: "3973105865",
      css: "select.jsx-3973105865{height:95vh;width:120;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1nQixBQUdxQixZQUNGLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmVrL0RvY3VtZW50cy9HaXRIdWIvcGktYWRtaW4iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWxlY3Qgc2l6ZT1cIjIwXCI+XG4gICAgICAgIDxvcHRpb24+e3Byb3BzLnN5c3RlbXMuX3l4ZjhwandsaHg5Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+e3Byb3BzLnN5c3RlbXMuX2dnZ2hwZXo3ODliLm5hbWV9PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VsZWN0IHtcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICB3aWR0aDogMTIwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICBsZXQgZGF0YSA9IGF3YWl0IGltcG9ydCgnLi4vc3JjL3N5c3RlbXMuanNvbicpXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgc3lzdGVtczogZGF0YVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
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
//# sourceMappingURL=4.8231f8c6ba860c8c5122.hot-update.js.map