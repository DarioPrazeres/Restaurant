/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/icon/barra-horizontal.png":
/*!***************************************!*\
  !*** ./src/icon/barra-horizontal.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd4f5f6a269c6b6e825b.png";

/***/ }),

/***/ "./src/icon/pizza.jpg":
/*!****************************!*\
  !*** ./src/icon/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b8b37ab15ddd26bef62.jpg";

/***/ }),

/***/ "./src/icon/restaurante02.jpg":
/*!************************************!*\
  !*** ./src/icon/restaurante02.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88f25b367b6be012991b.jpg";

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
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ amHome)
/* harmony export */ });
/* harmony import */ var _icon_barra_horizontal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/barra-horizontal.png */ "./src/icon/barra-horizontal.png");
/* harmony import */ var _icon_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/pizza.jpg */ "./src/icon/pizza.jpg");
/* harmony import */ var _icon_restaurante02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/restaurante02.jpg */ "./src/icon/restaurante02.jpg");




const general = document.createElement('section');

const banner = document.createElement('section');
const infoBox = document.createElement('div');
const img = new Image();
const title = document.createElement('h1');
const subTitle = document.createElement('h2');
const sTitle = document.createElement('h5');

const welcome = document.createElement('section');
const welcome_1 = document.createElement('div');
const welcome_2 = document.createElement('div');
const welcome_3 = document.createElement('div'); 

