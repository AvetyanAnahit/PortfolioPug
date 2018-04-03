/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/module */ \"./src/scripts/modules/module.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbW9kdWxlcy9tb2R1bGUnO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/modules/module.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/module.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('hello from module');\n\nvar menu__hamburger = document.querySelector(\".menu__hamburger\");\nconsole.log(menu__hamburger);\nmenu__hamburger.addEventListener(\"click\", function () {\n  var mobilemenu__content = document.querySelector(\".full-screen__list\");\n  console.log(mobilemenu__content.classList, '.full-screen__-list.classList');\n  if (menu__hamburger.classList.contains(\"menu__hamburger_active\")) {\n    menu__hamburger.classList.remove(\"menu__hamburger_active\");\n    mobilemenu__content.classList.remove(\"active\");\n  } else {\n    menu__hamburger.classList.add(\"menu__hamburger_active\");\n    mobilemenu__content.classList.add(\"active\");\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21vZHVsZS5qcz8zMTVjIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtZW51X19oYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibW9iaWxlbWVudV9fY29udGVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxHQUFSLENBQVksbUJBQVo7O0FBRUEsSUFBSUMsa0JBQWtCQyxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUNBSixRQUFRQyxHQUFSLENBQVlDLGVBQVo7QUFDQUEsZ0JBQWdCRyxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBVztBQUNuRCxNQUFJQyxzQkFBc0JILFNBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQTFCO0FBQ0FKLFVBQVFDLEdBQVIsQ0FBWUssb0JBQW9CQyxTQUFoQyxFQUEyQywrQkFBM0M7QUFDQSxNQUFHTCxnQkFBZ0JLLFNBQWhCLENBQTBCQyxRQUExQixDQUFtQyx3QkFBbkMsQ0FBSCxFQUFpRTtBQUMvRE4sb0JBQWdCSyxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsd0JBQWpDO0FBQ0FILHdCQUFvQkMsU0FBcEIsQ0FBOEJFLE1BQTlCLENBQXFDLFFBQXJDO0FBQ0QsR0FIRCxNQUdPO0FBQ0xQLG9CQUFnQkssU0FBaEIsQ0FBMEJHLEdBQTFCLENBQThCLHdCQUE5QjtBQUNBSix3QkFBb0JDLFNBQXBCLENBQThCRyxHQUE5QixDQUFrQyxRQUFsQztBQUNEO0FBQ0YsQ0FWRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21vZHVsZXMvbW9kdWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hlbGxvIGZyb20gbW9kdWxlJyk7XHJcblxyXG52YXIgbWVudV9faGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19oYW1idXJnZXJcIik7XHJcbmNvbnNvbGUubG9nKG1lbnVfX2hhbWJ1cmdlcik7XHJcbm1lbnVfX2hhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7ICAgIFxyXG4gIHZhciBtb2JpbGVtZW51X19jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsLXNjcmVlbl9fbGlzdFwiKTtcclxuICBjb25zb2xlLmxvZyhtb2JpbGVtZW51X19jb250ZW50LmNsYXNzTGlzdCwgJy5mdWxsLXNjcmVlbl9fLWxpc3QuY2xhc3NMaXN0Jyk7XHJcbiAgaWYobWVudV9faGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVfX2hhbWJ1cmdlcl9hY3RpdmVcIikpIHtcclxuICAgIG1lbnVfX2hhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9faGFtYnVyZ2VyX2FjdGl2ZVwiKTtcclxuICAgIG1vYmlsZW1lbnVfX2NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudV9faGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJtZW51X19oYW1idXJnZXJfYWN0aXZlXCIpO1xyXG4gICAgbW9iaWxlbWVudV9fY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/module.js\n");

/***/ })

/******/ });