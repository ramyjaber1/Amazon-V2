/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_twosavage_React_Projects_Amazon_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Order */ \"./src/components/Order.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/twosavage/React-Projects/Amazon-v2/src/pages/orders.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Orders(_ref) {\n  _s();\n\n  var _this = this;\n\n  var orders = _ref.orders;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)(),\n      _useSession2 = (0,_home_twosavage_React_Projects_Amazon_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),\n      session = _useSession2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"max-w-screen-lg p-10 mx-auto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"pb-1 mb-2 text-3xl border-b border-yellow-400\",\n        children: \"Your Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [orders.length, \" Orders\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \" Please Sign in to see your orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5 space-y-4\",\n        children: orders === null || orders === void 0 ? void 0 : orders.map(function (_ref2) {\n          var id = _ref2.id,\n              amount = _ref2.amount,\n              amountShipping = _ref2.amountShipping,\n              items = _ref2.items,\n              timestamp = _ref2.timestamp,\n              images = _ref2.images;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Order__WEBPACK_IMPORTED_MODULE_4__.default, {\n            id: id,\n            amount: amount,\n            amountShipping: amountShipping,\n            items: items,\n            timestamp: timestamp,\n            images: images\n          }, id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Orders, \"Vxy5gMemEU/s8dbgarDyE2/t+kg=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession];\n});\n\n_c = Orders;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\n\nvar _c;\n\n$RefreshReg$(_c, \"Orders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcz9hZmZkIl0sIm5hbWVzIjpbIk9yZGVycyIsIm9yZGVycyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJhbW91bnQiLCJhbW91bnRTaGlwcGluZyIsIml0ZW1zIiwidGltZXN0YW1wIiwiaW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQTBCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUFBLG9CQUNKQyw0REFBVSxFQUROO0FBQUE7QUFBQSxNQUNmQyxPQURlOztBQUV0QixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sZUFBUyxFQUFDLDhCQUFoQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUNBLE9BQU8sZ0JBQ0o7QUFBQSxtQkFBS0YsTUFBTSxDQUFDRyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJLGdCQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTFIsZUFRSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQkFDS0gsTUFETCxhQUNLQSxNQURMLHVCQUNLQSxNQUFNLENBQUVJLEdBQVIsQ0FBWTtBQUFBLGNBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLGNBQUtDLE1BQUwsU0FBS0EsTUFBTDtBQUFBLGNBQVlDLGNBQVosU0FBWUEsY0FBWjtBQUFBLGNBQTJCQyxLQUEzQixTQUEyQkEsS0FBM0I7QUFBQSxjQUFpQ0MsU0FBakMsU0FBaUNBLFNBQWpDO0FBQUEsY0FBMkNDLE1BQTNDLFNBQTJDQSxNQUEzQztBQUFBLDhCQUNMLDhEQUFDLHNEQUFEO0FBRUksY0FBRSxFQUFFTCxFQUZSO0FBR0ksa0JBQU0sRUFBRUMsTUFIWjtBQUlJLDBCQUFjLEVBQUVDLGNBSnBCO0FBS0ksaUJBQUssRUFBRUMsS0FMWDtBQU1JLHFCQUFTLEVBQUVDLFNBTmY7QUFPSSxrQkFBTSxFQUFFQztBQVBaLGFBQ1NMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESztBQUFBLFNBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBN0JRTixNO1VBQ2FFLHdEOzs7S0FEYkYsTTs7QUErQlQsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3JkZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZmlyZWJhc2UnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE9yZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvT3JkZXInXG5cbmZ1bmN0aW9uIE9yZGVycyh7b3JkZXJzfSkge1xuICAgIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgcC0xMCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBiLTEgbWItMiB0ZXh0LTN4bCBib3JkZXItYiBib3JkZXIteWVsbG93LTQwMFwiPllvdXIgT3JkZXJzPC9oMT5cbiAgICAgICAgICAgIHtzZXNzaW9uICA/IChcbiAgICAgICAgICAgICAgICA8aDI+e29yZGVycy5sZW5ndGh9IE9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgKTogKFxuICAgICAgICAgICAgICAgICAgICA8aDI+IFBsZWFzZSBTaWduIGluIHRvIHNlZSB5b3VyIG9yZGVyczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnM/Lm1hcCgoe2lkLGFtb3VudCxhbW91bnRTaGlwcGluZyxpdGVtcyx0aW1lc3RhbXAsaW1hZ2VzfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50U2hpcHBpbmc9e2Ftb3VudFNoaXBwaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17dGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc30gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgICBjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSlcblxuICAgIC8vR0VUIHRoZSB1c2VycyBsb2dnZWQgaW4gY3JlZGVudGlhbHMuLi5cblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuXG4gICAgaWYoIXNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgcHJvcHM6e30sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy9GaXJlYmFzZSBGQlxuICAgIGNvbnN0IHN0cmlwZU9yZGVycyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvYyhzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcIm9yZGVyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9yZGVyQnkoJ3RpbWVzdGFtcCcsJ2Rlc2MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCgpO1xuICAgIC8vU1RSSVBFIE9SREVSUyBcbiAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgc3RyaXBlT3JkZXJzLmRvY3MubWFwKGFzeW5jKG9yZGVyKSA9PiAoe1xuICAgICAgICAgICAgaWQ6b3JkZXIuaWQsXG4gICAgICAgICAgICBhbW91bnQ6b3JkZXIuZGF0YSgpLmFtb3VudCxcbiAgICAgICAgICAgIGFtb3VudFNoaXBwaW5nOm9yZGVyLmRhdGEoKS5hbW91bnRfc2hpcHBpbmcsXG4gICAgICAgICAgICBpbWFnZXM6b3JkZXIuZGF0YSgpLmltYWdlcyxcbiAgICAgICAgICAgIHRpbWVzdGFtcDptb21lbnQob3JkZXIuZGF0YSgpLnRpbWVzdGFtcC50b0RhdGUoKSkudW5peCgpLFxuICAgICAgICAgICAgaXRlbXM6KFxuICAgICAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5saXN0TGluZUl0ZW1zKG9yZGVyLmlkLHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6MTAwXG4gICAgICAgICAgICAgICAgfSkpLmRhdGEsXG4gICAgICAgIH0pKVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBvcmRlcnMsXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n");

/***/ })

});