function amHome(){
  general.appendChild(bannerShow());
  general.appendChild(welcomeToFresco());

  return general;
}
function bannerShow(){
  banner.classList.add('banner');
  infoBox.classList.add('container');
  infoBox.classList.add('infoBox');
  title.classList.add('white');
  subTitle.classList.add('orange');
  sTitle.classList.add('white');
  img.src = _icon_barra_horizontal_png__WEBPACK_IMPORTED_MODULE_0__;

  //style
  img.setAttribute('style', 'width:300px');
  title.setAttribute('style','font-size:60px');
  sTitle.setAttribute('style','font-size:25px');

  title.innerHTML = 'Fresco';
  subTitle.innerHTML = 'Especialidades Italianas';
  sTitle.innerHTML = 'Comida boa | Bom vinho';

  infoBox.appendChild(img);
  infoBox.appendChild(title);
  infoBox.appendChild(subTitle);
  infoBox.appendChild(sTitle);
  banner.appendChild(infoBox);

  return document.body.appendChild(banner);
}
function welcomeToFresco(){
  welcome.appendChild(welcomeGrid_1());
  welcome.appendChild(welcomeGrid_2());
  welcome.appendChild(welcomeGrid_3());

  // to Welcome_1

  welcome.classList.add('row');
  welcome.classList.add('mt-3');
  welcome.classList.add('mb-3');
  welcome.classList.add('jumbotron');
  welcome.classList.add('align-items-md-stretch');
  //welcome.setAttribute('style', 'heigt: 900px');
  return welcome;
}
function welcomeGrid_1(){
  const litleTitle = document.createElement('h5');
  const bigTitle = document.createElement('h1');
  const fewTitle = document.createElement('h2');
  const  para =  document.createElement('p');
  const btn = document.createElement('button');

  //classes style
  bigTitle.classList.add('orange');
  btn.classList.add('btn');
  btn.classList.add('btn-dark');
  btn.classList.add('round');
  welcome_1.classList.add('wine');
  welcome_1.classList.add('mb-2');
  //write in the tags
  litleTitle.innerHTML= 'O mais amado do bairro';
  bigTitle.innerHTML= 'Bem-Vindo';
  fewTitle.innerHTML='Reconhecido pela boa comida e bebida desde 1978.';
  para.innerHTML='Premiada pelo instituto Curso em Vídeo de qualidade de culinária e oferecendo os melhores serviços. Premiada pelo instituto Curso em Vídeo de qualidade de culinária e oferecendo os melhores serviços.';
  btn.innerHTML='Mais Sobre nós';

  //put in welcome
  welcome_1.appendChild(litleTitle);
  welcome_1.appendChild(bigTitle);
  welcome_1.appendChild(fewTitle);
  welcome_1.appendChild(para);
  welcome_1.appendChild(btn);
  welcome_1.classList.add('col-xl-4');

  return welcome_1;
}
function welcomeGrid_2(){
  
  welcome_2.classList.add('col-xl-4');
  welcome_2.classList.add('pizza');
  welcome_2.classList.add('mb-2');
  return welcome_2;
}
function welcomeGrid_3(){
  const rest = new Image();
  const title_3=document.createElement('h1');
  const para = document.createElement('p');
  
  welcome_3.appendChild(rest);
  welcome_3.appendChild(title_3);
  welcome_3.appendChild(para);

  para.innerHTML = 'Todos os dias, das 9h até 23h';
  title_3.innerHTML = 'Horário';
  //style
  para.classList.add('white');
  title_3.classList.add('white');

  welcome_3.classList.add('col-xl-4');
  welcome_3.classList.add('timeLine');
  welcome_3.classList.add('mb-2');
  
  return welcome_3;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YrQztBQUNWO0FBQ2E7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50Ly4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBJY29uIGZyb20gJy4vaWNvbi9iYXJyYS1ob3Jpem9udGFsLnBuZyc7XHJcbmltcG9ydCBwaXp6YSBmcm9tICcuL2ljb24vcGl6emEuanBnJztcclxuaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSAnLi9pY29uL3Jlc3RhdXJhbnRlMDIuanBnJztcclxuXHJcbmNvbnN0IGdlbmVyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbmNvbnN0IGluZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5jb25zdCBzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG5cclxuY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuY29uc3Qgd2VsY29tZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IHdlbGNvbWVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCB3ZWxjb21lXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbUhvbWUoKXtcclxuICBnZW5lcmFsLmFwcGVuZENoaWxkKGJhbm5lclNob3coKSk7XHJcbiAgZ2VuZXJhbC5hcHBlbmRDaGlsZCh3ZWxjb21lVG9GcmVzY28oKSk7XHJcblxyXG4gIHJldHVybiBnZW5lcmFsO1xyXG59XHJcbmZ1bmN0aW9uIGJhbm5lclNob3coKXtcclxuICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XHJcbiAgaW5mb0JveC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICBpbmZvQm94LmNsYXNzTGlzdC5hZGQoJ2luZm9Cb3gnKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xyXG4gIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZScpO1xyXG4gIHNUaXRsZS5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xyXG4gIGltZy5zcmMgPSBJY29uO1xyXG5cclxuICAvL3N0eWxlXHJcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MzAwcHgnKTtcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC1zaXplOjYwcHgnKTtcclxuICBzVGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtc2l6ZToyNXB4Jyk7XHJcblxyXG4gIHRpdGxlLmlubmVySFRNTCA9ICdGcmVzY28nO1xyXG4gIHN1YlRpdGxlLmlubmVySFRNTCA9ICdFc3BlY2lhbGlkYWRlcyBJdGFsaWFuYXMnO1xyXG4gIHNUaXRsZS5pbm5lckhUTUwgPSAnQ29taWRhIGJvYSB8IEJvbSB2aW5obyc7XHJcblxyXG4gIGluZm9Cb3guYXBwZW5kQ2hpbGQoaW1nKTtcclxuICBpbmZvQm94LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBpbmZvQm94LmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcclxuICBpbmZvQm94LmFwcGVuZENoaWxkKHNUaXRsZSk7XHJcbiAgYmFubmVyLmFwcGVuZENoaWxkKGluZm9Cb3gpO1xyXG5cclxuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYW5uZXIpO1xyXG59XHJcbmZ1bmN0aW9uIHdlbGNvbWVUb0ZyZXNjbygpe1xyXG4gIHdlbGNvbWUuYXBwZW5kQ2hpbGQod2VsY29tZUdyaWRfMSgpKTtcclxuICB3ZWxjb21lLmFwcGVuZENoaWxkKHdlbGNvbWVHcmlkXzIoKSk7XHJcbiAgd2VsY29tZS5hcHBlbmRDaGlsZCh3ZWxjb21lR3JpZF8zKCkpO1xyXG5cclxuICAvLyB0byBXZWxjb21lXzFcclxuXHJcbiAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcclxuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ21iLTMnKTtcclxuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ2p1bWJvdHJvbicpO1xyXG4gIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtbWQtc3RyZXRjaCcpO1xyXG4gIC8vd2VsY29tZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWd0OiA5MDBweCcpO1xyXG4gIHJldHVybiB3ZWxjb21lO1xyXG59XHJcbmZ1bmN0aW9uIHdlbGNvbWVHcmlkXzEoKXtcclxuICBjb25zdCBsaXRsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICBjb25zdCBiaWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY29uc3QgZmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0ICBwYXJhID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgLy9jbGFzc2VzIHN0eWxlXHJcbiAgYmlnVGl0bGUuY2xhc3NMaXN0LmFkZCgnb3JhbmdlJyk7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tZGFyaycpO1xyXG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpO1xyXG4gIHdlbGNvbWVfMS5jbGFzc0xpc3QuYWRkKCd3aW5lJyk7XHJcbiAgd2VsY29tZV8xLmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcclxuICAvL3dyaXRlIGluIHRoZSB0YWdzXHJcbiAgbGl0bGVUaXRsZS5pbm5lckhUTUw9ICdPIG1haXMgYW1hZG8gZG8gYmFpcnJvJztcclxuICBiaWdUaXRsZS5pbm5lckhUTUw9ICdCZW0tVmluZG8nO1xyXG4gIGZld1RpdGxlLmlubmVySFRNTD0nUmVjb25oZWNpZG8gcGVsYSBib2EgY29taWRhIGUgYmViaWRhIGRlc2RlIDE5NzguJztcclxuICBwYXJhLmlubmVySFRNTD0nUHJlbWlhZGEgcGVsbyBpbnN0aXR1dG8gQ3Vyc28gZW0gVsOtZGVvIGRlIHF1YWxpZGFkZSBkZSBjdWxpbsOhcmlhIGUgb2ZlcmVjZW5kbyBvcyBtZWxob3JlcyBzZXJ2acOnb3MuIFByZW1pYWRhIHBlbG8gaW5zdGl0dXRvIEN1cnNvIGVtIFbDrWRlbyBkZSBxdWFsaWRhZGUgZGUgY3VsaW7DoXJpYSBlIG9mZXJlY2VuZG8gb3MgbWVsaG9yZXMgc2VydmnDp29zLic7XHJcbiAgYnRuLmlubmVySFRNTD0nTWFpcyBTb2JyZSBuw7NzJztcclxuXHJcbiAgLy9wdXQgaW4gd2VsY29tZVxyXG4gIHdlbGNvbWVfMS5hcHBlbmRDaGlsZChsaXRsZVRpdGxlKTtcclxuICB3ZWxjb21lXzEuYXBwZW5kQ2hpbGQoYmlnVGl0bGUpO1xyXG4gIHdlbGNvbWVfMS5hcHBlbmRDaGlsZChmZXdUaXRsZSk7XHJcbiAgd2VsY29tZV8xLmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gIHdlbGNvbWVfMS5hcHBlbmRDaGlsZChidG4pO1xyXG4gIHdlbGNvbWVfMS5jbGFzc0xpc3QuYWRkKCdjb2wteGwtNCcpO1xyXG5cclxuICByZXR1cm4gd2VsY29tZV8xO1xyXG59XHJcbmZ1bmN0aW9uIHdlbGNvbWVHcmlkXzIoKXtcclxuICBcclxuICB3ZWxjb21lXzIuY2xhc3NMaXN0LmFkZCgnY29sLXhsLTQnKTtcclxuICB3ZWxjb21lXzIuY2xhc3NMaXN0LmFkZCgncGl6emEnKTtcclxuICB3ZWxjb21lXzIuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xyXG4gIHJldHVybiB3ZWxjb21lXzI7XHJcbn1cclxuZnVuY3Rpb24gd2VsY29tZUdyaWRfMygpe1xyXG4gIGNvbnN0IHJlc3QgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCB0aXRsZV8zPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBcclxuICB3ZWxjb21lXzMuYXBwZW5kQ2hpbGQocmVzdCk7XHJcbiAgd2VsY29tZV8zLmFwcGVuZENoaWxkKHRpdGxlXzMpO1xyXG4gIHdlbGNvbWVfMy5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbiAgcGFyYS5pbm5lckhUTUwgPSAnVG9kb3Mgb3MgZGlhcywgZGFzIDloIGF0w6kgMjNoJztcclxuICB0aXRsZV8zLmlubmVySFRNTCA9ICdIb3LDoXJpbyc7XHJcbiAgLy9zdHlsZVxyXG4gIHBhcmEuY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcclxuICB0aXRsZV8zLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XHJcblxyXG4gIHdlbGNvbWVfMy5jbGFzc0xpc3QuYWRkKCdjb2wteGwtNCcpO1xyXG4gIHdlbGNvbWVfMy5jbGFzc0xpc3QuYWRkKCd0aW1lTGluZScpO1xyXG4gIHdlbGNvbWVfMy5jbGFzc0xpc3QuYWRkKCdtYi0yJyk7XHJcbiAgXHJcbiAgcmV0dXJuIHdlbGNvbWVfMztcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==