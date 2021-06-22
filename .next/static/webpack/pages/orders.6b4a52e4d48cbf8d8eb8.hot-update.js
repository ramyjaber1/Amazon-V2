/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/components/Order.js":
/*!*********************************!*\
  !*** ./src/components/Order.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_twosavage_React_Projects_Amazon_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Order */ \"./src/components/Order.js\");\n/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Order__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/twosavage/React-Projects/Amazon-v2/src/pages/orders.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Orders(_ref) {\n  _s();\n\n  var _this = this;\n\n  var orders = _ref.orders;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)(),\n      _useSession2 = (0,_home_twosavage_React_Projects_Amazon_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),\n      session = _useSession2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"max-w-screen-lg p-10 mx-auto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"pb-1 mb-2 text-3xl border-b border-yellow-400\",\n        children: \"Your Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [orders.length, \" Orders\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \" Please Sign in to see your orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5 space-y-4\",\n        children: orders === null || orders === void 0 ? void 0 : orders.map(function (_ref2) {\n          var id = _ref2.id,\n              amount = _ref2.amount,\n              amountShipping = _ref2.amountShipping,\n              items = _ref2.items,\n              timestamp = _ref2.timestamp,\n              images = _ref2.images;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Order__WEBPACK_IMPORTED_MODULE_4___default()), {\n            id: id,\n            amount: amount,\n            amountShipping: amountShipping,\n            items: items,\n            timestamp: timestamp,\n            images: images\n          }, id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Orders, \"Vxy5gMemEU/s8dbgarDyE2/t+kg=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession];\n});\n\n_c = Orders;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\n\nvar _c;\n\n$RefreshReg$(_c, \"Orders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcz9hZmZkIl0sIm5hbWVzIjpbIk9yZGVycyIsIm9yZGVycyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJhbW91bnQiLCJhbW91bnRTaGlwcGluZyIsIml0ZW1zIiwidGltZXN0YW1wIiwiaW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxPQUEwQjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLE1BQVMsUUFBVEEsTUFBUzs7QUFBQSxvQkFDSkMsNERBQVUsRUFETjtBQUFBO0FBQUEsTUFDZkMsT0FEZTs7QUFFdEIsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyw4QkFBaEI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsK0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVDQSxPQUFPLGdCQUNKO0FBQUEsbUJBQUtGLE1BQU0sQ0FBQ0csTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESSxnQkFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxSLGVBUUk7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0JBQ0tILE1BREwsYUFDS0EsTUFETCx1QkFDS0EsTUFBTSxDQUFFSSxHQUFSLENBQVk7QUFBQSxjQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxjQUFLQyxNQUFMLFNBQUtBLE1BQUw7QUFBQSxjQUFZQyxjQUFaLFNBQVlBLGNBQVo7QUFBQSxjQUEyQkMsS0FBM0IsU0FBMkJBLEtBQTNCO0FBQUEsY0FBaUNDLFNBQWpDLFNBQWlDQSxTQUFqQztBQUFBLGNBQTJDQyxNQUEzQyxTQUEyQ0EsTUFBM0M7QUFBQSw4QkFDTCw4REFBQywwREFBRDtBQUVJLGNBQUUsRUFBRUwsRUFGUjtBQUdJLGtCQUFNLEVBQUVDLE1BSFo7QUFJSSwwQkFBYyxFQUFFQyxjQUpwQjtBQUtJLGlCQUFLLEVBQUVDLEtBTFg7QUFNSSxxQkFBUyxFQUFFQyxTQU5mO0FBT0ksa0JBQU0sRUFBRUM7QUFQWixhQUNTTCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREs7QUFBQSxTQUFaO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztHQTdCUU4sTTtVQUNhRSx3RDs7O0tBRGJGLE07O0FBK0JULCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL29yZGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZmlyZWJhc2UnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE9yZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvT3JkZXInXG5cblxuZnVuY3Rpb24gT3JkZXJzKHtvcmRlcnN9KSB7XG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBwLTEwIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGItMSBtYi0yIHRleHQtM3hsIGJvcmRlci1iIGJvcmRlci15ZWxsb3ctNDAwXCI+WW91ciBPcmRlcnM8L2gxPlxuICAgICAgICAgICAge3Nlc3Npb24gID8gKFxuICAgICAgICAgICAgICAgIDxoMj57b3JkZXJzLmxlbmd0aH0gT3JkZXJzPC9oMj5cbiAgICAgICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gUGxlYXNlIFNpZ24gaW4gdG8gc2VlIHlvdXIgb3JkZXJzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAge29yZGVycz8ubWFwKCh7aWQsYW1vdW50LGFtb3VudFNoaXBwaW5nLGl0ZW1zLHRpbWVzdGFtcCxpbWFnZXN9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRTaGlwcGluZz17YW1vdW50U2hpcHBpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wPXt0aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlcnNcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICAgIGNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKVxuXG4gICAgLy9HRVQgdGhlIHVzZXJzIGxvZ2dlZCBpbiBjcmVkZW50aWFscy4uLlxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbiAgICBpZighc2Vzc2lvbikge1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBwcm9wczp7fSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvL0ZpcmViYXNlIEZCXG4gICAgY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9jKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwib3JkZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3JkZXJCeSgndGltZXN0YW1wJywnZGVzYycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgLy9TVFJJUEUgT1JERVJTIFxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBzdHJpcGVPcmRlcnMuZG9jcy5tYXAoYXN5bmMob3JkZXIpID0+ICh7XG4gICAgICAgICAgICBpZDpvcmRlci5pZCxcbiAgICAgICAgICAgIGFtb3VudDpvcmRlci5kYXRhKCkuYW1vdW50LFxuICAgICAgICAgICAgYW1vdW50U2hpcHBpbmc6b3JkZXIuZGF0YSgpLmFtb3VudF9zaGlwcGluZyxcbiAgICAgICAgICAgIGltYWdlczpvcmRlci5kYXRhKCkuaW1hZ2VzLFxuICAgICAgICAgICAgdGltZXN0YW1wOm1vbWVudChvcmRlci5kYXRhKCkudGltZXN0YW1wLnRvRGF0ZSgpKS51bml4KCksXG4gICAgICAgICAgICBpdGVtczooXG4gICAgICAgICAgICAgICAgYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQse1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDoxMDBcbiAgICAgICAgICAgICAgICB9KSkuZGF0YSxcbiAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIG9yZGVycyxcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n");

/***/ })

});