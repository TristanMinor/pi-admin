webpackHotUpdate(4,{

/***/ "./components/Systems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/marek/Documents/GitHub/pi-admin/components/Systems.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var Systems = function Systems(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    { "class": "systems", className: "jsx-98403214",
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
      css: "select.jsx-98403214{height:95vh;width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3lzdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHcUIsWUFDQSxZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvU3lzdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyZWsvRG9jdW1lbnRzL0dpdEh1Yi9waS1hZG1pbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgU3lzdGVtcyA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzPVwic3lzdGVtc1wiPlxuICAgIDxzZWxlY3Qgc2l6ZT1cIjIwXCI+XG4gICAgICB7cHJvcHMuc3lzdGVtcy5tYXAoKHtzeXN0ZW19KSA9PiAoXG4gICAgICAgIDxMaW5rIGtleT17c3lzdGVtLmlkfSBhcz17YC9zeXN0ZW0vJHtzeXN0ZW0uaWR9YH0gaHJlZj17YC9zeXN0ZW0/aWQ9JHtzeXN0ZW0uaWR9YH0+XG4gICAgICAgICAgPG9wdGlvbj57c3lzdGVtLm5hbWV9PC9vcHRpb24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlbGVjdCB7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN5c3RlbXNcbiJdfQ== */\n/*@ sourceURL=components/Systems.js */"
    })
  );
};

var _default = Systems;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Systems, "Systems", "/Users/marek/Documents/GitHub/pi-admin/components/Systems.js");
  reactHotLoader.register(_default, "default", "/Users/marek/Documents/GitHub/pi-admin/components/Systems.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.edb2ecf063a525682263.hot-update.js.map