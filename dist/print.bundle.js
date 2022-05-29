/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/icon/aspas.png":
/*!****************************!*\
  !*** ./src/icon/aspas.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84bcc8bb31669649752e.png";

/***/ }),

/***/ "./src/icon/depoimento01.png":
/*!***********************************!*\
  !*** ./src/icon/depoimento01.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c38d6be1c7cf0a107b.png";

/***/ }),

/***/ "./src/icon/depoimento02.png":
/*!***********************************!*\
  !*** ./src/icon/depoimento02.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25db9ec91ba82543e2d4.png";

/***/ }),

/***/ "./src/icon/depoimento03.png":
/*!***********************************!*\
  !*** ./src/icon/depoimento03.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afdec4867ad3ea58dee5.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/deposition.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ amDeposition)
/* harmony export */ });
/* harmony import */ var _icon_aspas_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/aspas.png */ "./src/icon/aspas.png");
/* harmony import */ var _icon_depoimento01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/depoimento01.png */ "./src/icon/depoimento01.png");
/* harmony import */ var _icon_depoimento02_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/depoimento02.png */ "./src/icon/depoimento02.png");
/* harmony import */ var _icon_depoimento03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/depoimento03.png */ "./src/icon/depoimento03.png");







function amDeposition() {
  const general = document.createElement('section');
  const container =document.createElement('div');
  const container_1 =document.createElement('div');
  const item_1 =document.createElement('div');
  const item_2 =document.createElement('div');
  const item_3 =document.createElement('div');
  const item_4 =document.createElement('div');
  const title = document.createElement('h1');

  const aspas = new Image();
  aspas.src = _icon_aspas_png__WEBPACK_IMPORTED_MODULE_0__;
  title.innerHTML= 'Depoimentos';
  //classList
  item_1.classList.add('col-sm-6');
  item_2.classList.add('col-sm-6');
  item_3.classList.add('col-sm-6');
  item_4.classList.add('col-sm-6');
  container.classList.add('depoimentDad');
  container_1.classList.add('depoimentDad');
  container.classList.add('row');
  container_1.classList.add('row');
  container_1.classList.add('container-fluid');
  container.classList.add('container-fluid');
  general.classList.add('mt-3');
  general.classList.add('containerDepoiment');
  title.classList.add('orange');
  item_1.classList.add('depoiment');
  item_2.classList.add('depoiment');
  item_3.classList.add('depoiment');
  item_4.classList.add('depoiment');

  //add in fhater
  item_1.appendChild(aspas);
  item_1.appendChild(title);
  container.appendChild(item_1);
  container.appendChild(item_2);
  container_1.appendChild(item_3);
  container_1.appendChild(item_4);
  general.appendChild(container);
  general.appendChild(container_1);

  //logic
  item_2.appendChild(depoiment('Joana L','“A melhor pizza do bairro, e quando pedimos o vinho para acompanhar, temos a dupla perfeita. Recomendo a todos aqueles que procuram um lugar agradável para jantar.”','Facebook',_icon_depoimento01_png__WEBPACK_IMPORTED_MODULE_1__));
  item_3.appendChild(depoiment('Clarissa J','“A melhor pizza do bairro, e quando pedimos o vinho para acompanhar, temos a dupla perfeita. Recomendo a todos aqueles que procuram um lugar agradável para jantar.”','YouTube',_icon_depoimento02_png__WEBPACK_IMPORTED_MODULE_2__));
  item_4.appendChild(depoiment('Juliana P','“A melhor pizza do bairro, e quando pedimos o vinho para acompanhar, temos a dupla perfeita. Recomendo a todos aqueles que procuram um lugar agradável para jantar.”','Google',_icon_depoimento03_png__WEBPACK_IMPORTED_MODULE_3__));

  return general;
}

