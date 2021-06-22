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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/twosavage/React-Projects/Amazon-v2/src/components/Order.js\";\n\n\n\nfunction Order(_ref) {\n  var id = _ref.id,\n      amount = _ref.amount,\n      amountShipping = _ref.amountShipping,\n      items = _ref.items,\n      timestamp = _ref.timestamp,\n      images = _ref.images;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative border rounded-md\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex items-center space-x-10 text-sm text-gray-600 bg-gray-100\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-xs font-bold\",\n          children: \"ORDER PLACED\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: moment__WEBPACK_IMPORTED_MODULE_1___default().unix(timestamp).format(\"DD MM YYYY\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-xs font-bold\",\n          children: \"TOTAL\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {\n            quantity: amount,\n            currency: \"GBP\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 25\n          }, this), \" -NEXT Day Delivery\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {\n            quantity: amountShipping,\n            currency: \"GBP\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"self-end text-sm whitespace-nowrap sm:text-xl\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n_c = Order;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Order);\n\nvar _c;\n\n$RefreshReg$(_c, \"Order\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3JkZXIuanM/MTBkNCJdLCJuYW1lcyI6WyJPcmRlciIsImlkIiwiYW1vdW50IiwiYW1vdW50U2hpcHBpbmciLCJpdGVtcyIsInRpbWVzdGFtcCIsImltYWdlcyIsIm1vbWVudCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUFrRTtBQUFBLE1BQWxEQyxFQUFrRCxRQUFsREEsRUFBa0Q7QUFBQSxNQUEvQ0MsTUFBK0MsUUFBL0NBLE1BQStDO0FBQUEsTUFBeENDLGNBQXdDLFFBQXhDQSxjQUF3QztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFuQkMsU0FBbUIsUUFBbkJBLFNBQW1CO0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTO0FBQzlELHNCQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsZ0VBQWY7QUFBQSw4QkFDSTtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQUlDLGtEQUFBLENBQVlGLFNBQVosRUFBdUJHLE1BQXZCLENBQThCLFlBQTlCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU1JO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxrQ0FDSSw4REFBQyxpRUFBRDtBQUFVLG9CQUFRLEVBQUVOLE1BQXBCO0FBQTRCLG9CQUFRLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESix5QkFDcUUsR0FEckUsZUFFSSw4REFBQyxpRUFBRDtBQUFVLG9CQUFRLEVBQUVDLGNBQXBCO0FBQW9DLG9CQUFRLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFjSTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztLQXhCUUgsSztBQTBCVCwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL09yZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJ1xuXG5mdW5jdGlvbiBPcmRlcih7aWQsYW1vdW50LGFtb3VudFNoaXBwaW5nLGl0ZW1zLHRpbWVzdGFtcCxpbWFnZXN9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEwIHRleHQtc20gdGV4dC1ncmF5LTYwMCBiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkXCI+T1JERVIgUExBQ0VEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57bW9tZW50LnVuaXgodGltZXN0YW1wKS5mb3JtYXQoXCJERCBNTSBZWVlZXCIpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj5UT1RBTDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXthbW91bnR9IGN1cnJlbmN5PVwiR0JQXCIgLz4gLU5FWFQgRGF5IERlbGl2ZXJ5e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXthbW91bnRTaGlwcGluZ30gY3VycmVuY3k9XCJHQlBcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VsZi1lbmQgdGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBzbTp0ZXh0LXhsXCI+PC9wPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Order.js\n");

/***/ })

});