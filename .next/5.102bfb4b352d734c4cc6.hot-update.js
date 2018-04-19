webpackHotUpdate(5,{

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
    { "class": "systems", className: "jsx-2101461898",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "select",
      { size: "20", className: "jsx-2101461898",
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
              className: "jsx-2101461898",
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
      styleId: "2101461898",
      css: "select.jsx-2101461898{height:95vh;width:100px;}.systems.jsx-2101461898{width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3lzdGVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHcUIsQUFJQSxZQUhBLEFBSWQsWUFIQSIsImZpbGUiOiJjb21wb25lbnRzL1N5c3RlbXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmVrL0RvY3VtZW50cy9HaXRIdWIvcGktYWRtaW4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IFN5c3RlbXMgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzcz1cInN5c3RlbXNcIj5cbiAgICA8c2VsZWN0IHNpemU9XCIyMFwiPlxuICAgICAge3Byb3BzLnN5c3RlbXMubWFwKCh7c3lzdGVtfSkgPT4gKFxuICAgICAgICA8TGluayBrZXk9e3N5c3RlbS5pZH0gYXM9e2Avc3lzdGVtLyR7c3lzdGVtLmlkfWB9IGhyZWY9e2Avc3lzdGVtP2lkPSR7c3lzdGVtLmlkfWB9PlxuICAgICAgICAgIDxvcHRpb24+e3N5c3RlbS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWxlY3Qge1xuICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5zeXN0ZW1zIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN5c3RlbXNcbiJdfQ== */\n/*@ sourceURL=components/Systems.js */"
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
//# sourceMappingURL=5.102bfb4b352d734c4cc6.hot-update.js.map