function depoiment(name, paragraph, job, imgSrc){
  const depoiment = document.createElement('div');
  const para = document.createElement('p');
  const author = document.createElement('h2');
  const work = document.createElement('h5');
  const authorImg = new Image();


  //add in father
  depoiment.appendChild(authorImg);
  depoiment.appendChild(para);
  depoiment.appendChild(author);
  depoiment.appendChild(work);

  //class list
  authorImg.classList.add('depoimentImg');
  //logic
  para.innerHTML = paragraph;
  author.innerHTML = name;
  authorImg.src = imgSrc;
  work.innerHTML = job;

  return depoiment;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9DO0FBQ1E7QUFDQTtBQUNBOzs7O0FBSTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMk5BQTJOLG1EQUFLO0FBQ2hPLDZOQUE2TixtREFBSztBQUNsTywyTkFBMk4sbURBQUs7O0FBRWhPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL2RlcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IEljb24gZnJvbSAnLi9pY29uL2FzcGFzLnBuZyc7XG5pbXBvcnQgZGVwXzEgZnJvbSAnLi9pY29uL2RlcG9pbWVudG8wMS5wbmcnO1xuaW1wb3J0IGRlcF8yIGZyb20gJy4vaWNvbi9kZXBvaW1lbnRvMDIucG5nJztcbmltcG9ydCBkZXBfMyBmcm9tICcuL2ljb24vZGVwb2ltZW50bzAzLnBuZyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbURlcG9zaXRpb24oKSB7XG4gIGNvbnN0IGdlbmVyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhaW5lcl8xID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaXRlbV8xID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaXRlbV8yID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaXRlbV8zID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaXRlbV80ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gIGNvbnN0IGFzcGFzID0gbmV3IEltYWdlKCk7XG4gIGFzcGFzLnNyYyA9IEljb247XG4gIHRpdGxlLmlubmVySFRNTD0gJ0RlcG9pbWVudG9zJztcbiAgLy9jbGFzc0xpc3RcbiAgaXRlbV8xLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02Jyk7XG4gIGl0ZW1fMi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICBpdGVtXzMuY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKTtcbiAgaXRlbV80LmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXBvaW1lbnREYWQnKTtcbiAgY29udGFpbmVyXzEuY2xhc3NMaXN0LmFkZCgnZGVwb2ltZW50RGFkJyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgY29udGFpbmVyXzEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gIGNvbnRhaW5lcl8xLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1mbHVpZCcpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWZsdWlkJyk7XG4gIGdlbmVyYWwuY2xhc3NMaXN0LmFkZCgnbXQtMycpO1xuICBnZW5lcmFsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lckRlcG9pbWVudCcpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UnKTtcbiAgaXRlbV8xLmNsYXNzTGlzdC5hZGQoJ2RlcG9pbWVudCcpO1xuICBpdGVtXzIuY2xhc3NMaXN0LmFkZCgnZGVwb2ltZW50Jyk7XG4gIGl0ZW1fMy5jbGFzc0xpc3QuYWRkKCdkZXBvaW1lbnQnKTtcbiAgaXRlbV80LmNsYXNzTGlzdC5hZGQoJ2RlcG9pbWVudCcpO1xuXG4gIC8vYWRkIGluIGZoYXRlclxuICBpdGVtXzEuYXBwZW5kQ2hpbGQoYXNwYXMpO1xuICBpdGVtXzEuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbV8xKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1fMik7XG4gIGNvbnRhaW5lcl8xLmFwcGVuZENoaWxkKGl0ZW1fMyk7XG4gIGNvbnRhaW5lcl8xLmFwcGVuZENoaWxkKGl0ZW1fNCk7XG4gIGdlbmVyYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgZ2VuZXJhbC5hcHBlbmRDaGlsZChjb250YWluZXJfMSk7XG5cbiAgLy9sb2dpY1xuICBpdGVtXzIuYXBwZW5kQ2hpbGQoZGVwb2ltZW50KCdKb2FuYSBMJywn4oCcQSBtZWxob3IgcGl6emEgZG8gYmFpcnJvLCBlIHF1YW5kbyBwZWRpbW9zIG8gdmluaG8gcGFyYSBhY29tcGFuaGFyLCB0ZW1vcyBhIGR1cGxhIHBlcmZlaXRhLiBSZWNvbWVuZG8gYSB0b2RvcyBhcXVlbGVzIHF1ZSBwcm9jdXJhbSB1bSBsdWdhciBhZ3JhZMOhdmVsIHBhcmEgamFudGFyLuKAnScsJ0ZhY2Vib29rJyxkZXBfMSkpO1xuICBpdGVtXzMuYXBwZW5kQ2hpbGQoZGVwb2ltZW50KCdDbGFyaXNzYSBKJywn4oCcQSBtZWxob3IgcGl6emEgZG8gYmFpcnJvLCBlIHF1YW5kbyBwZWRpbW9zIG8gdmluaG8gcGFyYSBhY29tcGFuaGFyLCB0ZW1vcyBhIGR1cGxhIHBlcmZlaXRhLiBSZWNvbWVuZG8gYSB0b2RvcyBhcXVlbGVzIHF1ZSBwcm9jdXJhbSB1bSBsdWdhciBhZ3JhZMOhdmVsIHBhcmEgamFudGFyLuKAnScsJ1lvdVR1YmUnLGRlcF8yKSk7XG4gIGl0ZW1fNC5hcHBlbmRDaGlsZChkZXBvaW1lbnQoJ0p1bGlhbmEgUCcsJ+KAnEEgbWVsaG9yIHBpenphIGRvIGJhaXJybywgZSBxdWFuZG8gcGVkaW1vcyBvIHZpbmhvIHBhcmEgYWNvbXBhbmhhciwgdGVtb3MgYSBkdXBsYSBwZXJmZWl0YS4gUmVjb21lbmRvIGEgdG9kb3MgYXF1ZWxlcyBxdWUgcHJvY3VyYW0gdW0gbHVnYXIgYWdyYWTDoXZlbCBwYXJhIGphbnRhci7igJ0nLCdHb29nbGUnLGRlcF8zKSk7XG5cbiAgcmV0dXJuIGdlbmVyYWw7XG59XG5cbmZ1bmN0aW9uIGRlcG9pbWVudChuYW1lLCBwYXJhZ3JhcGgsIGpvYiwgaW1nU3JjKXtcbiAgY29uc3QgZGVwb2ltZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBjb25zdCBhdXRob3JJbWcgPSBuZXcgSW1hZ2UoKTtcblxuXG4gIC8vYWRkIGluIGZhdGhlclxuICBkZXBvaW1lbnQuYXBwZW5kQ2hpbGQoYXV0aG9ySW1nKTtcbiAgZGVwb2ltZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICBkZXBvaW1lbnQuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgZGVwb2ltZW50LmFwcGVuZENoaWxkKHdvcmspO1xuXG4gIC8vY2xhc3MgbGlzdFxuICBhdXRob3JJbWcuY2xhc3NMaXN0LmFkZCgnZGVwb2ltZW50SW1nJyk7XG4gIC8vbG9naWNcbiAgcGFyYS5pbm5lckhUTUwgPSBwYXJhZ3JhcGg7XG4gIGF1dGhvci5pbm5lckhUTUwgPSBuYW1lO1xuICBhdXRob3JJbWcuc3JjID0gaW1nU3JjO1xuICB3b3JrLmlubmVySFRNTCA9IGpvYjtcblxuICByZXR1cm4gZGVwb2ltZW50O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==