webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Gauge.tsx":
/*!******************************!*\
  !*** ./components/Gauge.tsx ***!
  \******************************/
/*! exports provided: Gauge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gauge\", function() { return Gauge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\nvar _jsxFileName = \"/Users/amelia/repos/octo/flat/covid-dashboard/dashboard/components/Gauge.tsx\",\n    _this = undefined;\n\n\n\nvar Gauge = function Gauge(_ref) {\n  var _ref$value = _ref.value,\n      value = _ref$value === void 0 ? 50 : _ref$value,\n      label = _ref.label,\n      _ref$min = _ref.min,\n      min = _ref$min === void 0 ? 0 : _ref$min,\n      _ref$max = _ref.max,\n      max = _ref$max === void 0 ? 100 : _ref$max,\n      units = _ref.units;\n  var backgroundArc = Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"arc\"])().cornerRadius(1)({\n    innerRadius: 0.55,\n    outerRadius: 1,\n    startAngle: -Math.PI / 1.75,\n    endAngle: Math.PI / 1.75\n  });\n  var percentScale = Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleLinear\"])().domain([min, max]).range([0, 1]);\n  var percent = percentScale(value);\n  var angleScale = Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleLinear\"])().domain([-0.25, 1.25]).range([-Math.PI / 1.75, Math.PI / 1.75]).clamp(true);\n  var angle = angleScale(percent);\n  var filledArc = Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"arc\"])()({\n    innerRadius: 0.55,\n    outerRadius: 1,\n    startAngle: 0,\n    endAngle: angle\n  });\n  var colorScale = Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleLinear\"])().domain([0, 0.5, 1]).range([\"#F05C3B\", \"#fff\", \"#35C970\"]);\n  var markerLocation = getCoordsOnArc(angle, 1 - (1 - 0.55) / 2);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex-col align-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: \"m-auto mb-8 overflow-visible\",\n      width: \"9em\",\n      viewBox: [-1, -1, 2, 1].join(\" \"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pattern\", {\n          id: \"Gauge__gradient\",\n          patternUnits: \"userSpaceOnUse\",\n          x: \"-1\",\n          width: \"2\",\n          height: \"1\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"image\", {\n            href: \"/gauge_background.png\",\n            x: \"0\",\n            y: \"0\",\n            width: \"2\",\n            height: \"1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: backgroundArc || \"\",\n        className: \"text-gray-200 fill-current\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: filledArc || \"\",\n        fill: \"url(#Gauge__gradient)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"line\", {\n        y1: \"-1\",\n        y2: \"-0.5\",\n        stroke: \"white\",\n        strokeWidth: \"0.027\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n        className: \"text-gray-600 stroke-current transition-all\",\n        cx: markerLocation[0],\n        cy: markerLocation[1],\n        r: \"0.24\",\n        strokeWidth: \"0.01\",\n        fill: colorScale(percent)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        d: \"M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z\",\n        transform: \"rotate(\".concat(angle * (180 / Math.PI), \") translate(-0.2, -0.33)\"),\n        className: \"text-gray-300 fill-current transition-all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-6xl line-height-1 text-gray-800 font-black tabular-nums text-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"text-gray-800 font-black text-5xl w-44\",\n        style: {\n          verticalAlign: \"11%\"\n        },\n        children: value > 0 ? \"+\" : \"-\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this), Object(d3__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(\",\")(Math.abs(value)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"text-gray-300 font-medium ml-1 text-5xl\",\n        children: \"%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), !!label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-1 text-lg text-gray-500 font-light text-center\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }, _this), !!units && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-xs text-gray-600 font-light\",\n      children: units\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n_c = Gauge;\n\nvar getCoordsOnArc = function getCoordsOnArc(angle) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n  return [Math.cos(angle - Math.PI / 2) * offset, Math.sin(angle - Math.PI / 2) * offset];\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Gauge\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYXVnZS50c3g/OTNhNyJdLCJuYW1lcyI6WyJHYXVnZSIsInZhbHVlIiwibGFiZWwiLCJtaW4iLCJtYXgiLCJ1bml0cyIsImJhY2tncm91bmRBcmMiLCJhcmMiLCJjb3JuZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwicGVyY2VudFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInBlcmNlbnQiLCJhbmdsZVNjYWxlIiwiY2xhbXAiLCJhbmdsZSIsImZpbGxlZEFyYyIsImNvbG9yU2NhbGUiLCJtYXJrZXJMb2NhdGlvbiIsImdldENvb3Jkc09uQXJjIiwiam9pbiIsInZlcnRpY2FsQWxpZ24iLCJmb3JtYXQiLCJhYnMiLCJvZmZzZXQiLCJjb3MiLCJzaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQU1SO0FBQUEsd0JBTFhDLEtBS1c7QUFBQSxNQUxYQSxLQUtXLDJCQUxILEVBS0c7QUFBQSxNQUpYQyxLQUlXLFFBSlhBLEtBSVc7QUFBQSxzQkFIWEMsR0FHVztBQUFBLE1BSFhBLEdBR1cseUJBSEwsQ0FHSztBQUFBLHNCQUZYQyxHQUVXO0FBQUEsTUFGWEEsR0FFVyx5QkFGTCxHQUVLO0FBQUEsTUFEWEMsS0FDVyxRQURYQSxLQUNXO0FBQ1gsTUFBTUMsYUFBYSxHQUFHQyw4Q0FBRyxHQUFHQyxZQUFOLENBQW1CLENBQW5CLEVBQXNCO0FBQzFDQyxlQUFXLEVBQUUsSUFENkI7QUFFMUNDLGVBQVcsRUFBRSxDQUY2QjtBQUcxQ0MsY0FBVSxFQUFFLENBQUNDLElBQUksQ0FBQ0MsRUFBTixHQUFXLElBSG1CO0FBSTFDQyxZQUFRLEVBQUVGLElBQUksQ0FBQ0MsRUFBTCxHQUFVO0FBSnNCLEdBQXRCLENBQXRCO0FBTUEs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TCxDQUFTWCxLQUFLLEdBQUdWLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQTNCLElBQWdDa0IsTUFGcUIsQ0FBaEM7QUFBQSxDQUF2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2F1Z2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXJjLCBzY2FsZUxpbmVhciwgZm9ybWF0IH0gZnJvbSBcImQzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xuICB1bml0cz86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBHYXVnZSA9ICh7XG4gIHZhbHVlID0gNTAsXG4gIGxhYmVsLFxuICBtaW4gPSAwLFxuICBtYXggPSAxMDAsXG4gIHVuaXRzLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3QgYmFja2dyb3VuZEFyYyA9IGFyYygpLmNvcm5lclJhZGl1cygxKSh7XG4gICAgaW5uZXJSYWRpdXM6IDAuNTUsXG4gICAgb3V0ZXJSYWRpdXM6IDEsXG4gICAgc3RhcnRBbmdsZTogLU1hdGguUEkgLyAxLjc1LFxuICAgIGVuZEFuZ2xlOiBNYXRoLlBJIC8gMS43NSxcbiAgfSk7XG4gIGNvbnN0IHBlcmNlbnRTY2FsZSA9IHNjYWxlTGluZWFyKCkuZG9tYWluKFttaW4sIG1heF0pLnJhbmdlKFswLCAxXSk7XG4gIGNvbnN0IHBlcmNlbnQgPSBwZXJjZW50U2NhbGUodmFsdWUpO1xuICBjb25zdCBhbmdsZVNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWy0wLjI1LCAxLjI1XSlcbiAgICAucmFuZ2UoWy1NYXRoLlBJIC8gMS43NSwgTWF0aC5QSSAvIDEuNzVdKVxuICAgIC5jbGFtcCh0cnVlKTtcbiAgY29uc3QgYW5nbGUgPSBhbmdsZVNjYWxlKHBlcmNlbnQpO1xuICBjb25zdCBmaWxsZWRBcmMgPSBhcmMoKSh7XG4gICAgaW5uZXJSYWRpdXM6IDAuNTUsXG4gICAgb3V0ZXJSYWRpdXM6IDEsXG4gICAgc3RhcnRBbmdsZTogMCxcbiAgICBlbmRBbmdsZTogYW5nbGUsXG4gIH0pO1xuXG4gIGNvbnN0IGNvbG9yU2NhbGUgPSBzY2FsZUxpbmVhcjxzdHJpbmc+KClcbiAgICAuZG9tYWluKFswLCAwLjUsIDFdKVxuICAgIC5yYW5nZShbXCIjRjA1QzNCXCIsIFwiI2ZmZlwiLCBcIiMzNUM5NzBcIl0pO1xuICBjb25zdCBtYXJrZXJMb2NhdGlvbiA9IGdldENvb3Jkc09uQXJjKGFuZ2xlLCAxIC0gKDEgLSAwLjU1KSAvIDIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgYWxpZ24tY2VudGVyXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT1cIm0tYXV0byBtYi04IG92ZXJmbG93LXZpc2libGVcIlxuICAgICAgICB3aWR0aD1cIjllbVwiXG4gICAgICAgIHZpZXdCb3g9e1stMSwgLTEsIDIsIDFdLmpvaW4oXCIgXCIpfVxuICAgICAgPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8cGF0dGVyblxuICAgICAgICAgICAgaWQ9XCJHYXVnZV9fZ3JhZGllbnRcIlxuICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgeD1cIi0xXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgaHJlZj1cIi9nYXVnZV9iYWNrZ3JvdW5kLnBuZ1wiXG4gICAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgICAgeT1cIjBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjJcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxXCJcbiAgICAgICAgICAgID48L2ltYWdlPlxuICAgICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgICA8cGF0aCBkPXtiYWNrZ3JvdW5kQXJjIHx8IFwiXCJ9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgPHBhdGggZD17ZmlsbGVkQXJjIHx8IFwiXCJ9IGZpbGw9XCJ1cmwoI0dhdWdlX19ncmFkaWVudClcIiAvPlxuICAgICAgICA8bGluZSB5MT1cIi0xXCIgeTI9XCItMC41XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjAuMDI3XCIgLz5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgc3Ryb2tlLWN1cnJlbnQgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgIGN4PXttYXJrZXJMb2NhdGlvblswXX1cbiAgICAgICAgICBjeT17bWFya2VyTG9jYXRpb25bMV19XG4gICAgICAgICAgcj1cIjAuMjRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC4wMVwiXG4gICAgICAgICAgZmlsbD17Y29sb3JTY2FsZShwZXJjZW50KX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTAuMTM2MzY0IDAuMDI5MDEwMkMwLjE1ODI3OSAtMC4wMDk2NzAxIDAuMjE5MTU2IC0wLjAwOTY3MDA5IDAuMjQxMDcxIDAuMDI5MDEwMkMwLjI5NzA3OCAwLjEyMDAyMyAwLjM3NSAwLjI2MzM2NyAwLjM3NSAwLjMyNDgwMUMwLjM3NSAwLjQyMjYzOSAwLjI5MjIwOCAwLjUgMC4xODc1IDAuNUMwLjA4NTIyNzIgMC41IC0xLjgzNDZlLTA4IDAuNDIyNjM5IC05Ljc5Mjc0ZS0wOSAwLjMyNDgwMUMwLjAwMjQzNTA2IDAuMjYzMzY3IDAuMDgwMzU3MSAwLjEyMDAyMyAwLjEzNjM2NCAwLjAyOTAxMDJaTTAuMTg3NSAwLjM4MTY4NEMwLjIyMTU5MSAwLjM4MTY4NCAwLjI0ODM3NyAwLjM1NjY1NSAwLjI0ODM3NyAwLjMyNDgwMUMwLjI0ODM3NyAwLjI5Mjk0NyAwLjIyMTU5MSAwLjI2NzkxOCAwLjE4NzUgMC4yNjc5MThDMC4xNTM0MDkgMC4yNjc5MTggMC4xMjY2MjMgMC4yOTI5NDcgMC4xMjY2MjMgMC4zMjQ4MDFDMC4xMjY2MjMgMC4zNTY2NTUgMC4xNTU4NDQgMC4zODE2ODQgMC4xODc1IDAuMzgxNjg0WlwiXG4gICAgICAgICAgdHJhbnNmb3JtPXtgcm90YXRlKCR7XG4gICAgICAgICAgICBhbmdsZSAqICgxODAgLyBNYXRoLlBJKVxuICAgICAgICAgIH0pIHRyYW5zbGF0ZSgtMC4yLCAtMC4zMylgfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgZmlsbC1jdXJyZW50IHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBsaW5lLWhlaWdodC0xIHRleHQtZ3JheS04MDAgZm9udC1ibGFjayB0YWJ1bGFyLW51bXMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtYmxhY2sgdGV4dC01eGwgdy00NFwiXG4gICAgICAgICAgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCIxMSVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlID4gMCA/IFwiK1wiIDogXCItXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2Zvcm1hdChcIixcIikoTWF0aC5hYnModmFsdWUpKX1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBmb250LW1lZGl1bSBtbC0xIHRleHQtNXhsXCI+JTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyEhbGFiZWwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZyB0ZXh0LWdyYXktNTAwIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshIXVuaXRzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgZm9udC1saWdodFwiPnt1bml0c308L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgZ2V0Q29vcmRzT25BcmMgPSAoYW5nbGU6IG51bWJlciwgb2Zmc2V0ID0gMTApID0+IFtcbiAgTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gMikgKiBvZmZzZXQsXG4gIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDIpICogb2Zmc2V0LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gauge.tsx\n");

/***/ })

})