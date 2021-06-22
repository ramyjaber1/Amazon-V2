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
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ \"micro\");\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);\n\n //Secrue Connection to FIREBASE from backend\n\nconst serviceAccount = __webpack_require__(/*! ../../../permissions.json */ \"./permissions.json\");\n\nconst app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({\n  credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)\n}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app(); //Establish connection to Stripe\n\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\nconst endpointSecret = process.env.STRIPE_SIGNING_SECRET;\n\nconst fulfillOrder = async session => {\n  //console.log('Fulfilling order',session)\n  return app.firestore().collection(\"users\").doc(session.metadata.email).collection(\"orders\").doc(session.id).set({\n    amount: session.amount_total / 100,\n    amount_shipping: session.total_details.amount_shipping / 100,\n    images: JSON.parse(session.metadata.images),\n    timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()\n  }).then(() => {\n    console.log(`Success: Order ${session.id} had been added to the DB`);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const requestBuffer = await (0,micro__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);\n    const payload = requestBuffer.toString();\n    const sig = req.headers[\"stripe-signature\"];\n    let event; //Verify that the EVENT posted came from stripe\n\n    try {\n      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);\n    } catch (err) {\n      console.log('Error', err.message);\n      return res.status(400).send(`Webhoook error: ${err.message}`);\n    } //Handle the checkout.session.completed event\n\n\n    if (event.type === 'checkout.session.completed') {\n      const session = event.data.object; //FulFill The Order \n\n      return fulfillOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook Error ${err.message}`));\n    }\n  }\n});\nconst config = {\n  api: {\n    bodyParser: false,\n    externalResolver: true\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanM/NGY2ZiJdLCJuYW1lcyI6WyJzZXJ2aWNlQWNjb3VudCIsInJlcXVpcmUiLCJhcHAiLCJhZG1pbiIsImNyZWRlbnRpYWwiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJlbmRwb2ludFNlY3JldCIsIlNUUklQRV9TSUdOSU5HX1NFQ1JFVCIsImZ1bGZpbGxPcmRlciIsInNlc3Npb24iLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVxdWVzdEJ1ZmZlciIsImJ1ZmZlciIsInBheWxvYWQiLCJ0b1N0cmluZyIsInNpZyIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJlcnIiLCJtZXNzYWdlIiwic3RhdHVzIiwic2VuZCIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiY2F0Y2giLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLE1BQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyxxREFBRCxDQUE5Qjs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQ0MsdURBQUQsR0FBcUJBLHlEQUFBLENBQW9CO0FBQ2pEQyxZQUFVLEVBQUNELDJEQUFBLENBQXNCSCxjQUF0QjtBQURzQyxDQUFwQixDQUFyQixHQUVQRywrQ0FBQSxFQUZMLEMsQ0FJQTs7QUFFQSxNQUFNRSxNQUFNLEdBQUdKLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkssT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE5QixDQUFmOztBQUVBLE1BQU1DLGNBQWMsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLHFCQUFuQzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsTUFBTUMsT0FBTixJQUFrQjtBQUNuQztBQUNBLFNBQU9WLEdBQUcsQ0FBQ1csU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsT0FBM0IsRUFBb0NDLEdBQXBDLENBQXdDSCxPQUFPLENBQUNJLFFBQVIsQ0FBaUJDLEtBQXpELEVBQWdFSCxVQUFoRSxDQUEyRSxRQUEzRSxFQUFxRkMsR0FBckYsQ0FBeUZILE9BQU8sQ0FBQ00sRUFBakcsRUFBcUdDLEdBQXJHLENBQXlHO0FBQzVHQyxVQUFNLEVBQUNSLE9BQU8sQ0FBQ1MsWUFBUixHQUF1QixHQUQ4RTtBQUU1R0MsbUJBQWUsRUFBQ1YsT0FBTyxDQUFDVyxhQUFSLENBQXNCRCxlQUF0QixHQUF3QyxHQUZvRDtBQUc1R0UsVUFBTSxFQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2QsT0FBTyxDQUFDSSxRQUFSLENBQWlCUSxNQUE1QixDQUhxRztBQUk1R0csYUFBUyxFQUFFeEIsZ0ZBQUE7QUFKaUcsR0FBekcsRUFLSnlCLElBTEksQ0FLQyxNQUFNO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLGtCQUFpQmxCLE9BQU8sQ0FBQ00sRUFBRywyQkFBekM7QUFDSCxHQVBNLENBQVA7QUFRSCxDQVZEOztBQVlBLCtEQUFlLE9BQU9hLEdBQVAsRUFBV0MsR0FBWCxLQUFtQjtBQUM5QixNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFsQixFQUF5QjtBQUNyQixVQUFNQyxhQUFhLEdBQUksTUFBTUMsNkNBQU0sQ0FBQ0osR0FBRCxDQUFuQztBQUNBLFVBQU1LLE9BQU8sR0FBR0YsYUFBYSxDQUFDRyxRQUFkLEVBQWhCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHUCxHQUFHLENBQUNRLE9BQUosQ0FBWSxrQkFBWixDQUFaO0FBRUEsUUFBSUMsS0FBSixDQUxxQixDQU9yQjs7QUFDQSxRQUFHO0FBQ0NBLFdBQUssR0FBR25DLE1BQU0sQ0FBQ29DLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCTixPQUEvQixFQUF1Q0UsR0FBdkMsRUFBMkM3QixjQUEzQyxDQUFSO0FBRUgsS0FIRCxDQUdDLE9BQU1rQyxHQUFOLEVBQVU7QUFDUGQsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQmEsR0FBRyxDQUFDQyxPQUF4QjtBQUNBLGFBQU9aLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCLG1CQUFrQkgsR0FBRyxDQUFDQyxPQUFRLEVBQXBELENBQVA7QUFDSCxLQWRvQixDQWdCckI7OztBQUNBLFFBQUdKLEtBQUssQ0FBQ08sSUFBTixLQUFlLDRCQUFsQixFQUErQztBQUMzQyxZQUFNbkMsT0FBTyxHQUFHNEIsS0FBSyxDQUFDUSxJQUFOLENBQVdDLE1BQTNCLENBRDJDLENBRzNDOztBQUNBLGFBQU90QyxZQUFZLENBQUNDLE9BQUQsQ0FBWixDQUNDZ0IsSUFERCxDQUNNLE1BQU1JLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsQ0FEWixFQUVDSyxLQUZELENBRU9QLEdBQUcsSUFBS1gsR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBc0IsaUJBQWdCSCxHQUFHLENBQUNDLE9BQVEsRUFBbEQsQ0FGZixDQUFQO0FBSUg7QUFDSjtBQUNKLENBNUJEO0FBOEJPLE1BQU1PLE1BQU0sR0FBRztBQUNsQkMsS0FBRyxFQUFFO0FBQ0RDLGNBQVUsRUFBQyxLQURWO0FBRURDLG9CQUFnQixFQUFDO0FBRmhCO0FBRGEsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvd2ViaG9vay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YnVmZmVyfSBmcm9tICdtaWNybyc7XG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbidcblxuLy9TZWNydWUgQ29ubmVjdGlvbiB0byBGSVJFQkFTRSBmcm9tIGJhY2tlbmRcbmNvbnN0IHNlcnZpY2VBY2NvdW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vcGVybWlzc2lvbnMuanNvbicpXG5jb25zdCBhcHAgPSAhYWRtaW4uYXBwcy5sZW5ndGggPyBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOmFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudClcbn0pIDogYWRtaW4uYXBwKClcblxuLy9Fc3RhYmxpc2ggY29ubmVjdGlvbiB0byBTdHJpcGVcblxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpXG5cbmNvbnN0IGVuZHBvaW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSSVBFX1NJR05JTkdfU0VDUkVUXG5cbmNvbnN0IGZ1bGZpbGxPcmRlciA9IGFzeW5jKHNlc3Npb24pID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKCdGdWxmaWxsaW5nIG9yZGVyJyxzZXNzaW9uKVxuICAgIHJldHVybiBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhzZXNzaW9uLm1ldGFkYXRhLmVtYWlsKS5jb2xsZWN0aW9uKFwib3JkZXJzXCIpLmRvYyhzZXNzaW9uLmlkKS5zZXQoe1xuICAgICAgICBhbW91bnQ6c2Vzc2lvbi5hbW91bnRfdG90YWwgLyAxMDAgLFxuICAgICAgICBhbW91bnRfc2hpcHBpbmc6c2Vzc2lvbi50b3RhbF9kZXRhaWxzLmFtb3VudF9zaGlwcGluZyAvIDEwMCAsXG4gICAgICAgIGltYWdlczpKU09OLnBhcnNlKHNlc3Npb24ubWV0YWRhdGEuaW1hZ2VzKSxcbiAgICAgICAgdGltZXN0YW1wOiBhZG1pbi5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2VzczogT3JkZXIgJHtzZXNzaW9uLmlkfSBoYWQgYmVlbiBhZGRlZCB0byB0aGUgREJgKVxuICAgIH0pXG59IFxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcykgPT4ge1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RCdWZmZXIgPSAgYXdhaXQgYnVmZmVyKHJlcSlcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlcXVlc3RCdWZmZXIudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qgc2lnID0gcmVxLmhlYWRlcnNbXCJzdHJpcGUtc2lnbmF0dXJlXCJdXG4gICAgXG4gICAgICAgIGxldCBldmVudDtcblxuICAgICAgICAvL1ZlcmlmeSB0aGF0IHRoZSBFVkVOVCBwb3N0ZWQgY2FtZSBmcm9tIHN0cmlwZVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChwYXlsb2FkLHNpZyxlbmRwb2ludFNlY3JldCk7XG5cbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLGVyci5tZXNzYWdlKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBXZWJob29vayBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9IYW5kbGUgdGhlIGNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkIGV2ZW50XG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT09ICdjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCcpe1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0XG5cbiAgICAgICAgICAgIC8vRnVsRmlsbCBUaGUgT3JkZXIgXG4gICAgICAgICAgICByZXR1cm4gZnVsZmlsbE9yZGVyKHNlc3Npb24pXG4gICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzLnN0YXR1cygyMDApKVxuICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBXZWJob29rIEVycm9yICR7ZXJyLm1lc3NhZ2V9YCkpXG5cbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBib2R5UGFyc2VyOmZhbHNlLFxuICAgICAgICBleHRlcm5hbFJlc29sdmVyOnRydWVcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/webhook.js\n");

