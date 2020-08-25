webpackHotUpdate_N_E("pages/index",{

/***/ "./components/containers/sidebar.tsx":
/*!*******************************************!*\
  !*** ./components/containers/sidebar.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages */ \"./pages/index.tsx\");\n/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rule */ \"./components/rule.tsx\");\n/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/colors */ \"./utils/colors.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/anton/src/sketch-assistant-generator/client/components/containers/sidebar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"sidebar__Header\",\n  componentId: \"sc-12ccuqv-0\"\n})([\"margin:40px auto;\"]);\n_c = Header;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input.withConfig({\n  displayName: \"sidebar__Input\",\n  componentId: \"sc-12ccuqv-1\"\n})([\"border:none;height:40px;padding:12px;font-size:16px;margin:8px;width:100%;\"]);\n_c2 = Input;\n\nvar Sidebar = function Sidebar() {\n  _s();\n\n  var assistants = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_pages__WEBPACK_IMPORTED_MODULE_1__[\"CoreAssistantContext\"]);\n  return __jsx(\"aside\", {\n    style: {\n      width: 'auto',\n      height: '100vh',\n      overflow: 'auto',\n      backgroundColor: Object(_utils_colors__WEBPACK_IMPORTED_MODULE_3__[\"getColor\"])(5),\n      display: 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    style: {\n      margin: 'auto',\n      display: 'block'\n    },\n    src: \"./logo.svg\",\n    alt: \"logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    style: {\n      width: '100%',\n      display: 'flex'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(Input, {\n    type: \"search\",\n    name: \"\",\n    id: \"\",\n    placeholder: \"Search for a rule...\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  })), assistants.map(function (a) {\n    return __jsx(\"div\", {\n      key: a.packageName,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }\n    }, a.rules.map(function (rule) {\n      return __jsx(_rule__WEBPACK_IMPORTED_MODULE_2__[\"Rule\"], {\n        rule: rule,\n        key: rule.name,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }\n      });\n    }));\n  }));\n};\n\n_s(Sidebar, \"BEdv0VyTA89vD+kt/uVwQ+0ZIag=\");\n\n_c3 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXJzL3NpZGViYXIudHN4PzUwMDciXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwiSW5wdXQiLCJpbnB1dCIsIlNpZGViYXIiLCJhc3Npc3RhbnRzIiwidXNlQ29udGV4dCIsIkNvcmVBc3Npc3RhbnRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsImdldENvbG9yIiwiZGlzcGxheSIsIm1hcmdpbiIsIm1hcCIsImEiLCJwYWNrYWdlTmFtZSIsInJ1bGVzIiwicnVsZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlCQUFaO0tBQU1GLE07QUFJTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEtBQVY7QUFBQTtBQUFBO0FBQUEsa0ZBQVg7TUFBTUQsSzs7QUFTTixJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLFVBQThCLEdBQUdDLHdEQUFVLENBQUNDLDJEQUFELENBQWpEO0FBRUEsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxZQUFNLEVBQUUsT0FGSDtBQUdMQyxjQUFRLEVBQUUsTUFITDtBQUlMQyxxQkFBZSxFQUFFQyw4REFBUSxDQUFDLENBQUQsQ0FKcEI7QUFLTEMsYUFBTyxFQUFFO0FBTEosS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUsTUFBVjtBQUFrQkQsYUFBTyxFQUFFO0FBQTNCLEtBRFQ7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUdFLE9BQUcsRUFBQyxNQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBZ0JFO0FBQUssU0FBSyxFQUFFO0FBQUVMLFdBQUssRUFBRSxNQUFUO0FBQWlCSyxhQUFPLEVBQUU7QUFBMUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLEVBQTFCO0FBQTZCLE1BQUUsRUFBQyxFQUFoQztBQUFtQyxlQUFXLEVBQUMsc0JBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhCRixFQW1CR1IsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQUMsQ0FBQztBQUFBLFdBQ2Y7QUFBSyxTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELENBQUMsQ0FBQ0UsS0FBRixDQUFRSCxHQUFSLENBQVksVUFBQUksSUFBSTtBQUFBLGFBQ2YsTUFBQywwQ0FBRDtBQUFNLFlBQUksRUFBRUEsSUFBWjtBQUFrQixXQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURlO0FBQUEsS0FBaEIsQ0FESCxDQURlO0FBQUEsR0FBaEIsQ0FuQkgsQ0FERjtBQTZCRCxDQWhDRDs7R0FBTWhCLE87O01BQUFBLE87QUFrQ1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWluZXJzL3NpZGViYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvcmVBc3Npc3RhbnRDb250ZXh0IH0gZnJvbSAnLi4vLi4vcGFnZXMnO1xuaW1wb3J0IHsgQ29yZUFzc2lzdGFudERUTyB9IGZyb20gJy4uLy4uL3N0YXRpY3MvZGVmaW5pdGlvbnMuZHRvJztcbmltcG9ydCB7IFJ1bGUgfSBmcm9tICcuLi9ydWxlJztcbmltcG9ydCB7IGdldENvbG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29sb3JzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBtYXJnaW46IDQwcHggYXV0bztcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDhweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBhc3Npc3RhbnRzOiBDb3JlQXNzaXN0YW50RFRPW10gPSB1c2VDb250ZXh0KENvcmVBc3Npc3RhbnRDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yKDUpLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgICBzcmM9XCIuL2xvZ28uc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwic2VhcmNoXCIgbmFtZT1cIlwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgcnVsZS4uLlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthc3Npc3RhbnRzLm1hcChhID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2EucGFja2FnZU5hbWV9PlxuICAgICAgICAgIHthLnJ1bGVzLm1hcChydWxlID0+IChcbiAgICAgICAgICAgIDxSdWxlIHJ1bGU9e3J1bGV9IGtleT17cnVsZS5uYW1lfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/containers/sidebar.tsx\n");

/***/ })

})