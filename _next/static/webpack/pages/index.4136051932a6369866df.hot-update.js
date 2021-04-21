webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\nvar formatDate = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %-d, %Y\");\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor,\n      yAccessors = _ref.yAccessors;\n  var lineOffset = 1.6;\n  var yOffset = lineOffset * 6;\n  console.log(data); // @ts-ignore\n\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"])(data, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(5).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain([0, 5]).range([100, 0]);\n  var yTicks = yScale.ticks(5).map(function (tick) {\n    return [yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    style: {\n      height: 400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-full flex-none w-20\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"overflow-visible w-full h-full\",\n        preserveAspectRatio: \"none\",\n        viewBox: [0, yOffset, 100, 100].join(\" \"),\n        children: yAccessors.map(function (yAccessor, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n            children: [yAccessors.length === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: areaGenerator(yAccessor) || \"\",\n              className: \"text-indigo-50 fill-current\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: lineGenerator(yAccessor) || \"\",\n              className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n              fill: \"none\",\n              strokeWidth: \"4\",\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full h-10 mt-2 whitespace-nowrap\",\n        children: xTicks.map(function (_ref4) {\n          var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n              offset = _ref5[0],\n              value = _ref5[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute w-0 flex justify-center tabular-nums\",\n            style: {\n              left: \"\".concat(offset, \"%\")\n            },\n            children: value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwidGltZUZvcm1hdCIsIlJlc3RyaWN0aW9uc1RpbWVsaW5lIiwiZGF0YSIsInhBY2Nlc3NvciIsInlBY2Nlc3NvcnMiLCJsaW5lT2Zmc2V0IiwieU9mZnNldCIsImNvbnNvbGUiLCJsb2ciLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwieFRpY2tzIiwidGlja3MiLCJtYXAiLCJ0aWNrIiwieVNjYWxlIiwieVRpY2tzIiwidG9Mb2NhbGVTdHJpbmciLCJhcmVhR2VuZXJhdG9yIiwieUFjY2Vzc29yIiwiYXJlYSIsIngiLCJkIiwieTAiLCJ5MSIsImRlZmluZWQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImxpbmVHZW5lcmF0b3IiLCJsaW5lIiwieSIsImhlaWdodCIsIm9mZnNldCIsInZhbHVlIiwidG9wIiwiam9pbiIsImkiLCJsZW5ndGgiLCJjb2xvcnMiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQSxJQUFNQSxVQUFVLEdBQUdDLHFEQUFVLENBQUMsYUFBRCxDQUE3QjtBQUNPLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FJdkI7QUFBQSxNQUhYQyxJQUdXLFFBSFhBLElBR1c7QUFBQSxNQUZYQyxTQUVXLFFBRlhBLFNBRVc7QUFBQSxNQURYQyxVQUNXLFFBRFhBLFVBQ1c7QUFDWCxNQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELFVBQVUsR0FBRyxDQUE3QjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWixFQUhXLENBSVg7O0FBQ0EsTUFBTU8sTUFBTSxHQUFHQyxzREFBVyxHQUN2QkMsTUFEWSxDQUNMQyxpREFBTSxDQUFDVixJQUFELEVBQU9DLFNBQVAsQ0FERCxF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QUEwRmIsSUFBTXdDLE1BQU0sR0FBRyxDQUNiLGlCQURhLEVBRWIsZ0JBRmEsRUFHYixpQkFIYSxFQUliLGVBSmEsRUFLYixlQUxhLEVBTWIsZUFOYSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBleHRlbnQsIG1heCwgc2NhbGVMaW5lYXIsIGFyZWEsIGxpbmUsIHRpbWVGb3JtYXQgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCBmbGF0dGVuIGZyb20gXCJsb2Rhc2gvZmxhdHRlblwiO1xuXG50eXBlIEFjY2Vzc29yVHlwZSA9IChkOiBhbnkpID0+IG51bWJlciB8IERhdGUgfCBudWxsO1xudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogYW55W107XG4gIHhBY2Nlc3NvcjogQWNjZXNzb3JUeXBlO1xuICB5QWNjZXNzb3JzOiBBY2Nlc3NvclR5cGVbXTtcbn07XG5cbmNvbnN0IGZvcm1hdERhdGUgPSB0aW1lRm9ybWF0KFwiJS1iICUtZCwgJVlcIik7XG5leHBvcnQgY29uc3QgUmVzdHJpY3Rpb25zVGltZWxpbmUgPSAoe1xuICBkYXRhLFxuICB4QWNjZXNzb3IsXG4gIHlBY2Nlc3NvcnMsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBsaW5lT2Zmc2V0ID0gMS42O1xuICBjb25zdCB5T2Zmc2V0ID0gbGluZU9mZnNldCAqIDY7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB4QWNjZXNzb3IpIGFzIFtudW1iZXIsIG51bWJlcl0pXG4gICAgLnJhbmdlKFswLCAxMDBdKTtcbiAgY29uc3QgeFRpY2tzID0geFNjYWxlXG4gICAgLnRpY2tzKDUpXG4gICAgLm1hcCgodGljaykgPT4gW3hTY2FsZSh0aWNrKSwgZm9ybWF0RGF0ZSh0aWNrKV0pO1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgNV0pLnJhbmdlKFsxMDAsIDBdKTtcbiAgY29uc3QgeVRpY2tzID0geVNjYWxlXG4gICAgLnRpY2tzKDUpXG4gICAgLm1hcCgodGljaykgPT4gW3lTY2FsZSh0aWNrKSwgdGljay50b0xvY2FsZVN0cmluZygpXSk7XG5cbiAgY29uc3QgYXJlYUdlbmVyYXRvciA9ICh5QWNjZXNzb3I6IEFjY2Vzc29yVHlwZSkgPT5cbiAgICBhcmVhKClcbiAgICAgIC54KChkOiBhbnkpID0+IHhTY2FsZSh4QWNjZXNzb3IoZCkpKVxuICAgICAgLnkwKDEwMClcbiAgICAgIC55MSgoZDogYW55KSA9PiB5U2NhbGUoeUFjY2Vzc29yKGQpKSlcbiAgICAgIC5kZWZpbmVkKChkOiBhbnkpID0+IE51bWJlci5pc0Zpbml0ZSh5QWNjZXNzb3IoZCkpKShkYXRhKTtcbiAgY29uc3QgbGluZUdlbmVyYXRvciA9ICh5QWNjZXNzb3I6IEFjY2Vzc29yVHlwZSkgPT5cbiAgICBsaW5lKClcbiAgICAgIC54KChkOiBhbnkpID0+IHhTY2FsZSh4QWNjZXNzb3IoZCkpKVxuICAgICAgLnkoKGQ6IGFueSkgPT4geVNjYWxlKHlBY2Nlc3NvcihkKSkpXG4gICAgICAuZGVmaW5lZCgoZDogYW55KSA9PiBOdW1iZXIuaXNGaW5pdGUoeUFjY2Vzc29yKGQpKSkoZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIG1iLTggZmxleFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IDQwMCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGZsZXgtbm9uZSB3LTIwXCI+XG4gICAgICAgIHt5VGlja3MubWFwKChbb2Zmc2V0LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTAgaC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGxlZnQtZnVsbCAtbWwtMiB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBgJHtvZmZzZXR9JWAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZSB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD17WzAsIHlPZmZzZXQsIDEwMCwgMTAwXS5qb2luKFwiIFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt5QWNjZXNzb3JzLm1hcCgoeUFjY2Vzc29yLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2l9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAke2xpbmVPZmZzZXQgKiBpfSlgfT5cbiAgICAgICAgICAgICAge3lBY2Nlc3NvcnMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD17YXJlYUdlbmVyYXRvcih5QWNjZXNzb3IpIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby01MCBmaWxsLWN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD17bGluZUdlbmVyYXRvcih5QWNjZXNzb3IpIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yc1tpICUgY29sb3JzLmxlbmd0aF1cbiAgICAgICAgICAgICAgICB9IHN0cm9rZS1jdXJyZW50IG1peC1ibGVuZC1tdWx0aXBseWB9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICB2ZWN0b3JFZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMCBtdC0yIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAge3hUaWNrcy5tYXAoKFtvZmZzZXQsIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTAgZmxleCBqdXN0aWZ5LWNlbnRlciB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHtvZmZzZXR9JWAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBjb2xvcnMgPSBbXG4gIFwidGV4dC1pbmRpZ28tNTAwXCIsXG4gIFwidGV4dC1ncmVlbi01MDBcIixcbiAgXCJ0ZXh0LXllbGxvdy01MDBcIixcbiAgXCJ0ZXh0LWdyYXktNTAwXCIsXG4gIFwidGV4dC1waW5rLTUwMFwiLFxuICBcInRleHQtYmx1ZS01MDBcIixcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})