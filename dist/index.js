/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Attribute.ts":
/*!**************************!*\
  !*** ./src/Attribute.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attribute: () => (/* binding */ Attribute)\n/* harmony export */ });\nclass Attribute {\n    constructor(attributeName) {\n        this.attributeName = attributeName;\n        let tempElement = document.getElementById(attributeName);\n        if (!tempElement)\n            throw new Error(`Attribute ${attributeName} not found`);\n        this.element = tempElement;\n    }\n    getValue() {\n        if (this.element instanceof HTMLInputElement) {\n            let nameField = document.getElementById(this.attributeName + '_name');\n            let entityField = document.getElementById(this.attributeName + '_entityname');\n            if (this.element.type === 'text')\n                return this.element.value;\n            if (this.element.type === 'checkbox')\n                return this.element.checked;\n            if (this.element.type === 'hidden' && nameField instanceof HTMLInputElement && entityField instanceof HTMLInputElement) {\n                const lookupValue = this.element.value;\n                if (lookupValue)\n                    return {\n                        id: lookupValue,\n                        name: nameField.value,\n                        entityType: entityField.value\n                    };\n                else\n                    return null;\n            }\n        }\n        if (this.element instanceof HTMLSpanElement) {\n            const radioButtons = this.element.querySelectorAll('input[type=\"radio\"]');\n            for (let i = 0; i < radioButtons.length; i++) {\n                const radioButton = radioButtons[i];\n                if (radioButton.checked) {\n                    return radioButton.value;\n                }\n            }\n        }\n        if (this.element instanceof HTMLSelectElement) {\n            return this.element.value;\n        }\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXR0cmlidXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNLFNBQVM7SUFJbEIsWUFBWSxhQUFxQjtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLGFBQWEsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksZ0JBQWdCLEVBQUUsQ0FBQztZQUMzQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDdEUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUM3RSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU07Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLFNBQVMsWUFBWSxnQkFBZ0IsSUFBSSxXQUFXLFlBQVksZ0JBQWdCLEVBQUUsQ0FBQztnQkFDckgsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLElBQUksV0FBVztvQkFDWCxPQUFPO3dCQUNILEVBQUUsRUFBRSxXQUFXO3dCQUNmLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSzt3QkFDckIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLO3FCQUNoQyxDQUFDOztvQkFFRixPQUFPLElBQUksQ0FBQztZQUNwQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxlQUFlLEVBQUUsQ0FBQztZQUMxQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDMUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0MsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBcUIsQ0FBQztnQkFDeEQsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3RCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLGlCQUFpQixFQUFFLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM5QixDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG93ZXJwYWdlc2NsaWVudGFwaS8uL3NyYy9BdHRyaWJ1dGUudHM/YWUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcclxuICAgIHByaXZhdGUgYXR0cmlidXRlTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lO1xyXG4gICAgICAgIGxldCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgIGlmICghdGVtcEVsZW1lbnQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlICR7YXR0cmlidXRlTmFtZX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGVtcEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlKCk6IGFueSB7IC8vIFRPRE8sIHRoaXMgb25seSB3b3JrcyBmb3IgdGV4dFxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmF0dHJpYnV0ZU5hbWUgKyAnX25hbWUnKTtcclxuICAgICAgICAgICAgbGV0IGVudGl0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5hdHRyaWJ1dGVOYW1lICsgJ19lbnRpdHluYW1lJylcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2hpZGRlbicgJiYgbmFtZUZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbnRpdHlGaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvb2t1cFZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBsb29rdXBWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZUZpZWxkLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlUeXBlOiBlbnRpdHlGaWVsZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTcGFuRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9CdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpb0J1dHRvbiA9IHJhZGlvQnV0dG9uc1tpXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFkaW9CdXR0b24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Attribute.ts\n");

/***/ }),

/***/ "./src/FormContext.ts":
/*!****************************!*\
  !*** ./src/FormContext.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PowerPagesClientAPI: () => (/* binding */ PowerPagesClientAPI)\n/* harmony export */ });\n/* harmony import */ var _Attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attribute */ \"./src/Attribute.ts\");\n\nvar PowerPagesClientAPI;\n(function (PowerPagesClientAPI) {\n    class FormContext {\n        constructor() {\n        }\n        getAttribute(attributeName) {\n            return new _Attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(attributeName);\n        }\n    }\n    PowerPagesClientAPI.FormContext = FormContext;\n})(PowerPagesClientAPI || (PowerPagesClientAPI = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRm9ybUNvbnRleHQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFFakMsSUFBVSxtQkFBbUIsQ0FTbkM7QUFURCxXQUFpQixtQkFBbUI7SUFDaEMsTUFBYSxXQUFXO1FBQ3BCO1FBQ0EsQ0FBQztRQUVNLFlBQVksQ0FBQyxhQUFxQjtZQUNyQyxPQUFPLElBQUksaURBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0o7SUFQWSwrQkFBVyxjQU92QjtBQUNMLENBQUMsRUFUZ0IsbUJBQW1CLEtBQW5CLG1CQUFtQixRQVNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvd2VycGFnZXNjbGllbnRhcGkvLi9zcmMvRm9ybUNvbnRleHQudHM/M2JjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUgfSBmcm9tICcuL0F0dHJpYnV0ZSc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFBvd2VyUGFnZXNDbGllbnRBUEkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEZvcm1Db250ZXh0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogQXR0cmlidXRlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/FormContext.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PowerPagesClientAPI: () => (/* reexport safe */ _FormContext__WEBPACK_IMPORTED_MODULE_0__.PowerPagesClientAPI)\n/* harmony export */ });\n/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormContext */ \"./src/FormContext.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3dlcnBhZ2VzY2xpZW50YXBpLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9Gb3JtQ29udGV4dCc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;