/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../sf5/src/component/button-up/scss/index.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../sf5/src/component/button-up/js/_btn-up.js":
/***/ (() => {


/*
 * 32 avalable animation effects (from jQuery UI).
 * More info: https://api.jqueryui.com/easings/
 * 
 * linear
 * swing
 * easeInQuad
 * easeOutQuad
 * easeInOutQuad
 * easeInCubic
 * easeOutCubic
 * easeInOutCubic
 * easeInQuart
 * easeOutQuart
 * easeInOutQuart
 * easeInQuint
 * easeOutQuint
 * easeInOutQuint
 * easeInExpo
 * easeOutExpo
 * easeInOutExpo
 * easeInSine
 * easeOutSine
 * easeInOutSine
 * easeInCirc
 * easeOutCirc
 * easeInOutCirc
 * easeInElastic
 * easeOutElastic
 * easeInOutElastic
 * easeInBack
 * easeOutBack
 * easeInOutBack
 * easeInBounce
 * easeOutBounce
 * easeInOutBounce
 */

function scrollTo(to, duration = 700)
{
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));

            if (currentTime < duration)
            {
                requestAnimationFrame(animateScroll);
            }
            else
            {
                element.scrollTop = to;
            }
        };

    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {

    let btn = document.querySelector('.sf-up');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100)
        {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    btn.onclick = function (click)
    {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

/***/ }),

/***/ "../sf5/src/component/button-up/js/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _btn_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../sf5/src/component/button-up/js/_btn-up.js");
/* harmony import */ var _btn_up__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_btn_up__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../sf5/src/component/button-up/scss/index.scss");
/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../sf5/src/component/button-up/js/index.js");


})();

/******/ })()
;