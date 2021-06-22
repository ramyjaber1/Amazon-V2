/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    items,\n    email\n  } = req.body;\n  console.log(email);\n  const transformedItems = items.map(item => ({\n    description: item.description,\n    quantity: 1,\n    price_data: {\n      currency: 'gbp',\n      unit_amount: item.price * 100,\n      product_data: {\n        name: item.title,\n        images: [item.image]\n      }\n    }\n  }));\n  const session = await stripe.checkout.sessions.create({\n    payment_method_types: [\"card\"],\n    shipping_rates: ['shr_1Iud7sB6A0DkiWZEOlq8vwUL'],\n    shipping_address_collection: {\n      allowed_countries: ['GB', 'US', 'CA']\n    },\n    line_items: transformedItems,\n    mode: 'payment',\n    success_url: `${process.env.HOST}/success`,\n    cancel_url: `${process.env.HOST}/checkout`,\n    metadata: {\n      email,\n      images: JSON.stringify(items.map(item => item.image))\n    }\n  });\n  res.status(200).json({\n    id: session.id\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzPzg3M2IiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJxdWFudGl0eSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwidGl0bGUiLCJpbWFnZXMiLCJpbWFnZSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19yYXRlcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwibGluZV9pdGVtcyIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIkhPU1QiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImlkIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBOUIsQ0FBZjs7QUFFQSwrREFBZSxPQUFNQyxHQUFOLEVBQVVDLEdBQVYsS0FBa0I7QUFDN0IsUUFBTTtBQUFDQyxTQUFEO0FBQU9DO0FBQVAsTUFBZ0JILEdBQUcsQ0FBQ0ksSUFBMUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0wsS0FBSyxDQUFDTSxHQUFOLENBQVVDLElBQUksS0FBSztBQUN4Q0MsZUFBVyxFQUFDRCxJQUFJLENBQUNDLFdBRHVCO0FBRXhDQyxZQUFRLEVBQUMsQ0FGK0I7QUFHeENDLGNBQVUsRUFBQztBQUNQQyxjQUFRLEVBQUUsS0FESDtBQUVQQyxpQkFBVyxFQUFDTCxJQUFJLENBQUNNLEtBQUwsR0FBYSxHQUZsQjtBQUdQQyxrQkFBWSxFQUFDO0FBQ1RDLFlBQUksRUFBQ1IsSUFBSSxDQUFDUyxLQUREO0FBRVRDLGNBQU0sRUFBQyxDQUFDVixJQUFJLENBQUNXLEtBQU47QUFGRTtBQUhOO0FBSDZCLEdBQUwsQ0FBZCxDQUF6QjtBQWNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNMUIsTUFBTSxDQUFDMkIsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE1BQXpCLENBQWdDO0FBQ2xEQyx3QkFBb0IsRUFBQyxDQUFDLE1BQUQsQ0FENkI7QUFFbERDLGtCQUFjLEVBQUMsQ0FBQyw4QkFBRCxDQUZtQztBQUdsREMsK0JBQTJCLEVBQUM7QUFDeEJDLHVCQUFpQixFQUFDLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYO0FBRE0sS0FIc0I7QUFNbERDLGNBQVUsRUFBQ3RCLGdCQU51QztBQU9sRHVCLFFBQUksRUFBQyxTQVA2QztBQVNsREMsZUFBVyxFQUFHLEdBQUVsQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWtDLElBQUssVUFUaUI7QUFVbERDLGNBQVUsRUFBSSxHQUFFcEMsT0FBTyxDQUFDQyxHQUFSLENBQVlrQyxJQUFLLFdBVmlCO0FBWWxERSxZQUFRLEVBQUM7QUFDTC9CLFdBREs7QUFFTGdCLFlBQU0sRUFBQ2dCLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEMsS0FBSyxDQUFDTSxHQUFOLENBQVVDLElBQUksSUFBR0EsSUFBSSxDQUFDVyxLQUF0QixDQUFmO0FBRkY7QUFaeUMsR0FBaEMsQ0FBdEI7QUFrQkFuQixLQUFHLENBQUNvQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsTUFBRSxFQUFFbEIsT0FBTyxDQUFDa0I7QUFBYixHQUFyQjtBQUdILENBdENEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXEscmVzKSA9PiB7XG4gICAgY29uc3Qge2l0ZW1zLGVtYWlsfSA9IHJlcS5ib2R5O1xuICAgIGNvbnNvbGUubG9nKGVtYWlsKVxuICAgIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBkZXNjcmlwdGlvbjppdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICBxdWFudGl0eToxLFxuICAgICAgICBwcmljZV9kYXRhOntcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnZ2JwJyxcbiAgICAgICAgICAgIHVuaXRfYW1vdW50Oml0ZW0ucHJpY2UgKiAxMDAgLFxuICAgICAgICAgICAgcHJvZHVjdF9kYXRhOntcbiAgICAgICAgICAgICAgICBuYW1lOml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOltpdGVtLmltYWdlXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9XG4gICAgfSkpO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczpbXCJjYXJkXCJdLFxuICAgICAgICBzaGlwcGluZ19yYXRlczpbJ3Nocl8xSXVkN3NCNkEwRGtpV1pFT2xxOHZ3VUwnXSxcbiAgICAgICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOntcbiAgICAgICAgICAgIGFsbG93ZWRfY291bnRyaWVzOlsnR0InLCdVUycsJ0NBJ10sXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVfaXRlbXM6dHJhbnNmb3JtZWRJdGVtcyxcbiAgICAgICAgbW9kZToncGF5bWVudCcsXG5cbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52LkhPU1R9L3N1Y2Nlc3NgLFxuICAgICAgICBjYW5jZWxfdXJsIDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vY2hlY2tvdXRgLFxuXG4gICAgICAgIG1ldGFkYXRhOntcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgaW1hZ2VzOkpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcChpdGVtID0+aXRlbS5pbWFnZSkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2lkOiBzZXNzaW9uLmlkfSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();