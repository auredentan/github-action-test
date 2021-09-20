/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 767:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 198:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable prettier/prettier
const github = __nccwpck_require__(198)
const core = __nccwpck_require__(767)

try {
	const { context } = github
	const ref = context.ref

	const tag = ref.substr('/ref/tags/'.length, ref.length)

	const regexp = /^([A-Za-z0-9]+)-[0-9]+.[0-9]+.[0-9]+/
	const tagMatch = tag.match(regexp)

	if (!tagMatch) {
		core.setFailed('No tag matching the format could be found, aborting .... !')
		return
	}
	const appName = tagMatch[1]
	core.setOutput('appName', appName)
} catch (err) {
	core.setFailed(`Error ${err}, action may still succeed though`)
}

})();

module.exports = __webpack_exports__;
/******/ })()
;