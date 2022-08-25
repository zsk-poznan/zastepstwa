(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("strapiDs", ["react"], factory);
	else if(typeof exports === 'object')
		exports["strapiDs"] = factory(require("react"));
	else
		root["strapiDs"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/LiveRegions/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LiveRegions/constants.js":
/*!**************************************!*\
  !*** ./src/LiveRegions/constants.js ***!
  \**************************************/
/*! exports provided: LiveRegionIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveRegionIds\", function() { return LiveRegionIds; });\nvar LiveRegionIds = {\n  Log: 'live-region-log',\n  Status: 'live-region-status',\n  Alert: 'live-region-alert'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGlEcy8uL3NyYy9MaXZlUmVnaW9ucy9jb25zdGFudHMuanM/YzQxZiJdLCJuYW1lcyI6WyJMaXZlUmVnaW9uSWRzIiwiTG9nIiwiU3RhdHVzIiwiQWxlcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxhQUFhLEdBQUc7QUFDM0JDLEtBQUcsRUFBRSxpQkFEc0I7QUFFM0JDLFFBQU0sRUFBRSxvQkFGbUI7QUFHM0JDLE9BQUssRUFBRTtBQUhvQixDQUF0QiIsImZpbGUiOiIuL3NyYy9MaXZlUmVnaW9ucy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTGl2ZVJlZ2lvbklkcyA9IHtcbiAgTG9nOiAnbGl2ZS1yZWdpb24tbG9nJyxcbiAgU3RhdHVzOiAnbGl2ZS1yZWdpb24tc3RhdHVzJyxcbiAgQWxlcnQ6ICdsaXZlLXJlZ2lvbi1hbGVydCcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/LiveRegions/constants.js\n");

/***/ }),

/***/ "./src/LiveRegions/index.js":
/*!**********************************!*\
  !*** ./src/LiveRegions/index.js ***!
  \**********************************/
/*! exports provided: useNotifyAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useNotifyAT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useNotifyAT */ \"./src/LiveRegions/useNotifyAT.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useNotifyAT\", function() { return _useNotifyAT__WEBPACK_IMPORTED_MODULE_0__[\"useNotifyAT\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGlEcy8uL3NyYy9MaXZlUmVnaW9ucy9pbmRleC5qcz8zYzMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL0xpdmVSZWdpb25zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi91c2VOb3RpZnlBVCc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/LiveRegions/index.js\n");

/***/ }),

/***/ "./src/LiveRegions/useNotifyAT.js":
/*!****************************************!*\
  !*** ./src/LiveRegions/useNotifyAT.js ***!
  \****************************************/
