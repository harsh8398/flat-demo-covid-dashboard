webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flatten */ \"./node_modules/lodash/flatten.js\");\n/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\n\nvar formatDate = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %-d, %Y\");\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor,\n      yAccessors = _ref.yAccessors;\n  var lineOffset = 5; // @ts-ignore\n\n  var yExtent = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"])(lodash_flatten__WEBPACK_IMPORTED_MODULE_4___default()(yAccessors.map(function (accessor) {\n    return data.map(accessor);\n  })));\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"])(data, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(5).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain(yExtent).range([0, 100]);\n  var yTicks = yScale.ticks(3).map(function (tick) {\n    return [200 - yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-40 flex-none w-20\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"overflow-visible w-full h-40\",\n        preserveAspectRatio: \"none\",\n        viewBox: [0, 0, 100, 200].join(\" \"),\n        children: yAccessors.map(function (yAccessor, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n            children: [yAccessors.length === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: areaGenerator(yAccessor) || \"\",\n              className: \"text-indigo-50 fill-current\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: lineGenerator(yAccessor) || \"\",\n              className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n              fill: \"none\",\n              strokeWidth: \"4\",\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full h-10 mt-2 whitespace-nowrap\",\n        children: xTicks.map(function (_ref4) {\n          var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n              offset = _ref5[0],\n              value = _ref5[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute w-0 flex justify-center tabular-nums\",\n            style: {\n              left: \"\".concat(offset, \"%\")\n            },\n            children: value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwidGltZUZvcm1hdCIsIlJlc3RyaWN0aW9uc1RpbWVsaW5lIiwiZGF0YSIsInhBY2Nlc3NvciIsInlBY2Nlc3NvcnMiLCJsaW5lT2Zmc2V0IiwieUV4dGVudCIsImV4dGVudCIsImZsYXR0ZW4iLCJtYXAiLCJhY2Nlc3NvciIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJ4VGlja3MiLCJ0aWNrcyIsInRpY2siLCJ5U2NhbGUiLCJ5VGlja3MiLCJ0b0xvY2FsZVN0cmluZyIsImFyZWFHZW5lcmF0b3IiLCJ5QWNjZXNzb3IiLCJhcmVhIiwieCIsImQiLCJ5MCIsInkxIiwiZGVmaW5lZCIsIk51bWJlciIsImlzRmluaXRlIiwibGluZUdlbmVyYXRvciIsImxpbmUiLCJ5Iiwib2Zmc2V0IiwidmFsdWUiLCJ0b3AiLCJqb2luIiwiaSIsImxlbmd0aCIsImNvbG9ycyIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxVQUFVLEdBQUdDLHFEQUFVLENBQUMsYUFBRCxDQUE3QjtBQUNPLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FJdkI7QUFBQSxNQUhYQyxJQUdXLFFBSFhBLElBR1c7QUFBQSxNQUZYQyxTQUVXLFFBRlhBLFNBRVc7QUFBQSxNQURYQyxVQUNXLFFBRFhBLFVBQ1c7QUFDWCxNQUFNQyxVQUFVLEdBQUcsQ0FBbkIsQ0FEVyxDQUVYOztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsaURBQU0sQ0FDcEJDLHFEQUFPLENBQUNKLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNDLFFBQUQ7QUFBQSxXQUFjUixJQUFJLENBQUNPLEdBQUwsQ0FBU0MsUUFBVCxDQUFkO0FBQUEsR0FBZixDQUFELENBRGEsQ0FBdEI7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cURELENBdEZNO0tBQU1sQyxvQjtBQXdGYixJQUFNdUMsTUFBTSxHQUFHLENBQ2IsaUJBRGEsRUFFYixnQkFGYSxFQUdiLGlCQUhhLEVBSWIsZUFKYSxFQUtiLGVBTGEsRUFNYixlQU5hLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3RyaWN0aW9uc1RpbWVsaW5lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV4dGVudCwgc2NhbGVMaW5lYXIsIGFyZWEsIGxpbmUsIHRpbWVGb3JtYXQgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCBmbGF0dGVuIGZyb20gXCJsb2Rhc2gvZmxhdHRlblwiO1xuXG50eXBlIEFjY2Vzc29yVHlwZSA9IChkOiBhbnkpID0+IG51bWJlciB8IERhdGUgfCBudWxsO1xudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogYW55W107XG4gIHhBY2Nlc3NvcjogQWNjZXNzb3JUeXBlO1xuICB5QWNjZXNzb3JzOiBBY2Nlc3NvclR5cGVbXTtcbn07XG5cbmNvbnN0IGZvcm1hdERhdGUgPSB0aW1lRm9ybWF0KFwiJS1iICUtZCwgJVlcIik7XG5leHBvcnQgY29uc3QgUmVzdHJpY3Rpb25zVGltZWxpbmUgPSAoe1xuICBkYXRhLFxuICB4QWNjZXNzb3IsXG4gIHlBY2Nlc3NvcnMsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBsaW5lT2Zmc2V0ID0gNTtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCB5RXh0ZW50ID0gZXh0ZW50KFxuICAgIGZsYXR0ZW4oeUFjY2Vzc29ycy5tYXAoKGFjY2Vzc29yKSA9PiBkYXRhLm1hcChhY2Nlc3NvcikpKVxuICApIGFzIFtudW1iZXIsIG51bWJlcl07XG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB4QWNjZXNzb3IpIGFzIFtudW1iZXIsIG51bWJlcl0pXG4gICAgLnJhbmdlKFswLCAxMDBdKTtcbiAgY29uc3QgeFRpY2tzID0geFNjYWxlXG4gICAgLnRpY2tzKDUpXG4gICAgLm1hcCgodGljaykgPT4gW3hTY2FsZSh0aWNrKSwgZm9ybWF0RGF0ZSh0aWNrKV0pO1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbih5RXh0ZW50KS5yYW5nZShbMCwgMTAwXSk7XG4gIGNvbnN0IHlUaWNrcyA9IHlTY2FsZVxuICAgIC50aWNrcygzKVxuICAgIC5tYXAoKHRpY2spID0+IFsyMDAgLSB5U2NhbGUodGljayksIHRpY2sudG9Mb2NhbGVTdHJpbmcoKV0pO1xuXG4gIGNvbnN0IGFyZWFHZW5lcmF0b3IgPSAoeUFjY2Vzc29yOiBBY2Nlc3NvclR5cGUpID0+XG4gICAgYXJlYSgpXG4gICAgICAueCgoZDogYW55KSA9PiB4U2NhbGUoeEFjY2Vzc29yKGQpKSlcbiAgICAgIC55MCgxMDApXG4gICAgICAueTEoKGQ6IGFueSkgPT4geVNjYWxlKHlBY2Nlc3NvcihkKSkpXG4gICAgICAuZGVmaW5lZCgoZDogYW55KSA9PiBOdW1iZXIuaXNGaW5pdGUoeUFjY2Vzc29yKGQpKSkoZGF0YSk7XG4gIGNvbnN0IGxpbmVHZW5lcmF0b3IgPSAoeUFjY2Vzc29yOiBBY2Nlc3NvclR5cGUpID0+XG4gICAgbGluZSgpXG4gICAgICAueCgoZDogYW55KSA9PiB4U2NhbGUoeEFjY2Vzc29yKGQpKSlcbiAgICAgIC55KChkOiBhbnkpID0+IHlTY2FsZSh5QWNjZXNzb3IoZCkpKVxuICAgICAgLmRlZmluZWQoKGQ6IGFueSkgPT4gTnVtYmVyLmlzRmluaXRlKHlBY2Nlc3NvcihkKSkpKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIG1iLTggZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQwIGZsZXgtbm9uZSB3LTIwXCI+XG4gICAgICAgIHt5VGlja3MubWFwKChbb2Zmc2V0LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTAgaC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGxlZnQtZnVsbCAtbWwtMiB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBgJHtvZmZzZXR9JWAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZSB3LWZ1bGwgaC00MFwiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9e1swLCAwLCAxMDAsIDIwMF0uam9pbihcIiBcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7eUFjY2Vzc29ycy5tYXAoKHlBY2Nlc3NvciwgaSkgPT4gKFxuICAgICAgICAgICAgPGcga2V5PXtpfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtsaW5lT2Zmc2V0ICogaX0pYH0+XG4gICAgICAgICAgICAgIHt5QWNjZXNzb3JzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9e2FyZWFHZW5lcmF0b3IoeUFjY2Vzc29yKSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAgZmlsbC1jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9e2xpbmVHZW5lcmF0b3IoeUFjY2Vzc29yKSB8fCBcIlwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICBjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdXG4gICAgICAgICAgICAgICAgfSBzdHJva2UtY3VycmVudCBtaXgtYmxlbmQtbXVsdGlwbHlgfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgdmVjdG9yRWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgbXQtMiB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgIHt4VGlja3MubWFwKChbb2Zmc2V0LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0wIGZsZXgganVzdGlmeS1jZW50ZXIgdGFidWxhci1udW1zXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogYCR7b2Zmc2V0fSVgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgY29sb3JzID0gW1xuICBcInRleHQtaW5kaWdvLTUwMFwiLFxuICBcInRleHQtZ3JlZW4tNTAwXCIsXG4gIFwidGV4dC15ZWxsb3ctNTAwXCIsXG4gIFwidGV4dC1ncmF5LTUwMFwiLFxuICBcInRleHQtcGluay01MDBcIixcbiAgXCJ0ZXh0LWJsdWUtNTAwXCIsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})