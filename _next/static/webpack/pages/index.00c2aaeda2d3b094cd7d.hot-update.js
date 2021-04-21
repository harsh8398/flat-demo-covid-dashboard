webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/fromPairs */ \"./node_modules/lodash/fromPairs.js\");\n/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar formatDate = function formatDate(d) {\n  return d.getDate() === 1 ? Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %Y\")(d) : Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %-d, %Y\")(d);\n};\n\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor;\n  var filteredData = data.filter(function (d) {\n    return Object.values(d).find(function (d) {\n      return typeof d === \"number\";\n    });\n  });\n  var lineOffset = 1.6;\n  var yOffset = lineOffset * 6 / 2; // @ts-ignore\n\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleTime\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"])(filteredData, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(3).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain([0, 5]).range([100, 0]);\n  var yTicks = yScale.ticks(5).map(function (tick) {\n    return [yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(filteredData);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(filteredData);\n  };\n\n  var lastPoint = filteredData.slice(-1)[0] || {};\n  console.log(lastPoint, filteredData);\n  var keys = Object.keys(lastPoint).filter(function (d) {\n    return d !== \"Date\";\n  });\n  var keyColors = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_4___default()(keys.map(function (key, i) {\n    return [key, colors[i % colors.length]];\n  }));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    style: {\n      height: 400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-full flex-none w-0\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute right-0 top-0 bottom-0\",\n        children: keys.map(function (key, i) {\n          return lastPoint[key] !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute \".concat(keyColors[key], \" text-right right-0 -mt-6 whitespace-nowrap\"),\n            style: {\n              top: \"\".concat(yScale(lastPoint[key]), \"%\")\n            },\n            children: [key, \" \", lastPoint[key]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"overflow-visible w-full h-full\",\n        preserveAspectRatio: \"none\",\n        viewBox: [0, yOffset, 100, 100].join(\" \"),\n        children: [Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"range\"])(1, 6).map(function (i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(yScale(i - 0.5) + yOffset, \")\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n              x2: \"100\",\n              className: \"text-gray-200 stroke-current\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this);\n        }), keys.map(function (key, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: lineGenerator(function (d) {\n                return d[key];\n              }) || \"\",\n              className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n              fill: \"none\",\n              strokeWidth: \"4\",\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full h-10 mt-6 whitespace-nowrap\",\n        children: xTicks.map(function (_ref4) {\n          var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n              offset = _ref5[0],\n              value = _ref5[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute w-0 flex justify-center tabular-nums\",\n            style: {\n              left: \"\".concat(offset, \"%\")\n            },\n            children: value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZCIsImdldERhdGUiLCJ0aW1lRm9ybWF0IiwiUmVzdHJpY3Rpb25zVGltZWxpbmUiLCJkYXRhIiwieEFjY2Vzc29yIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiT2JqZWN0IiwidmFsdWVzIiwiZmluZCIsImxpbmVPZmZzZXQiLCJ5T2Zmc2V0IiwieFNjYWxlIiwic2NhbGVUaW1lIiwiZG9tYWluIiwiZXh0ZW50IiwicmFuZ2UiLCJ4VGlja3MiLCJ0aWNrcyIsIm1hcCIsInRpY2siLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInlUaWNrcyIsInRvTG9jYWxlU3RyaW5nIiwiYXJlYUdlbmVyYXRvciIsInlBY2Nlc3NvciIsImFyZWEiLCJ4IiwieTAiLCJ5MSIsImRlZmluZWQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImxpbmVHZW5lcmF0b3IiLCJsaW5lIiwieSIsImxhc3RQb2ludCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImtleXMiLCJrZXlDb2xvcnMiLCJmcm9tUGFpcnMiLCJrZXkiLCJpIiwiY29sb3JzIiwibGVuZ3RoIiwiaGVpZ2h0Iiwib2Zmc2V0IiwidmFsdWUiLCJ0b3AiLCJ1bmRlZmluZWQiLCJqb2luIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTs7QUFRQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFEO0FBQUEsU0FDakJBLENBQUMsQ0FBQ0MsT0FBRixPQUFnQixDQUFoQixHQUFvQkMscURBQVUsQ0FBQyxRQUFELENBQVYsQ0FBcUJGLENBQXJCLENBQXBCLEdBQThDRSxxREFBVSxDQUFDLGFBQUQsQ0FBVixDQUEwQkYsQ0FBMUIsQ0FEN0I7QUFBQSxDQUFuQjs7QUFFTyxJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JB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dUNBRlg7QUFLRSxrQkFBSSxFQUFDLE1BTFA7QUFNRSx5QkFBVyxFQUFDLEdBTmQ7QUFPRSwyQkFBYSxFQUFDLE9BUGhCO0FBUUUsNEJBQWMsRUFBQyxPQVJqQjtBQVNFLDBCQUFZLEVBQUM7QUFUZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBUUYsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVCxDQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQThDRTtBQUFLLGlCQUFTLEVBQUMsb0NBQWY7QUFBQSxrQkFDRzVCLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXO0FBQUE7QUFBQSxjQUFFOEIsTUFBRjtBQUFBLGNBQVVDLEtBQVY7O0FBQUEsOEJBQ1Y7QUFDRSxxQkFBUyxFQUFDLCtDQURaO0FBRUUsaUJBQUssRUFBRTtBQUFFSSxrQkFBSSxZQUFLTCxNQUFMO0FBQU4sYUFGVDtBQUFBLHNCQUlHQztBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBFRCxDQS9HTTtLQUFNaEQsb0I7QUFpSGIsSUFBTTRDLE1BQU0sR0FBRyxDQUNiLGlCQURhLEVBRWIsZ0JBRmEsRUFHYixpQkFIYSxFQUliLGVBSmEsRUFLYixlQUxhLEVBTWIsZUFOYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBleHRlbnQsXG4gIHJhbmdlLFxuICBzY2FsZUxpbmVhcixcbiAgc2NhbGVUaW1lLFxuICBhcmVhLFxuICBsaW5lLFxuICB0aW1lRm9ybWF0LFxufSBmcm9tIFwiZDNcIjtcbmltcG9ydCBmcm9tUGFpcnMgZnJvbSBcImxvZGFzaC9mcm9tUGFpcnNcIjtcblxudHlwZSBBY2Nlc3NvclR5cGUgPSAoZDogYW55KSA9PiBudW1iZXIgfCBEYXRlIHwgbnVsbDtcbnR5cGUgUHJvcHMgPSB7XG4gIGRhdGE6IGFueVtdO1xuICB4QWNjZXNzb3I6IEFjY2Vzc29yVHlwZTtcbn07XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAoZDogRGF0ZSkgPT5cbiAgZC5nZXREYXRlKCkgPT09IDEgPyB0aW1lRm9ybWF0KFwiJS1iICVZXCIpKGQpIDogdGltZUZvcm1hdChcIiUtYiAlLWQsICVZXCIpKGQpO1xuZXhwb3J0IGNvbnN0IFJlc3RyaWN0aW9uc1RpbWVsaW5lID0gKHsgZGF0YSwgeEFjY2Vzc29yIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PlxuICAgIE9iamVjdC52YWx1ZXMoZCkuZmluZCgoZCkgPT4gdHlwZW9mIGQgPT09IFwibnVtYmVyXCIpXG4gICk7XG4gIGNvbnN0IGxpbmVPZmZzZXQgPSAxLjY7XG4gIGNvbnN0IHlPZmZzZXQgPSAobGluZU9mZnNldCAqIDYpIC8gMjtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoKVxuICAgIC5kb21haW4oZXh0ZW50KGZpbHRlcmVkRGF0YSwgeEFjY2Vzc29yKSBhcyBbbnVtYmVyLCBudW1iZXJdKVxuICAgIC5yYW5nZShbMCwgMTAwXSk7XG4gIGNvbnN0IHhUaWNrcyA9IHhTY2FsZVxuICAgIC50aWNrcygzKVxuICAgIC5tYXAoKHRpY2spID0+IFt4U2NhbGUodGljayksIGZvcm1hdERhdGUodGljayldKTtcbiAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDVdKS5yYW5nZShbMTAwLCAwXSk7XG4gIGNvbnN0IHlUaWNrcyA9IHlTY2FsZVxuICAgIC50aWNrcyg1KVxuICAgIC5tYXAoKHRpY2spID0+IFt5U2NhbGUodGljayksIHRpY2sudG9Mb2NhbGVTdHJpbmcoKV0pO1xuXG4gIGNvbnN0IGFyZWFHZW5lcmF0b3IgPSAoeUFjY2Vzc29yOiBBY2Nlc3NvclR5cGUpID0+XG4gICAgYXJlYSgpXG4gICAgICAueCgoZDogYW55KSA9PiB4U2NhbGUoeEFjY2Vzc29yKGQpKSlcbiAgICAgIC55MCgxMDApXG4gICAgICAueTEoKGQ6IGFueSkgPT4geVNjYWxlKHlBY2Nlc3NvcihkKSkpXG4gICAgICAuZGVmaW5lZCgoZDogYW55KSA9PiBOdW1iZXIuaXNGaW5pdGUoeUFjY2Vzc29yKGQpKSkoZmlsdGVyZWREYXRhKTtcbiAgY29uc3QgbGluZUdlbmVyYXRvciA9ICh5QWNjZXNzb3I6IEFjY2Vzc29yVHlwZSkgPT5cbiAgICBsaW5lKClcbiAgICAgIC54KChkOiBhbnkpID0+IHhTY2FsZSh4QWNjZXNzb3IoZCkpKVxuICAgICAgLnkoKGQ6IGFueSkgPT4geVNjYWxlKHlBY2Nlc3NvcihkKSkpXG4gICAgICAuZGVmaW5lZCgoZDogYW55KSA9PiBOdW1iZXIuaXNGaW5pdGUoeUFjY2Vzc29yKGQpKSkoZmlsdGVyZWREYXRhKTtcblxuICBjb25zdCBsYXN0UG9pbnQgPSBmaWx0ZXJlZERhdGEuc2xpY2UoLTEpWzBdIHx8IHt9O1xuICBjb25zb2xlLmxvZyhsYXN0UG9pbnQsIGZpbHRlcmVkRGF0YSk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsYXN0UG9pbnQpLmZpbHRlcigoZCkgPT4gZCAhPT0gXCJEYXRlXCIpO1xuICBjb25zdCBrZXlDb2xvcnMgPSBmcm9tUGFpcnMoXG4gICAga2V5cy5tYXAoKGtleSwgaSkgPT4gW2tleSwgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXV0pXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIG1iLTggZmxleFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IDQwMCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGZsZXgtbm9uZSB3LTBcIj5cbiAgICAgICAge3lUaWNrcy5tYXAoKFtvZmZzZXQsIHZhbHVlXSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMCBoLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgbGVmdC1mdWxsIC1tbC0yIHRhYnVsYXItbnVtc1wiXG4gICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke29mZnNldH0lYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBib3R0b20tMFwiPlxuICAgICAgICAgIHtrZXlzLm1hcChcbiAgICAgICAgICAgIChrZXksIGkpID0+XG4gICAgICAgICAgICAgIGxhc3RQb2ludFtrZXldICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlICR7a2V5Q29sb3JzW2tleV19IHRleHQtcmlnaHQgcmlnaHQtMCAtbXQtNiB3aGl0ZXNwYWNlLW5vd3JhcGB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGAke3lTY2FsZShsYXN0UG9pbnRba2V5XSl9JWAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtrZXl9IHtsYXN0UG9pbnRba2V5XX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZSB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD17WzAsIHlPZmZzZXQsIDEwMCwgMTAwXS5qb2luKFwiIFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyYW5nZSgxLCA2KS5tYXAoKGkpID0+IChcbiAgICAgICAgICAgIDxnIGtleT17aX0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7eVNjYWxlKGkgLSAwLjUpICsgeU9mZnNldH0pYH0+XG4gICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgeDI9XCIxMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgc3Ryb2tlLWN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge2tleXMubWFwKChrZXksIGkpID0+IChcbiAgICAgICAgICAgIDxnIGtleT17aX0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7bGluZU9mZnNldCAqIGl9KWB9PlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9e2xpbmVHZW5lcmF0b3IoKGQpID0+IGRba2V5XSkgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXVxuICAgICAgICAgICAgICAgIH0gc3Ryb2tlLWN1cnJlbnQgbWl4LWJsZW5kLW11bHRpcGx5YH1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIG10LTYgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICB7eFRpY2tzLm1hcCgoW29mZnNldCwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMCBmbGV4IGp1c3RpZnktY2VudGVyIHRhYnVsYXItbnVtc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke29mZnNldH0lYCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNvbG9ycyA9IFtcbiAgXCJ0ZXh0LWluZGlnby01MDBcIixcbiAgXCJ0ZXh0LWdyZWVuLTUwMFwiLFxuICBcInRleHQteWVsbG93LTUwMFwiLFxuICBcInRleHQtZ3JheS01MDBcIixcbiAgXCJ0ZXh0LXBpbmstNTAwXCIsXG4gIFwidGV4dC1ibHVlLTUwMFwiLFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})