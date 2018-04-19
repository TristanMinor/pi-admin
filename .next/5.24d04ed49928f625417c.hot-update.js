webpackHotUpdate(5,{

/***/ "./pages/system.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Systems_js__ = __webpack_require__("./components/Systems.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_System_js__ = __webpack_require__("./components/System.js");

var _jsxFileName = '/Users/marek/Documents/GitHub/pi-admin/pages/system.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = PageSystem;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageSystem, 'PageSystem', '/Users/marek/Documents/GitHub/pi-admin/pages/system.js');
  reactHotLoader.register(_default, 'default', '/Users/marek/Documents/GitHub/pi-admin/pages/system.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/system")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.24d04ed49928f625417c.hot-update.js.map