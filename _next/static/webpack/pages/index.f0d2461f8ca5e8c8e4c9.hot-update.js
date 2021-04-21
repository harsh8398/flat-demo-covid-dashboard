webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/fromPairs */ \"./node_modules/lodash/fromPairs.js\");\n/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/startCase */ \"./node_modules/lodash/startCase.js\");\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar formatDate = function formatDate(d) {\n  return d.getDate() === 1 ? Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"timeFormat\"])(\"%-b %Y\")(d) : Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"timeFormat\"])(\"%-b %-d, %Y\")(d);\n};\n\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor;\n  var filteredData = data.filter(function (d) {\n    return Object.values(d).find(function (d) {\n      return typeof d === \"number\";\n    });\n  });\n  var lineOffset = 1.6;\n  var yOffset = lineOffset * 6 / 2; // @ts-ignore\n\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"scaleTime\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"extent\"])(filteredData, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(3).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"scaleLinear\"])().domain([0, 5]).range([100, 0]);\n  var yTicks = yScale.ticks(5).map(function (tick) {\n    return [yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(filteredData);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(filteredData);\n  };\n\n  var lastPoint = filteredData.slice(-1)[0] || {};\n  console.log(lastPoint, filteredData);\n  var keys = Object.keys(lastPoint).filter(function (d) {\n    return d !== \"Date\";\n  });\n  var keyColors = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_5___default()(keys.map(function (key, i) {\n    return [key, colors[i % colors.length]];\n  }));\n  var lastKeyValues = keys.map(function (key) {\n    return [key, (Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data).reverse().find(function (d) {\n      return d[key] !== null;\n    }) || {})[key]];\n  });\n  console.log(lastKeyValues);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    style: {\n      height: 400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-full flex-none w-0\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: \"overflow-visible w-full h-full\",\n      preserveAspectRatio: \"none\",\n      viewBox: [0, yOffset, 100, 100].join(\" \"),\n      children: [Object(d3__WEBPACK_IMPORTED_MODULE_4__[\"range\"])(1, 6).map(function (i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n          transform: \"translate(0, \".concat(yScale(i - 0.5) + yOffset, \")\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n            x2: \"100\",\n            className: \"text-gray-200 stroke-current\",\n            vectorEffect: \"non-scaling-stroke\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this);\n      }), keys.map(function (key, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n          transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: lineGenerator(function (d) {\n              return d[key];\n            }) || \"\",\n            className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n            fill: \"none\",\n            strokeWidth: \"4\",\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            vectorEffect: \"non-scaling-stroke\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full h-10 mt-6 whitespace-nowrap\",\n      children: xTicks.map(function (_ref4) {\n        var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n            offset = _ref5[0],\n            value = _ref5[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 flex justify-center tabular-nums\",\n          style: {\n            left: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute right-0 top-0 bottom-0\",\n      children: lastKeyValues.map(function (_ref6, i) {\n        var _ref7 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref6, 2),\n            key = _ref7[0],\n            value = _ref7[1];\n\n        return value !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute \".concat(keyColors[key], \" text-right right-0 -mt-6 whitespace-nowrap text-xs\"),\n          style: {\n            top: \"\".concat(yScale(value) + i * 1.6 - 3, \"%\")\n          },\n          children: lodash_startCase__WEBPACK_IMPORTED_MODULE_6___default()(key)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZCIsImdldERhdGUiLCJ0aW1lRm9ybWF0IiwiUmVzdHJpY3Rpb25zVGltZWxpbmUiLCJkYXRhIiwieEFjY2Vzc29yIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiT2JqZWN0IiwidmFsdWVzIiwiZmluZCIsImxpbmVPZmZzZXQiLCJ5T2Zmc2V0IiwieFNjYWxlIiwic2NhbGVUaW1lIiwiZG9tYWluIiwiZXh0ZW50IiwicmFuZ2UiLCJ4VGlja3MiLCJ0aWNrcyIsIm1hcCIsInRpY2siLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInlUaWNrcyIsInRvTG9jYWxlU3RyaW5nIiwiYXJlYUdlbmVyYXRvciIsInlBY2Nlc3NvciIsImFyZWEiLCJ4IiwieTAiLCJ5MSIsImRlZmluZWQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImxpbmVHZW5lcmF0b3IiLCJsaW5lIiwieSIsImxhc3RQb2ludCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImtleXMiLCJrZXlDb2xvcnMiLCJmcm9tUGFpcnMiLCJrZXkiLCJpIiwiY29sb3JzIiwibGVuZ3RoIiwibGFzdEtleVZhbHVlcyIsInJldmVyc2UiLCJoZWlnaHQiLCJvZmZzZXQiLCJ2YWx1ZSIsInRvcCIsImpvaW4iLCJsZWZ0IiwidW5kZWZpbmVkIiwic3RhcnRDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBOztBQVFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQ7QUFBQSxTQUNqQkEsQ0FBQyxDQUFDQyxPQUFGLE9BQWdCLENBQWhCLEdBQW9CQyxxREFBVSxDQUFDLFFBQUQsQ0FBVixDQUFxQkYsQ0FBckIsQ0FBcEIsR0FBOENFLHFEQUFVLENBQUMsYUFBRCxDQUFWLENBQTBCRixDQUExQixDQUQ3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SGEsRUFJYixlQUphLEVBS2IsZUFMYSxFQU1iLGVBTmEsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVzdHJpY3Rpb25zVGltZWxpbmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgZXh0ZW50LFxuICByYW5nZSxcbiAgc2NhbGVMaW5lYXIsXG4gIHNjYWxlVGltZSxcbiAgYXJlYSxcbiAgbGluZSxcbiAgdGltZUZvcm1hdCxcbn0gZnJvbSBcImQzXCI7XG5pbXBvcnQgZnJvbVBhaXJzIGZyb20gXCJsb2Rhc2gvZnJvbVBhaXJzXCI7XG5pbXBvcnQgc3RhcnRDYXNlIGZyb20gXCJsb2Rhc2gvc3RhcnRDYXNlXCI7XG5cbnR5cGUgQWNjZXNzb3JUeXBlID0gKGQ6IGFueSkgPT4gbnVtYmVyIHwgRGF0ZSB8IG51bGw7XG50eXBlIFByb3BzID0ge1xuICBkYXRhOiBhbnlbXTtcbiAgeEFjY2Vzc29yOiBBY2Nlc3NvclR5cGU7XG59O1xuXG5jb25zdCBmb3JtYXREYXRlID0gKGQ6IERhdGUpID0+XG4gIGQuZ2V0RGF0ZSgpID09PSAxID8gdGltZUZvcm1hdChcIiUtYiAlWVwiKShkKSA6IHRpbWVGb3JtYXQoXCIlLWIgJS1kLCAlWVwiKShkKTtcbmV4cG9ydCBjb25zdCBSZXN0cmljdGlvbnNUaW1lbGluZSA9ICh7IGRhdGEsIHhBY2Nlc3NvciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhLmZpbHRlcigoZCkgPT5cbiAgICBPYmplY3QudmFsdWVzKGQpLmZpbmQoKGQpID0+IHR5cGVvZiBkID09PSBcIm51bWJlclwiKVxuICApO1xuICBjb25zdCBsaW5lT2Zmc2V0ID0gMS42O1xuICBjb25zdCB5T2Zmc2V0ID0gKGxpbmVPZmZzZXQgKiA2KSAvIDI7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAuZG9tYWluKGV4dGVudChmaWx0ZXJlZERhdGEsIHhBY2Nlc3NvcikgYXMgW251bWJlciwgbnVtYmVyXSlcbiAgICAucmFuZ2UoWzAsIDEwMF0pO1xuICBjb25zdCB4VGlja3MgPSB4U2NhbGVcbiAgICAudGlja3MoMylcbiAgICAubWFwKCh0aWNrKSA9PiBbeFNjYWxlKHRpY2spLCBmb3JtYXREYXRlKHRpY2spXSk7XG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKCkuZG9tYWluKFswLCA1XSkucmFuZ2UoWzEwMCwgMF0pO1xuICBjb25zdCB5VGlja3MgPSB5U2NhbGVcbiAgICAudGlja3MoNSlcbiAgICAubWFwKCh0aWNrKSA9PiBbeVNjYWxlKHRpY2spLCB0aWNrLnRvTG9jYWxlU3RyaW5nKCldKTtcblxuICBjb25zdCBhcmVhR2VuZXJhdG9yID0gKHlBY2Nlc3NvcjogQWNjZXNzb3JUeXBlKSA9PlxuICAgIGFyZWEoKVxuICAgICAgLngoKGQ6IGFueSkgPT4geFNjYWxlKHhBY2Nlc3NvcihkKSkpXG4gICAgICAueTAoMTAwKVxuICAgICAgLnkxKChkOiBhbnkpID0+IHlTY2FsZSh5QWNjZXNzb3IoZCkpKVxuICAgICAgLmRlZmluZWQoKGQ6IGFueSkgPT4gTnVtYmVyLmlzRmluaXRlKHlBY2Nlc3NvcihkKSkpKGZpbHRlcmVkRGF0YSk7XG4gIGNvbnN0IGxpbmVHZW5lcmF0b3IgPSAoeUFjY2Vzc29yOiBBY2Nlc3NvclR5cGUpID0+XG4gICAgbGluZSgpXG4gICAgICAueCgoZDogYW55KSA9PiB4U2NhbGUoeEFjY2Vzc29yKGQpKSlcbiAgICAgIC55KChkOiBhbnkpID0+IHlTY2FsZSh5QWNjZXNzb3IoZCkpKVxuICAgICAgLmRlZmluZWQoKGQ6IGFueSkgPT4gTnVtYmVyLmlzRmluaXRlKHlBY2Nlc3NvcihkKSkpKGZpbHRlcmVkRGF0YSk7XG5cbiAgY29uc3QgbGFzdFBvaW50ID0gZmlsdGVyZWREYXRhLnNsaWNlKC0xKVswXSB8fCB7fTtcbiAgY29uc29sZS5sb2cobGFzdFBvaW50LCBmaWx0ZXJlZERhdGEpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobGFzdFBvaW50KS5maWx0ZXIoKGQpID0+IGQgIT09IFwiRGF0ZVwiKTtcbiAgY29uc3Qga2V5Q29sb3JzID0gZnJvbVBhaXJzKFxuICAgIGtleXMubWFwKChrZXksIGkpID0+IFtrZXksIGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF1dKVxuICApO1xuICBjb25zdCBsYXN0S2V5VmFsdWVzID0ga2V5cy5tYXAoKGtleSkgPT4gW1xuICAgIGtleSxcbiAgICAoWy4uLmRhdGFdLnJldmVyc2UoKS5maW5kKChkKSA9PiBkW2tleV0gIT09IG51bGwpIHx8IHt9KVtrZXldLFxuICBdKTtcbiAgY29uc29sZS5sb2cobGFzdEtleVZhbHVlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIG1iLTggZmxleFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IDQwMCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGZsZXgtbm9uZSB3LTBcIj5cbiAgICAgICAge3lUaWNrcy5tYXAoKFtvZmZzZXQsIHZhbHVlXSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMCBoLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgbGVmdC1mdWxsIC1tbC0yIHRhYnVsYXItbnVtc1wiXG4gICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke29mZnNldH0lYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZSB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PXtbMCwgeU9mZnNldCwgMTAwLCAxMDBdLmpvaW4oXCIgXCIpfVxuICAgICAgPlxuICAgICAgICB7cmFuZ2UoMSwgNikubWFwKChpKSA9PiAoXG4gICAgICAgICAgPGcga2V5PXtpfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHt5U2NhbGUoaSAtIDAuNSkgKyB5T2Zmc2V0fSlgfT5cbiAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgIHgyPVwiMTAwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBzdHJva2UtY3VycmVudFwiXG4gICAgICAgICAgICAgIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgKSl9XG4gICAgICAgIHtrZXlzLm1hcCgoa2V5LCBpKSA9PiAoXG4gICAgICAgICAgPGcga2V5PXtpfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtsaW5lT2Zmc2V0ICogaX0pYH0+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPXtsaW5lR2VuZXJhdG9yKChkKSA9PiBkW2tleV0pIHx8IFwiXCJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXVxuICAgICAgICAgICAgICB9IHN0cm9rZS1jdXJyZW50IG1peC1ibGVuZC1tdWx0aXBseWB9XG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgKSl9XG4gICAgICA8L3N2Zz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgbXQtNiB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICB7eFRpY2tzLm1hcCgoW29mZnNldCwgdmFsdWVdKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0wIGZsZXgganVzdGlmeS1jZW50ZXIgdGFidWxhci1udW1zXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke29mZnNldH0lYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBib3R0b20tMFwiPlxuICAgICAgICB7bGFzdEtleVZhbHVlcy5tYXAoXG4gICAgICAgICAgKFtrZXksIHZhbHVlXSwgaSkgPT5cbiAgICAgICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtrZXlDb2xvcnNba2V5XX0gdGV4dC1yaWdodCByaWdodC0wIC1tdC02IHdoaXRlc3BhY2Utbm93cmFwIHRleHQteHNgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0b3A6IGAke3lTY2FsZSh2YWx1ZSkgKyBpICogMS42IC0gM30lYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N0YXJ0Q2FzZShrZXkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgY29sb3JzID0gW1xuICBcInRleHQtaW5kaWdvLTUwMFwiLFxuICBcInRleHQtZ3JlZW4tNTAwXCIsXG4gIFwidGV4dC15ZWxsb3ctNTAwXCIsXG4gIFwidGV4dC1ncmF5LTUwMFwiLFxuICBcInRleHQtcGluay01MDBcIixcbiAgXCJ0ZXh0LWJsdWUtNTAwXCIsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})