/***/ }),

/***/ "./permissions.json":
/*!**************************!*\
  !*** ./permissions.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"type":"service_account","project_id":"v2-da87f","private_key_id":"b18ab576aee8e964abc3e04dcf153c72d1be1c30","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCPOBx18RG7R3h1\\nA+7JdHCDZly96LC4bispTZQTUhs4JLBaYa5MbIs310Ezjk6/U7nN6xTjxpg1f4SY\\nX7MtbRbXvs2v0TiTHnbKDhbjoVbzYiHpx9+YtTw47UzsUB0WAYTzcs00BIulfuZP\\nC9HdJQqzw3XF2OxjucOBsO8+Jh1g+qNGa/yU3ih6rjl77IC2s65QohVi2Amm/pdh\\ncC9/cnkYRJ5wrz2d68uH6TPn6pEPulKKabUodelMXnj4G+YHAGHOnOHKYkN9SEaS\\nHbJ980TatJN6b4oHqOF6peb74DBG+LA6ZCnyY/YT7VxHasQvyL1uzqRlqVhg1C6p\\nPvXeXA9TAgMBAAECggEAFTaXR0Q9lJ2e8sdyLdu13fiiTFd0Ht/j5mUWcDrX9kZq\\nP/uPm26eZlcsp1bGROJBYgXrx7B+6Lmqaalkeu+EE9EFWqvk3dcEJaSARmzQ2hGT\\nJV3/Y/lAN3cKpEavhYwUZbzU4TC6gHkIjZ/Eu3qaQwsfXX6RG6pZvNLOH535+bGd\\na/9z2fPZ3Cz6x+CMLp3i0VhxS7VbLnN5AW9ETZQZNZRWKopd8rJtWabtxkW7X6XT\\nM8z55zYf3aaUyP30RVy4GvT4l80UOw4Ll/oov3i61MS2Hcz/8Z0qCI6gKE/87gaP\\n4sLIDT3hIJTe4Q7pDp/hP+743+X9rp0Akho+dbf1JQKBgQC/fSenO4Mr1NLBsUmm\\nyxIbUCEwfclcl6Ht1+eDbj2wgeyQPmw87Io0+oum1dUMVtZOZqZleYSYQaYKBbCN\\nxkg/EjQrqSruBs1DrwKiKKhjytWu07iodoWt94HgODYKrXTbnHuEYid0OimQ48X6\\nVb1J56jTHtAzABtp4U5fpY4LPQKBgQC/d/br7IwBNIbWCWA6nCpSEB0IJEbEsdQi\\nWL4NWGw14MhqtGdSb7sRZYOT0Q8EqoM3YLD8Z1G5Bl2zh864wPfG+BHjYtxpA6p8\\nedNKRiRoPwyuz9ogJ3Tiq8j1ExXU5nFt7qpAIFPUApSSU29I7zOLepazQ53k6ZbG\\nPM352BhtzwKBgEVP3gyQZBh3fpoRvCEdnD46sOjGfx5+3GQlJG3Ud4vuW1yS28bp\\nr9UhY29OM0G2JPhX+577b11VVe6GxLNstDXwNuYe46Uo3R/Et2VO5jTI9LPFey+v\\nRxADaQVqE1WmF4huid8PUEynyOfjKoREiLG5oshYfPAY99NJdH72hAXZAoGALA0H\\nrEPh+i0BkKDbmOBxBCxc4ZCnD33yVmygXSWoz8SFl7clxluaaGg4m3uPvv0T71u5\\nnHiQ3sbOLA3ky7Dp0McmJnCKUUbcpILKz93PZoSLAHUltBwf0j6/n1LixPa3xhkQ\\n5mwJnU9yqy+y/M67xy1PGrNF0nLDk5xNr1u+UxUCgYBEd7agGV0GA7kNYfgHDuEJ\\nveRtX/PEmN04U6IuyNC/18cagKnZ3yHGWScOK6U0hkYWh1hmspcH0rZ2P8ptfu4m\\n4uXmAD1VUUTBoXbA9Sy+b/FXQoEq+XJjbci+rj/YNQwAjFRuDhR8McvA1WMSoXDg\\nd+0IqUuQcMTMaD0bmhU3Fw==\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-qyek0@v2-da87f.iam.gserviceaccount.com","client_id":"105910385795462510085","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qyek0%40v2-da87f.iam.gserviceaccount.com"}');

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase-admin");;

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("micro");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();