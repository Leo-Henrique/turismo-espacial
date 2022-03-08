/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-mobile */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _tabs_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-navigation */ \"./js/modules/tabs-navigation.js\");\ndocument.documentElement.classList.add(\"js\");\r\n\r\n\r\n\r\n\r\n\r\n(0,_menu_mobile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_tabs_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://turismo-espacial/./js/modules/main.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\nfunction menuMobile() {\r\n    const btn = document.getElementById(\"headerBtnMobile\");\r\n    const menu = btn.nextElementSibling;\r\n\r\n\r\n    function openMenu() {\r\n        btn.ariaExpanded = true;\r\n        btn.ariaLabel = \"Fechar menu de navegação\";\r\n        btn.classList.add(\"close\");\r\n        btn.innerHTML = \r\n        `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"21\">\r\n        <g fill=\"#D0D6F9\" fill-rule=\"evenodd\">\r\n          <path d=\"m2.575.954 16.97 16.97-2.12 2.122L.455 3.076z\"/>\r\n          <path d=\"M.454 17.925 17.424.955l2.122 2.12-16.97 16.97z\"/>\r\n        </g>\r\n        </svg>`;\r\n\r\n        document.body.classList.add(\"menu-mobile-scrollbar\");\r\n\r\n        menu.classList.add(\"display\");\r\n        setTimeout(() => {\r\n            menu.classList.add(\"show\");\r\n        }, 20);\r\n        setTimeout(() => {\r\n            document.addEventListener(\"click\", clickOutside);\r\n        }, 300)\r\n    }\r\n    function closeMenu() {\r\n        btn.ariaExpanded = false;\r\n        btn.ariaLabel = \"Abrir menu de navegação\";\r\n        btn.classList.remove(\"close\");\r\n        btn.innerHTML = \r\n        `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"21\">\r\n        <path d=\"M0 0h24v3H0zm0 9h24v3H0zm0 9h24v3H0z\" fill=\"#D0D6F9\" fill-rule=\"evenodd\"/>\r\n        </svg>`;\r\n\r\n        document.body.classList.remove(\"menu-mobile-scrollbar\");\r\n\r\n        menu.classList.remove(\"show\");\r\n        document.removeEventListener(\"click\", clickOutside);\r\n        setTimeout(() => {\r\n            menu.classList.remove(\"display\");\r\n        }, 300);\r\n    }\r\n\r\n    function clickOutside(event) {\r\n        if (event.target !== btn && event.target !== menu) {\r\n            closeMenu();\r\n        }\r\n    }\r\n    btn.addEventListener(\"click\", () => {\r\n        if (btn.ariaExpanded === \"false\") {\r\n            openMenu();\r\n        } else {\r\n            closeMenu();\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://turismo-espacial/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/tabs-navigation.js":
/*!***************************************!*\
  !*** ./js/modules/tabs-navigation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabsNavigation)\n/* harmony export */ });\nfunction tabsNavigation() {\r\n    const btns = document.querySelectorAll(\"#tabsNav button\");\r\n    const contentImgs = document.querySelectorAll(\"#tabsContentImgs img\");\r\n    const contentTexts = document.querySelectorAll(\"#tabsContentTexts > div\");\r\n\r\n    function showTabContents(index) {\r\n        if (!contentImgs[index].classList.contains(\"show\") && !contentTexts[index].classList.contains(\"show\")) {\r\n\r\n            function show(element) {\r\n                element.forEach((item) => {\r\n                    item.classList.remove(\"show\");\r\n                    setTimeout(() => {\r\n                        item.style.display = \"none\";\r\n                    }, 300);\r\n                });\r\n\r\n                setTimeout(() => {\r\n                    element[index].style.display = \"block\";\r\n    \r\n                    setTimeout(() => {\r\n                        element[index].classList.add(\"show\");\r\n                    }, 20);\r\n                }, 300);\r\n            }\r\n            show(contentImgs);\r\n            show(contentTexts);\r\n        }\r\n    }\r\n    btns.forEach((item, index) => {\r\n        item.addEventListener(\"click\", () => {\r\n            showTabContents(index);\r\n\r\n            btns.forEach(element => {\r\n                element.parentElement.classList.remove(\"active\");\r\n            });\r\n            item.parentElement.classList.add(\"active\");\r\n        });\r\n    });\r\n    btns[0].parentElement.classList.add(\"active\");\r\n    contentImgs[0].style.display = \"block\";\r\n    contentImgs[0].classList.add(\"show\");\r\n    contentTexts[0].style.display = \"block\";\r\n    contentTexts[0].classList.add(\"show\");\r\n}\n\n//# sourceURL=webpack://turismo-espacial/./js/modules/tabs-navigation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/modules/main.js");
/******/ 	
/******/ })()
;