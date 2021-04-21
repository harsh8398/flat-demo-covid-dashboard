webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestrictionsTimeline.tsx":
/*!*********************************************!*\
  !*** ./components/RestrictionsTimeline.tsx ***!
  \*********************************************/
/*! exports provided: RestrictionsTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestrictionsTimeline\", function() { return RestrictionsTimeline; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/RestrictionsTimeline.tsx\",\n    _this = undefined;\n\n\n\nvar formatDate = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"timeFormat\"])(\"%-b %-d, %Y\");\nvar RestrictionsTimeline = function RestrictionsTimeline(_ref) {\n  var data = _ref.data,\n      xAccessor = _ref.xAccessor,\n      yAccessors = _ref.yAccessors;\n  var lineOffset = 1.6;\n  var yOffset = lineOffset * 6 / 2; // @ts-ignore\n\n  var xScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleTime\"])().domain(Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"])(data, xAccessor)).range([0, 100]);\n  var xTicks = xScale.ticks(3).map(function (tick) {\n    return [xScale(tick), formatDate(tick)];\n  });\n  var yScale = Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"])().domain([0, 5]).range([100, 0]);\n  var yTicks = yScale.ticks(5).map(function (tick) {\n    return [yScale(tick), tick.toLocaleString()];\n  });\n\n  var areaGenerator = function areaGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"area\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y0(100).y1(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  var lineGenerator = function lineGenerator(yAccessor) {\n    return Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"])().x(function (d) {\n      return xScale(xAccessor(d));\n    }).y(function (d) {\n      return yScale(yAccessor(d));\n    }).defined(function (d) {\n      return Number.isFinite(yAccessor(d));\n    })(data);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative w-full max-w-7xl mb-8 flex\",\n    style: {\n      height: 400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-full flex-none w-0\",\n      children: yTicks.map(function (_ref2) {\n        var _ref3 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n            offset = _ref3[0],\n            value = _ref3[1];\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-0 h-0 flex items-center justify-end left-full -ml-2 tabular-nums\",\n          style: {\n            top: \"\".concat(offset, \"%\")\n          },\n          children: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        className: \"overflow-visible w-full h-full\",\n        preserveAspectRatio: \"none\",\n        viewBox: [0, yOffset, 100, 100].join(\" \"),\n        children: [Object(d3__WEBPACK_IMPORTED_MODULE_3__[\"range\"])(1, 6).map(function (i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(yScale(i - 0.5) + yOffset, \")\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n              x2: \"100\",\n              className: \"text-gray-200 stroke-current\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this);\n        }), yAccessors.map(function (yAccessor, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            transform: \"translate(0, \".concat(lineOffset * i, \")\"),\n            children: [yAccessors.length === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: areaGenerator(yAccessor) || \"\",\n              className: \"text-indigo-50 fill-current\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: lineGenerator(yAccessor) || \"\",\n              className: \"\".concat(colors[i % colors.length], \" stroke-current mix-blend-multiply\"),\n              fill: \"none\",\n              strokeWidth: \"4\",\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              vectorEffect: \"non-scaling-stroke\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full h-10 mt-6 whitespace-nowrap\",\n        children: xTicks.map(function (_ref4) {\n          var _ref5 = Object(_Users_amelia_repos_octo_flat_covid_dashboard_dashboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n              offset = _ref5[0],\n              value = _ref5[1];\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"absolute w-0 flex justify-center tabular-nums\",\n            style: {\n              left: \"\".concat(offset, \"%\")\n            },\n            children: value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n_c = RestrictionsTimeline;\nvar colors = [\"text-indigo-500\", \"text-green-500\", \"text-yellow-500\", \"text-gray-500\", \"text-pink-500\", \"text-blue-500\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"RestrictionsTimeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0cmljdGlvbnNUaW1lbGluZS50c3g/MmFhZiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwidGltZUZvcm1hdCIsIlJlc3RyaWN0aW9uc1RpbWVsaW5lIiwiZGF0YSIsInhBY2Nlc3NvciIsInlBY2Nlc3NvcnMiLCJsaW5lT2Zmc2V0IiwieU9mZnNldCIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsImV4dGVudCIsInJhbmdlIiwieFRpY2tzIiwidGlja3MiLCJtYXAiLCJ0aWNrIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJ5VGlja3MiLCJ0b0xvY2FsZVN0cmluZyIsImFyZWFHZW5lcmF0b3IiLCJ5QWNjZXNzb3IiLCJhcmVhIiwieCIsImQiLCJ5MCIsInkxIiwiZGVmaW5lZCIsIk51bWJlciIsImlzRmluaXRlIiwibGluZUdlbmVyYXRvciIsImxpbmUiLCJ5IiwiaGVpZ2h0Iiwib2Zmc2V0IiwidmFsdWUiLCJ0b3AiLCJqb2luIiwiaSIsImxlbmd0aCIsImNvbG9ycyIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWlCQSxJQUFNQSxVQUFVLEdBQUdDLHFEQUFVLENBQUMsYUFBRCxDQUE3QjtBQUNPLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FJdkI7QUFBQSxNQUhYQyxJQUdXLFFBSFhBLElBR1c7QUFBQSxNQUZYQyxTQUVXLFFBRlhBLFNBRVc7QUFBQSxNQURYQyxVQUNXLFFBRFhBLFVBQ1c7QUFDWCxNQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxNQUFNQyxPQUFPLEdBQUlELFVBQVUsR0FBRyxDQUFkLEdBQW1CLENBQW5DLENBRlcsQ0FHWDs7QUFDQSxNQUFNRSxNQUFNLEdBQUdDLG9EQUFTLEdBQ3JCQyxNQURZLENBQ0xDLGlEQUFNLENBQUNSLElBQUQsRUFBT0MsU0FBUCxDQURELEVBRVpRLEtBRlksQ0FFTixDQUFDLENBQUQs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QTtBQUFBLGNBQUVvQixNQUFGO0FBQUEsY0FBVUMsS0FBVjs7QUFBQSw4QkFDVjtBQUNFLHFCQUFTLEVBQUMsK0NBRFo7QUFFRSxpQkFBSyxFQUFFO0FBQUVNLGtCQUFJLFlBQUtQLE1BQUw7QUFBTixhQUZUO0FBQUEsc0JBSUdDO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUVELENBaEdNO0tBQU1sQyxvQjtBQWtHYixJQUFNdUMsTUFBTSxHQUFHLENBQ2IsaUJBRGEsRUFFYixnQkFGYSxFQUdiLGlCQUhhLEVBSWIsZUFKYSxFQUtiLGVBTGEsRUFNYixlQU5hLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3RyaWN0aW9uc1RpbWVsaW5lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGV4dGVudCxcbiAgcmFuZ2UsXG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVRpbWUsXG4gIGFyZWEsXG4gIGxpbmUsXG4gIHRpbWVGb3JtYXQsXG59IGZyb20gXCJkM1wiO1xuXG50eXBlIEFjY2Vzc29yVHlwZSA9IChkOiBhbnkpID0+IG51bWJlciB8IERhdGUgfCBudWxsO1xudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogYW55W107XG4gIHhBY2Nlc3NvcjogQWNjZXNzb3JUeXBlO1xuICB5QWNjZXNzb3JzOiBBY2Nlc3NvclR5cGVbXTtcbn07XG5cbmNvbnN0IGZvcm1hdERhdGUgPSB0aW1lRm9ybWF0KFwiJS1iICUtZCwgJVlcIik7XG5leHBvcnQgY29uc3QgUmVzdHJpY3Rpb25zVGltZWxpbmUgPSAoe1xuICBkYXRhLFxuICB4QWNjZXNzb3IsXG4gIHlBY2Nlc3NvcnMsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBsaW5lT2Zmc2V0ID0gMS42O1xuICBjb25zdCB5T2Zmc2V0ID0gKGxpbmVPZmZzZXQgKiA2KSAvIDI7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAuZG9tYWluKGV4dGVudChkYXRhLCB4QWNjZXNzb3IpIGFzIFtudW1iZXIsIG51bWJlcl0pXG4gICAgLnJhbmdlKFswLCAxMDBdKTtcbiAgY29uc3QgeFRpY2tzID0geFNjYWxlXG4gICAgLnRpY2tzKDMpXG4gICAgLm1hcCgodGljaykgPT4gW3hTY2FsZSh0aWNrKSwgZm9ybWF0RGF0ZSh0aWNrKV0pO1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgNV0pLnJhbmdlKFsxMDAsIDBdKTtcbiAgY29uc3QgeVRpY2tzID0geVNjYWxlXG4gICAgLnRpY2tzKDUpXG4gICAgLm1hcCgodGljaykgPT4gW3lTY2FsZSh0aWNrKSwgdGljay50b0xvY2FsZVN0cmluZygpXSk7XG5cbiAgY29uc3QgYXJlYUdlbmVyYXRvciA9ICh5QWNjZXNzb3I6IEFjY2Vzc29yVHlwZSkgPT5cbiAgICBhcmVhKClcbiAgICAgIC54KChkOiBhbnkpID0+IHhTY2FsZSh4QWNjZXNzb3IoZCkpKVxuICAgICAgLnkwKDEwMClcbiAgICAgIC55MSgoZDogYW55KSA9PiB5U2NhbGUoeUFjY2Vzc29yKGQpKSlcbiAgICAgIC5kZWZpbmVkKChkOiBhbnkpID0+IE51bWJlci5pc0Zpbml0ZSh5QWNjZXNzb3IoZCkpKShkYXRhKTtcbiAgY29uc3QgbGluZUdlbmVyYXRvciA9ICh5QWNjZXNzb3I6IEFjY2Vzc29yVHlwZSkgPT5cbiAgICBsaW5lKClcbiAgICAgIC54KChkOiBhbnkpID0+IHhTY2FsZSh4QWNjZXNzb3IoZCkpKVxuICAgICAgLnkoKGQ6IGFueSkgPT4geVNjYWxlKHlBY2Nlc3NvcihkKSkpXG4gICAgICAuZGVmaW5lZCgoZDogYW55KSA9PiBOdW1iZXIuaXNGaW5pdGUoeUFjY2Vzc29yKGQpKSkoZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIG1iLTggZmxleFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IDQwMCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGZsZXgtbm9uZSB3LTBcIj5cbiAgICAgICAge3lUaWNrcy5tYXAoKFtvZmZzZXQsIHZhbHVlXSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMCBoLTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgbGVmdC1mdWxsIC1tbC0yIHRhYnVsYXItbnVtc1wiXG4gICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke29mZnNldH0lYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy12aXNpYmxlIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PXtbMCwgeU9mZnNldCwgMTAwLCAxMDBdLmpvaW4oXCIgXCIpfVxuICAgICAgICA+XG4gICAgICAgICAge3JhbmdlKDEsIDYpLm1hcCgoaSkgPT4gKFxuICAgICAgICAgICAgPGcga2V5PXtpfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHt5U2NhbGUoaSAtIDAuNSkgKyB5T2Zmc2V0fSlgfT5cbiAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICB4Mj1cIjEwMFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCBzdHJva2UtY3VycmVudFwiXG4gICAgICAgICAgICAgICAgdmVjdG9yRWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7eUFjY2Vzc29ycy5tYXAoKHlBY2Nlc3NvciwgaSkgPT4gKFxuICAgICAgICAgICAgPGcga2V5PXtpfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtsaW5lT2Zmc2V0ICogaX0pYH0+XG4gICAgICAgICAgICAgIHt5QWNjZXNzb3JzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9e2FyZWFHZW5lcmF0b3IoeUFjY2Vzc29yKSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAgZmlsbC1jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9e2xpbmVHZW5lcmF0b3IoeUFjY2Vzc29yKSB8fCBcIlwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICBjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdXG4gICAgICAgICAgICAgICAgfSBzdHJva2UtY3VycmVudCBtaXgtYmxlbmQtbXVsdGlwbHlgfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgdmVjdG9yRWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgbXQtNiB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgIHt4VGlja3MubWFwKChbb2Zmc2V0LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0wIGZsZXgganVzdGlmeS1jZW50ZXIgdGFidWxhci1udW1zXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogYCR7b2Zmc2V0fSVgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgY29sb3JzID0gW1xuICBcInRleHQtaW5kaWdvLTUwMFwiLFxuICBcInRleHQtZ3JlZW4tNTAwXCIsXG4gIFwidGV4dC15ZWxsb3ctNTAwXCIsXG4gIFwidGV4dC1ncmF5LTUwMFwiLFxuICBcInRleHQtcGluay01MDBcIixcbiAgXCJ0ZXh0LWJsdWUtNTAwXCIsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RestrictionsTimeline.tsx\n");

/***/ })

})