/*! exports provided: useNotifyAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useNotifyAT\", function() { return useNotifyAT; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/LiveRegions/constants.js\");\n\n\n\nvar notifyLog = function notifyLog(message) {\n  var logEl = document.querySelector(\"#\".concat(_constants__WEBPACK_IMPORTED_MODULE_1__[\"LiveRegionIds\"].Log));\n\n  if (logEl) {\n    logEl.innerText = message;\n  }\n};\n\nvar notifyStatus = function notifyStatus(message) {\n  var statusEl = document.querySelector(\"#\".concat(_constants__WEBPACK_IMPORTED_MODULE_1__[\"LiveRegionIds\"].Status));\n\n  if (statusEl) {\n    statusEl.innerText = message;\n  }\n};\n\nvar notifyAlert = function notifyAlert(message) {\n  var alertEl = document.querySelector(\"#\".concat(_constants__WEBPACK_IMPORTED_MODULE_1__[\"LiveRegionIds\"].Alert));\n\n  if (alertEl) {\n    alertEl.innerText = message;\n  }\n};\n\nvar useNotifyAT = function useNotifyAT() {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return function () {\n      notifyLog('');\n      notifyAlert('');\n      notifyStatus('');\n    };\n  }, []);\n  return {\n    notifyLog: notifyLog,\n    notifyAlert: notifyAlert,\n    notifyStatus: notifyStatus\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGlEcy8uL3NyYy9MaXZlUmVnaW9ucy91c2VOb3RpZnlBVC5qcz83YjdiIl0sIm5hbWVzIjpbIm5vdGlmeUxvZyIsIm1lc3NhZ2UiLCJsb2dFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkxpdmVSZWdpb25JZHMiLCJMb2ciLCJpbm5lclRleHQiLCJub3RpZnlTdGF0dXMiLCJzdGF0dXNFbCIsIlN0YXR1cyIsIm5vdGlmeUFsZXJ0IiwiYWxlcnRFbCIsIkFsZXJ0IiwidXNlTm90aWZ5QVQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBYTtBQUM3QixNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQkMsd0RBQWEsQ0FBQ0MsR0FBekMsRUFBZDs7QUFFQSxNQUFJSixLQUFKLEVBQVc7QUFDVEEsU0FBSyxDQUFDSyxTQUFOLEdBQWtCTixPQUFsQjtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDUCxPQUFELEVBQWE7QUFDaEMsTUFBTVEsUUFBUSxHQUFHTixRQUFRLENBQUNDLGFBQVQsWUFBMkJDLHdEQUFhLENBQUNLLE1BQXpDLEVBQWpCOztBQUVBLE1BQUlELFFBQUosRUFBYztBQUNaQSxZQUFRLENBQUNGLFNBQVQsR0FBcUJOLE9BQXJCO0FBQ0Q7QUFDRixDQU5EOztBQVFBLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNWLE9BQUQsRUFBYTtBQUMvQixNQUFNVyxPQUFPLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQkMsd0RBQWEsQ0FBQ1EsS0FBekMsRUFBaEI7O0FBRUEsTUFBSUQsT0FBSixFQUFhO0FBQ1hBLFdBQU8sQ0FBQ0wsU0FBUixHQUFvQk4sT0FBcEI7QUFDRDtBQUNGLENBTkQ7O0FBUU8sSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsV0FBTyxZQUFNO0FBQ1hmLGVBQVMsQ0FBQyxFQUFELENBQVQ7QUFDQVcsaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUgsa0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRCxLQUpEO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQU87QUFBRVIsYUFBUyxFQUFUQSxTQUFGO0FBQWFXLGVBQVcsRUFBWEEsV0FBYjtBQUEwQkgsZ0JBQVksRUFBWkE7QUFBMUIsR0FBUDtBQUNELENBVk0iLCJmaWxlIjoiLi9zcmMvTGl2ZVJlZ2lvbnMvdXNlTm90aWZ5QVQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpdmVSZWdpb25JZHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IG5vdGlmeUxvZyA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGxvZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7TGl2ZVJlZ2lvbklkcy5Mb2d9YCk7XG5cbiAgaWYgKGxvZ0VsKSB7XG4gICAgbG9nRWwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgfVxufTtcblxuY29uc3Qgbm90aWZ5U3RhdHVzID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtMaXZlUmVnaW9uSWRzLlN0YXR1c31gKTtcblxuICBpZiAoc3RhdHVzRWwpIHtcbiAgICBzdGF0dXNFbC5pbm5lclRleHQgPSBtZXNzYWdlO1xuICB9XG59O1xuXG5jb25zdCBub3RpZnlBbGVydCA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGFsZXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtMaXZlUmVnaW9uSWRzLkFsZXJ0fWApO1xuXG4gIGlmIChhbGVydEVsKSB7XG4gICAgYWxlcnRFbC5pbm5lclRleHQgPSBtZXNzYWdlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTm90aWZ5QVQgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG5vdGlmeUxvZygnJyk7XG4gICAgICBub3RpZnlBbGVydCgnJyk7XG4gICAgICBub3RpZnlTdGF0dXMoJycpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4geyBub3RpZnlMb2csIG5vdGlmeUFsZXJ0LCBub3RpZnlTdGF0dXMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/LiveRegions/useNotifyAT.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGlEcy9leHRlcm5hbCBcInJlYWN0XCI/NTg4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});