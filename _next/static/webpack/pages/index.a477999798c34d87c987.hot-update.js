webpackHotUpdate_N_E("pages/index",{

/***/ "./components/StateData.tsx":
/*!**********************************!*\
  !*** ./components/StateData.tsx ***!
  \**********************************/
/*! exports provided: StateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateData\", function() { return StateData; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var _MobilityData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobilityData */ \"./components/MobilityData.tsx\");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Timeline */ \"./components/Timeline.tsx\");\n/* harmony import */ var _RestrictionsTimeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RestrictionsTimeline */ \"./components/RestrictionsTimeline.tsx\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ \"./data.json\", 1);\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/StateData.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nconsole.log(_data_json__WEBPACK_IMPORTED_MODULE_6__);\nvar StateData = function StateData(_ref) {\n  var state = _ref.state;\n  var stateData = _data_json__WEBPACK_IMPORTED_MODULE_6__.find(function (item) {\n    return item.name === state;\n  });\n  if (!stateData) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"p-6 px-10 lg:px-20\",\n    id: state,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex align-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"title relative\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"font-light text-gray-300 absolute right-full mr-4\",\n          href: \"#\".concat(state),\n          children: \"#\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), state]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"mt-6 mb-24\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"heading\",\n        children: [\"Mobility\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"font-extralight\",\n          children: \"(Change from baseline)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MobilityData__WEBPACK_IMPORTED_MODULE_3__[\"MobilityData\"], {\n        data: stateData[\"mobility\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"mt-6 mb-40\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"heading\",\n        children: \"Restrictions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RestrictionsTimeline__WEBPACK_IMPORTED_MODULE_5__[\"RestrictionsTimeline\"], {\n        data: stateData[\"restrictions\"],\n        xAccessor: xAccessor\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"mt-6 mb-24\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"heading\",\n        children: \"COVID Cases\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"Timeline\"], {\n        data: stateData[\"covidStats\"],\n        xAccessor: xAccessor,\n        yAccessors: [function (d) {\n          return d[\"Cases_Total\"];\n        }]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"heading\",\n        children: \"COVID Deaths\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"Timeline\"], {\n        data: stateData[\"covidStats\"],\n        xAccessor: xAccessor,\n        yAccessors: [function (d) {\n          return d[\"Deaths_Total\"];\n        }]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n_c = StateData;\nvar parseDate = Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"timeParse\"])(\"%Y%m%d\");\n\nvar xAccessor = function xAccessor(d) {\n  return parseDate(d[\"Date\"]);\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"StateData\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0ZURhdGEudHN4P2UyOGQiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImRhdGEiLCJTdGF0ZURhdGEiLCJzdGF0ZSIsInN0YXRlRGF0YSIsImZpbmQiLCJpdGVtIiwibmFtZSIsInhBY2Nlc3NvciIsImQiLCJwYXJzZURhdGUiLCJ0aW1lUGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1Q0FBWjtBQUtPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUM3QyxNQUFNQyxTQUFTLEdBQUlILHVDQUFELENBQTBCSSxJQUExQixDQUNoQixVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDQyxJQUFMLEtBQWNKLEtBQXhCO0FBQUEsR0FEZ0IsQ0FBbEI7QUFHQSxNQUFJLENBQUNDLFNBQUwsRUFBZ0IsT0FBTyxJQUFQO0FBRWhCLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQW9DLE1BQUUsRUFBRUQsS0FBeEM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyxtREFEWjtBQUVFLGNBQUksYUFBTUEsS0FBTixDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBT0dBLEtBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFBUyxlQUFTLEVBQUMsWUFBbkI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBLCtCQUNXLEdBRFgsZUFFRTtBQUFNLG1CQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UscUVBQUMsMERBQUQ7QUFBYyxZQUFJLEVBQUVDLFNBQVMsQ0FBQyxVQUFEO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixlQXFCRTtBQUFTLGVBQVMsRUFBQyxZQUFuQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQywwRUFBRDtBQUNFLFlBQUksRUFBRUEsU0FBUyxDQUFDLGNBQUQsQ0FEakI7QUFFRSxpQkFBUyxFQUFFSTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkYsZUE2QkU7QUFBUyxlQUFTLEVBQUMsWUFBbkI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsa0RBQUQ7QUFDRSxZQUFJLEVBQUVKLFNBQVMsQ0FBQyxZQUFELENBRGpCO0FBRUUsaUJBQVMsRUFBRUksU0FGYjtBQUdFLGtCQUFVLEVBQUUsQ0FBQyxVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQyxhQUFELENBQVI7QUFBQSxTQUFEO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBT0U7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFLHFFQUFDLGtEQUFEO0FBQ0UsWUFBSSxFQUFFTCxTQUFTLENBQUMsWUFBRCxDQURqQjtBQUVFLGlCQUFTLEVBQUVJLFNBRmI7QUFHRSxrQkFBVSxFQUFFLENBQUMsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUMsY0FBRCxDQUFSO0FBQUEsU0FBRDtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FwRE07S0FBTVAsUztBQXNEYixJQUFNUSxTQUFTLEdBQUdDLG9EQUFTLENBQUMsUUFBRCxDQUEzQjs7QUFDQSxJQUFNSCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFEO0FBQUEsU0FBWUMsU0FBUyxDQUFDRCxDQUFDLENBQUMsTUFBRCxDQUFGLENBQXJCO0FBQUEsQ0FBbEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRlRGF0YS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0aW1lUGFyc2UgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFN0YXRlRGF0YVR5cGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgTW9iaWxpdHlEYXRhIH0gZnJvbSBcIi4vTW9iaWxpdHlEYXRhXCI7XG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gXCIuL1RpbWVsaW5lXCI7XG5pbXBvcnQgeyBSZXN0cmljdGlvbnNUaW1lbGluZSB9IGZyb20gXCIuL1Jlc3RyaWN0aW9uc1RpbWVsaW5lXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS5qc29uXCI7XG5cbmNvbnNvbGUubG9nKGRhdGEpO1xudHlwZSBQcm9wcyA9IHtcbiAgc3RhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0ZURhdGEgPSAoeyBzdGF0ZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdGF0ZURhdGEgPSAoZGF0YSBhcyBTdGF0ZURhdGFUeXBlW10pLmZpbmQoXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3RhdGVcbiAgKTtcbiAgaWYgKCFzdGF0ZURhdGEpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcHgtMTAgbGc6cHgtMjBcIiBpZD17c3RhdGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWdyYXktMzAwIGFic29sdXRlIHJpZ2h0LWZ1bGwgbXItNFwiXG4gICAgICAgICAgICBocmVmPXtgIyR7c3RhdGV9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAjXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHtzdGF0ZX1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC02IG1iLTI0XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgTW9iaWxpdHl7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0XCI+KENoYW5nZSBmcm9tIGJhc2VsaW5lKTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPE1vYmlsaXR5RGF0YSBkYXRhPXtzdGF0ZURhdGFbXCJtb2JpbGl0eVwiXX0gLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtNiBtYi00MFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlJlc3RyaWN0aW9uczwvaDI+XG4gICAgICAgIDxSZXN0cmljdGlvbnNUaW1lbGluZVxuICAgICAgICAgIGRhdGE9e3N0YXRlRGF0YVtcInJlc3RyaWN0aW9uc1wiXX1cbiAgICAgICAgICB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtNiBtYi0yNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkNPVklEIENhc2VzPC9oMj5cbiAgICAgICAgPFRpbWVsaW5lXG4gICAgICAgICAgZGF0YT17c3RhdGVEYXRhW1wiY292aWRTdGF0c1wiXX1cbiAgICAgICAgICB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn1cbiAgICAgICAgICB5QWNjZXNzb3JzPXtbKGQpID0+IGRbXCJDYXNlc19Ub3RhbFwiXV19XG4gICAgICAgIC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+Q09WSUQgRGVhdGhzPC9oMj5cbiAgICAgICAgPFRpbWVsaW5lXG4gICAgICAgICAgZGF0YT17c3RhdGVEYXRhW1wiY292aWRTdGF0c1wiXX1cbiAgICAgICAgICB4QWNjZXNzb3I9e3hBY2Nlc3Nvcn1cbiAgICAgICAgICB5QWNjZXNzb3JzPXtbKGQpID0+IGRbXCJEZWF0aHNfVG90YWxcIl1dfVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcGFyc2VEYXRlID0gdGltZVBhcnNlKFwiJVklbSVkXCIpO1xuY29uc3QgeEFjY2Vzc29yID0gKGQ6IGFueSkgPT4gcGFyc2VEYXRlKGRbXCJEYXRlXCJdKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StateData.tsx\n");

/***/ })

})