/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-container {\n    display: grid;\n    place-items: center;\n}\n\nform {\n    display: grid;\n    place-items: center;\n    width: 30rem;\n}\n\n.legend {\n    font-weight: 900;\n    color: var(--task-group-title-clr);\n    place-self: center;\n    font-size: 2rem;\n    margin-bottom: 1rem;\n}\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n}\n\nform div {\n    margin-bottom: .5rem;\n}\n\nform label,\n.toggle-label {\n    margin-bottom: .3rem;\n    height: 1.2rem;\n    color: #2c2c2c;\n    font-weight: 600;\n}\n\nform input[type=\"text\"] {\n    height: 2rem;\n    box-sizing: border-box;\n}\n\nform input[type=\"text\"],\nform textarea {\n    border: 1px solid #000;\n    border-radius: .2rem;\n    padding: .5rem;\n}\n\n#description {\n    resize: none;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.toggle-container {\n    text-align: center;\n}\n\n.form-btn-container {\n    width: 75%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.form-btn-container button {\n    height: 2.5rem;\n    padding: 0 1rem;\n    cursor: pointer;\n    background-color: #011C40;\n    color: #fff;\n    font-size: 1.5rem;\n    border-radius: .5rem;\n    border: 1px solid #424242;\n    transition: .5s;\n}\n\n.form-btn-container button:hover {\n    background-color: #08678C;\n    border: 1px solid #fff;\n}\n\n.form-btn-container button:active {\n    position: relative;\n    bottom: .2rem;\n}\n\n.required-title {\n    color: #2c2c2c;\n    font-weight: 600;\n}\n\n.delete-form-container{\n    display: grid;\n    width: 100%;\n    place-items: center;\n}\n\n.delete-form-container .form-container {\n    width: 30rem;\n}\n\n\n.delete-form-container label {\n    margin-left: 1rem;\n}\n\n.project-div {\n    margin-bottom: .5rem;\n    font-size: 1.2rem;\n    justify-self: start;\n}", "",{"version":3,"sources":["webpack://./src/styles/forms.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,oBAAoB;IACpB,cAAc;IACd,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;;IAEI,sBAAsB;IACtB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,oBAAoB;IACpB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;AACvB","sourcesContent":[".form-container {\n    display: grid;\n    place-items: center;\n}\n\nform {\n    display: grid;\n    place-items: center;\n    width: 30rem;\n}\n\n.legend {\n    font-weight: 900;\n    color: var(--task-group-title-clr);\n    place-self: center;\n    font-size: 2rem;\n    margin-bottom: 1rem;\n}\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n    width: 75%;\n}\n\nform div {\n    margin-bottom: .5rem;\n}\n\nform label,\n.toggle-label {\n    margin-bottom: .3rem;\n    height: 1.2rem;\n    color: #2c2c2c;\n    font-weight: 600;\n}\n\nform input[type=\"text\"] {\n    height: 2rem;\n    box-sizing: border-box;\n}\n\nform input[type=\"text\"],\nform textarea {\n    border: 1px solid #000;\n    border-radius: .2rem;\n    padding: .5rem;\n}\n\n#description {\n    resize: none;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.toggle-container {\n    text-align: center;\n}\n\n.form-btn-container {\n    width: 75%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.form-btn-container button {\n    height: 2.5rem;\n    padding: 0 1rem;\n    cursor: pointer;\n    background-color: #011C40;\n    color: #fff;\n    font-size: 1.5rem;\n    border-radius: .5rem;\n    border: 1px solid #424242;\n    transition: .5s;\n}\n\n.form-btn-container button:hover {\n    background-color: #08678C;\n    border: 1px solid #fff;\n}\n\n.form-btn-container button:active {\n    position: relative;\n    bottom: .2rem;\n}\n\n.required-title {\n    color: #2c2c2c;\n    font-weight: 600;\n}\n\n.delete-form-container{\n    display: grid;\n    width: 100%;\n    place-items: center;\n}\n\n.delete-form-container .form-container {\n    width: 30rem;\n}\n\n\n.delete-form-container label {\n    margin-left: 1rem;\n}\n\n.project-div {\n    margin-bottom: .5rem;\n    font-size: 1.2rem;\n    justify-self: start;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/list.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/list.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --project-title-clr: #fff;\n    --task-group-title-clr: #0D000D;\n    --task-card-clr: #E2E9F1;\n}\n\n.content-container {\n    box-sizing: border-box;\n    padding: 1rem;\n    width: calc(100vw - var(--sidebar-width));\n    height: calc(100Vh - var(--footer-height));\n    overflow-y: auto;\n    overflow-x: none;\n}\n\n.list-title {\n    color: var(--project-title-clr);\n    font-size: 3rem;\n}\n\n.task-group-container {\n    color: var(--task-group-title-clr);\n    border-left: .5rem solid var(--footer-bg-color);\n    border-radius: .5rem;\n    padding: 0 .5rem;\n}\n\n.important-tasks-container h2 {\n    font-weight: 900;\n    text-decoration: underline;\n}\n\n.task-card {\n    width: 35rem;\n    border: .2rem solid #424242;\n    border-radius: .5rem;\n    box-sizing: border-box;\n    padding: .5rem 1rem;\n    background-color: var(--task-card-clr);\n    -webkit-box-shadow: 0px 15px 1rem 2px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 15px 1rem 2px rgba(0,0,0,0.75);\n    box-shadow: 0px 15px 1rem 2px rgba(0,0,0,0.75);\n    margin-bottom: 1rem;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n    padding-bottom: 1rem;\n}\n\n.task-title {\n    cursor: pointer;\n    margin: 0 1rem;\n}\n\n.edit-btn,\n.delete-btn {\n    margin-right: .5rem;\n    background-color: var(--task-card-clr);\n    border: 1px solid var(--task-card-clr);\n    border-radius: .5rem;\n    padding: .5rem;\n    cursor: pointer;\n    transition: .5s;\n}\n\n.edit-btn:hover {\n    background-color: #F2BC57;\n    border: 1px solid #0D000D;\n}\n\n.delete-btn:hover {\n    background-color: #F20F38;\n    border: 1px solid #0D000D;\n}\n\n.edit-btn:active,\n.delete-btn:active {\n    position: relative;\n    bottom: .2rem;\n}\n\n.btn-container {\n    margin-left: auto;\n}\n\n.delete-img, \n.edit-img {\n    height: 1.2rem;\n}\n\n.due-date {\n    padding-bottom: 1rem;\n}\n\n.due-date,\n.description {\n    padding-left: 2rem;\n}\n\n.description {\n    font-style: italic;\n}\n\n.done,\n.done button {\n    background-color: #424242;\n    opacity: .3;\n    text-decoration: line-through;\n}\n\n.done button {\n    cursor: not-allowed;\n}\n\n.done button:hover {\n    background-color: #424242;\n    opacity: .3;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/list.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,+BAA+B;IAC/B,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,yCAAyC;IACzC,0CAA0C;IAC1C,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,+CAA+C;IAC/C,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,sCAAsC;IACtC,sDAAsD;IACtD,mDAAmD;IACnD,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;;IAEI,mBAAmB;IACnB,sCAAsC;IACtC,sCAAsC;IACtC,oBAAoB;IACpB,cAAc;IACd,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf","sourcesContent":[":root {\n    --project-title-clr: #fff;\n    --task-group-title-clr: #0D000D;\n    --task-card-clr: #E2E9F1;\n}\n\n.content-container {\n    box-sizing: border-box;\n    padding: 1rem;\n    width: calc(100vw - var(--sidebar-width));\n    height: calc(100Vh - var(--footer-height));\n    overflow-y: auto;\n    overflow-x: none;\n}\n\n.list-title {\n    color: var(--project-title-clr);\n    font-size: 3rem;\n}\n\n.task-group-container {\n    color: var(--task-group-title-clr);\n    border-left: .5rem solid var(--footer-bg-color);\n    border-radius: .5rem;\n    padding: 0 .5rem;\n}\n\n.important-tasks-container h2 {\n    font-weight: 900;\n    text-decoration: underline;\n}\n\n.task-card {\n    width: 35rem;\n    border: .2rem solid #424242;\n    border-radius: .5rem;\n    box-sizing: border-box;\n    padding: .5rem 1rem;\n    background-color: var(--task-card-clr);\n    -webkit-box-shadow: 0px 15px 1rem 2px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 15px 1rem 2px rgba(0,0,0,0.75);\n    box-shadow: 0px 15px 1rem 2px rgba(0,0,0,0.75);\n    margin-bottom: 1rem;\n}\n\n.task-header {\n    display: flex;\n    align-items: center;\n    padding-bottom: 1rem;\n}\n\n.task-title {\n    cursor: pointer;\n    margin: 0 1rem;\n}\n\n.edit-btn,\n.delete-btn {\n    margin-right: .5rem;\n    background-color: var(--task-card-clr);\n    border: 1px solid var(--task-card-clr);\n    border-radius: .5rem;\n    padding: .5rem;\n    cursor: pointer;\n    transition: .5s;\n}\n\n.edit-btn:hover {\n    background-color: #F2BC57;\n    border: 1px solid #0D000D;\n}\n\n.delete-btn:hover {\n    background-color: #F20F38;\n    border: 1px solid #0D000D;\n}\n\n.edit-btn:active,\n.delete-btn:active {\n    position: relative;\n    bottom: .2rem;\n}\n\n.btn-container {\n    margin-left: auto;\n}\n\n.delete-img, \n.edit-img {\n    height: 1.2rem;\n}\n\n.due-date {\n    padding-bottom: 1rem;\n}\n\n.due-date,\n.description {\n    padding-left: 2rem;\n}\n\n.description {\n    font-style: italic;\n}\n\n.done,\n.done button {\n    background-color: #424242;\n    opacity: .3;\n    text-decoration: line-through;\n}\n\n.done button {\n    cursor: not-allowed;\n}\n\n.done button:hover {\n    background-color: #424242;\n    opacity: .3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/mian.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/mian.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --footer-bg-color: #F28322;\n    --footer-height: 5vh;\n    --light-font-color: #fff;\n    --dark-font-color: #424242;\n    --bg-color: #4184BF;\n    --sidebar-color: #220859;\n    --title-color: #F20587;\n    --sidebar-btn-clr: #714674;\n    --sidebar-btn-clr-dark: #432371;\n    --sidebar-width: 25rem;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    color: var(--dark-font-color);\n    background-color: var(--bg-color);\n    height: calc(100vh - var(--footer-height));\n    margin: 0;\n    display: flex;\n}\n\n.sidebar {\n    box-sizing: border-box;\n    width: var(--sidebar-width);\n    height: calc(100vh - var(--footer-height));\n    background-color: var(--sidebar-color);\n    display: grid;\n    grid-template-columns: 75% 25%;\n    grid-template-rows: repeat(2, 4rem);\n    color: var(--light-font-color);\n    padding: 0.5rem;\n    overflow-y: auto;\n}\n\n.app-title {\n    grid-column: 1 / 3;\n    place-self: center;\n    font-size: 2.2rem;\n    font-family: 'Palette Mosaic', cursive;\n}\n\n.sidebar button {\n    box-sizing: border-box;\n    height: 2.5rem;\n    margin-top: 1rem;\n    background:linear-gradient(to bottom, var(--sidebar-btn-clr) 5%, var(--sidebar-btn-clr-dark) 100%);\n\tbackground-color: var(--sidebar-btn-clr);\n    font-family: 'Secular One', sans-serif;\n    font-size: .85rem;\n    border: 1px solid #000;\n    border-radius: .5rem;\n    padding: .5rem 1rem;\n    color: var(--light-font-color);\n    cursor: pointer;\n    transition: .5s;\n}\n\n.sidebar button:hover {\n    background:linear-gradient(to bottom, var(--sidebar-btn-clr-dark) 5%, var(--sidebar-btn-clr) 100%);\n\tbackground-color: var(--sidebar-btn-clr);\n}\n\n.sidebar button:active {\n    position: relative;\n    bottom: .2rem;\n}\n\n.sidebar-btn-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n    place-self: center;\n}\n\n.menu-btn {\n    width: 4rem;\n    place-self: center;\n}\n\n.menu-img {\n    height: 1.5rem;\n    filter: invert(98%) sepia(56%) saturate(278%) hue-rotate(171deg) brightness(118%) contrast(100%);}\n\n.project-container {\n    grid-column: 1 / 3;\n}\n\n.project-title {\n    font-size: 1.8rem;\n    font-weight: 600;\n    color: var(--title-color);\n}\n\n.proj-name {\n    margin: 0.5rem 0 0.5rem 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.proj-name:hover {\n    position: relative;\n    left: .5rem;\n}\n\n.footer-container {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: var(--footer-bg-color);\n    height: var(--footer-height);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n}\n\n.github-link {\n    margin: 0 .5rem;\n    color: var(--dark-font-color);\n}\n\n.github-icon {\n    height: var(--footer-height);\n}", "",{"version":3,"sources":["webpack://./src/styles/mian.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,oBAAoB;IACpB,wBAAwB;IACxB,0BAA0B;IAC1B,mBAAmB;IACnB,wBAAwB;IACxB,sBAAsB;IACtB,0BAA0B;IAC1B,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,6BAA6B;IAC7B,iCAAiC;IACjC,0CAA0C;IAC1C,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,0CAA0C;IAC1C,sCAAsC;IACtC,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,8BAA8B;IAC9B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,gBAAgB;IAChB,kGAAkG;CACrG,wCAAwC;IACrC,sCAAsC;IACtC,iBAAiB;IACjB,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,kGAAkG;CACrG,wCAAwC;AACzC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,gGAAgG,CAAC;;AAErG;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,wCAAwC;IACxC,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":[":root {\n    --footer-bg-color: #F28322;\n    --footer-height: 5vh;\n    --light-font-color: #fff;\n    --dark-font-color: #424242;\n    --bg-color: #4184BF;\n    --sidebar-color: #220859;\n    --title-color: #F20587;\n    --sidebar-btn-clr: #714674;\n    --sidebar-btn-clr-dark: #432371;\n    --sidebar-width: 25rem;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    color: var(--dark-font-color);\n    background-color: var(--bg-color);\n    height: calc(100vh - var(--footer-height));\n    margin: 0;\n    display: flex;\n}\n\n.sidebar {\n    box-sizing: border-box;\n    width: var(--sidebar-width);\n    height: calc(100vh - var(--footer-height));\n    background-color: var(--sidebar-color);\n    display: grid;\n    grid-template-columns: 75% 25%;\n    grid-template-rows: repeat(2, 4rem);\n    color: var(--light-font-color);\n    padding: 0.5rem;\n    overflow-y: auto;\n}\n\n.app-title {\n    grid-column: 1 / 3;\n    place-self: center;\n    font-size: 2.2rem;\n    font-family: 'Palette Mosaic', cursive;\n}\n\n.sidebar button {\n    box-sizing: border-box;\n    height: 2.5rem;\n    margin-top: 1rem;\n    background:linear-gradient(to bottom, var(--sidebar-btn-clr) 5%, var(--sidebar-btn-clr-dark) 100%);\n\tbackground-color: var(--sidebar-btn-clr);\n    font-family: 'Secular One', sans-serif;\n    font-size: .85rem;\n    border: 1px solid #000;\n    border-radius: .5rem;\n    padding: .5rem 1rem;\n    color: var(--light-font-color);\n    cursor: pointer;\n    transition: .5s;\n}\n\n.sidebar button:hover {\n    background:linear-gradient(to bottom, var(--sidebar-btn-clr-dark) 5%, var(--sidebar-btn-clr) 100%);\n\tbackground-color: var(--sidebar-btn-clr);\n}\n\n.sidebar button:active {\n    position: relative;\n    bottom: .2rem;\n}\n\n.sidebar-btn-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n    place-self: center;\n}\n\n.menu-btn {\n    width: 4rem;\n    place-self: center;\n}\n\n.menu-img {\n    height: 1.5rem;\n    filter: invert(98%) sepia(56%) saturate(278%) hue-rotate(171deg) brightness(118%) contrast(100%);}\n\n.project-container {\n    grid-column: 1 / 3;\n}\n\n.project-title {\n    font-size: 1.8rem;\n    font-weight: 600;\n    color: var(--title-color);\n}\n\n.proj-name {\n    margin: 0.5rem 0 0.5rem 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.proj-name:hover {\n    position: relative;\n    left: .5rem;\n}\n\n.footer-container {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: var(--footer-bg-color);\n    height: var(--footer-height);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n}\n\n.github-link {\n    margin: 0 .5rem;\n    color: var(--dark-font-color);\n}\n\n.github-icon {\n    height: var(--footer-height);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/tiny-date-picker.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/tiny-date-picker.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dp-cal{border:1px solid #f3f4f6;border-radius:.25rem;background:#fff;position:relative}.dp-cal:focus{outline:none}.dp-cal button{cursor:pointer;border-radius:.25rem}.dp-cal button:active{background:#3b82f6;color:#fff}.dp-cal input:focus,.dp-cal button:focus{outline:none;box-shadow:0 0 0 3px #93c5fd}.dp-day:focus{font-weight:bold}.dp-flyout{position:absolute;z-index:20;width:28rem;max-width:calc(100vw - 1rem);box-shadow:.25rem .25rem .5rem -.35rem #0000007f}.dp-months{width:90%;max-width:36rem;padding:1rem;display:grid;grid-template-columns:repeat(3,1fr)}.dp-years{max-height:100%;padding:.25rem;overflow:auto!important}.dp-cal-month,.dp-cal-year,.dp-day,.dp-month,.dp-year{color:#374151;border:0;background:transparent}.dp-cal-header,.dp-cal-header-placeholder{position:relative;text-align:center;height:3.25rem;display:flex;align-items:center;justify-content:center}.dp-cal-header-placeholder{position:absolute;top:0;left:0;right:0;background:#f9fafb;border-bottom:1px solid #f3f4f6}.dp-next,.dp-prev{position:absolute;z-index:1;font-size:1.5rem;line-height:0;display:flex;justify-content:center;align-items:center;height:2rem;width:2rem;background:transparent;border:0;top:.5rem;color:#6b7280}.dp-next:focus,.dp-prev:focus{outline:none;color:inherit}.dp-prev{left:.5rem}.dp-next{right:.5rem}.dp-cal-month,.dp-cal-year{display:inline-block;font-size:1.25rem;padding:.5rem;outline:none}.dp-cal-footer{text-align:center;background:#f9fafb}.dp-days{display:grid;grid-template-columns:repeat(7,1fr);padding:1rem .5rem}.dp-day-today{font-weight:bold;color:#3b82f6}.dp-col-header,button.dp-day{text-align:center;display:inline-flex;align-items:center;justify-content:center;border-radius:100%;height:2rem;width:2rem;font-size:.875rem;margin:.25rem auto}.dp-col-header{color:#aaa;text-transform:uppercase;font-weight:300;font-size:.8em;padding:8px 0}.dp-month{padding:.5rem;margin:.25rem}.dp-year{display:block;padding:8px 40px;width:100%;margin:.25rem 0}.dp-edge-day{color:#aaa}.dp-day:focus,.dp-month:focus,.dp-year:focus{outline:none}.dp-selected:focus,.dp-selected{background:#3b82f6;color:#fff}.dp-day-disabled{background:transparent;color:#ddd}.dp-day-disabled:focus{background:#ddd}.dp-body-next{animation:slide-in-left .15s forwards}.dp-body-prev{animation:slide-in-right .15s forwards}.dp-submenu{position:absolute;top:50%;left:50%;max-height:100%;background:#fff;border:1px solid #e5e7eb;border-radius:.5rem;z-index:10;transform:translate(-50%,-50%);box-shadow:0 0 2rem #00000040}footer.dp-time-footer{position:relative;background:#f9fafb;padding:.5rem;display:flex;justify-content:center;align-items:center}.dp-apply,.dp-ampm,.dp-txt-time{padding:.5rem;box-sizing:border-box;width:2.5rem;text-align:center;border:1px solid #e5e7eb;border-radius:.25rem;margin:0 .25rem}.dp-apply,.dp-ampm{background:transparent}.dp-ampm{text-transform:uppercase}.dp-cal-month:hover,.dp-cal-year:hover,.dp-apply:hover,.dp-ampm:hover{border-color:#3b82f6;background:#3b82f6;color:#fff}.dp-apply{width:auto;position:absolute;top:.5rem;right:.5rem}@keyframes slide-up{0%{transform:translate(-50%,100%)}to{transform:translate(-50%,-50%)}}@keyframes slide-in-left{0%{opacity:.5;transform:translate(1rem)}to{opacity:1;transform:translate(0)}}@keyframes slide-in-right{0%{transform:translate(-1rem)}to{transform:translate(0)}}@media (max-width: 480px),(max-height: 480px){.dp-flyout{margin-left:-.5rem}}\n", "",{"version":3,"sources":["webpack://./src/styles/tiny-date-picker.css"],"names":[],"mappings":"AAAA,QAAQ,wBAAwB,CAAC,oBAAoB,CAAC,eAAe,CAAC,iBAAiB,CAAC,cAAc,YAAY,CAAC,eAAe,cAAc,CAAC,oBAAoB,CAAC,sBAAsB,kBAAkB,CAAC,UAAU,CAAC,yCAAyC,YAAY,CAAC,4BAA4B,CAAC,cAAc,gBAAgB,CAAC,WAAW,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,4BAA4B,CAAC,gDAAgD,CAAC,WAAW,SAAS,CAAC,eAAe,CAAC,YAAY,CAAC,YAAY,CAAC,mCAAmC,CAAC,UAAU,eAAe,CAAC,cAAc,CAAC,uBAAuB,CAAC,sDAAsD,aAAa,CAAC,QAAQ,CAAC,sBAAsB,CAAC,0CAA0C,iBAAiB,CAAC,iBAAiB,CAAC,cAAc,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,2BAA2B,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,kBAAkB,CAAC,+BAA+B,CAAC,kBAAkB,iBAAiB,CAAC,SAAS,CAAC,gBAAgB,CAAC,aAAa,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,WAAW,CAAC,UAAU,CAAC,sBAAsB,CAAC,QAAQ,CAAC,SAAS,CAAC,aAAa,CAAC,8BAA8B,YAAY,CAAC,aAAa,CAAC,SAAS,UAAU,CAAC,SAAS,WAAW,CAAC,2BAA2B,oBAAoB,CAAC,iBAAiB,CAAC,aAAa,CAAC,YAAY,CAAC,eAAe,iBAAiB,CAAC,kBAAkB,CAAC,SAAS,YAAY,CAAC,mCAAmC,CAAC,kBAAkB,CAAC,cAAc,gBAAgB,CAAC,aAAa,CAAC,6BAA6B,iBAAiB,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,WAAW,CAAC,UAAU,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,UAAU,CAAC,wBAAwB,CAAC,eAAe,CAAC,cAAc,CAAC,aAAa,CAAC,UAAU,aAAa,CAAC,aAAa,CAAC,SAAS,aAAa,CAAC,gBAAgB,CAAC,UAAU,CAAC,eAAe,CAAC,aAAa,UAAU,CAAC,6CAA6C,YAAY,CAAC,gCAAgC,kBAAkB,CAAC,UAAU,CAAC,iBAAiB,sBAAsB,CAAC,UAAU,CAAC,uBAAuB,eAAe,CAAC,cAAc,qCAAqC,CAAC,cAAc,sCAAsC,CAAC,YAAY,iBAAiB,CAAC,OAAO,CAAC,QAAQ,CAAC,eAAe,CAAC,eAAe,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,UAAU,CAAC,8BAA8B,CAAC,6BAA6B,CAAC,sBAAsB,iBAAiB,CAAC,kBAAkB,CAAC,aAAa,CAAC,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,gCAAgC,aAAa,CAAC,qBAAqB,CAAC,YAAY,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,sBAAsB,CAAC,SAAS,wBAAwB,CAAC,sEAAsE,oBAAoB,CAAC,kBAAkB,CAAC,UAAU,CAAC,UAAU,UAAU,CAAC,iBAAiB,CAAC,SAAS,CAAC,WAAW,CAAC,oBAAoB,GAAG,8BAA8B,CAAC,GAAG,8BAA8B,CAAC,CAAC,yBAAyB,GAAG,UAAU,CAAC,yBAAyB,CAAC,GAAG,SAAS,CAAC,sBAAsB,CAAC,CAAC,0BAA0B,GAAG,0BAA0B,CAAC,GAAG,sBAAsB,CAAC,CAAC,8CAA8C,WAAW,kBAAkB,CAAC","sourcesContent":[".dp-cal{border:1px solid #f3f4f6;border-radius:.25rem;background:#fff;position:relative}.dp-cal:focus{outline:none}.dp-cal button{cursor:pointer;border-radius:.25rem}.dp-cal button:active{background:#3b82f6;color:#fff}.dp-cal input:focus,.dp-cal button:focus{outline:none;box-shadow:0 0 0 3px #93c5fd}.dp-day:focus{font-weight:bold}.dp-flyout{position:absolute;z-index:20;width:28rem;max-width:calc(100vw - 1rem);box-shadow:.25rem .25rem .5rem -.35rem #0000007f}.dp-months{width:90%;max-width:36rem;padding:1rem;display:grid;grid-template-columns:repeat(3,1fr)}.dp-years{max-height:100%;padding:.25rem;overflow:auto!important}.dp-cal-month,.dp-cal-year,.dp-day,.dp-month,.dp-year{color:#374151;border:0;background:transparent}.dp-cal-header,.dp-cal-header-placeholder{position:relative;text-align:center;height:3.25rem;display:flex;align-items:center;justify-content:center}.dp-cal-header-placeholder{position:absolute;top:0;left:0;right:0;background:#f9fafb;border-bottom:1px solid #f3f4f6}.dp-next,.dp-prev{position:absolute;z-index:1;font-size:1.5rem;line-height:0;display:flex;justify-content:center;align-items:center;height:2rem;width:2rem;background:transparent;border:0;top:.5rem;color:#6b7280}.dp-next:focus,.dp-prev:focus{outline:none;color:inherit}.dp-prev{left:.5rem}.dp-next{right:.5rem}.dp-cal-month,.dp-cal-year{display:inline-block;font-size:1.25rem;padding:.5rem;outline:none}.dp-cal-footer{text-align:center;background:#f9fafb}.dp-days{display:grid;grid-template-columns:repeat(7,1fr);padding:1rem .5rem}.dp-day-today{font-weight:bold;color:#3b82f6}.dp-col-header,button.dp-day{text-align:center;display:inline-flex;align-items:center;justify-content:center;border-radius:100%;height:2rem;width:2rem;font-size:.875rem;margin:.25rem auto}.dp-col-header{color:#aaa;text-transform:uppercase;font-weight:300;font-size:.8em;padding:8px 0}.dp-month{padding:.5rem;margin:.25rem}.dp-year{display:block;padding:8px 40px;width:100%;margin:.25rem 0}.dp-edge-day{color:#aaa}.dp-day:focus,.dp-month:focus,.dp-year:focus{outline:none}.dp-selected:focus,.dp-selected{background:#3b82f6;color:#fff}.dp-day-disabled{background:transparent;color:#ddd}.dp-day-disabled:focus{background:#ddd}.dp-body-next{animation:slide-in-left .15s forwards}.dp-body-prev{animation:slide-in-right .15s forwards}.dp-submenu{position:absolute;top:50%;left:50%;max-height:100%;background:#fff;border:1px solid #e5e7eb;border-radius:.5rem;z-index:10;transform:translate(-50%,-50%);box-shadow:0 0 2rem #00000040}footer.dp-time-footer{position:relative;background:#f9fafb;padding:.5rem;display:flex;justify-content:center;align-items:center}.dp-apply,.dp-ampm,.dp-txt-time{padding:.5rem;box-sizing:border-box;width:2.5rem;text-align:center;border:1px solid #e5e7eb;border-radius:.25rem;margin:0 .25rem}.dp-apply,.dp-ampm{background:transparent}.dp-ampm{text-transform:uppercase}.dp-cal-month:hover,.dp-cal-year:hover,.dp-apply:hover,.dp-ampm:hover{border-color:#3b82f6;background:#3b82f6;color:#fff}.dp-apply{width:auto;position:absolute;top:.5rem;right:.5rem}@keyframes slide-up{0%{transform:translate(-50%,100%)}to{transform:translate(-50%,-50%)}}@keyframes slide-in-left{0%{opacity:.5;transform:translate(1rem)}to{opacity:1;transform:translate(0)}}@keyframes slide-in-right{0%{transform:translate(-1rem)}to{transform:translate(0)}}@media (max-width: 480px),(max-height: 480px){.dp-flyout{margin-left:-.5rem}}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/toggle-checkbox-radio.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/toggle-checkbox-radio.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * toggle-checkbox-radio v2.0.2 (https://alexdonh.github.io/toggle-checkbox-radio/)\n *\n * Copyright 2018 Alex Do\n * Licensed under MIT (https://github.com/alexdonh/toggle-checkbox-radio/blob/master/LICENSE)\n */\n\ninput[type=checkbox].toggle,\ninput[type=radio].toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  bottom: .1rem;\n  vertical-align: middle;\n  width: 2.25rem;\n  height: 1rem;\n  border: 2px #ced4da solid;\n  border-radius: 1rem; }\n  input[type=checkbox].toggle:before, input[type=checkbox].toggle:after,\n  input[type=radio].toggle:before,\n  input[type=radio].toggle:after {\n    box-sizing: border-box; }\n  input[type=checkbox].toggle.disabled, input[type=checkbox].toggle:disabled,\n  input[type=radio].toggle.disabled,\n  input[type=radio].toggle:disabled {\n    cursor: not-allowed; }\n  input[type=checkbox].toggle.is-square,\n  input[type=radio].toggle.is-square {\n    border-radius: 0; }\n    input[type=checkbox].toggle.is-square:before,\n    input[type=radio].toggle.is-square:before {\n      border-radius: 0; }\n  input[type=checkbox].toggle:before,\n  input[type=radio].toggle:before {\n    content: \"\";\n    position: absolute;\n    width: 0.75rem;\n    height: 0.75rem;\n    top: 0;\n    left: 0;\n    border-radius: 50%;\n    box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75); }\n  input[type=checkbox].toggle:checked:before,\n  input[type=radio].toggle:checked:before {\n    left: 1.25rem; }\n  input[type=checkbox].toggle.is-outline:before,\n  input[type=radio].toggle.is-outline:before {\n    width: 0.5rem;\n    height: 0.5rem;\n    top: .125rem;\n    left: .25rem; }\n  input[type=checkbox].toggle.is-outline:checked:before,\n  input[type=radio].toggle.is-outline:checked:before {\n    left: 1.25rem; }\n  input[type=checkbox].toggle.is-material,\n  input[type=radio].toggle.is-material {\n    margin: .275em .175rem; }\n    input[type=checkbox].toggle.is-material:before,\n    input[type=radio].toggle.is-material:before {\n      width: 1.325rem;\n      height: 1.325rem;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      left: -.325rem; }\n    input[type=checkbox].toggle.is-material:checked:before,\n    input[type=radio].toggle.is-material:checked:before {\n      left: 1rem; }\n  input[type=checkbox].toggle.has-animation,\n  input[type=radio].toggle.has-animation {\n    transition: background-color .3s ease; }\n    input[type=checkbox].toggle.has-animation:before,\n    input[type=radio].toggle.has-animation:before {\n      transition: left .3s ease, background-color .3s ease; }\n  input[type=checkbox].toggle:before,\n  input[type=radio].toggle:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle:checked,\n  input[type=radio].toggle:checked {\n    border-color: #495057;\n    background-color: #495057; }\n  input[type=checkbox].toggle.disabled:checked, input[type=checkbox].toggle:disabled:checked,\n  input[type=radio].toggle.disabled:checked,\n  input[type=radio].toggle:disabled:checked {\n    border-color: #949da5;\n    background-color: #949da5; }\n  input[type=checkbox].toggle.is-outline,\n  input[type=radio].toggle.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.is-outline:checked:before,\n    input[type=radio].toggle.is-outline:checked:before {\n      background-color: #495057; }\n  input[type=checkbox].toggle.is-material:checked,\n  input[type=radio].toggle.is-material:checked {\n    border-color: #78838e;\n    background-color: #78838e; }\n    input[type=checkbox].toggle.is-material:checked:before,\n    input[type=radio].toggle.is-material:checked:before {\n      background-color: #495057; }\n  input[type=checkbox].toggle.color-primary:before,\n  input[type=radio].toggle.color-primary:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-primary:checked,\n  input[type=radio].toggle.color-primary:checked {\n    border-color: #007bff;\n    background-color: #007bff; }\n  input[type=checkbox].toggle.color-primary.disabled:checked, input[type=checkbox].toggle.color-primary:disabled:checked,\n  input[type=radio].toggle.color-primary.disabled:checked,\n  input[type=radio].toggle.color-primary:disabled:checked {\n    border-color: #99caff;\n    background-color: #99caff; }\n  input[type=checkbox].toggle.color-primary.is-outline,\n  input[type=radio].toggle.color-primary.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-primary.is-outline:checked:before,\n    input[type=radio].toggle.color-primary.is-outline:checked:before {\n      background-color: #007bff; }\n  input[type=checkbox].toggle.color-primary.is-material:checked,\n  input[type=radio].toggle.color-primary.is-material:checked {\n    border-color: #66b0ff;\n    background-color: #66b0ff; }\n    input[type=checkbox].toggle.color-primary.is-material:checked:before,\n    input[type=radio].toggle.color-primary.is-material:checked:before {\n      background-color: #007bff; }\n  input[type=checkbox].toggle.color-secondary:before,\n  input[type=radio].toggle.color-secondary:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-secondary:checked,\n  input[type=radio].toggle.color-secondary:checked {\n    border-color: #dee2e6;\n    background-color: #dee2e6; }\n  input[type=checkbox].toggle.color-secondary.disabled:checked, input[type=checkbox].toggle.color-secondary:disabled:checked,\n  input[type=radio].toggle.color-secondary.disabled:checked,\n  input[type=radio].toggle.color-secondary:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].toggle.color-secondary.is-outline,\n  input[type=radio].toggle.color-secondary.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-secondary.is-outline:checked:before,\n    input[type=radio].toggle.color-secondary.is-outline:checked:before {\n      background-color: #dee2e6; }\n  input[type=checkbox].toggle.color-secondary.is-material:checked,\n  input[type=radio].toggle.color-secondary.is-material:checked {\n    border-color: white;\n    background-color: white; }\n    input[type=checkbox].toggle.color-secondary.is-material:checked:before,\n    input[type=radio].toggle.color-secondary.is-material:checked:before {\n      background-color: #dee2e6; }\n  input[type=checkbox].toggle.color-success:before,\n  input[type=radio].toggle.color-success:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-success:checked,\n  input[type=radio].toggle.color-success:checked {\n    border-color: #28a745;\n    background-color: #28a745; }\n  input[type=checkbox].toggle.color-success.disabled:checked, input[type=checkbox].toggle.color-success:disabled:checked,\n  input[type=radio].toggle.color-success.disabled:checked,\n  input[type=radio].toggle.color-success:disabled:checked {\n    border-color: #86e29b;\n    background-color: #86e29b; }\n  input[type=checkbox].toggle.color-success.is-outline,\n  input[type=radio].toggle.color-success.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-success.is-outline:checked:before,\n    input[type=radio].toggle.color-success.is-outline:checked:before {\n      background-color: #28a745; }\n  input[type=checkbox].toggle.color-success.is-material:checked,\n  input[type=radio].toggle.color-success.is-material:checked {\n    border-color: #5dd879;\n    background-color: #5dd879; }\n    input[type=checkbox].toggle.color-success.is-material:checked:before,\n    input[type=radio].toggle.color-success.is-material:checked:before {\n      background-color: #28a745; }\n  input[type=checkbox].toggle.color-info:before,\n  input[type=radio].toggle.color-info:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-info:checked,\n  input[type=radio].toggle.color-info:checked {\n    border-color: #17a2b8;\n    background-color: #17a2b8; }\n  input[type=checkbox].toggle.color-info.disabled:checked, input[type=checkbox].toggle.color-info:disabled:checked,\n  input[type=radio].toggle.color-info.disabled:checked,\n  input[type=radio].toggle.color-info:disabled:checked {\n    border-color: #7adeee;\n    background-color: #7adeee; }\n  input[type=checkbox].toggle.color-info.is-outline,\n  input[type=radio].toggle.color-info.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-info.is-outline:checked:before,\n    input[type=radio].toggle.color-info.is-outline:checked:before {\n      background-color: #17a2b8; }\n  input[type=checkbox].toggle.color-info.is-material:checked,\n  input[type=radio].toggle.color-info.is-material:checked {\n    border-color: #4cd3e9;\n    background-color: #4cd3e9; }\n    input[type=checkbox].toggle.color-info.is-material:checked:before,\n    input[type=radio].toggle.color-info.is-material:checked:before {\n      background-color: #17a2b8; }\n  input[type=checkbox].toggle.color-warning:before,\n  input[type=radio].toggle.color-warning:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-warning:checked,\n  input[type=radio].toggle.color-warning:checked {\n    border-color: #ffc107;\n    background-color: #ffc107; }\n  input[type=checkbox].toggle.color-warning.disabled:checked, input[type=checkbox].toggle.color-warning:disabled:checked,\n  input[type=radio].toggle.color-warning.disabled:checked,\n  input[type=radio].toggle.color-warning:disabled:checked {\n    border-color: #ffe7a0;\n    background-color: #ffe7a0; }\n  input[type=checkbox].toggle.color-warning.is-outline,\n  input[type=radio].toggle.color-warning.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-warning.is-outline:checked:before,\n    input[type=radio].toggle.color-warning.is-outline:checked:before {\n      background-color: #ffc107; }\n  input[type=checkbox].toggle.color-warning.is-material:checked,\n  input[type=radio].toggle.color-warning.is-material:checked {\n    border-color: #ffdb6d;\n    background-color: #ffdb6d; }\n    input[type=checkbox].toggle.color-warning.is-material:checked:before,\n    input[type=radio].toggle.color-warning.is-material:checked:before {\n      background-color: #ffc107; }\n  input[type=checkbox].toggle.color-danger:before,\n  input[type=radio].toggle.color-danger:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-danger:checked,\n  input[type=radio].toggle.color-danger:checked {\n    border-color: #dc3545;\n    background-color: #dc3545; }\n  input[type=checkbox].toggle.color-danger.disabled:checked, input[type=checkbox].toggle.color-danger:disabled:checked,\n  input[type=radio].toggle.color-danger.disabled:checked,\n  input[type=radio].toggle.color-danger:disabled:checked {\n    border-color: #f3b7bd;\n    background-color: #f3b7bd; }\n  input[type=checkbox].toggle.color-danger.is-outline,\n  input[type=radio].toggle.color-danger.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-danger.is-outline:checked:before,\n    input[type=radio].toggle.color-danger.is-outline:checked:before {\n      background-color: #dc3545; }\n  input[type=checkbox].toggle.color-danger.is-material:checked,\n  input[type=radio].toggle.color-danger.is-material:checked {\n    border-color: #eb8c95;\n    background-color: #eb8c95; }\n    input[type=checkbox].toggle.color-danger.is-material:checked:before,\n    input[type=radio].toggle.color-danger.is-material:checked:before {\n      background-color: #dc3545; }\n  input[type=checkbox].toggle.color-light:before,\n  input[type=radio].toggle.color-light:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-light:checked,\n  input[type=radio].toggle.color-light:checked {\n    border-color: #e9ecef;\n    background-color: #e9ecef; }\n  input[type=checkbox].toggle.color-light.disabled:checked, input[type=checkbox].toggle.color-light:disabled:checked,\n  input[type=radio].toggle.color-light.disabled:checked,\n  input[type=radio].toggle.color-light:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].toggle.color-light.is-outline,\n  input[type=radio].toggle.color-light.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-light.is-outline:checked:before,\n    input[type=radio].toggle.color-light.is-outline:checked:before {\n      background-color: #e9ecef; }\n  input[type=checkbox].toggle.color-light.is-material:checked,\n  input[type=radio].toggle.color-light.is-material:checked {\n    border-color: white;\n    background-color: white; }\n    input[type=checkbox].toggle.color-light.is-material:checked:before,\n    input[type=radio].toggle.color-light.is-material:checked:before {\n      background-color: #e9ecef; }\n  input[type=checkbox].toggle.color-dark:before,\n  input[type=radio].toggle.color-dark:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-dark:checked,\n  input[type=radio].toggle.color-dark:checked {\n    border-color: #343a40;\n    background-color: #343a40; }\n  input[type=checkbox].toggle.color-dark.disabled:checked, input[type=checkbox].toggle.color-dark:disabled:checked,\n  input[type=radio].toggle.color-dark.disabled:checked,\n  input[type=radio].toggle.color-dark:disabled:checked {\n    border-color: #7a8793;\n    background-color: #7a8793; }\n  input[type=checkbox].toggle.color-dark.is-outline,\n  input[type=radio].toggle.color-dark.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-dark.is-outline:checked:before,\n    input[type=radio].toggle.color-dark.is-outline:checked:before {\n      background-color: #343a40; }\n  input[type=checkbox].toggle.color-dark.is-material:checked,\n  input[type=radio].toggle.color-dark.is-material:checked {\n    border-color: #626d78;\n    background-color: #626d78; }\n    input[type=checkbox].toggle.color-dark.is-material:checked:before,\n    input[type=radio].toggle.color-dark.is-material:checked:before {\n      background-color: #343a40; }\n  input[type=checkbox].toggle.is-small,\n  input[type=radio].toggle.is-small {\n    width: 1.96875rem;\n    height: 0.875rem;\n    border-radius: 0.875rem; }\n    input[type=checkbox].toggle.is-small:before,\n    input[type=radio].toggle.is-small:before {\n      width: 0.625rem;\n      height: 0.625rem; }\n    input[type=checkbox].toggle.is-small:checked:before,\n    input[type=radio].toggle.is-small:checked:before {\n      left: 1.09375rem; }\n    input[type=checkbox].toggle.is-small.is-outline:before,\n    input[type=radio].toggle.is-small.is-outline:before {\n      width: 0.375rem;\n      height: 0.375rem; }\n    input[type=checkbox].toggle.is-small.is-outline:checked:before,\n    input[type=radio].toggle.is-small.is-outline:checked:before {\n      left: 1.09375rem; }\n    input[type=checkbox].toggle.is-small.is-material:before,\n    input[type=radio].toggle.is-small.is-material:before {\n      width: 1.125rem;\n      height: 1.125rem; }\n    input[type=checkbox].toggle.is-small.is-material:checked:before,\n    input[type=radio].toggle.is-small.is-material:checked:before {\n      left: 0.84375rem; }\n  input[type=checkbox].toggle.is-large,\n  input[type=radio].toggle.is-large {\n    width: 2.8125rem;\n    height: 1.25rem;\n    border-radius: 1.25rem; }\n    input[type=checkbox].toggle.is-large:before,\n    input[type=radio].toggle.is-large:before {\n      width: 1rem;\n      height: 1rem; }\n    input[type=checkbox].toggle.is-large:checked:before,\n    input[type=radio].toggle.is-large:checked:before {\n      left: 1.5625rem; }\n    input[type=checkbox].toggle.is-large.is-outline:before,\n    input[type=radio].toggle.is-large.is-outline:before {\n      width: 0.75rem;\n      height: 0.75rem; }\n    input[type=checkbox].toggle.is-large.is-outline:checked:before,\n    input[type=radio].toggle.is-large.is-outline:checked:before {\n      left: 1.5625rem; }\n    input[type=checkbox].toggle.is-large.is-material:before,\n    input[type=radio].toggle.is-large.is-material:before {\n      width: 1.5rem;\n      height: 1.5rem; }\n    input[type=checkbox].toggle.is-large.is-material:checked:before,\n    input[type=radio].toggle.is-large.is-material:checked:before {\n      left: 1.3125rem; }\n\ninput[type=checkbox].checkbox,\ninput[type=radio].checkbox {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  bottom: .1rem;\n  vertical-align: middle;\n  width: 1rem;\n  height: 1rem;\n  border: 2px #ced4da solid; }\n  input[type=checkbox].checkbox:before, input[type=checkbox].checkbox:after,\n  input[type=radio].checkbox:before,\n  input[type=radio].checkbox:after {\n    box-sizing: border-box; }\n  input[type=checkbox].checkbox.disabled, input[type=checkbox].checkbox:disabled,\n  input[type=radio].checkbox.disabled,\n  input[type=radio].checkbox:disabled {\n    cursor: not-allowed; }\n  input[type=checkbox].checkbox:active, input[type=checkbox].checkbox:focus,\n  input[type=radio].checkbox:active,\n  input[type=radio].checkbox:focus {\n    border-color: rgba(255, 255, 255, 0.25); }\n  input[type=checkbox].checkbox:before,\n  input[type=radio].checkbox:before {\n    content: \"\";\n    position: absolute;\n    visibility: hidden;\n    left: 0;\n    right: 0;\n    top: 12.5%;\n    height: 50%;\n    border-left: 2px transparent solid;\n    border-bottom: 2px transparent solid;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  input[type=checkbox].checkbox:checked:before, input[type=checkbox].checkbox.is-hoverable:hover:before,\n  input[type=radio].checkbox:checked:before,\n  input[type=radio].checkbox.is-hoverable:hover:before {\n    visibility: visible; }\n  input[type=checkbox].checkbox.is-outline:before,\n  input[type=radio].checkbox.is-outline:before {\n    left: 2px;\n    right: 2px;\n    top: 20%;\n    height: 40%; }\n  input[type=checkbox].checkbox.is-outline:checked,\n  input[type=radio].checkbox.is-outline:checked {\n    background-color: transparent !important; }\n  input[type=checkbox].checkbox.is-material:before,\n  input[type=radio].checkbox.is-material:before {\n    content: initial;\n    content: unset; }\n  input[type=checkbox].checkbox.is-rounded,\n  input[type=radio].checkbox.is-rounded {\n    border-radius: 0.25rem; }\n  input[type=checkbox].checkbox.is-circle,\n  input[type=radio].checkbox.is-circle {\n    border-radius: 50%; }\n  input[type=checkbox].checkbox.is-square,\n  input[type=radio].checkbox.is-square {\n    border-radius: 0; }\n  input[type=checkbox].checkbox.is-material:checked,\n  input[type=radio].checkbox.is-material:checked {\n    height: 0.5rem;\n    border-top: none;\n    border-right: none;\n    border-bottom-width: 2px;\n    border-left-width: 2px;\n    -webkit-transform: rotate(-45deg) translate(12.5%, -12.5%);\n            transform: rotate(-45deg) translate(12.5%, -12.5%);\n    background-color: transparent !important; }\n  input[type=checkbox].checkbox.has-animation:before,\n  input[type=radio].checkbox.has-animation:before {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -165deg);\n            transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -165deg);\n    transition: opacity .2s ease, -webkit-transform .3s ease;\n    transition: transform .3s ease, opacity .2s ease;\n    transition: transform .3s ease, opacity .2s ease, -webkit-transform .3s ease; }\n  input[type=checkbox].checkbox.has-animation:checked:before,\n  input[type=radio].checkbox.has-animation:checked:before {\n    opacity: 1;\n    -webkit-transform: rotate(-45deg) translate3d(0, 0, 0);\n            transform: rotate(-45deg) translate3d(0, 0, 0); }\n  input[type=checkbox].checkbox.has-animation.is-material,\n  input[type=radio].checkbox.has-animation.is-material {\n    opacity: 1;\n    transition: height .2s ease, -webkit-transform .3s ease;\n    transition: transform .3s ease, height .2s ease;\n    transition: transform .3s ease, height .2s ease, -webkit-transform .3s ease; }\n  input[type=checkbox].checkbox.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.is-hoverable:hover:not(:checked):before {\n    border-color: #b0b6bc; }\n  input[type=checkbox].checkbox:before,\n  input[type=radio].checkbox:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox:checked,\n  input[type=radio].checkbox:checked {\n    border-color: #495057;\n    background-color: #495057; }\n  input[type=checkbox].checkbox.disabled:checked, input[type=checkbox].checkbox:disabled:checked,\n  input[type=radio].checkbox.disabled:checked,\n  input[type=radio].checkbox:disabled:checked {\n    border-color: #949da5;\n    background-color: #949da5; }\n  input[type=checkbox].checkbox.is-outline:before,\n  input[type=radio].checkbox.is-outline:before {\n    border-color: #495057; }\n  input[type=checkbox].checkbox.color-primary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-primary.is-hoverable:hover:not(:checked):before {\n    border-color: #cce5ff; }\n  input[type=checkbox].checkbox.color-primary:before,\n  input[type=radio].checkbox.color-primary:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-primary:checked,\n  input[type=radio].checkbox.color-primary:checked {\n    border-color: #007bff;\n    background-color: #007bff; }\n  input[type=checkbox].checkbox.color-primary.disabled:checked, input[type=checkbox].checkbox.color-primary:disabled:checked,\n  input[type=radio].checkbox.color-primary.disabled:checked,\n  input[type=radio].checkbox.color-primary:disabled:checked {\n    border-color: #99caff;\n    background-color: #99caff; }\n  input[type=checkbox].checkbox.color-primary.is-outline:before,\n  input[type=radio].checkbox.color-primary.is-outline:before {\n    border-color: #007bff; }\n  input[type=checkbox].checkbox.color-secondary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-secondary.is-hoverable:hover:not(:checked):before {\n    border-color: white; }\n  input[type=checkbox].checkbox.color-secondary:before,\n  input[type=radio].checkbox.color-secondary:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-secondary:checked,\n  input[type=radio].checkbox.color-secondary:checked {\n    border-color: #dee2e6;\n    background-color: #dee2e6; }\n  input[type=checkbox].checkbox.color-secondary.disabled:checked, input[type=checkbox].checkbox.color-secondary:disabled:checked,\n  input[type=radio].checkbox.color-secondary.disabled:checked,\n  input[type=radio].checkbox.color-secondary:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].checkbox.color-secondary.is-outline:before,\n  input[type=radio].checkbox.color-secondary.is-outline:before {\n    border-color: #dee2e6; }\n  input[type=checkbox].checkbox.color-success.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-success.is-hoverable:hover:not(:checked):before {\n    border-color: #afecbd; }\n  input[type=checkbox].checkbox.color-success:before,\n  input[type=radio].checkbox.color-success:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-success:checked,\n  input[type=radio].checkbox.color-success:checked {\n    border-color: #28a745;\n    background-color: #28a745; }\n  input[type=checkbox].checkbox.color-success.disabled:checked, input[type=checkbox].checkbox.color-success:disabled:checked,\n  input[type=radio].checkbox.color-success.disabled:checked,\n  input[type=radio].checkbox.color-success:disabled:checked {\n    border-color: #86e29b;\n    background-color: #86e29b; }\n  input[type=checkbox].checkbox.color-success.is-outline:before,\n  input[type=radio].checkbox.color-success.is-outline:before {\n    border-color: #28a745; }\n  input[type=checkbox].checkbox.color-info.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-info.is-hoverable:hover:not(:checked):before {\n    border-color: #a7e9f4; }\n  input[type=checkbox].checkbox.color-info:before,\n  input[type=radio].checkbox.color-info:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-info:checked,\n  input[type=radio].checkbox.color-info:checked {\n    border-color: #17a2b8;\n    background-color: #17a2b8; }\n  input[type=checkbox].checkbox.color-info.disabled:checked, input[type=checkbox].checkbox.color-info:disabled:checked,\n  input[type=radio].checkbox.color-info.disabled:checked,\n  input[type=radio].checkbox.color-info:disabled:checked {\n    border-color: #7adeee;\n    background-color: #7adeee; }\n  input[type=checkbox].checkbox.color-info.is-outline:before,\n  input[type=radio].checkbox.color-info.is-outline:before {\n    border-color: #17a2b8; }\n  input[type=checkbox].checkbox.color-warning.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-warning.is-hoverable:hover:not(:checked):before {\n    border-color: #fff4d3; }\n  input[type=checkbox].checkbox.color-warning:before,\n  input[type=radio].checkbox.color-warning:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-warning:checked,\n  input[type=radio].checkbox.color-warning:checked {\n    border-color: #ffc107;\n    background-color: #ffc107; }\n  input[type=checkbox].checkbox.color-warning.disabled:checked, input[type=checkbox].checkbox.color-warning:disabled:checked,\n  input[type=radio].checkbox.color-warning.disabled:checked,\n  input[type=radio].checkbox.color-warning:disabled:checked {\n    border-color: #ffe7a0;\n    background-color: #ffe7a0; }\n  input[type=checkbox].checkbox.color-warning.is-outline:before,\n  input[type=radio].checkbox.color-warning.is-outline:before {\n    border-color: #ffc107; }\n  input[type=checkbox].checkbox.color-danger.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-danger.is-hoverable:hover:not(:checked):before {\n    border-color: #fae3e5; }\n  input[type=checkbox].checkbox.color-danger:before,\n  input[type=radio].checkbox.color-danger:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-danger:checked,\n  input[type=radio].checkbox.color-danger:checked {\n    border-color: #dc3545;\n    background-color: #dc3545; }\n  input[type=checkbox].checkbox.color-danger.disabled:checked, input[type=checkbox].checkbox.color-danger:disabled:checked,\n  input[type=radio].checkbox.color-danger.disabled:checked,\n  input[type=radio].checkbox.color-danger:disabled:checked {\n    border-color: #f3b7bd;\n    background-color: #f3b7bd; }\n  input[type=checkbox].checkbox.color-danger.is-outline:before,\n  input[type=radio].checkbox.color-danger.is-outline:before {\n    border-color: #dc3545; }\n  input[type=checkbox].checkbox.color-light.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-light.is-hoverable:hover:not(:checked):before {\n    border-color: white; }\n  input[type=checkbox].checkbox.color-light:before,\n  input[type=radio].checkbox.color-light:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-light:checked,\n  input[type=radio].checkbox.color-light:checked {\n    border-color: #e9ecef;\n    background-color: #e9ecef; }\n  input[type=checkbox].checkbox.color-light.disabled:checked, input[type=checkbox].checkbox.color-light:disabled:checked,\n  input[type=radio].checkbox.color-light.disabled:checked,\n  input[type=radio].checkbox.color-light:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].checkbox.color-light.is-outline:before,\n  input[type=radio].checkbox.color-light.is-outline:before {\n    border-color: #e9ecef; }\n  input[type=checkbox].checkbox.color-dark.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-dark.is-hoverable:hover:not(:checked):before {\n    border-color: #96a0aa; }\n  input[type=checkbox].checkbox.color-dark:before,\n  input[type=radio].checkbox.color-dark:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-dark:checked,\n  input[type=radio].checkbox.color-dark:checked {\n    border-color: #343a40;\n    background-color: #343a40; }\n  input[type=checkbox].checkbox.color-dark.disabled:checked, input[type=checkbox].checkbox.color-dark:disabled:checked,\n  input[type=radio].checkbox.color-dark.disabled:checked,\n  input[type=radio].checkbox.color-dark:disabled:checked {\n    border-color: #7a8793;\n    background-color: #7a8793; }\n  input[type=checkbox].checkbox.color-dark.is-outline:before,\n  input[type=radio].checkbox.color-dark.is-outline:before {\n    border-color: #343a40; }\n  input[type=checkbox].checkbox.is-small,\n  input[type=radio].checkbox.is-small {\n    width: 0.875rem;\n    height: 0.875rem; }\n    input[type=checkbox].checkbox.is-small.is-material:checked,\n    input[type=radio].checkbox.is-small.is-material:checked {\n      height: 0.4375rem; }\n  input[type=checkbox].checkbox.is-large,\n  input[type=radio].checkbox.is-large {\n    width: 1.25rem;\n    height: 1.25rem; }\n    input[type=checkbox].checkbox.is-large.is-material:checked,\n    input[type=radio].checkbox.is-large.is-material:checked {\n      height: 0.625rem; }\n\ninput[type=checkbox].radio,\ninput[type=radio].radio {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  bottom: .1rem;\n  vertical-align: middle;\n  width: 1rem;\n  height: 1rem;\n  border: 2px #ced4da solid;\n  border-radius: 50%; }\n  input[type=checkbox].radio:before, input[type=checkbox].radio:after,\n  input[type=radio].radio:before,\n  input[type=radio].radio:after {\n    box-sizing: border-box; }\n  input[type=checkbox].radio.disabled, input[type=checkbox].radio:disabled,\n  input[type=radio].radio.disabled,\n  input[type=radio].radio:disabled {\n    cursor: not-allowed; }\n  input[type=checkbox].radio:active, input[type=checkbox].radio:focus,\n  input[type=radio].radio:active,\n  input[type=radio].radio:focus {\n    border-color: rgba(0, 123, 255, 0.25); }\n  input[type=checkbox].radio:before,\n  input[type=radio].radio:before {\n    content: \"\";\n    position: absolute;\n    visibility: hidden;\n    top: .125rem;\n    bottom: .125rem;\n    left: .125rem;\n    right: .125rem;\n    border-radius: 50%; }\n  input[type=checkbox].radio:checked:before, input[type=checkbox].radio.is-hoverable:hover:before,\n  input[type=radio].radio:checked:before,\n  input[type=radio].radio.is-hoverable:hover:before {\n    visibility: visible; }\n  input[type=checkbox].radio.is-outline:checked,\n  input[type=radio].radio.is-outline:checked {\n    background-color: transparent !important; }\n  input[type=checkbox].radio.is-outline:before,\n  input[type=radio].radio.is-outline:before {\n    top: .1875rem;\n    bottom: .1875rem;\n    left: .1875rem;\n    right: .1875rem; }\n  input[type=checkbox].radio.is-material:before,\n  input[type=radio].radio.is-material:before {\n    content: initial;\n    content: unset; }\n  input[type=checkbox].radio.is-rounded,\n  input[type=radio].radio.is-rounded {\n    border-radius: 0.25rem; }\n    input[type=checkbox].radio.is-rounded:before,\n    input[type=radio].radio.is-rounded:before {\n      border-radius: 0.25rem; }\n  input[type=checkbox].radio.is-circle,\n  input[type=radio].radio.is-circle {\n    border-radius: 50%; }\n    input[type=checkbox].radio.is-circle:before,\n    input[type=radio].radio.is-circle:before {\n      border-radius: 50%; }\n  input[type=checkbox].radio.is-square,\n  input[type=radio].radio.is-square {\n    border-radius: 0; }\n    input[type=checkbox].radio.is-square:before,\n    input[type=radio].radio.is-square:before {\n      border-radius: 0; }\n  input[type=checkbox].radio.has-animation:before,\n  input[type=radio].radio.has-animation:before {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n    transition: opacity .2s ease, -webkit-transform .3s ease;\n    transition: transform .3s ease, opacity .2s ease;\n    transition: transform .3s ease, opacity .2s ease, -webkit-transform .3s ease; }\n  input[type=checkbox].radio.has-animation:checked:before,\n  input[type=radio].radio.has-animation:checked:before {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); }\n  input[type=checkbox].radio.has-animation.is-material:checked,\n  input[type=radio].radio.has-animation.is-material:checked {\n    -webkit-animation: radio-zoom-in .3s both;\n            animation: radio-zoom-in .3s both; }\n  input[type=checkbox].radio.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.is-hoverable:hover:not(:checked):before {\n    border-color: #b0b6bc;\n    background-color: #b0b6bc; }\n  input[type=checkbox].radio:before,\n  input[type=radio].radio:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio:checked,\n  input[type=radio].radio:checked {\n    border-color: #495057;\n    background-color: #495057; }\n  input[type=checkbox].radio.disabled:checked, input[type=checkbox].radio:disabled:checked,\n  input[type=radio].radio.disabled:checked,\n  input[type=radio].radio:disabled:checked {\n    border-color: #949da5;\n    background-color: #949da5; }\n  input[type=checkbox].radio.is-outline:before,\n  input[type=radio].radio.is-outline:before {\n    border-color: #495057; }\n  input[type=checkbox].radio.is-outline:checked:before,\n  input[type=radio].radio.is-outline:checked:before {\n    background-color: #495057; }\n  input[type=checkbox].radio.color-primary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-primary.is-hoverable:hover:not(:checked):before {\n    border-color: #cce5ff;\n    background-color: #cce5ff; }\n  input[type=checkbox].radio.color-primary:before,\n  input[type=radio].radio.color-primary:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-primary:checked,\n  input[type=radio].radio.color-primary:checked {\n    border-color: #007bff;\n    background-color: #007bff; }\n  input[type=checkbox].radio.color-primary.disabled:checked, input[type=checkbox].radio.color-primary:disabled:checked,\n  input[type=radio].radio.color-primary.disabled:checked,\n  input[type=radio].radio.color-primary:disabled:checked {\n    border-color: #99caff;\n    background-color: #99caff; }\n  input[type=checkbox].radio.color-primary.is-outline:before,\n  input[type=radio].radio.color-primary.is-outline:before {\n    border-color: #007bff; }\n  input[type=checkbox].radio.color-primary.is-outline:checked:before,\n  input[type=radio].radio.color-primary.is-outline:checked:before {\n    background-color: #007bff; }\n  input[type=checkbox].radio.color-secondary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-secondary.is-hoverable:hover:not(:checked):before {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-secondary:before,\n  input[type=radio].radio.color-secondary:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-secondary:checked,\n  input[type=radio].radio.color-secondary:checked {\n    border-color: #dee2e6;\n    background-color: #dee2e6; }\n  input[type=checkbox].radio.color-secondary.disabled:checked, input[type=checkbox].radio.color-secondary:disabled:checked,\n  input[type=radio].radio.color-secondary.disabled:checked,\n  input[type=radio].radio.color-secondary:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-secondary.is-outline:before,\n  input[type=radio].radio.color-secondary.is-outline:before {\n    border-color: #dee2e6; }\n  input[type=checkbox].radio.color-secondary.is-outline:checked:before,\n  input[type=radio].radio.color-secondary.is-outline:checked:before {\n    background-color: #dee2e6; }\n  input[type=checkbox].radio.color-success.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-success.is-hoverable:hover:not(:checked):before {\n    border-color: #afecbd;\n    background-color: #afecbd; }\n  input[type=checkbox].radio.color-success:before,\n  input[type=radio].radio.color-success:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-success:checked,\n  input[type=radio].radio.color-success:checked {\n    border-color: #28a745;\n    background-color: #28a745; }\n  input[type=checkbox].radio.color-success.disabled:checked, input[type=checkbox].radio.color-success:disabled:checked,\n  input[type=radio].radio.color-success.disabled:checked,\n  input[type=radio].radio.color-success:disabled:checked {\n    border-color: #86e29b;\n    background-color: #86e29b; }\n  input[type=checkbox].radio.color-success.is-outline:before,\n  input[type=radio].radio.color-success.is-outline:before {\n    border-color: #28a745; }\n  input[type=checkbox].radio.color-success.is-outline:checked:before,\n  input[type=radio].radio.color-success.is-outline:checked:before {\n    background-color: #28a745; }\n  input[type=checkbox].radio.color-info.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-info.is-hoverable:hover:not(:checked):before {\n    border-color: #a7e9f4;\n    background-color: #a7e9f4; }\n  input[type=checkbox].radio.color-info:before,\n  input[type=radio].radio.color-info:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-info:checked,\n  input[type=radio].radio.color-info:checked {\n    border-color: #17a2b8;\n    background-color: #17a2b8; }\n  input[type=checkbox].radio.color-info.disabled:checked, input[type=checkbox].radio.color-info:disabled:checked,\n  input[type=radio].radio.color-info.disabled:checked,\n  input[type=radio].radio.color-info:disabled:checked {\n    border-color: #7adeee;\n    background-color: #7adeee; }\n  input[type=checkbox].radio.color-info.is-outline:before,\n  input[type=radio].radio.color-info.is-outline:before {\n    border-color: #17a2b8; }\n  input[type=checkbox].radio.color-info.is-outline:checked:before,\n  input[type=radio].radio.color-info.is-outline:checked:before {\n    background-color: #17a2b8; }\n  input[type=checkbox].radio.color-warning.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-warning.is-hoverable:hover:not(:checked):before {\n    border-color: #fff4d3;\n    background-color: #fff4d3; }\n  input[type=checkbox].radio.color-warning:before,\n  input[type=radio].radio.color-warning:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-warning:checked,\n  input[type=radio].radio.color-warning:checked {\n    border-color: #ffc107;\n    background-color: #ffc107; }\n  input[type=checkbox].radio.color-warning.disabled:checked, input[type=checkbox].radio.color-warning:disabled:checked,\n  input[type=radio].radio.color-warning.disabled:checked,\n  input[type=radio].radio.color-warning:disabled:checked {\n    border-color: #ffe7a0;\n    background-color: #ffe7a0; }\n  input[type=checkbox].radio.color-warning.is-outline:before,\n  input[type=radio].radio.color-warning.is-outline:before {\n    border-color: #ffc107; }\n  input[type=checkbox].radio.color-warning.is-outline:checked:before,\n  input[type=radio].radio.color-warning.is-outline:checked:before {\n    background-color: #ffc107; }\n  input[type=checkbox].radio.color-danger.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-danger.is-hoverable:hover:not(:checked):before {\n    border-color: #fae3e5;\n    background-color: #fae3e5; }\n  input[type=checkbox].radio.color-danger:before,\n  input[type=radio].radio.color-danger:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-danger:checked,\n  input[type=radio].radio.color-danger:checked {\n    border-color: #dc3545;\n    background-color: #dc3545; }\n  input[type=checkbox].radio.color-danger.disabled:checked, input[type=checkbox].radio.color-danger:disabled:checked,\n  input[type=radio].radio.color-danger.disabled:checked,\n  input[type=radio].radio.color-danger:disabled:checked {\n    border-color: #f3b7bd;\n    background-color: #f3b7bd; }\n  input[type=checkbox].radio.color-danger.is-outline:before,\n  input[type=radio].radio.color-danger.is-outline:before {\n    border-color: #dc3545; }\n  input[type=checkbox].radio.color-danger.is-outline:checked:before,\n  input[type=radio].radio.color-danger.is-outline:checked:before {\n    background-color: #dc3545; }\n  input[type=checkbox].radio.color-light.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-light.is-hoverable:hover:not(:checked):before {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-light:before,\n  input[type=radio].radio.color-light:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-light:checked,\n  input[type=radio].radio.color-light:checked {\n    border-color: #e9ecef;\n    background-color: #e9ecef; }\n  input[type=checkbox].radio.color-light.disabled:checked, input[type=checkbox].radio.color-light:disabled:checked,\n  input[type=radio].radio.color-light.disabled:checked,\n  input[type=radio].radio.color-light:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-light.is-outline:before,\n  input[type=radio].radio.color-light.is-outline:before {\n    border-color: #e9ecef; }\n  input[type=checkbox].radio.color-light.is-outline:checked:before,\n  input[type=radio].radio.color-light.is-outline:checked:before {\n    background-color: #e9ecef; }\n  input[type=checkbox].radio.color-dark.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-dark.is-hoverable:hover:not(:checked):before {\n    border-color: #96a0aa;\n    background-color: #96a0aa; }\n  input[type=checkbox].radio.color-dark:before,\n  input[type=radio].radio.color-dark:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-dark:checked,\n  input[type=radio].radio.color-dark:checked {\n    border-color: #343a40;\n    background-color: #343a40; }\n  input[type=checkbox].radio.color-dark.disabled:checked, input[type=checkbox].radio.color-dark:disabled:checked,\n  input[type=radio].radio.color-dark.disabled:checked,\n  input[type=radio].radio.color-dark:disabled:checked {\n    border-color: #7a8793;\n    background-color: #7a8793; }\n  input[type=checkbox].radio.color-dark.is-outline:before,\n  input[type=radio].radio.color-dark.is-outline:before {\n    border-color: #343a40; }\n  input[type=checkbox].radio.color-dark.is-outline:checked:before,\n  input[type=radio].radio.color-dark.is-outline:checked:before {\n    background-color: #343a40; }\n  input[type=checkbox].radio.is-small,\n  input[type=radio].radio.is-small {\n    width: 0.875rem;\n    height: 0.875rem; }\n  input[type=checkbox].radio.is-large,\n  input[type=radio].radio.is-large {\n    width: 1.25rem;\n    height: 1.25rem; }\n\n@-webkit-keyframes radio-zoom-in {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes radio-zoom-in {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n/*# sourceMappingURL=toggle-checkbox-radio.css.map */", "",{"version":3,"sources":["webpack://./src/styles/toggle-checkbox-radio.css"],"names":[],"mappings":"AAAA;;;;;EAKE;;AAEF;;EAEE,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,yBAAyB;EACzB,mBAAmB,EAAE;EACrB;;;IAGE,sBAAsB,EAAE;EAC1B;;;IAGE,mBAAmB,EAAE;EACvB;;IAEE,gBAAgB,EAAE;IAClB;;MAEE,gBAAgB,EAAE;EACtB;;IAEE,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,MAAM;IACN,OAAO;IACP,kBAAkB;IAClB,gDAAgD,EAAE;EACpD;;IAEE,aAAa,EAAE;EACjB;;IAEE,aAAa;IACb,cAAc;IACd,YAAY;IACZ,YAAY,EAAE;EAChB;;IAEE,aAAa,EAAE;EACjB;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,eAAe;MACf,gBAAgB;MAChB,QAAQ;MACR,mCAAmC;cAC3B,2BAA2B;MACnC,cAAc,EAAE;IAClB;;MAEE,UAAU,EAAE;EAChB;;IAEE,qCAAqC,EAAE;IACvC;;MAEE,oDAAoD,EAAE;EAC1D;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,mBAAmB;IACnB,uBAAuB,EAAE;IACzB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,mBAAmB;IACnB,uBAAuB,EAAE;IACzB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;IAC3B;;MAEE,yBAAyB,EAAE;EAC/B;;IAEE,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB,EAAE;IACzB;;MAEE,eAAe;MACf,gBAAgB,EAAE;IACpB;;MAEE,gBAAgB,EAAE;IACpB;;MAEE,eAAe;MACf,gBAAgB,EAAE;IACpB;;MAEE,gBAAgB,EAAE;IACpB;;MAEE,eAAe;MACf,gBAAgB,EAAE;IACpB;;MAEE,gBAAgB,EAAE;EACtB;;IAEE,gBAAgB;IAChB,eAAe;IACf,sBAAsB,EAAE;IACxB;;MAEE,WAAW;MACX,YAAY,EAAE;IAChB;;MAEE,eAAe,EAAE;IACnB;;MAEE,cAAc;MACd,eAAe,EAAE;IACnB;;MAEE,eAAe,EAAE;IACnB;;MAEE,aAAa;MACb,cAAc,EAAE;IAClB;;MAEE,eAAe,EAAE;;AAEvB;;EAEE,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAE;EAC3B;;;IAGE,sBAAsB,EAAE;EAC1B;;;IAGE,mBAAmB,EAAE;EACvB;;;IAGE,uCAAuC,EAAE;EAC3C;;IAEE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,UAAU;IACV,WAAW;IACX,kCAAkC;IAClC,oCAAoC;IACpC,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;;;IAGE,mBAAmB,EAAE;EACvB;;IAEE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,WAAW,EAAE;EACf;;IAEE,wCAAwC,EAAE;EAC5C;;IAEE,gBAAgB;IAChB,cAAc,EAAE;EAClB;;IAEE,sBAAsB,EAAE;EAC1B;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,gBAAgB,EAAE;EACpB;;IAEE,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;IACtB,0DAA0D;YAClD,kDAAkD;IAC1D,wCAAwC,EAAE;EAC5C;;IAEE,UAAU;IACV,sEAAsE;YAC9D,8DAA8D;IACtE,wDAAwD;IACxD,gDAAgD;IAChD,4EAA4E,EAAE;EAChF;;IAEE,UAAU;IACV,sDAAsD;YAC9C,8CAA8C,EAAE;EAC1D;;IAEE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;IAC/C,2EAA2E,EAAE;EAC/E;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,mBAAmB,EAAE;EACvB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,mBAAmB,EAAE;EACvB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,kBAAkB,EAAE;EACtB;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,eAAe;IACf,gBAAgB,EAAE;IAClB;;MAEE,iBAAiB,EAAE;EACvB;;IAEE,cAAc;IACd,eAAe,EAAE;IACjB;;MAEE,gBAAgB,EAAE;;AAExB;;EAEE,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB,EAAE;EACpB;;;IAGE,sBAAsB,EAAE;EAC1B;;;IAGE,mBAAmB,EAAE;EACvB;;;IAGE,qCAAqC,EAAE;EACzC;;IAEE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,cAAc;IACd,kBAAkB,EAAE;EACtB;;;IAGE,mBAAmB,EAAE;EACvB;;IAEE,wCAAwC,EAAE;EAC5C;;IAEE,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,eAAe,EAAE;EACnB;;IAEE,gBAAgB;IAChB,cAAc,EAAE;EAClB;;IAEE,sBAAsB,EAAE;IACxB;;MAEE,sBAAsB,EAAE;EAC5B;;IAEE,kBAAkB,EAAE;IACpB;;MAEE,kBAAkB,EAAE;EACxB;;IAEE,gBAAgB,EAAE;IAClB;;MAEE,gBAAgB,EAAE;EACtB;;IAEE,UAAU;IACV,yCAAyC;YACjC,iCAAiC;IACzC,wDAAwD;IACxD,gDAAgD;IAChD,4EAA4E,EAAE;EAChF;;IAEE,UAAU;IACV,mCAAmC;YAC3B,2BAA2B,EAAE;EACvC;;IAEE,yCAAyC;YACjC,iCAAiC,EAAE;EAC7C;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,mBAAmB;IACnB,uBAAuB,EAAE;EAC3B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,kBAAkB;IAClB,sBAAsB,EAAE;EAC1B;;IAEE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;;IAGE,qBAAqB;IACrB,yBAAyB,EAAE;EAC7B;;IAEE,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,eAAe;IACf,gBAAgB,EAAE;EACpB;;IAEE,cAAc;IACd,eAAe,EAAE;;AAErB;EACE;IACE,UAAU;IACV,yCAAyC;YACjC,iCAAiC,EAAE;EAC7C;IACE,UAAU,EAAE,EAAE;;AAElB;EACE;IACE,UAAU;IACV,yCAAyC;YACjC,iCAAiC,EAAE;EAC7C;IACE,UAAU,EAAE,EAAE;AAClB,oDAAoD","sourcesContent":["/*!\n * toggle-checkbox-radio v2.0.2 (https://alexdonh.github.io/toggle-checkbox-radio/)\n *\n * Copyright 2018 Alex Do\n * Licensed under MIT (https://github.com/alexdonh/toggle-checkbox-radio/blob/master/LICENSE)\n */\n\ninput[type=checkbox].toggle,\ninput[type=radio].toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  bottom: .1rem;\n  vertical-align: middle;\n  width: 2.25rem;\n  height: 1rem;\n  border: 2px #ced4da solid;\n  border-radius: 1rem; }\n  input[type=checkbox].toggle:before, input[type=checkbox].toggle:after,\n  input[type=radio].toggle:before,\n  input[type=radio].toggle:after {\n    box-sizing: border-box; }\n  input[type=checkbox].toggle.disabled, input[type=checkbox].toggle:disabled,\n  input[type=radio].toggle.disabled,\n  input[type=radio].toggle:disabled {\n    cursor: not-allowed; }\n  input[type=checkbox].toggle.is-square,\n  input[type=radio].toggle.is-square {\n    border-radius: 0; }\n    input[type=checkbox].toggle.is-square:before,\n    input[type=radio].toggle.is-square:before {\n      border-radius: 0; }\n  input[type=checkbox].toggle:before,\n  input[type=radio].toggle:before {\n    content: \"\";\n    position: absolute;\n    width: 0.75rem;\n    height: 0.75rem;\n    top: 0;\n    left: 0;\n    border-radius: 50%;\n    box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75); }\n  input[type=checkbox].toggle:checked:before,\n  input[type=radio].toggle:checked:before {\n    left: 1.25rem; }\n  input[type=checkbox].toggle.is-outline:before,\n  input[type=radio].toggle.is-outline:before {\n    width: 0.5rem;\n    height: 0.5rem;\n    top: .125rem;\n    left: .25rem; }\n  input[type=checkbox].toggle.is-outline:checked:before,\n  input[type=radio].toggle.is-outline:checked:before {\n    left: 1.25rem; }\n  input[type=checkbox].toggle.is-material,\n  input[type=radio].toggle.is-material {\n    margin: .275em .175rem; }\n    input[type=checkbox].toggle.is-material:before,\n    input[type=radio].toggle.is-material:before {\n      width: 1.325rem;\n      height: 1.325rem;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      left: -.325rem; }\n    input[type=checkbox].toggle.is-material:checked:before,\n    input[type=radio].toggle.is-material:checked:before {\n      left: 1rem; }\n  input[type=checkbox].toggle.has-animation,\n  input[type=radio].toggle.has-animation {\n    transition: background-color .3s ease; }\n    input[type=checkbox].toggle.has-animation:before,\n    input[type=radio].toggle.has-animation:before {\n      transition: left .3s ease, background-color .3s ease; }\n  input[type=checkbox].toggle:before,\n  input[type=radio].toggle:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle:checked,\n  input[type=radio].toggle:checked {\n    border-color: #495057;\n    background-color: #495057; }\n  input[type=checkbox].toggle.disabled:checked, input[type=checkbox].toggle:disabled:checked,\n  input[type=radio].toggle.disabled:checked,\n  input[type=radio].toggle:disabled:checked {\n    border-color: #949da5;\n    background-color: #949da5; }\n  input[type=checkbox].toggle.is-outline,\n  input[type=radio].toggle.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.is-outline:checked:before,\n    input[type=radio].toggle.is-outline:checked:before {\n      background-color: #495057; }\n  input[type=checkbox].toggle.is-material:checked,\n  input[type=radio].toggle.is-material:checked {\n    border-color: #78838e;\n    background-color: #78838e; }\n    input[type=checkbox].toggle.is-material:checked:before,\n    input[type=radio].toggle.is-material:checked:before {\n      background-color: #495057; }\n  input[type=checkbox].toggle.color-primary:before,\n  input[type=radio].toggle.color-primary:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-primary:checked,\n  input[type=radio].toggle.color-primary:checked {\n    border-color: #007bff;\n    background-color: #007bff; }\n  input[type=checkbox].toggle.color-primary.disabled:checked, input[type=checkbox].toggle.color-primary:disabled:checked,\n  input[type=radio].toggle.color-primary.disabled:checked,\n  input[type=radio].toggle.color-primary:disabled:checked {\n    border-color: #99caff;\n    background-color: #99caff; }\n  input[type=checkbox].toggle.color-primary.is-outline,\n  input[type=radio].toggle.color-primary.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-primary.is-outline:checked:before,\n    input[type=radio].toggle.color-primary.is-outline:checked:before {\n      background-color: #007bff; }\n  input[type=checkbox].toggle.color-primary.is-material:checked,\n  input[type=radio].toggle.color-primary.is-material:checked {\n    border-color: #66b0ff;\n    background-color: #66b0ff; }\n    input[type=checkbox].toggle.color-primary.is-material:checked:before,\n    input[type=radio].toggle.color-primary.is-material:checked:before {\n      background-color: #007bff; }\n  input[type=checkbox].toggle.color-secondary:before,\n  input[type=radio].toggle.color-secondary:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-secondary:checked,\n  input[type=radio].toggle.color-secondary:checked {\n    border-color: #dee2e6;\n    background-color: #dee2e6; }\n  input[type=checkbox].toggle.color-secondary.disabled:checked, input[type=checkbox].toggle.color-secondary:disabled:checked,\n  input[type=radio].toggle.color-secondary.disabled:checked,\n  input[type=radio].toggle.color-secondary:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].toggle.color-secondary.is-outline,\n  input[type=radio].toggle.color-secondary.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-secondary.is-outline:checked:before,\n    input[type=radio].toggle.color-secondary.is-outline:checked:before {\n      background-color: #dee2e6; }\n  input[type=checkbox].toggle.color-secondary.is-material:checked,\n  input[type=radio].toggle.color-secondary.is-material:checked {\n    border-color: white;\n    background-color: white; }\n    input[type=checkbox].toggle.color-secondary.is-material:checked:before,\n    input[type=radio].toggle.color-secondary.is-material:checked:before {\n      background-color: #dee2e6; }\n  input[type=checkbox].toggle.color-success:before,\n  input[type=radio].toggle.color-success:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-success:checked,\n  input[type=radio].toggle.color-success:checked {\n    border-color: #28a745;\n    background-color: #28a745; }\n  input[type=checkbox].toggle.color-success.disabled:checked, input[type=checkbox].toggle.color-success:disabled:checked,\n  input[type=radio].toggle.color-success.disabled:checked,\n  input[type=radio].toggle.color-success:disabled:checked {\n    border-color: #86e29b;\n    background-color: #86e29b; }\n  input[type=checkbox].toggle.color-success.is-outline,\n  input[type=radio].toggle.color-success.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-success.is-outline:checked:before,\n    input[type=radio].toggle.color-success.is-outline:checked:before {\n      background-color: #28a745; }\n  input[type=checkbox].toggle.color-success.is-material:checked,\n  input[type=radio].toggle.color-success.is-material:checked {\n    border-color: #5dd879;\n    background-color: #5dd879; }\n    input[type=checkbox].toggle.color-success.is-material:checked:before,\n    input[type=radio].toggle.color-success.is-material:checked:before {\n      background-color: #28a745; }\n  input[type=checkbox].toggle.color-info:before,\n  input[type=radio].toggle.color-info:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-info:checked,\n  input[type=radio].toggle.color-info:checked {\n    border-color: #17a2b8;\n    background-color: #17a2b8; }\n  input[type=checkbox].toggle.color-info.disabled:checked, input[type=checkbox].toggle.color-info:disabled:checked,\n  input[type=radio].toggle.color-info.disabled:checked,\n  input[type=radio].toggle.color-info:disabled:checked {\n    border-color: #7adeee;\n    background-color: #7adeee; }\n  input[type=checkbox].toggle.color-info.is-outline,\n  input[type=radio].toggle.color-info.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-info.is-outline:checked:before,\n    input[type=radio].toggle.color-info.is-outline:checked:before {\n      background-color: #17a2b8; }\n  input[type=checkbox].toggle.color-info.is-material:checked,\n  input[type=radio].toggle.color-info.is-material:checked {\n    border-color: #4cd3e9;\n    background-color: #4cd3e9; }\n    input[type=checkbox].toggle.color-info.is-material:checked:before,\n    input[type=radio].toggle.color-info.is-material:checked:before {\n      background-color: #17a2b8; }\n  input[type=checkbox].toggle.color-warning:before,\n  input[type=radio].toggle.color-warning:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-warning:checked,\n  input[type=radio].toggle.color-warning:checked {\n    border-color: #ffc107;\n    background-color: #ffc107; }\n  input[type=checkbox].toggle.color-warning.disabled:checked, input[type=checkbox].toggle.color-warning:disabled:checked,\n  input[type=radio].toggle.color-warning.disabled:checked,\n  input[type=radio].toggle.color-warning:disabled:checked {\n    border-color: #ffe7a0;\n    background-color: #ffe7a0; }\n  input[type=checkbox].toggle.color-warning.is-outline,\n  input[type=radio].toggle.color-warning.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-warning.is-outline:checked:before,\n    input[type=radio].toggle.color-warning.is-outline:checked:before {\n      background-color: #ffc107; }\n  input[type=checkbox].toggle.color-warning.is-material:checked,\n  input[type=radio].toggle.color-warning.is-material:checked {\n    border-color: #ffdb6d;\n    background-color: #ffdb6d; }\n    input[type=checkbox].toggle.color-warning.is-material:checked:before,\n    input[type=radio].toggle.color-warning.is-material:checked:before {\n      background-color: #ffc107; }\n  input[type=checkbox].toggle.color-danger:before,\n  input[type=radio].toggle.color-danger:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-danger:checked,\n  input[type=radio].toggle.color-danger:checked {\n    border-color: #dc3545;\n    background-color: #dc3545; }\n  input[type=checkbox].toggle.color-danger.disabled:checked, input[type=checkbox].toggle.color-danger:disabled:checked,\n  input[type=radio].toggle.color-danger.disabled:checked,\n  input[type=radio].toggle.color-danger:disabled:checked {\n    border-color: #f3b7bd;\n    background-color: #f3b7bd; }\n  input[type=checkbox].toggle.color-danger.is-outline,\n  input[type=radio].toggle.color-danger.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-danger.is-outline:checked:before,\n    input[type=radio].toggle.color-danger.is-outline:checked:before {\n      background-color: #dc3545; }\n  input[type=checkbox].toggle.color-danger.is-material:checked,\n  input[type=radio].toggle.color-danger.is-material:checked {\n    border-color: #eb8c95;\n    background-color: #eb8c95; }\n    input[type=checkbox].toggle.color-danger.is-material:checked:before,\n    input[type=radio].toggle.color-danger.is-material:checked:before {\n      background-color: #dc3545; }\n  input[type=checkbox].toggle.color-light:before,\n  input[type=radio].toggle.color-light:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-light:checked,\n  input[type=radio].toggle.color-light:checked {\n    border-color: #e9ecef;\n    background-color: #e9ecef; }\n  input[type=checkbox].toggle.color-light.disabled:checked, input[type=checkbox].toggle.color-light:disabled:checked,\n  input[type=radio].toggle.color-light.disabled:checked,\n  input[type=radio].toggle.color-light:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].toggle.color-light.is-outline,\n  input[type=radio].toggle.color-light.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-light.is-outline:checked:before,\n    input[type=radio].toggle.color-light.is-outline:checked:before {\n      background-color: #e9ecef; }\n  input[type=checkbox].toggle.color-light.is-material:checked,\n  input[type=radio].toggle.color-light.is-material:checked {\n    border-color: white;\n    background-color: white; }\n    input[type=checkbox].toggle.color-light.is-material:checked:before,\n    input[type=radio].toggle.color-light.is-material:checked:before {\n      background-color: #e9ecef; }\n  input[type=checkbox].toggle.color-dark:before,\n  input[type=radio].toggle.color-dark:before {\n    background-color: #fff; }\n  input[type=checkbox].toggle.color-dark:checked,\n  input[type=radio].toggle.color-dark:checked {\n    border-color: #343a40;\n    background-color: #343a40; }\n  input[type=checkbox].toggle.color-dark.disabled:checked, input[type=checkbox].toggle.color-dark:disabled:checked,\n  input[type=radio].toggle.color-dark.disabled:checked,\n  input[type=radio].toggle.color-dark:disabled:checked {\n    border-color: #7a8793;\n    background-color: #7a8793; }\n  input[type=checkbox].toggle.color-dark.is-outline,\n  input[type=radio].toggle.color-dark.is-outline {\n    background-color: #fff; }\n    input[type=checkbox].toggle.color-dark.is-outline:checked:before,\n    input[type=radio].toggle.color-dark.is-outline:checked:before {\n      background-color: #343a40; }\n  input[type=checkbox].toggle.color-dark.is-material:checked,\n  input[type=radio].toggle.color-dark.is-material:checked {\n    border-color: #626d78;\n    background-color: #626d78; }\n    input[type=checkbox].toggle.color-dark.is-material:checked:before,\n    input[type=radio].toggle.color-dark.is-material:checked:before {\n      background-color: #343a40; }\n  input[type=checkbox].toggle.is-small,\n  input[type=radio].toggle.is-small {\n    width: 1.96875rem;\n    height: 0.875rem;\n    border-radius: 0.875rem; }\n    input[type=checkbox].toggle.is-small:before,\n    input[type=radio].toggle.is-small:before {\n      width: 0.625rem;\n      height: 0.625rem; }\n    input[type=checkbox].toggle.is-small:checked:before,\n    input[type=radio].toggle.is-small:checked:before {\n      left: 1.09375rem; }\n    input[type=checkbox].toggle.is-small.is-outline:before,\n    input[type=radio].toggle.is-small.is-outline:before {\n      width: 0.375rem;\n      height: 0.375rem; }\n    input[type=checkbox].toggle.is-small.is-outline:checked:before,\n    input[type=radio].toggle.is-small.is-outline:checked:before {\n      left: 1.09375rem; }\n    input[type=checkbox].toggle.is-small.is-material:before,\n    input[type=radio].toggle.is-small.is-material:before {\n      width: 1.125rem;\n      height: 1.125rem; }\n    input[type=checkbox].toggle.is-small.is-material:checked:before,\n    input[type=radio].toggle.is-small.is-material:checked:before {\n      left: 0.84375rem; }\n  input[type=checkbox].toggle.is-large,\n  input[type=radio].toggle.is-large {\n    width: 2.8125rem;\n    height: 1.25rem;\n    border-radius: 1.25rem; }\n    input[type=checkbox].toggle.is-large:before,\n    input[type=radio].toggle.is-large:before {\n      width: 1rem;\n      height: 1rem; }\n    input[type=checkbox].toggle.is-large:checked:before,\n    input[type=radio].toggle.is-large:checked:before {\n      left: 1.5625rem; }\n    input[type=checkbox].toggle.is-large.is-outline:before,\n    input[type=radio].toggle.is-large.is-outline:before {\n      width: 0.75rem;\n      height: 0.75rem; }\n    input[type=checkbox].toggle.is-large.is-outline:checked:before,\n    input[type=radio].toggle.is-large.is-outline:checked:before {\n      left: 1.5625rem; }\n    input[type=checkbox].toggle.is-large.is-material:before,\n    input[type=radio].toggle.is-large.is-material:before {\n      width: 1.5rem;\n      height: 1.5rem; }\n    input[type=checkbox].toggle.is-large.is-material:checked:before,\n    input[type=radio].toggle.is-large.is-material:checked:before {\n      left: 1.3125rem; }\n\ninput[type=checkbox].checkbox,\ninput[type=radio].checkbox {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  bottom: .1rem;\n  vertical-align: middle;\n  width: 1rem;\n  height: 1rem;\n  border: 2px #ced4da solid; }\n  input[type=checkbox].checkbox:before, input[type=checkbox].checkbox:after,\n  input[type=radio].checkbox:before,\n  input[type=radio].checkbox:after {\n    box-sizing: border-box; }\n  input[type=checkbox].checkbox.disabled, input[type=checkbox].checkbox:disabled,\n  input[type=radio].checkbox.disabled,\n  input[type=radio].checkbox:disabled {\n    cursor: not-allowed; }\n  input[type=checkbox].checkbox:active, input[type=checkbox].checkbox:focus,\n  input[type=radio].checkbox:active,\n  input[type=radio].checkbox:focus {\n    border-color: rgba(255, 255, 255, 0.25); }\n  input[type=checkbox].checkbox:before,\n  input[type=radio].checkbox:before {\n    content: \"\";\n    position: absolute;\n    visibility: hidden;\n    left: 0;\n    right: 0;\n    top: 12.5%;\n    height: 50%;\n    border-left: 2px transparent solid;\n    border-bottom: 2px transparent solid;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  input[type=checkbox].checkbox:checked:before, input[type=checkbox].checkbox.is-hoverable:hover:before,\n  input[type=radio].checkbox:checked:before,\n  input[type=radio].checkbox.is-hoverable:hover:before {\n    visibility: visible; }\n  input[type=checkbox].checkbox.is-outline:before,\n  input[type=radio].checkbox.is-outline:before {\n    left: 2px;\n    right: 2px;\n    top: 20%;\n    height: 40%; }\n  input[type=checkbox].checkbox.is-outline:checked,\n  input[type=radio].checkbox.is-outline:checked {\n    background-color: transparent !important; }\n  input[type=checkbox].checkbox.is-material:before,\n  input[type=radio].checkbox.is-material:before {\n    content: initial;\n    content: unset; }\n  input[type=checkbox].checkbox.is-rounded,\n  input[type=radio].checkbox.is-rounded {\n    border-radius: 0.25rem; }\n  input[type=checkbox].checkbox.is-circle,\n  input[type=radio].checkbox.is-circle {\n    border-radius: 50%; }\n  input[type=checkbox].checkbox.is-square,\n  input[type=radio].checkbox.is-square {\n    border-radius: 0; }\n  input[type=checkbox].checkbox.is-material:checked,\n  input[type=radio].checkbox.is-material:checked {\n    height: 0.5rem;\n    border-top: none;\n    border-right: none;\n    border-bottom-width: 2px;\n    border-left-width: 2px;\n    -webkit-transform: rotate(-45deg) translate(12.5%, -12.5%);\n            transform: rotate(-45deg) translate(12.5%, -12.5%);\n    background-color: transparent !important; }\n  input[type=checkbox].checkbox.has-animation:before,\n  input[type=radio].checkbox.has-animation:before {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -165deg);\n            transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -165deg);\n    transition: opacity .2s ease, -webkit-transform .3s ease;\n    transition: transform .3s ease, opacity .2s ease;\n    transition: transform .3s ease, opacity .2s ease, -webkit-transform .3s ease; }\n  input[type=checkbox].checkbox.has-animation:checked:before,\n  input[type=radio].checkbox.has-animation:checked:before {\n    opacity: 1;\n    -webkit-transform: rotate(-45deg) translate3d(0, 0, 0);\n            transform: rotate(-45deg) translate3d(0, 0, 0); }\n  input[type=checkbox].checkbox.has-animation.is-material,\n  input[type=radio].checkbox.has-animation.is-material {\n    opacity: 1;\n    transition: height .2s ease, -webkit-transform .3s ease;\n    transition: transform .3s ease, height .2s ease;\n    transition: transform .3s ease, height .2s ease, -webkit-transform .3s ease; }\n  input[type=checkbox].checkbox.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.is-hoverable:hover:not(:checked):before {\n    border-color: #b0b6bc; }\n  input[type=checkbox].checkbox:before,\n  input[type=radio].checkbox:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox:checked,\n  input[type=radio].checkbox:checked {\n    border-color: #495057;\n    background-color: #495057; }\n  input[type=checkbox].checkbox.disabled:checked, input[type=checkbox].checkbox:disabled:checked,\n  input[type=radio].checkbox.disabled:checked,\n  input[type=radio].checkbox:disabled:checked {\n    border-color: #949da5;\n    background-color: #949da5; }\n  input[type=checkbox].checkbox.is-outline:before,\n  input[type=radio].checkbox.is-outline:before {\n    border-color: #495057; }\n  input[type=checkbox].checkbox.color-primary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-primary.is-hoverable:hover:not(:checked):before {\n    border-color: #cce5ff; }\n  input[type=checkbox].checkbox.color-primary:before,\n  input[type=radio].checkbox.color-primary:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-primary:checked,\n  input[type=radio].checkbox.color-primary:checked {\n    border-color: #007bff;\n    background-color: #007bff; }\n  input[type=checkbox].checkbox.color-primary.disabled:checked, input[type=checkbox].checkbox.color-primary:disabled:checked,\n  input[type=radio].checkbox.color-primary.disabled:checked,\n  input[type=radio].checkbox.color-primary:disabled:checked {\n    border-color: #99caff;\n    background-color: #99caff; }\n  input[type=checkbox].checkbox.color-primary.is-outline:before,\n  input[type=radio].checkbox.color-primary.is-outline:before {\n    border-color: #007bff; }\n  input[type=checkbox].checkbox.color-secondary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-secondary.is-hoverable:hover:not(:checked):before {\n    border-color: white; }\n  input[type=checkbox].checkbox.color-secondary:before,\n  input[type=radio].checkbox.color-secondary:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-secondary:checked,\n  input[type=radio].checkbox.color-secondary:checked {\n    border-color: #dee2e6;\n    background-color: #dee2e6; }\n  input[type=checkbox].checkbox.color-secondary.disabled:checked, input[type=checkbox].checkbox.color-secondary:disabled:checked,\n  input[type=radio].checkbox.color-secondary.disabled:checked,\n  input[type=radio].checkbox.color-secondary:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].checkbox.color-secondary.is-outline:before,\n  input[type=radio].checkbox.color-secondary.is-outline:before {\n    border-color: #dee2e6; }\n  input[type=checkbox].checkbox.color-success.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-success.is-hoverable:hover:not(:checked):before {\n    border-color: #afecbd; }\n  input[type=checkbox].checkbox.color-success:before,\n  input[type=radio].checkbox.color-success:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-success:checked,\n  input[type=radio].checkbox.color-success:checked {\n    border-color: #28a745;\n    background-color: #28a745; }\n  input[type=checkbox].checkbox.color-success.disabled:checked, input[type=checkbox].checkbox.color-success:disabled:checked,\n  input[type=radio].checkbox.color-success.disabled:checked,\n  input[type=radio].checkbox.color-success:disabled:checked {\n    border-color: #86e29b;\n    background-color: #86e29b; }\n  input[type=checkbox].checkbox.color-success.is-outline:before,\n  input[type=radio].checkbox.color-success.is-outline:before {\n    border-color: #28a745; }\n  input[type=checkbox].checkbox.color-info.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-info.is-hoverable:hover:not(:checked):before {\n    border-color: #a7e9f4; }\n  input[type=checkbox].checkbox.color-info:before,\n  input[type=radio].checkbox.color-info:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-info:checked,\n  input[type=radio].checkbox.color-info:checked {\n    border-color: #17a2b8;\n    background-color: #17a2b8; }\n  input[type=checkbox].checkbox.color-info.disabled:checked, input[type=checkbox].checkbox.color-info:disabled:checked,\n  input[type=radio].checkbox.color-info.disabled:checked,\n  input[type=radio].checkbox.color-info:disabled:checked {\n    border-color: #7adeee;\n    background-color: #7adeee; }\n  input[type=checkbox].checkbox.color-info.is-outline:before,\n  input[type=radio].checkbox.color-info.is-outline:before {\n    border-color: #17a2b8; }\n  input[type=checkbox].checkbox.color-warning.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-warning.is-hoverable:hover:not(:checked):before {\n    border-color: #fff4d3; }\n  input[type=checkbox].checkbox.color-warning:before,\n  input[type=radio].checkbox.color-warning:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-warning:checked,\n  input[type=radio].checkbox.color-warning:checked {\n    border-color: #ffc107;\n    background-color: #ffc107; }\n  input[type=checkbox].checkbox.color-warning.disabled:checked, input[type=checkbox].checkbox.color-warning:disabled:checked,\n  input[type=radio].checkbox.color-warning.disabled:checked,\n  input[type=radio].checkbox.color-warning:disabled:checked {\n    border-color: #ffe7a0;\n    background-color: #ffe7a0; }\n  input[type=checkbox].checkbox.color-warning.is-outline:before,\n  input[type=radio].checkbox.color-warning.is-outline:before {\n    border-color: #ffc107; }\n  input[type=checkbox].checkbox.color-danger.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-danger.is-hoverable:hover:not(:checked):before {\n    border-color: #fae3e5; }\n  input[type=checkbox].checkbox.color-danger:before,\n  input[type=radio].checkbox.color-danger:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-danger:checked,\n  input[type=radio].checkbox.color-danger:checked {\n    border-color: #dc3545;\n    background-color: #dc3545; }\n  input[type=checkbox].checkbox.color-danger.disabled:checked, input[type=checkbox].checkbox.color-danger:disabled:checked,\n  input[type=radio].checkbox.color-danger.disabled:checked,\n  input[type=radio].checkbox.color-danger:disabled:checked {\n    border-color: #f3b7bd;\n    background-color: #f3b7bd; }\n  input[type=checkbox].checkbox.color-danger.is-outline:before,\n  input[type=radio].checkbox.color-danger.is-outline:before {\n    border-color: #dc3545; }\n  input[type=checkbox].checkbox.color-light.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-light.is-hoverable:hover:not(:checked):before {\n    border-color: white; }\n  input[type=checkbox].checkbox.color-light:before,\n  input[type=radio].checkbox.color-light:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-light:checked,\n  input[type=radio].checkbox.color-light:checked {\n    border-color: #e9ecef;\n    background-color: #e9ecef; }\n  input[type=checkbox].checkbox.color-light.disabled:checked, input[type=checkbox].checkbox.color-light:disabled:checked,\n  input[type=radio].checkbox.color-light.disabled:checked,\n  input[type=radio].checkbox.color-light:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].checkbox.color-light.is-outline:before,\n  input[type=radio].checkbox.color-light.is-outline:before {\n    border-color: #e9ecef; }\n  input[type=checkbox].checkbox.color-dark.is-hoverable:hover:not(:checked):before,\n  input[type=radio].checkbox.color-dark.is-hoverable:hover:not(:checked):before {\n    border-color: #96a0aa; }\n  input[type=checkbox].checkbox.color-dark:before,\n  input[type=radio].checkbox.color-dark:before {\n    border-color: #fff; }\n  input[type=checkbox].checkbox.color-dark:checked,\n  input[type=radio].checkbox.color-dark:checked {\n    border-color: #343a40;\n    background-color: #343a40; }\n  input[type=checkbox].checkbox.color-dark.disabled:checked, input[type=checkbox].checkbox.color-dark:disabled:checked,\n  input[type=radio].checkbox.color-dark.disabled:checked,\n  input[type=radio].checkbox.color-dark:disabled:checked {\n    border-color: #7a8793;\n    background-color: #7a8793; }\n  input[type=checkbox].checkbox.color-dark.is-outline:before,\n  input[type=radio].checkbox.color-dark.is-outline:before {\n    border-color: #343a40; }\n  input[type=checkbox].checkbox.is-small,\n  input[type=radio].checkbox.is-small {\n    width: 0.875rem;\n    height: 0.875rem; }\n    input[type=checkbox].checkbox.is-small.is-material:checked,\n    input[type=radio].checkbox.is-small.is-material:checked {\n      height: 0.4375rem; }\n  input[type=checkbox].checkbox.is-large,\n  input[type=radio].checkbox.is-large {\n    width: 1.25rem;\n    height: 1.25rem; }\n    input[type=checkbox].checkbox.is-large.is-material:checked,\n    input[type=radio].checkbox.is-large.is-material:checked {\n      height: 0.625rem; }\n\ninput[type=checkbox].radio,\ninput[type=radio].radio {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  bottom: .1rem;\n  vertical-align: middle;\n  width: 1rem;\n  height: 1rem;\n  border: 2px #ced4da solid;\n  border-radius: 50%; }\n  input[type=checkbox].radio:before, input[type=checkbox].radio:after,\n  input[type=radio].radio:before,\n  input[type=radio].radio:after {\n    box-sizing: border-box; }\n  input[type=checkbox].radio.disabled, input[type=checkbox].radio:disabled,\n  input[type=radio].radio.disabled,\n  input[type=radio].radio:disabled {\n    cursor: not-allowed; }\n  input[type=checkbox].radio:active, input[type=checkbox].radio:focus,\n  input[type=radio].radio:active,\n  input[type=radio].radio:focus {\n    border-color: rgba(0, 123, 255, 0.25); }\n  input[type=checkbox].radio:before,\n  input[type=radio].radio:before {\n    content: \"\";\n    position: absolute;\n    visibility: hidden;\n    top: .125rem;\n    bottom: .125rem;\n    left: .125rem;\n    right: .125rem;\n    border-radius: 50%; }\n  input[type=checkbox].radio:checked:before, input[type=checkbox].radio.is-hoverable:hover:before,\n  input[type=radio].radio:checked:before,\n  input[type=radio].radio.is-hoverable:hover:before {\n    visibility: visible; }\n  input[type=checkbox].radio.is-outline:checked,\n  input[type=radio].radio.is-outline:checked {\n    background-color: transparent !important; }\n  input[type=checkbox].radio.is-outline:before,\n  input[type=radio].radio.is-outline:before {\n    top: .1875rem;\n    bottom: .1875rem;\n    left: .1875rem;\n    right: .1875rem; }\n  input[type=checkbox].radio.is-material:before,\n  input[type=radio].radio.is-material:before {\n    content: initial;\n    content: unset; }\n  input[type=checkbox].radio.is-rounded,\n  input[type=radio].radio.is-rounded {\n    border-radius: 0.25rem; }\n    input[type=checkbox].radio.is-rounded:before,\n    input[type=radio].radio.is-rounded:before {\n      border-radius: 0.25rem; }\n  input[type=checkbox].radio.is-circle,\n  input[type=radio].radio.is-circle {\n    border-radius: 50%; }\n    input[type=checkbox].radio.is-circle:before,\n    input[type=radio].radio.is-circle:before {\n      border-radius: 50%; }\n  input[type=checkbox].radio.is-square,\n  input[type=radio].radio.is-square {\n    border-radius: 0; }\n    input[type=checkbox].radio.is-square:before,\n    input[type=radio].radio.is-square:before {\n      border-radius: 0; }\n  input[type=checkbox].radio.has-animation:before,\n  input[type=radio].radio.has-animation:before {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n    transition: opacity .2s ease, -webkit-transform .3s ease;\n    transition: transform .3s ease, opacity .2s ease;\n    transition: transform .3s ease, opacity .2s ease, -webkit-transform .3s ease; }\n  input[type=checkbox].radio.has-animation:checked:before,\n  input[type=radio].radio.has-animation:checked:before {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); }\n  input[type=checkbox].radio.has-animation.is-material:checked,\n  input[type=radio].radio.has-animation.is-material:checked {\n    -webkit-animation: radio-zoom-in .3s both;\n            animation: radio-zoom-in .3s both; }\n  input[type=checkbox].radio.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.is-hoverable:hover:not(:checked):before {\n    border-color: #b0b6bc;\n    background-color: #b0b6bc; }\n  input[type=checkbox].radio:before,\n  input[type=radio].radio:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio:checked,\n  input[type=radio].radio:checked {\n    border-color: #495057;\n    background-color: #495057; }\n  input[type=checkbox].radio.disabled:checked, input[type=checkbox].radio:disabled:checked,\n  input[type=radio].radio.disabled:checked,\n  input[type=radio].radio:disabled:checked {\n    border-color: #949da5;\n    background-color: #949da5; }\n  input[type=checkbox].radio.is-outline:before,\n  input[type=radio].radio.is-outline:before {\n    border-color: #495057; }\n  input[type=checkbox].radio.is-outline:checked:before,\n  input[type=radio].radio.is-outline:checked:before {\n    background-color: #495057; }\n  input[type=checkbox].radio.color-primary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-primary.is-hoverable:hover:not(:checked):before {\n    border-color: #cce5ff;\n    background-color: #cce5ff; }\n  input[type=checkbox].radio.color-primary:before,\n  input[type=radio].radio.color-primary:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-primary:checked,\n  input[type=radio].radio.color-primary:checked {\n    border-color: #007bff;\n    background-color: #007bff; }\n  input[type=checkbox].radio.color-primary.disabled:checked, input[type=checkbox].radio.color-primary:disabled:checked,\n  input[type=radio].radio.color-primary.disabled:checked,\n  input[type=radio].radio.color-primary:disabled:checked {\n    border-color: #99caff;\n    background-color: #99caff; }\n  input[type=checkbox].radio.color-primary.is-outline:before,\n  input[type=radio].radio.color-primary.is-outline:before {\n    border-color: #007bff; }\n  input[type=checkbox].radio.color-primary.is-outline:checked:before,\n  input[type=radio].radio.color-primary.is-outline:checked:before {\n    background-color: #007bff; }\n  input[type=checkbox].radio.color-secondary.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-secondary.is-hoverable:hover:not(:checked):before {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-secondary:before,\n  input[type=radio].radio.color-secondary:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-secondary:checked,\n  input[type=radio].radio.color-secondary:checked {\n    border-color: #dee2e6;\n    background-color: #dee2e6; }\n  input[type=checkbox].radio.color-secondary.disabled:checked, input[type=checkbox].radio.color-secondary:disabled:checked,\n  input[type=radio].radio.color-secondary.disabled:checked,\n  input[type=radio].radio.color-secondary:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-secondary.is-outline:before,\n  input[type=radio].radio.color-secondary.is-outline:before {\n    border-color: #dee2e6; }\n  input[type=checkbox].radio.color-secondary.is-outline:checked:before,\n  input[type=radio].radio.color-secondary.is-outline:checked:before {\n    background-color: #dee2e6; }\n  input[type=checkbox].radio.color-success.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-success.is-hoverable:hover:not(:checked):before {\n    border-color: #afecbd;\n    background-color: #afecbd; }\n  input[type=checkbox].radio.color-success:before,\n  input[type=radio].radio.color-success:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-success:checked,\n  input[type=radio].radio.color-success:checked {\n    border-color: #28a745;\n    background-color: #28a745; }\n  input[type=checkbox].radio.color-success.disabled:checked, input[type=checkbox].radio.color-success:disabled:checked,\n  input[type=radio].radio.color-success.disabled:checked,\n  input[type=radio].radio.color-success:disabled:checked {\n    border-color: #86e29b;\n    background-color: #86e29b; }\n  input[type=checkbox].radio.color-success.is-outline:before,\n  input[type=radio].radio.color-success.is-outline:before {\n    border-color: #28a745; }\n  input[type=checkbox].radio.color-success.is-outline:checked:before,\n  input[type=radio].radio.color-success.is-outline:checked:before {\n    background-color: #28a745; }\n  input[type=checkbox].radio.color-info.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-info.is-hoverable:hover:not(:checked):before {\n    border-color: #a7e9f4;\n    background-color: #a7e9f4; }\n  input[type=checkbox].radio.color-info:before,\n  input[type=radio].radio.color-info:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-info:checked,\n  input[type=radio].radio.color-info:checked {\n    border-color: #17a2b8;\n    background-color: #17a2b8; }\n  input[type=checkbox].radio.color-info.disabled:checked, input[type=checkbox].radio.color-info:disabled:checked,\n  input[type=radio].radio.color-info.disabled:checked,\n  input[type=radio].radio.color-info:disabled:checked {\n    border-color: #7adeee;\n    background-color: #7adeee; }\n  input[type=checkbox].radio.color-info.is-outline:before,\n  input[type=radio].radio.color-info.is-outline:before {\n    border-color: #17a2b8; }\n  input[type=checkbox].radio.color-info.is-outline:checked:before,\n  input[type=radio].radio.color-info.is-outline:checked:before {\n    background-color: #17a2b8; }\n  input[type=checkbox].radio.color-warning.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-warning.is-hoverable:hover:not(:checked):before {\n    border-color: #fff4d3;\n    background-color: #fff4d3; }\n  input[type=checkbox].radio.color-warning:before,\n  input[type=radio].radio.color-warning:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-warning:checked,\n  input[type=radio].radio.color-warning:checked {\n    border-color: #ffc107;\n    background-color: #ffc107; }\n  input[type=checkbox].radio.color-warning.disabled:checked, input[type=checkbox].radio.color-warning:disabled:checked,\n  input[type=radio].radio.color-warning.disabled:checked,\n  input[type=radio].radio.color-warning:disabled:checked {\n    border-color: #ffe7a0;\n    background-color: #ffe7a0; }\n  input[type=checkbox].radio.color-warning.is-outline:before,\n  input[type=radio].radio.color-warning.is-outline:before {\n    border-color: #ffc107; }\n  input[type=checkbox].radio.color-warning.is-outline:checked:before,\n  input[type=radio].radio.color-warning.is-outline:checked:before {\n    background-color: #ffc107; }\n  input[type=checkbox].radio.color-danger.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-danger.is-hoverable:hover:not(:checked):before {\n    border-color: #fae3e5;\n    background-color: #fae3e5; }\n  input[type=checkbox].radio.color-danger:before,\n  input[type=radio].radio.color-danger:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-danger:checked,\n  input[type=radio].radio.color-danger:checked {\n    border-color: #dc3545;\n    background-color: #dc3545; }\n  input[type=checkbox].radio.color-danger.disabled:checked, input[type=checkbox].radio.color-danger:disabled:checked,\n  input[type=radio].radio.color-danger.disabled:checked,\n  input[type=radio].radio.color-danger:disabled:checked {\n    border-color: #f3b7bd;\n    background-color: #f3b7bd; }\n  input[type=checkbox].radio.color-danger.is-outline:before,\n  input[type=radio].radio.color-danger.is-outline:before {\n    border-color: #dc3545; }\n  input[type=checkbox].radio.color-danger.is-outline:checked:before,\n  input[type=radio].radio.color-danger.is-outline:checked:before {\n    background-color: #dc3545; }\n  input[type=checkbox].radio.color-light.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-light.is-hoverable:hover:not(:checked):before {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-light:before,\n  input[type=radio].radio.color-light:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-light:checked,\n  input[type=radio].radio.color-light:checked {\n    border-color: #e9ecef;\n    background-color: #e9ecef; }\n  input[type=checkbox].radio.color-light.disabled:checked, input[type=checkbox].radio.color-light:disabled:checked,\n  input[type=radio].radio.color-light.disabled:checked,\n  input[type=radio].radio.color-light:disabled:checked {\n    border-color: white;\n    background-color: white; }\n  input[type=checkbox].radio.color-light.is-outline:before,\n  input[type=radio].radio.color-light.is-outline:before {\n    border-color: #e9ecef; }\n  input[type=checkbox].radio.color-light.is-outline:checked:before,\n  input[type=radio].radio.color-light.is-outline:checked:before {\n    background-color: #e9ecef; }\n  input[type=checkbox].radio.color-dark.is-hoverable:hover:not(:checked):before,\n  input[type=radio].radio.color-dark.is-hoverable:hover:not(:checked):before {\n    border-color: #96a0aa;\n    background-color: #96a0aa; }\n  input[type=checkbox].radio.color-dark:before,\n  input[type=radio].radio.color-dark:before {\n    border-color: #fff;\n    background-color: #fff; }\n  input[type=checkbox].radio.color-dark:checked,\n  input[type=radio].radio.color-dark:checked {\n    border-color: #343a40;\n    background-color: #343a40; }\n  input[type=checkbox].radio.color-dark.disabled:checked, input[type=checkbox].radio.color-dark:disabled:checked,\n  input[type=radio].radio.color-dark.disabled:checked,\n  input[type=radio].radio.color-dark:disabled:checked {\n    border-color: #7a8793;\n    background-color: #7a8793; }\n  input[type=checkbox].radio.color-dark.is-outline:before,\n  input[type=radio].radio.color-dark.is-outline:before {\n    border-color: #343a40; }\n  input[type=checkbox].radio.color-dark.is-outline:checked:before,\n  input[type=radio].radio.color-dark.is-outline:checked:before {\n    background-color: #343a40; }\n  input[type=checkbox].radio.is-small,\n  input[type=radio].radio.is-small {\n    width: 0.875rem;\n    height: 0.875rem; }\n  input[type=checkbox].radio.is-large,\n  input[type=radio].radio.is-large {\n    width: 1.25rem;\n    height: 1.25rem; }\n\n@-webkit-keyframes radio-zoom-in {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes radio-zoom-in {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n/*# sourceMappingURL=toggle-checkbox-radio.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/forms.css":
/*!******************************!*\
  !*** ./src/styles/forms.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/list.css":
/*!*****************************!*\
  !*** ./src/styles/list.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./list.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/mian.css":
/*!*****************************!*\
  !*** ./src/styles/mian.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mian_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mian.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/mian.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mian_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mian_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mian_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mian_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/tiny-date-picker.css":
/*!*****************************************!*\
  !*** ./src/styles/tiny-date-picker.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tiny_date_picker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tiny-date-picker.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/tiny-date-picker.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tiny_date_picker_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tiny_date_picker_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tiny_date_picker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tiny_date_picker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/toggle-checkbox-radio.css":
/*!**********************************************!*\
  !*** ./src/styles/toggle-checkbox-radio.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggle_checkbox_radio_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./toggle-checkbox-radio.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/toggle-checkbox-radio.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toggle_checkbox_radio_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toggle_checkbox_radio_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toggle_checkbox_radio_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toggle_checkbox_radio_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tiny-date-picker/dist/tiny-date-picker.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-date-picker/dist/tiny-date-picker.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var L=Object.defineProperty;var J=t=>L(t,"__esModule",{value:!0});var K=(t,e)=>{J(t);for(var n in e)L(t,n,{get:e[n],enumerable:!0})};K(exports,{default:()=>B,defaultOptions:()=>y});var U=t=>t&&typeof t=="object"&&!Array.isArray(t)&&!(t instanceof NodeList)&&!(t instanceof Node)&&!(t.el instanceof Node);function X(t,e){return e&&t&&Object.keys(t).forEach(n=>{let o=t[n];if(n==="class"||n==="className"){let r=o&&o.trim().split(/[\s]+/);r&&r.length&&e.classList.add(...r)}else n==="innerHTML"||n==="textContent"||typeof o=="function"||n.startsWith("$")?e[n]=o:o!==!1&&o!==void 0&&o!==null&&e.setAttribute(n,o)}),e}function H(t,e){if(!!t){if(!t.forEach){e.append(t);return}if(t.forEach){t.forEach(n=>H(n,e));return}}}function p(t,...e){let[n,...o]=t.split("."),r=document.createElement(n||"div"),a=e[0],i=U(a)&&a;return o.length&&(r.className=o.join(" ")),X(i,r),H(i?e.slice(1):e,r),r}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}var T=t=>e=>{let n=t>0?"nextElementSibling":"previousElementSibling",o=e.target[n];for(let r=0;o&&r<Math.abs(t)-1;++r)o=o[n];o&&o.focus()};function f(t,e){let n={ArrowLeft:T(-1),ArrowUp:T(-t),ArrowRight:T(1),ArrowDown:T(t)};return o=>{let r=e&&e[o.code]||n[o.code];r&&(o.preventDefault(),r(o))}}function m(t,e,n){return p("button",{tabindex:-1,type:"button",...e,className:t},n)}var _=t=>`00${t}`.slice(-2),O=(t,e)=>{let n=e.timeFormat===12;return`${t.getHours()%(n?12:24)||(n?12:0)}`},S=t=>_(t.getMinutes()),A=t=>t.target.select();function Y(t,e){let n=e.timeFormat===24?"":t.getHours()>=12?" PM":" AM";return O(t,e)+":"+S(t)+n}function F(t,e){let n=e.getHours(),o=O(e,t),r=S(e),a=n>=12?"pm":"am";return{hh:o,mm:r,ampm:a}}function z(t,e){let n=parseInt(t.hh||"0",10);return e?n%12+(t.ampm==="pm"?12:0):n}function N(t){let{opts:e}=t,{lang:n}=e,o=e.timeFormat===12,r=F(e,t.selectedDate||t.currentDate),a=()=>{let l=new Date(t.currentDate);l.setHours(z(r,o),parseInt(r.mm||"0",10)),t.goto(l)},i=l=>{l.code==="Enter"&&(l.preventDefault(),l.target.onchange(l),t.apply())},c=p("input.dp-txt-time.dp-txt-hh",{type:"text",placeholder:"hh",maxlength:2,onfocus:A,onkeydown:i,onchange(l){r.hh=l.target.value,a()},value:r.hh}),u=p("input.dp-txt-time.dp-txt-mm",{placeholder:"mm",type:"text",maxlength:2,onfocus:A,onkeydown:i,onchange(l){r.mm=l.target.value,a()},value:r.mm}),s=m("dp-ampm",{tabindex:"auto",onclick(l){r.ampm=r.ampm==="pm"?"am":"pm",l.target.textContent=r.ampm,a()}},r.ampm),h=p("footer.dp-time-footer",c,":",u,o?s:"",n.applyText&&m("dp-apply",{tabindex:"auto",onclick(){t.apply()}},n.applyText));return d(t.root,"selecteddatechange",()=>{t.selectedDate&&(Object.assign(r,F(t.opts,t.selectedDate)),c.value=r.hh,u.value=r.mm,s.textContent=r.ampm)}),h}function y(){let t={lang:{applyText:"Apply",days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},timeFormat:12,highlightedDate:new Date,format(e){return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()+(t.pickTime?" "+Y(e,t):"")},parse(e){let n=new Date(e);return isNaN(n)?void 0:n},dateClass(){return""},inRange(e){let{min:n,max:o}=t;return(!n||e>=n)&&(!o||e<=o)},appendTo:document.body,dayOffset:0};return t}function D(){var t=new Date;return t.setHours(0,0,0,0),t}function x(t,e){return(t&&t.toDateString())===(e&&e.toDateString())}function g(t,e){return t=new Date(t),t.setDate(t.getDate()+e),t}function v(t,e,n){t=new Date(t);var o=t.getDate(),r=t.getMonth()+e;return t.setDate(1),t.setMonth(n?(12+r)%12:r),t.setDate(o),t.getDate()<o&&t.setDate(0),t}function w(t,e){return t=new Date(t),t.setFullYear(t.getFullYear()+e),t}function C(t,e){return t=new Date(t),t.setFullYear(e),t}function j(t,e){return v(t,e-t.getMonth())}function E(t,e,n){return t&&(e&&t<e?e:n&&t>n?n:t)}function $(t){let{opts:e,currentDate:n}=t,{months:o}=e.lang,r=n.getMonth(),a=p(".dp-months.dp-submenu",{onclick:c=>c.stopPropagation(),onkeydown:f(3)},o.map((c,u)=>m(`dp-month${r===u?" dp-selected":""}`,{onclick:()=>t.goto(j(n,u))},c)));t.submenu(a);let i=a.querySelector(".dp-selected");i&&i.focus()}function G(t){let e=[],{max:n,min:o}=t.opts,r=(n?new Date(n):w(D(),25)).getFullYear(),a=(o?new Date(o):w(D(),-25)).getFullYear();for(let i=a;i<=r;++i)e.push(i);return e}function I(t){let{currentDate:e,selectedDate:n}=t,o=e.getFullYear(),r=n?.getFullYear(),a=p(".dp-years.dp-submenu",{onclick:c=>c.stopPropagation(),onkeydown:f(1)},G(t).map(c=>m(`dp-year${o===c?" dp-selected":""}${r===c?" dp-selected":""}`,{onclick:()=>t.goto(C(e,c))},c)));t.submenu(a);let i=a.querySelector(".dp-selected");i&&i.focus()}function Q(t,e){let n=[],o=new Date(t);o.setDate(1),o.setDate(1-o.getDay()+e),e&&o.getDate()===e+1&&o.setDate(e-6);for(let r=0;r<6*7;++r)n.push(new Date(o)),o.setDate(o.getDate()+1);return n}function M(t,e){let{opts:n,currentDate:o,selectedDate:r}=t,{days:a,months:i}=n.lang,c=o.getMonth(),u=D();return p(`.dp-body.${e}`,p("header.dp-cal-header",m("dp-cal-month",{onclick:s=>{s.stopPropagation(),$(t)}},i[c]),m("dp-cal-year",{onclick:s=>{s.stopPropagation(),I(t)}},o.getFullYear())),p(".dp-days",{onkeydown:f(7,{ArrowLeft(s){t.goto(g(new Date(parseInt(s.target.dataset.date)),-1))},ArrowUp(s){t.goto(g(new Date(parseInt(s.target.dataset.date)),-7))},ArrowRight(s){t.goto(g(new Date(parseInt(s.target.dataset.date)),1))},ArrowDown(s){t.goto(g(new Date(parseInt(s.target.dataset.date)),7))}})},a.map((s,h)=>p("span.dp-col-header",a[(h+n.dayOffset)%a.length])),Q(o,n.dayOffset).map(s=>{let h=s.getMonth()!==c,l=!n.inRange(s),b=x(s,u),k=x(s,o),R=x(s,r),W="dp-day"+(h?" dp-edge-day":"")+(k?" dp-current":"")+(R?" dp-selected":"")+(l?" dp-day-disabled":"")+(b?" dp-day-today":"")+n.dateClass(s);return m(W,{disabled:l,onclick(){n.pickTime?t.setSelectedDate(s):t.apply(s)},tabindex:k?"":-1,"data-date":s.getTime()},s.getDate())})))}function V(t){return p(".dp-cal",{tabindex:-1},p(".dp-cal-header-placeholder"),m("dp-prev",{onclick:()=>t.goto(v(t.currentDate,-1)),"aria-label":"Prev"},"\u2039"),m("dp-next",{onclick:()=>t.goto(v(t.currentDate,1)),"aria-label":"Next"},"\u203A"),M(t,""))}var P=class{constructor(e){this.opts=e,this.currentDate=e.highlightedDate,this.root=V(this),e.pickTime&&this.root.append(N(this)),d(this.root,"click",()=>this.submenu())}redraw(e){this.root.querySelector(".dp-body").replaceWith(e),this.submenu()}setOpts(e){Object.assign(this.opts,e),this.selectedDate=E(this.selectedDate,e.min,e.max),this.currentDate=E(this.currentDate,e.min,e.max),this.redraw(M(this,""))}submenu(e){let n=this.root.querySelectorAll(".dp-submenu");!e&&!n.length||(n.forEach(o=>o.remove()),e?this.root.appendChild(e):this.root.querySelector(".dp-current").focus())}goto(e){let n=this.currentDate!==e,o=this.currentDate<e,r=this.currentDate.getMonth()===e.getMonth()&&this.currentDate.getFullYear()===e.getFullYear();this.currentDate=e,this.redraw(M(this,r?"":o?"dp-body-next":"dp-body-prev")),n&&this.root.dispatchEvent(new CustomEvent("currentdatechange",{detail:e})),setTimeout(()=>{this.root.contains(document.activeElement)||this.root.querySelector(".dp-current").focus()})}setSelectedDate(e){this.selectedDate=E(e||this.currentDate,this.opts.min,this.opts.max),this.goto(this.selectedDate),this.root.dispatchEvent(new CustomEvent("selecteddatechange",{detail:this.selectedDate}))}apply(e){this.setSelectedDate(e),this.root.dispatchEvent(new CustomEvent("apply",{detail:this}))}};function q(t,e){let{root:n,opts:o}=t,r=[],a=()=>{r.forEach(u=>u()),r=[],n.remove()},i=()=>p(".tab-catcher",{tabindex:"0",onfocus(){e.focus(),a()}}),c=()=>{n.isConnected||(t.setSelectedDate(t.opts.parse(e.value)),n.classList.add("dp-flyout"),o.appendTo.append(n),Z(e,t),n.querySelector(".dp-current").focus(),r=[d(document.body,"focus",u=>{u.target!==document.body&&u.target!==e&&!n.contains(u.target)&&a()},!0),d(document.body,"mousedown",u=>{u.target!==e&&!n.contains(u.target)&&a()})])};n.prepend(i()),n.append(i()),d(e,"click",c),d(e,"focus",c),d(n,"apply",()=>{e.value=t.selectedDate?o.format(t.selectedDate):"",e.focus(),a()})}function Z(t,e){let n=8,o=document.documentElement,r=e.root,a=window.scrollX,i=window.scrollY,c=t.getBoundingClientRect(),u=r.getBoundingClientRect(),s=c.left+a,h=c.bottom+i+n,l={left:`${s}px`},b={top:`${h+n}px`};h+u.height>o.clientHeight+i&&(b={top:`${Math.max(n,i+c.top-n-u.height)}px`}),s+u.width>o.clientWidth+a&&(l={left:`${Math.max(n,a+o.clientWidth-u.width-n)}px`}),Object.assign(r.style,b,l),e.root.style.visibility=""}function B(t){let e=Object.assign(y(),t);e.lang=Object.assign(y().lang,t?.lang);let n=new P(e);return e.input&&q(n,e.input),n}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectOperations": () => (/* binding */ projectOperations)
/* harmony export */ });
const projectOperations = (() => {
    function createProject (projectName, ...tasks) {
        const tasksJSON = JSON.stringify(tasks);
        if (!localStorage.getItem(projectName)) localStorage.setItem(projectName, tasksJSON);
    }

    function addTaskToProject (projecName, task) {
        const storedTasks = JSON.parse(localStorage.getItem(projecName));

        if (storedTasks) {
            storedTasks.push(task); 
            localStorage.setItem(projecName, JSON.stringify(storedTasks));
        } else {
            createProject(projecName, task);
        }
    }

    function searchCurrentProject (currentProjectName) {
        const currentProjectTasks = JSON.parse(localStorage.getItem(currentProjectName));

        return currentProjectTasks;
    }

    function deleteTaskFromProject(projectName, taskTitle) {
        let tasks = JSON.parse(localStorage.getItem(projectName));
        tasks = tasks.filter((task) => task.title !== taskTitle);
        tasks = JSON.stringify(tasks)
        localStorage.setItem(projectName, tasks);
    }

    function getTaskFromProject(projectName, taskTitle) {
        const tasks = JSON.parse(localStorage.getItem(projectName));
        const task = tasks.filter((task) => task.title === taskTitle);

        return task[0];
    }

    function updateTask (projectName, oldTaskTitle, updatedTask) {

        let tasks = JSON.parse(localStorage.getItem(projectName));
        tasks = tasks.map((task) => {
            if (task.title === oldTaskTitle) {
                return updatedTask;
            } else {
                return task;
            }
        });

        localStorage.setItem(projectName, JSON.stringify(tasks));
    }

    function deleteProjects (projects) {
        projects.forEach((project) => {
            if (project.isChecked) {
            localStorage.removeItem(project.name);
            }
        })

        if (!localStorage.getItem("general")) createProject("general");
    }

    function getProjects () {
        const projects = [];

        for (let i = 0; i < localStorage.length; i++) {
            projects.push(localStorage.key(i));
        };

        return projects;
    }

    function getTasks(projectName) {
        return JSON.parse(localStorage.getItem(projectName));
    }

    function getDeletFormData (projects) {
        const deleteFromData = [];

        projects.forEach((project) => {
            const projCheckboxId = project.toLowerCase().replaceAll(" ", "_");
            const projCheckboxValue = document.getElementById(projCheckboxId).checked;

            deleteFromData.push({name: project ,isChecked: projCheckboxValue});
        })

        return deleteFromData;
    }

    function sortTasksByPriority (projectName) {
        const importantTasks = JSON.parse(localStorage.getItem(projectName)).filter(task => task.isImportant);
        _sortTasksByDate(importantTasks);
        const notImportantTasks = JSON.parse(localStorage.getItem(projectName)).filter(task => !task.isImportant);
        _sortTasksByDate(notImportantTasks);
        const sortedTasks = importantTasks.concat(notImportantTasks);

        return sortedTasks;
    }

    function _sortTasksByDate (tasks) {
        tasks.sort((taksA, taksB) => taksA.dueDate > taksB.dueDate ? 1 : -1);

        return tasks
    }

    return {createProject, addTaskToProject, searchCurrentProject, deleteTaskFromProject, getTaskFromProject, updateTask, deleteProjects, getProjects, getTasks, 
            getDeletFormData, sortTasksByPriority}
})();



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskOperations": () => (/* binding */ taskOperations)
/* harmony export */ });
const taskOperations = (() => {
    const createTask = (title, description, dueDate, isImportant, isDone) => {
        return { title, description, dueDate, isImportant, isDone }
    };

    function getTaskData () {
        const titleInput = document.querySelector("#title").value;
        const descriptionInput = document.querySelector("#description").value;
        const dueDateInput = document.querySelector("#due_date").value;
        const isImportantInput = document.querySelector("#important").checked;

        if (titleInput) {
            return {titleInput, descriptionInput, dueDateInput, isImportantInput};
        } else {
            alert("You have to fill out all required fields!");
        }
    }

    return {createTask, getTaskData};
})();





/***/ }),

/***/ "./src/img/delete-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/img/delete-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e1e4fc49779172575939.svg";

/***/ }),

/***/ "./src/img/edit-svgrepo-com.svg":
/*!**************************************!*\
  !*** ./src/img/edit-svgrepo-com.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f4279e5bc6c692be08be.svg";

/***/ }),

/***/ "./src/img/icons8-github.svg":
/*!***********************************!*\
  !*** ./src/img/icons8-github.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a61b960f2ce17e7b773b.svg";

/***/ }),

/***/ "./src/img/menu-svgrepo-com.svg":
/*!**************************************!*\
  !*** ./src/img/menu-svgrepo-com.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da85cf4950f4268d36f9.svg";

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
/******/ 			id: moduleId,
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var tiny_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-date-picker */ "./node_modules/tiny-date-picker/dist/tiny-date-picker.js");
/* harmony import */ var tiny_date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_date_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _img_icons8_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/icons8-github.svg */ "./src/img/icons8-github.svg");
/* harmony import */ var _img_delete_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/delete-svgrepo-com.svg */ "./src/img/delete-svgrepo-com.svg");
/* harmony import */ var _img_edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/edit-svgrepo-com.svg */ "./src/img/edit-svgrepo-com.svg");
/* harmony import */ var _img_menu_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu-svgrepo-com.svg */ "./src/img/menu-svgrepo-com.svg");
/* harmony import */ var _src_styles_mian_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/mian.css */ "./src/styles/mian.css");
/* harmony import */ var _src_styles_list_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/styles/list.css */ "./src/styles/list.css");
/* harmony import */ var _src_styles_tiny_date_picker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/styles/tiny-date-picker.css */ "./src/styles/tiny-date-picker.css");
/* harmony import */ var _src_styles_toggle_checkbox_radio_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/styles/toggle-checkbox-radio.css */ "./src/styles/toggle-checkbox-radio.css");
/* harmony import */ var _src_styles_forms_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/styles/forms.css */ "./src/styles/forms.css");















const DOMManipulation = (() => {
    const _appTitle = document.querySelector(".app-title");
    const _addBtn = document.querySelector(".add-task-btn");
    const _deleteProjBtn = document.querySelector(".delete-project");
    const _projContainer = document.querySelector(".project-container");
    const _sidebar = document.querySelector(".sidebar");
    const _contentContainer = document.querySelector(".content-container");

    function displayTasks (projectName) {
        _contentContainer.textContent = "";

        const projectTitle = document.createElement("h1");
        projectTitle.classList.add("list-title")
        projectTitle.textContent = _capitalizeFirstLetter(projectName);
        _contentContainer.appendChild(projectTitle);

        const importantDiv = _createContainerDiv("Important tasks")
        _contentContainer.appendChild(importantDiv);

        const tasksDiv = _createContainerDiv("Tasks");
        _contentContainer.appendChild(tasksDiv);

        const noDateDiv = _createContainerDiv("No due date");
        _contentContainer.appendChild(noDateDiv);

        const doneDiv = _createContainerDiv("Done");
        _contentContainer.appendChild(doneDiv);


        const tasks = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.sortTasksByPriority(projectName);

        tasks.forEach((task, index) => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.setAttribute("id", `${projectName}-${index}`);

            const taskHeaderDiv = document.createElement("div");
            taskHeaderDiv.classList.add("task-header");

            const taskCheckbox = document.createElement("input");
            taskCheckbox.setAttribute("type", "checkbox");
            taskCheckbox.classList.add("checkbox", "color-dark")
            if (task.isDone) taskCheckbox.setAttribute("checked", "ture");
            taskCheckbox.setAttribute("id", task.title.toLowerCase().replaceAll(" ", "-"));
            taskHeaderDiv.appendChild(taskCheckbox);

            taskCheckbox.addEventListener("change", () => {
                const taskToDone = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.getTaskFromProject(projectName, task.title);

                if (taskCheckbox.checked) {
                    taskToDone.isDone = true;
                } else {
                    taskToDone.isDone = false;
                }

                _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.updateTask(projectName, task.title, taskToDone);

                displayTasks(projectName);
            })

            const taskTitle = document.createElement("h2");
            taskTitle.textContent = task.title;
            taskTitle.classList.add("task-title")
            taskHeaderDiv.appendChild(taskTitle);

            const taskCardBtnContainer = document.createElement("div");
            taskCardBtnContainer.classList.add("btn-container");

            const editBtn = _createActionBtn(_img_edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__, "edit-img", "edit-btn");
            taskCardBtnContainer.appendChild(editBtn);

            editBtn.addEventListener("click", () => {
                loadForm("Edit task");
                tiny_date_picker__WEBPACK_IMPORTED_MODULE_1___default()({ input: document.querySelector('#due_date'),
                    min: new Date(),
                    dayOffset: 1,
                });
                _fillOutForm(projectName, task.title);

                const editTaskBtn = document.querySelector(".edit-task");
                const cancelBtn = document.querySelector(".cancel-btn");
                const oldTaskTitle = document.querySelector("#title").value;

                editTaskBtn.addEventListener("click", () => {
                    const taskData = _task_js__WEBPACK_IMPORTED_MODULE_0__.taskOperations.getTaskData();
                    const isDoneValue = task.isDone;
                    const newTask = _task_js__WEBPACK_IMPORTED_MODULE_0__.taskOperations.createTask(taskData.titleInput, taskData.descriptionInput, taskData.dueDateInput, 
                        taskData.isImportantInput, isDoneValue);
                    _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.updateTask(projectName, oldTaskTitle, newTask);

                    loadProject(projectName);
                });

                cancelBtn.addEventListener("click", () => loadProject(projectName));
            });

            const deleteBtn = _createActionBtn(_img_delete_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__, "delete-img", "delete-btn");
            taskCardBtnContainer.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => {
                _deleteTaskCard(`${projectName}-${index}`);
                _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.deleteTaskFromProject(projectName, task.title);
            });

            taskHeaderDiv.appendChild(taskCardBtnContainer);

            taskCard.appendChild(taskHeaderDiv);

            const taskDueDate = document.createElement("div");
            taskDueDate.classList.add("due-date");
            if (task.dueDate) {
                const formattedDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(task.dueDate), 'do MMMM y')
                taskDueDate.textContent = `Due date: ${formattedDate}`;
            } else {
                taskDueDate.textContent = "No due date"
            }

            taskCard.appendChild(taskDueDate);

            taskTitle.addEventListener("click", () => {
                if(taskCard.lastElementChild.textContent !== task.description) {
                    _showDetails(task, taskCard);
                } else {
                    _hideDetails(taskCard);
                }
            });

            if (task.isImportant) taskHeaderDiv.style.textDecoration = "underline";

            if (task.isDone) {
                taskCard.classList.add("done");
                const noListenerEditBtn = editBtn.cloneNode(true);
                editBtn.parentNode.replaceChild(noListenerEditBtn, editBtn);
                const noListenerDeletBtn = deleteBtn.cloneNode(true);
                deleteBtn.parentNode.replaceChild(noListenerDeletBtn, deleteBtn);

                doneDiv.appendChild(taskCard);
            } else if (!task.dueDate) {
                noDateDiv.appendChild(taskCard)
            } else if (task.isImportant) {
                importantDiv.appendChild(taskCard);
            } else {
                tasksDiv.appendChild(taskCard);
            }
        });
    };

    function _createContainerDiv (divTitle) {
        const div = document.createElement("div");
        const divClass = divTitle.toLowerCase().replaceAll(" ", "-");
        div.classList.add(`${divClass}-container`, "task-group-container");

        const title = document.createElement("h2");
        title.textContent = divTitle;
        div.appendChild(title);

        return div;
    }

    function _createActionBtn (image, imgClass, btnClass) {
        const btn = document.createElement("button");
        btn.classList.add(btnClass);
        const img = new Image();
        img.src = image;
        img.classList.add(imgClass);
        btn.appendChild(img);

        return btn;
    };

    function _showDetails(task, taskCard) {
        const detailDiv = document.createElement("div");
        detailDiv.classList.add("description");
        detailDiv.textContent = task.description;

        taskCard.appendChild(detailDiv);
    };

    function _hideDetails (taskCard) {
        taskCard.removeChild(taskCard.lastElementChild);
    };
    
    function hideSidebar () {
        _appTitle.style.display = "none";
        _addBtn.style.display = "none";
        _deleteProjBtn.style.display = "none";
        _projContainer.style.display = "none";
        _sidebar.style.width = "5vw";
        _sidebar.style.display = "block";
    };

    function showSidebar () {
        _appTitle.style.display = "block";
        _addBtn.style.display = "block";
        _deleteProjBtn.style.display = "block";
        _projContainer.style.display = "block";
        _sidebar.style.width = "var(--sidebar-width)";
        _sidebar.style.display = "grid";
    };

    function _deleteTaskCard(cardId) {
        document.getElementById(cardId).remove();
    }

    function displayProjects () {
        _projContainer.textContent = "";

        const projTitle = document.createElement("div");
        projTitle.classList.add("project-title");
        projTitle.textContent = "Projects";

        _projContainer.appendChild(projTitle);
        const projects = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.getProjects();

        for (let i = 0; i < projects.length; i++) {
            const projDiv = document.createElement("div");
            projDiv.classList.add("proj-name");

            const projectName = projects[i];
            projDiv.textContent = _capitalizeFirstLetter(projectName);
            projDiv.addEventListener("click", () =>{
                _contentContainer.textContent = "";
                const projectTasks = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.getTasks(projectName); 
                displayTasks(projectName, projectTasks);
            });

            _projContainer.appendChild(projDiv);
        };
    }

    function _capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function loadForm(formName) {
        const formContainer = document.createElement("div");
        formContainer.classList.add("form-container");

        const formElement = document.createElement("form");

        formContainer.appendChild(formElement);

        const formLegend = document.createElement("legend");
        formLegend.textContent = formName;
        formLegend.classList.add("legend");
        formElement.appendChild(formLegend);

        const projectInput = _creatTextInput("Project", "project", true, "General", false, "input-container", "project-input");
        formElement.appendChild(projectInput);

        const titleInput = _creatTextInput("Title", "title", true, "Wash dishes", false, "input-container", "title-input");
        formElement.appendChild(titleInput);

        const descriptionInput = _creatTextInput("Description", "description", false, "", true, "input-container", "description-input");
        descriptionInput.setAttribute("type", "text")
        formElement.appendChild(descriptionInput);

        const dateInput = _creatTextInput("Due date", "due_date", false, "", false, "input-container", "date-input");
        formElement.appendChild(dateInput);

        const importantToggleDiv = document.createElement("div");
        importantToggleDiv.classList.add("toggle-container");

        const importantToggleInput = document.createElement("input");
        importantToggleInput.setAttribute("type", "checkbox");
        importantToggleInput.setAttribute("class", "toggle");
        importantToggleInput.setAttribute("id", "important")
        importantToggleDiv.appendChild(importantToggleInput);
        
        const importantToggleLabel = document.createElement("label");
        importantToggleLabel.setAttribute("for", "important");
        importantToggleLabel.classList.add("toggle-label");
        importantToggleLabel.textContent = "Important";
        importantToggleDiv.appendChild(importantToggleLabel);
        formElement.appendChild(importantToggleDiv);

        const formBtnContanier = document.createElement("div");
        formBtnContanier.classList.add("form-btn-container");

        const taskBtnClass = formName.toLowerCase().replaceAll(" ", "-");
        const taskBtn = _creatTextButton(formName, true, taskBtnClass);
        formBtnContanier.appendChild(taskBtn);

        const cancelBtn = _creatTextButton("Cancel", true, "cancel-btn");
        formBtnContanier.appendChild(cancelBtn);

        formElement.appendChild(formBtnContanier);

        const requiredTitle = document.createElement("div");
        requiredTitle.classList.add("required-title");
        requiredTitle.textContent = "*required";
        formElement.appendChild(requiredTitle); 

        _contentContainer.textContent = "";
        _contentContainer.appendChild(formContainer);
    }

    function _creatTextInput (inputName, inptuId, required, placeholder, isTextarea, ...containerClasses) {
        const container = document.createElement("div");
        container.classList.add(...containerClasses);
    
        const label = document.createElement("label");
        label.textContent = inputName;
        if ( required === true ) label.textContent = label.textContent + "*";
        label.setAttribute("for", inptuId);
        container.appendChild(label);

        let input;
        if (isTextarea) {
            input = document.createElement("textarea");
            input.setAttribute("rows", "5");
        } else {
            input = document.createElement("input");
        }
        input.setAttribute("type", "text");
        input.setAttribute("id", inptuId);
        input.setAttribute("placeholder", placeholder);

        input.required = required;

        container.appendChild(input);

        return container;
    }
    
    function _creatTextButton (textContent, isSimpleButton, ...btnClasses) {
        const btn = document.createElement("button");
        btn.classList.add(btnClasses);
        if (isSimpleButton) btn.setAttribute("type", "button");
        btn.textContent = textContent;

        return btn
    }

    function _fillOutForm(projecName, taskTitle) {
        const task = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.getTaskFromProject(projecName, taskTitle);

        const projectInput = document.querySelector("#project");
        projectInput.value = projecName;

        const titleInput = document.querySelector("#title");
        titleInput.value = task.title;

        const descriptionInput = document.querySelector("#description");
        descriptionInput.value = task.description;

        const dueDateInput = document.querySelector("#due_date");
        dueDateInput.value = task.dueDate;

        const importantToggleInput = document.querySelector("#important");
        importantToggleInput.checked = task.isImportant;
    }

    function loadProject (ProjectName) {
        let currentProjectTasks = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.searchCurrentProject(ProjectName);
        displayTasks(ProjectName, currentProjectTasks);
    }

    function loadDeletForm (projects) {
        const deleteFormContainer = document.createElement("div");
        deleteFormContainer.classList.add("delete-form-container");

        const formContainer = document.createElement("div");
        formContainer.classList.add("form-container")

        deleteFormContainer.appendChild(formContainer);

        const titleLegend = document.createElement("legend");
        titleLegend.classList.add("legend");
        titleLegend.textContent = "Delete projects";
        formContainer.appendChild(titleLegend);

        projects.forEach((project) => {
            const child = _createCheckbox(project);
            child.classList.add("project-div");
            formContainer.appendChild(child);
        })

        const formBtnContanier = document.createElement("div");
        formBtnContanier.classList.add("form-btn-container");

        const delBtn = _creatTextButton("Delete projects", true, "delete-proj-btn");
        formBtnContanier.appendChild(delBtn);

        const cancelBtn = _creatTextButton("Cancel", true, "cancel-btn");
        formBtnContanier.appendChild(cancelBtn);

        formContainer.appendChild(formBtnContanier);

        _contentContainer.textContent = "";
        _contentContainer.appendChild(deleteFormContainer);        
    }

    function _createCheckbox(checkboxLabel) {
        const idFor = checkboxLabel.toLowerCase().replaceAll(" ", "_");

        const checkboxDiv = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", idFor);
        checkbox.setAttribute("name", "project");
        checkbox.setAttribute("value", idFor);
        checkbox.classList.add("checkbox", "color-danger");
        checkboxDiv.appendChild(checkbox);

        const label = document.createElement("label");
        label.setAttribute("for", idFor);
        label.textContent = _capitalizeFirstLetter(checkboxLabel);
        checkboxDiv.appendChild(label);

        return checkboxDiv;
    }

    return {hideSidebar, showSidebar, displayProjects, displayTasks, loadForm, loadProject, loadDeletForm};
})();

let isSidebarExpanded = true;
let currentProjectName = "general";

const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const addBtn = document.querySelector(".add-task-btn");
const delProjBtn = document.querySelector(".delete-project");

addBtn.addEventListener("click", () => {
    DOMManipulation.loadForm("Add task");
    const projectInput = document.querySelector("#project");
    projectInput.value = "General";
    tiny_date_picker__WEBPACK_IMPORTED_MODULE_1___default()({ input: document.querySelector('#due_date'),
      min: new Date(),
      dayOffset: 1,
    });

    const addTaskBtn = document.querySelector(".add-task");
    const cancelBtn = document.querySelector(".cancel-btn");

    addTaskBtn.addEventListener("click", () =>{
        const newTaskData = _task_js__WEBPACK_IMPORTED_MODULE_0__.taskOperations.getTaskData();
        const newTasksProject = document.querySelector("#project").value.toLowerCase();

        if (newTaskData) {
            const newTask = _task_js__WEBPACK_IMPORTED_MODULE_0__.taskOperations.createTask(newTaskData.titleInput, newTaskData.descriptionInput, 
                newTaskData.dueDateInput, newTaskData.isImportantInput, false);
            _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.addTaskToProject(newTasksProject, newTask);

            DOMManipulation.displayProjects();
            DOMManipulation.loadProject( newTasksProject );
        }
    });
    
    cancelBtn.addEventListener("click",() => DOMManipulation.loadProject(currentProjectName))
})

delProjBtn.addEventListener("click", () => {
    const projects = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.getProjects();
    DOMManipulation.loadDeletForm(projects);

    const formDelProjBtn = document.querySelector(".delete-proj-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    formDelProjBtn.addEventListener("click", () => {
        console.log(projects)
        const formData = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.getDeletFormData(projects);
        _project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.deleteProjects(formData);

        DOMManipulation.displayProjects();
        DOMManipulation.loadProject( currentProjectName );        
    });

    cancelBtn.addEventListener("click", () => DOMManipulation.loadProject(currentProjectName));
})

menuBtn.addEventListener("click", () => {
    if (isSidebarExpanded) {
        
        DOMManipulation.hideSidebar();
    } else {
        DOMManipulation.showSidebar();
    }

    isSidebarExpanded = !isSidebarExpanded;
});

_project_js__WEBPACK_IMPORTED_MODULE_2__.projectOperations.createProject("general");

DOMManipulation.displayProjects();
DOMManipulation.displayTasks("general");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxhQUFhLGtCQUFrQixPQUFPLFVBQVUsaUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sVUFBVSxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksV0FBVyxpQkFBaUIsT0FBTyxVQUFVLGVBQWUsT0FBTyxlQUFlLE9BQU8sVUFBVSxlQUFlLE9BQU8sZUFBZSxPQUFPLFVBQVUsZUFBZSxPQUFPLGdCQUFnQixPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsaUJBQWlCLFFBQVEsaUJBQWlCLFFBQVEsaUJBQWlCLFFBQVEsaUJBQWlCLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsUUFBUSxpQkFBaUIsT0FBTyxVQUFVLFVBQVUsVUFBVSxlQUFlLE1BQU0saUJBQWlCLE9BQU8sWUFBWSxnQkFBZ0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxVQUFVLFlBQVksa0JBQWtCLE9BQU8sVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLFFBQVEsWUFBWSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxZQUFZLGtCQUFrQixRQUFRLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLFFBQVEsWUFBWSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxZQUFZLGtCQUFrQixRQUFRLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLFFBQVEsWUFBWSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxZQUFZLGtCQUFrQixRQUFRLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8sVUFBVSxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLGVBQWUsT0FBTyxrQkFBa0IsT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksa0JBQWtCLFFBQVEsaUJBQWlCLFFBQVEsaUJBQWlCLFFBQVEsaUJBQWlCLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxpQkFBaUIsUUFBUSxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLFlBQVksV0FBVyxlQUFlLE9BQU8sWUFBWSxnQkFBZ0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sVUFBVSxZQUFZLGtCQUFrQixPQUFPLFlBQVksa0JBQWtCLE9BQU8sWUFBWSxrQkFBa0IsT0FBTyxZQUFZLGtCQUFrQixPQUFPLFlBQVksa0JBQWtCLFFBQVEsWUFBWSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxZQUFZLGtCQUFrQixPQUFPLFlBQVksa0JBQWtCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGlCQUFpQixPQUFPLFlBQVksa0JBQWtCLE9BQU8sWUFBWSxrQkFBa0IsT0FBTyxZQUFZLGtCQUFrQixRQUFRLFlBQVksa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sWUFBWSxrQkFBa0IsT0FBTyxZQUFZLGtCQUFrQixPQUFPLFlBQVksa0JBQWtCLFFBQVEsWUFBWSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxZQUFZLGtCQUFrQixPQUFPLFlBQVksa0JBQWtCLE9BQU8sWUFBWSxrQkFBa0IsUUFBUSxZQUFZLGtCQUFrQixP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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxRUFBZTtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDckQ7QUFDQSxZQUFZLDJFQUFrQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUJBQXFCLHNFQUE2QjtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMkVBQWtDO0FBQzNELFFBQVEseUVBQWdDOztBQUV4QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsd0VBQStCOztBQUUvQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9mb3Jtcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21pYW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGlueS1kYXRlLXBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90b2dnbGUtY2hlY2tib3gtcmFkaW8uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvZm9ybXMuY3NzP2ZjNWEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9saXN0LmNzcz85ZWJlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWlhbi5jc3M/MGU5ZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3RpbnktZGF0ZS1waWNrZXIuY3NzPzE4MjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90b2dnbGUtY2hlY2tib3gtcmFkaW8uY3NzPzJkMWEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdGlueS1kYXRlLXBpY2tlci9kaXN0L3RpbnktZGF0ZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHZhcigtLXRhc2stZ3JvdXAtdGl0bGUtY2xyKTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzUlO1xcbn1cXG5cXG5mb3JtIGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG5mb3JtIGxhYmVsLFxcbi50b2dnbGUtbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGNvbG9yOiAjMmMyYzJjO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvZ2dsZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWJ0bi1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZvcm0tYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTFDNDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQyNDI7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLmZvcm0tYnRuLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2NzhDO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uZm9ybS1idG4tY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogLjJyZW07XFxufVxcblxcbi5yZXF1aXJlZC10aXRsZSB7XFxuICAgIGNvbG9yOiAjMmMyYzJjO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGVsZXRlLWZvcm0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1mb3JtLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzByZW07XFxufVxcblxcblxcbi5kZWxldGUtZm9ybS1jb250YWluZXIgbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm1zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzByZW07XFxufVxcblxcbi5sZWdlbmQge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGFzay1ncm91cC10aXRsZS1jbHIpO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbmZvcm0gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbmZvcm0gbGFiZWwsXFxuLnRvZ2dsZS1sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC4zcmVtO1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgY29sb3I6ICMyYzJjMmM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tYnRuLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZm9ybS1idG4tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMUM0MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDI0MjtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uZm9ybS1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODY3OEM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5mb3JtLWJ0bi1jb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAuMnJlbTtcXG59XFxuXFxuLnJlcXVpcmVkLXRpdGxlIHtcXG4gICAgY29sb3I6ICMyYzJjMmM7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZWxldGUtZm9ybS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLWZvcm0tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG59XFxuXFxuXFxuLmRlbGV0ZS1mb3JtLWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcm9qZWN0LXRpdGxlLWNscjogI2ZmZjtcXG4gICAgLS10YXNrLWdyb3VwLXRpdGxlLWNscjogIzBEMDAwRDtcXG4gICAgLS10YXNrLWNhcmQtY2xyOiAjRTJFOUYxO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMFZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBub25lO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0LXRpdGxlLWNscik7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRhc2stZ3JvdXAtY29udGFpbmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRhc2stZ3JvdXAtdGl0bGUtY2xyKTtcXG4gICAgYm9yZGVyLWxlZnQ6IC41cmVtIHNvbGlkIHZhcigtLWZvb3Rlci1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xcbn1cXG5cXG4uaW1wb3J0YW50LXRhc2tzLWNvbnRhaW5lciBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgd2lkdGg6IDM1cmVtO1xcbiAgICBib3JkZXI6IC4ycmVtIHNvbGlkICM0MjQyNDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWNhcmQtY2xyKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTVweCAxcmVtIDJweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxNXB4IDFyZW0gMnB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDFyZW0gMnB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi5lZGl0LWJ0bixcXG4uZGVsZXRlLWJ0biB7XFxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2stY2FyZC1jbHIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10YXNrLWNhcmQtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLmVkaXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkM1NztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBEMDAwRDtcXG59XFxuXFxuLmRlbGV0ZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjIwRjM4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMEQwMDBEO1xcbn1cXG5cXG4uZWRpdC1idG46YWN0aXZlLFxcbi5kZWxldGUtYnRuOmFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAuMnJlbTtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmRlbGV0ZS1pbWcsIFxcbi5lZGl0LWltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmR1ZS1kYXRlLFxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZG9uZSxcXG4uZG9uZSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcbiAgICBvcGFjaXR5OiAuMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kb25lIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5kb25lIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XFxuICAgIG9wYWNpdHk6IC4zO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLCtDQUErQztJQUMvQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLHNEQUFzRDtJQUN0RCxtREFBbUQ7SUFDbkQsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJvamVjdC10aXRsZS1jbHI6ICNmZmY7XFxuICAgIC0tdGFzay1ncm91cC10aXRsZS1jbHI6ICMwRDAwMEQ7XFxuICAgIC0tdGFzay1jYXJkLWNscjogI0UyRTlGMTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XFxuICAgIGhlaWdodDogY2FsYygxMDBWaCAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogbm9uZTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC10aXRsZS1jbHIpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50YXNrLWdyb3VwLWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB2YXIoLS10YXNrLWdyb3VwLXRpdGxlLWNscik7XFxuICAgIGJvcmRlci1sZWZ0OiAuNXJlbSBzb2xpZCB2YXIoLS1mb290ZXItYmctY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgcGFkZGluZzogMCAuNXJlbTtcXG59XFxuXFxuLmltcG9ydGFudC10YXNrcy1jb250YWluZXIgaDIge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuICAgIHdpZHRoOiAzNXJlbTtcXG4gICAgYm9yZGVyOiAuMnJlbSBzb2xpZCAjNDI0MjQyO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1jYXJkLWNscik7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDE1cHggMXJlbSAycHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTVweCAxcmVtIDJweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxcmVtIDJweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uZWRpdC1idG4sXFxuLmRlbGV0ZS1idG4ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWNhcmQtY2xyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGFzay1jYXJkLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5lZGl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkJDNTc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwRDAwMEQ7XFxufVxcblxcbi5kZWxldGUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyMEYzODtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBEMDAwRDtcXG59XFxuXFxuLmVkaXQtYnRuOmFjdGl2ZSxcXG4uZGVsZXRlLWJ0bjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogLjJyZW07XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kZWxldGUtaW1nLCBcXG4uZWRpdC1pbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5kdWUtZGF0ZSxcXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmRvbmUsXFxuLmRvbmUgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXG4gICAgb3BhY2l0eTogLjM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZG9uZSBidXR0b24ge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZG9uZSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcbiAgICBvcGFjaXR5OiAuMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWZvb3Rlci1iZy1jb2xvcjogI0YyODMyMjtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiA1dmg7XFxuICAgIC0tbGlnaHQtZm9udC1jb2xvcjogI2ZmZjtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6ICM0MjQyNDI7XFxuICAgIC0tYmctY29sb3I6ICM0MTg0QkY7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogIzIyMDg1OTtcXG4gICAgLS10aXRsZS1jb2xvcjogI0YyMDU4NztcXG4gICAgLS1zaWRlYmFyLWJ0bi1jbHI6ICM3MTQ2NzQ7XFxuICAgIC0tc2lkZWJhci1idG4tY2xyLWRhcms6ICM0MzIzNzE7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjVyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JSAyNSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDRyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQYWxldHRlIE1vc2FpYycsIGN1cnNpdmU7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXNpZGViYXItYnRuLWNscikgNSUsIHZhcigtLXNpZGViYXItYnRuLWNsci1kYXJrKSAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJ0bi1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ1NlY3VsYXIgT25lJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXNpZGViYXItYnRuLWNsci1kYXJrKSA1JSwgdmFyKC0tc2lkZWJhci1idG4tY2xyKSAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJ0bi1jbHIpO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246YWN0aXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IC4ycmVtO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmaWx0ZXI6IGludmVydCg5OCUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoMjc4JSkgaHVlLXJvdGF0ZSgxNzFkZWcpIGJyaWdodG5lc3MoMTE4JSkgY29udHJhc3QoMTAwJSk7fVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuXFxuLnByb2otbmFtZSB7XFxuICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLW5hbWU6aG92ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ2l0aHViLWxpbmsge1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZ2l0aHViLWljb24ge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21pYW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsMENBQTBDO0lBQzFDLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0dBQWtHO0NBQ3JHLHdDQUF3QztJQUNyQyxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtHQUFrRztDQUNyRyx3Q0FBd0M7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdHQUFnRyxDQUFDOztBQUVyRztJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWZvb3Rlci1iZy1jb2xvcjogI0YyODMyMjtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiA1dmg7XFxuICAgIC0tbGlnaHQtZm9udC1jb2xvcjogI2ZmZjtcXG4gICAgLS1kYXJrLWZvbnQtY29sb3I6ICM0MjQyNDI7XFxuICAgIC0tYmctY29sb3I6ICM0MTg0QkY7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogIzIyMDg1OTtcXG4gICAgLS10aXRsZS1jb2xvcjogI0YyMDU4NztcXG4gICAgLS1zaWRlYmFyLWJ0bi1jbHI6ICM3MTQ2NzQ7XFxuICAgIC0tc2lkZWJhci1idG4tY2xyLWRhcms6ICM0MzIzNzE7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjVyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JSAyNSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDRyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQYWxldHRlIE1vc2FpYycsIGN1cnNpdmU7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXNpZGViYXItYnRuLWNscikgNSUsIHZhcigtLXNpZGViYXItYnRuLWNsci1kYXJrKSAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJ0bi1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ1NlY3VsYXIgT25lJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZm9udC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLXNpZGViYXItYnRuLWNsci1kYXJrKSA1JSwgdmFyKC0tc2lkZWJhci1idG4tY2xyKSAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJ0bi1jbHIpO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246YWN0aXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IC4ycmVtO1xcbn1cXG5cXG4uc2lkZWJhci1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmaWx0ZXI6IGludmVydCg5OCUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoMjc4JSkgaHVlLXJvdGF0ZSgxNzFkZWcpIGJyaWdodG5lc3MoMTE4JSkgY29udHJhc3QoMTAwJSk7fVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG59XFxuXFxuLnByb2otbmFtZSB7XFxuICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLW5hbWU6aG92ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ2l0aHViLWxpbmsge1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZ2l0aHViLWljb24ge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZHAtY2Fse2JvcmRlcjoxcHggc29saWQgI2YzZjRmNjtib3JkZXItcmFkaXVzOi4yNXJlbTtiYWNrZ3JvdW5kOiNmZmY7cG9zaXRpb246cmVsYXRpdmV9LmRwLWNhbDpmb2N1c3tvdXRsaW5lOm5vbmV9LmRwLWNhbCBidXR0b257Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czouMjVyZW19LmRwLWNhbCBidXR0b246YWN0aXZle2JhY2tncm91bmQ6IzNiODJmNjtjb2xvcjojZmZmfS5kcC1jYWwgaW5wdXQ6Zm9jdXMsLmRwLWNhbCBidXR0b246Zm9jdXN7b3V0bGluZTpub25lO2JveC1zaGFkb3c6MCAwIDAgM3B4ICM5M2M1ZmR9LmRwLWRheTpmb2N1c3tmb250LXdlaWdodDpib2xkfS5kcC1mbHlvdXR7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyMDt3aWR0aDoyOHJlbTttYXgtd2lkdGg6Y2FsYygxMDB2dyAtIDFyZW0pO2JveC1zaGFkb3c6LjI1cmVtIC4yNXJlbSAuNXJlbSAtLjM1cmVtICMwMDAwMDA3Zn0uZHAtbW9udGhze3dpZHRoOjkwJTttYXgtd2lkdGg6MzZyZW07cGFkZGluZzoxcmVtO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsMWZyKX0uZHAteWVhcnN7bWF4LWhlaWdodDoxMDAlO3BhZGRpbmc6LjI1cmVtO292ZXJmbG93OmF1dG8haW1wb3J0YW50fS5kcC1jYWwtbW9udGgsLmRwLWNhbC15ZWFyLC5kcC1kYXksLmRwLW1vbnRoLC5kcC15ZWFye2NvbG9yOiMzNzQxNTE7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uZHAtY2FsLWhlYWRlciwuZHAtY2FsLWhlYWRlci1wbGFjZWhvbGRlcntwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6My4yNXJlbTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmRwLWNhbC1oZWFkZXItcGxhY2Vob2xkZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDojZjlmYWZiO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmM2Y0ZjZ9LmRwLW5leHQsLmRwLXByZXZ7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6MDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjJyZW07d2lkdGg6MnJlbTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjowO3RvcDouNXJlbTtjb2xvcjojNmI3MjgwfS5kcC1uZXh0OmZvY3VzLC5kcC1wcmV2OmZvY3Vze291dGxpbmU6bm9uZTtjb2xvcjppbmhlcml0fS5kcC1wcmV2e2xlZnQ6LjVyZW19LmRwLW5leHR7cmlnaHQ6LjVyZW19LmRwLWNhbC1tb250aCwuZHAtY2FsLXllYXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjEuMjVyZW07cGFkZGluZzouNXJlbTtvdXRsaW5lOm5vbmV9LmRwLWNhbC1mb290ZXJ7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZjlmYWZifS5kcC1kYXlze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDcsMWZyKTtwYWRkaW5nOjFyZW0gLjVyZW19LmRwLWRheS10b2RheXtmb250LXdlaWdodDpib2xkO2NvbG9yOiMzYjgyZjZ9LmRwLWNvbC1oZWFkZXIsYnV0dG9uLmRwLWRheXt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6MTAwJTtoZWlnaHQ6MnJlbTt3aWR0aDoycmVtO2ZvbnQtc2l6ZTouODc1cmVtO21hcmdpbjouMjVyZW0gYXV0b30uZHAtY29sLWhlYWRlcntjb2xvcjojYWFhO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXdlaWdodDozMDA7Zm9udC1zaXplOi44ZW07cGFkZGluZzo4cHggMH0uZHAtbW9udGh7cGFkZGluZzouNXJlbTttYXJnaW46LjI1cmVtfS5kcC15ZWFye2Rpc3BsYXk6YmxvY2s7cGFkZGluZzo4cHggNDBweDt3aWR0aDoxMDAlO21hcmdpbjouMjVyZW0gMH0uZHAtZWRnZS1kYXl7Y29sb3I6I2FhYX0uZHAtZGF5OmZvY3VzLC5kcC1tb250aDpmb2N1cywuZHAteWVhcjpmb2N1c3tvdXRsaW5lOm5vbmV9LmRwLXNlbGVjdGVkOmZvY3VzLC5kcC1zZWxlY3RlZHtiYWNrZ3JvdW5kOiMzYjgyZjY7Y29sb3I6I2ZmZn0uZHAtZGF5LWRpc2FibGVke2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6I2RkZH0uZHAtZGF5LWRpc2FibGVkOmZvY3Vze2JhY2tncm91bmQ6I2RkZH0uZHAtYm9keS1uZXh0e2FuaW1hdGlvbjpzbGlkZS1pbi1sZWZ0IC4xNXMgZm9yd2FyZHN9LmRwLWJvZHktcHJldnthbmltYXRpb246c2xpZGUtaW4tcmlnaHQgLjE1cyBmb3J3YXJkc30uZHAtc3VibWVudXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO21heC1oZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZTVlN2ViO2JvcmRlci1yYWRpdXM6LjVyZW07ei1pbmRleDoxMDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7Ym94LXNoYWRvdzowIDAgMnJlbSAjMDAwMDAwNDB9Zm9vdGVyLmRwLXRpbWUtZm9vdGVye3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6I2Y5ZmFmYjtwYWRkaW5nOi41cmVtO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uZHAtYXBwbHksLmRwLWFtcG0sLmRwLXR4dC10aW1le3BhZGRpbmc6LjVyZW07Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjIuNXJlbTt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkICNlNWU3ZWI7Ym9yZGVyLXJhZGl1czouMjVyZW07bWFyZ2luOjAgLjI1cmVtfS5kcC1hcHBseSwuZHAtYW1wbXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5kcC1hbXBte3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uZHAtY2FsLW1vbnRoOmhvdmVyLC5kcC1jYWwteWVhcjpob3ZlciwuZHAtYXBwbHk6aG92ZXIsLmRwLWFtcG06aG92ZXJ7Ym9yZGVyLWNvbG9yOiMzYjgyZjY7YmFja2dyb3VuZDojM2I4MmY2O2NvbG9yOiNmZmZ9LmRwLWFwcGx5e3dpZHRoOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOi41cmVtO3JpZ2h0Oi41cmVtfUBrZXlmcmFtZXMgc2xpZGUtdXB7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDEwMCUpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX19QGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0ezAle29wYWNpdHk6LjU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcmVtKX10b3tvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX19QGtleWZyYW1lcyBzbGlkZS1pbi1yaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xcmVtKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKDApfX1AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpLChtYXgtaGVpZ2h0OiA0ODBweCl7LmRwLWZseW91dHttYXJnaW4tbGVmdDotLjVyZW19fVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGlueS1kYXRlLXBpY2tlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsUUFBUSx3QkFBd0IsQ0FBQyxvQkFBb0Is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XCJzb3VyY2VzQ29udGVudFwiOltcIi5kcC1jYWx7Ym9yZGVyOjFweCBzb2xpZCAjZjNmNGY2O2JvcmRlci1yYWRpdXM6LjI1cmVtO2JhY2tncm91bmQ6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZX0uZHAtY2FsOmZvY3Vze291dGxpbmU6bm9uZX0uZHAtY2FsIGJ1dHRvbntjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOi4yNXJlbX0uZHAtY2FsIGJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDojM2I4MmY2O2NvbG9yOiNmZmZ9LmRwLWNhbCBpbnB1dDpmb2N1cywuZHAtY2FsIGJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAzcHggIzkzYzVmZH0uZHAtZGF5OmZvY3Vze2ZvbnQtd2VpZ2h0OmJvbGR9LmRwLWZseW91dHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjIwO3dpZHRoOjI4cmVtO21heC13aWR0aDpjYWxjKDEwMHZ3IC0gMXJlbSk7Ym94LXNoYWRvdzouMjVyZW0gLjI1cmVtIC41cmVtIC0uMzVyZW0gIzAwMDAwMDdmfS5kcC1tb250aHN7d2lkdGg6OTAlO21heC13aWR0aDozNnJlbTtwYWRkaW5nOjFyZW07ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMywxZnIpfS5kcC15ZWFyc3ttYXgtaGVpZ2h0OjEwMCU7cGFkZGluZzouMjVyZW07b3ZlcmZsb3c6YXV0byFpbXBvcnRhbnR9LmRwLWNhbC1tb250aCwuZHAtY2FsLXllYXIsLmRwLWRheSwuZHAtbW9udGgsLmRwLXllYXJ7Y29sb3I6IzM3NDE1MTtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5kcC1jYWwtaGVhZGVyLC5kcC1jYWwtaGVhZGVyLXBsYWNlaG9sZGVye3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDozLjI1cmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uZHAtY2FsLWhlYWRlci1wbGFjZWhvbGRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmOWZhZmI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YzZjRmNn0uZHAtbmV4dCwuZHAtcHJldntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7Zm9udC1zaXplOjEuNXJlbTtsaW5lLWhlaWdodDowO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6MnJlbTt3aWR0aDoycmVtO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjA7dG9wOi41cmVtO2NvbG9yOiM2YjcyODB9LmRwLW5leHQ6Zm9jdXMsLmRwLXByZXY6Zm9jdXN7b3V0bGluZTpub25lO2NvbG9yOmluaGVyaXR9LmRwLXByZXZ7bGVmdDouNXJlbX0uZHAtbmV4dHtyaWdodDouNXJlbX0uZHAtY2FsLW1vbnRoLC5kcC1jYWwteWVhcntkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MS4yNXJlbTtwYWRkaW5nOi41cmVtO291dGxpbmU6bm9uZX0uZHAtY2FsLWZvb3Rlcnt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmOWZhZmJ9LmRwLWRheXN7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNywxZnIpO3BhZGRpbmc6MXJlbSAuNXJlbX0uZHAtZGF5LXRvZGF5e2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzNiODJmNn0uZHAtY29sLWhlYWRlcixidXR0b24uZHAtZGF5e3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czoxMDAlO2hlaWdodDoycmVtO3dpZHRoOjJyZW07Zm9udC1zaXplOi44NzVyZW07bWFyZ2luOi4yNXJlbSBhdXRvfS5kcC1jb2wtaGVhZGVye2NvbG9yOiNhYWE7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6LjhlbTtwYWRkaW5nOjhweCAwfS5kcC1tb250aHtwYWRkaW5nOi41cmVtO21hcmdpbjouMjVyZW19LmRwLXllYXJ7ZGlzcGxheTpibG9jaztwYWRkaW5nOjhweCA0MHB4O3dpZHRoOjEwMCU7bWFyZ2luOi4yNXJlbSAwfS5kcC1lZGdlLWRheXtjb2xvcjojYWFhfS5kcC1kYXk6Zm9jdXMsLmRwLW1vbnRoOmZvY3VzLC5kcC15ZWFyOmZvY3Vze291dGxpbmU6bm9uZX0uZHAtc2VsZWN0ZWQ6Zm9jdXMsLmRwLXNlbGVjdGVke2JhY2tncm91bmQ6IzNiODJmNjtjb2xvcjojZmZmfS5kcC1kYXktZGlzYWJsZWR7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjojZGRkfS5kcC1kYXktZGlzYWJsZWQ6Zm9jdXN7YmFja2dyb3VuZDojZGRkfS5kcC1ib2R5LW5leHR7YW5pbWF0aW9uOnNsaWRlLWluLWxlZnQgLjE1cyBmb3J3YXJkc30uZHAtYm9keS1wcmV2e2FuaW1hdGlvbjpzbGlkZS1pbi1yaWdodCAuMTVzIGZvcndhcmRzfS5kcC1zdWJtZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7bWF4LWhlaWdodDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNlNWU3ZWI7Ym9yZGVyLXJhZGl1czouNXJlbTt6LWluZGV4OjEwO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtib3gtc2hhZG93OjAgMCAycmVtICMwMDAwMDA0MH1mb290ZXIuZHAtdGltZS1mb290ZXJ7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDojZjlmYWZiO3BhZGRpbmc6LjVyZW07ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5kcC1hcHBseSwuZHAtYW1wbSwuZHAtdHh0LXRpbWV7cGFkZGluZzouNXJlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6Mi41cmVtO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjoxcHggc29saWQgI2U1ZTdlYjtib3JkZXItcmFkaXVzOi4yNXJlbTttYXJnaW46MCAuMjVyZW19LmRwLWFwcGx5LC5kcC1hbXBte2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmRwLWFtcG17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5kcC1jYWwtbW9udGg6aG92ZXIsLmRwLWNhbC15ZWFyOmhvdmVyLC5kcC1hcHBseTpob3ZlciwuZHAtYW1wbTpob3Zlcntib3JkZXItY29sb3I6IzNiODJmNjtiYWNrZ3JvdW5kOiMzYjgyZjY7Y29sb3I6I2ZmZn0uZHAtYXBwbHl7d2lkdGg6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LjVyZW07cmlnaHQ6LjVyZW19QGtleWZyYW1lcyBzbGlkZS11cHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMTAwJSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfX1Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnR7MCV7b3BhY2l0eTouNTt0cmFuc2Zvcm06dHJhbnNsYXRlKDFyZW0pfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfX1Aa2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFyZW0pfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9fUBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCksKG1heC1oZWlnaHQ6IDQ4MHB4KXsuZHAtZmx5b3V0e21hcmdpbi1sZWZ0Oi0uNXJlbX19XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuICogdG9nZ2xlLWNoZWNrYm94LXJhZGlvIHYyLjAuMiAoaHR0cHM6Ly9hbGV4ZG9uaC5naXRodWIuaW8vdG9nZ2xlLWNoZWNrYm94LXJhZGlvLylcXG4gKlxcbiAqIENvcHlyaWdodCAyMDE4IEFsZXggRG9cXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZG9uaC90b2dnbGUtY2hlY2tib3gtcmFkaW8vYmxvYi9tYXN0ZXIvTElDRU5TRSlcXG4gKi9cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUsXFxuaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IC4xcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAyLjI1cmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiAycHggI2NlZDRkYSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpiZWZvcmUsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTphZnRlcixcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuZGlzYWJsZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpkaXNhYmxlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5kaXNhYmxlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZTpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zcXVhcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtc3F1YXJlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtc3F1YXJlOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNxdWFyZTpiZWZvcmUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDAuNzVyZW07XFxuICAgIGhlaWdodDogMC43NXJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgbGVmdDogMS4yNXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIHRvcDogLjEyNXJlbTtcXG4gICAgbGVmdDogLjI1cmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgbGVmdDogMS4yNXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW1hdGVyaWFsLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLW1hdGVyaWFsIHtcXG4gICAgbWFyZ2luOiAuMjc1ZW0gLjE3NXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbWF0ZXJpYWw6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbWF0ZXJpYWw6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMS4zMjVyZW07XFxuICAgICAgaGVpZ2h0OiAxLjMyNXJlbTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBsZWZ0OiAtLjMyNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgbGVmdDogMXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmhhcy1hbmltYXRpb24sXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaGFzLWFuaW1hdGlvbiB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2U7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmhhcy1hbmltYXRpb246YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaGFzLWFuaW1hdGlvbjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IGxlZnQgLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2U7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzQ5NTA1NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk0OWRhNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0OWRhNTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW91dGxpbmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNzg4MzhlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg4MzhlOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItcHJpbWFyeTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItcHJpbWFyeTpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItcHJpbWFyeTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXByaW1hcnk6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnkuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnk6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItcHJpbWFyeTpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTljYWZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTljYWZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItcHJpbWFyeS5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnkuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM2NmIwZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmIwZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnkuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnk6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXNlY29uZGFyeTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXNlY29uZGFyeTpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnk6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnkuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnk6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc3VjY2VzczpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc3VjY2VzczpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc3VjY2VzczpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXN1Y2Nlc3M6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3M6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc3VjY2VzczpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODZlMjliO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZlMjliOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc3VjY2Vzcy5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM1ZGQ4Nzk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGQ4Nzk7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItaW5mbzpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItaW5mbzpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItaW5mbzpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWluZm86Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzE3YTJiODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm8uZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm86ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1pbmZvLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItaW5mbzpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2FkZWVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FkZWVlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItaW5mby5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWluZm8uaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm8uaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWluZm8uaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm8uaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0Y2QzZTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2QzZTk7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm8uaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itd2FybmluZzpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itd2FybmluZzpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itd2FybmluZzpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXdhcm5pbmc6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmcuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmc6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci13YXJuaW5nLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itd2FybmluZzpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlN2EwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlN2EwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itd2FybmluZy5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmcuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmRiNmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiNmQ7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmcuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFuZ2VyOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXI6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhbmdlcjpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhbmdlcjpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFuZ2VyLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYW5nZXI6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXIuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXI6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2YzYjdiZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzYjdiZDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFuZ2VyLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhbmdlci5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhbmdlci5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWI4Yzk1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI4Yzk1OyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1saWdodDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItbGlnaHQ6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWxpZ2h0OmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItbGlnaHQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2U5ZWNlZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWxpZ2h0LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1saWdodDpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWxpZ2h0LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItbGlnaHQ6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItbGlnaHQuaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1saWdodC5pcy1vdXRsaW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItbGlnaHQuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWxpZ2h0LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1saWdodC5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWxpZ2h0LmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItbGlnaHQuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1saWdodC5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhcms6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhcms6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhcms6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYXJrOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzNDNhNDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFyay5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhcms6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzdhODc5MztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhODc5MzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhcmsuaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYXJrLmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYXJrLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFyay5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNjI2ZDc4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2ZDc4OyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFyay5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLXNtYWxsLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNtYWxsIHtcXG4gICAgd2lkdGg6IDEuOTY4NzVyZW07XFxuICAgIGhlaWdodDogMC44NzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuODc1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zbWFsbDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zbWFsbDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAwLjYyNXJlbTtcXG4gICAgICBoZWlnaHQ6IDAuNjI1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zbWFsbDpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNtYWxsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAxLjA5Mzc1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zbWFsbC5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNtYWxsLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMC4zNzVyZW07XFxuICAgICAgaGVpZ2h0OiAwLjM3NXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtc21hbGwuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNtYWxsLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDEuMDkzNzVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLXNtYWxsLmlzLW1hdGVyaWFsOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNtYWxsLmlzLW1hdGVyaWFsOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEuMTI1cmVtO1xcbiAgICAgIGhlaWdodDogMS4xMjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLXNtYWxsLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtc21hbGwuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDAuODQzNzVyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1sYXJnZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1sYXJnZSB7XFxuICAgIHdpZHRoOiAyLjgxMjVyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbGFyZ2U6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2U6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMXJlbTtcXG4gICAgICBoZWlnaHQ6IDFyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLWxhcmdlOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2U6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDEuNTYyNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbGFyZ2UuaXMtb3V0bGluZTpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1sYXJnZS5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDAuNzVyZW07XFxuICAgICAgaGVpZ2h0OiAwLjc1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1sYXJnZS5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2UuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgbGVmdDogMS41NjI1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1sYXJnZS5pcy1tYXRlcmlhbDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1sYXJnZS5pcy1tYXRlcmlhbDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLWxhcmdlLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2UuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDEuMzEyNXJlbTsgfVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LFxcbmlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IC4xcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiAycHggI2NlZDRkYSBzb2xpZDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3g6YmVmb3JlLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveDphZnRlcixcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guZGlzYWJsZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmRpc2FibGVkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guZGlzYWJsZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmFjdGl2ZSwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3g6Zm9jdXMsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDphY3RpdmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3g6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMi41JTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmNoZWNrZWQ6YmVmb3JlLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1ob3ZlcmFibGU6aG92ZXI6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3g6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1ob3ZlcmFibGU6aG92ZXI6YmVmb3JlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgcmlnaHQ6IDJweDtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGhlaWdodDogNDAlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1vdXRsaW5lOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1vdXRsaW5lOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1tYXRlcmlhbDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1tYXRlcmlhbDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBpbml0aWFsO1xcbiAgICBjb250ZW50OiB1bnNldDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtcm91bmRlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmlzLXJvdW5kZWQge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1jaXJjbGUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1jaXJjbGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmlzLXNxdWFyZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmlzLXNxdWFyZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDEyLjUlLCAtMTIuNSUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDEyLjUlLCAtMTIuNSUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5oYXMtYW5pbWF0aW9uOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94Lmhhcy1hbmltYXRpb246YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTY1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTY1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgb3BhY2l0eSAuMnMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLCBvcGFjaXR5IC4ycyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaGFzLWFuaW1hdGlvbjpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94Lmhhcy1hbmltYXRpb246Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaGFzLWFuaW1hdGlvbi5pcy1tYXRlcmlhbCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94Lmhhcy1hbmltYXRpb24uaXMtbWF0ZXJpYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjJzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIGhlaWdodCAuMnMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLCBoZWlnaHQgLjJzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNiMGI2YmM7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3g6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0OTUwNTc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3g6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk0OWRhNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0OWRhNTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzQ5NTA1NzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItcHJpbWFyeS5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1wcmltYXJ5LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2NjZTVmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItcHJpbWFyeTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1wcmltYXJ5OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItcHJpbWFyeTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItcHJpbWFyeTpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1wcmltYXJ5LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXByaW1hcnk6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXByaW1hcnkuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXByaW1hcnk6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk5Y2FmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5Y2FmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItcHJpbWFyeS5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeS5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnkuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeS5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnk6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeS5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zdWNjZXNzLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3MuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWZlY2JkOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zdWNjZXNzOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zdWNjZXNzOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1zdWNjZXNzOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3MuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc3VjY2VzczpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc3VjY2Vzcy5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc3VjY2VzczpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODZlMjliO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZlMjliOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc3VjY2Vzcy5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItaW5mby5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1pbmZvLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2E3ZTlmNDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItaW5mbzpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1pbmZvOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItaW5mbzpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItaW5mbzpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1pbmZvLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWluZm86ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWluZm8uZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWluZm86ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzdhZGVlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhZGVlZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItaW5mby5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWluZm8uaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXdhcm5pbmcuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itd2FybmluZy5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY0ZDM7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXdhcm5pbmc6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itd2FybmluZzpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXdhcm5pbmc6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXdhcm5pbmc6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itd2FybmluZy5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci13YXJuaW5nOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci13YXJuaW5nLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci13YXJuaW5nOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmU3YTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU3YTA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYW5nZXIuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFuZ2VyLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZhZTNlNTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItZGFuZ2VyOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhbmdlcjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhbmdlcjpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFuZ2VyOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhbmdlci5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYW5nZXI6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhbmdlci5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFuZ2VyOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmM2I3YmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2I3YmQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItbGlnaHQuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItbGlnaHQuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItbGlnaHQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItbGlnaHQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1saWdodDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItbGlnaHQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2U5ZWNlZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItbGlnaHQuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItbGlnaHQ6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWxpZ2h0LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1saWdodDpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWxpZ2h0LmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItbGlnaHQuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhcmsuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFyay5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICM5NmEwYWE7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhcms6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFyazpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhcms6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhcms6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItZGFyay5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYXJrOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYXJrLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYXJrOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM3YTg3OTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTg3OTM7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhcmsuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYXJrLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1zbWFsbCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmlzLXNtYWxsIHtcXG4gICAgd2lkdGg6IDAuODc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuODc1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmlzLXNtYWxsLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmlzLXNtYWxsLmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICAgIGhlaWdodDogMC40Mzc1cmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1sYXJnZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmlzLWxhcmdlIHtcXG4gICAgd2lkdGg6IDEuMjVyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1sYXJnZS5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1sYXJnZS5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgICBoZWlnaHQ6IDAuNjI1cmVtOyB9XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8sXFxuaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLjFyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6IDJweCAjY2VkNGRhIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpbzpiZWZvcmUsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvOmFmdGVyLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW86YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW86YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5kaXNhYmxlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86ZGlzYWJsZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5kaXNhYmxlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86YWN0aXZlLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpbzpmb2N1cyxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmFjdGl2ZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW86YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0b3A6IC4xMjVyZW07XFxuICAgIGJvdHRvbTogLjEyNXJlbTtcXG4gICAgbGVmdDogLjEyNXJlbTtcXG4gICAgcmlnaHQ6IC4xMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86Y2hlY2tlZDpiZWZvcmUsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLWhvdmVyYWJsZTpob3ZlcjpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLWhvdmVyYWJsZTpob3ZlcjpiZWZvcmUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1vdXRsaW5lOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1vdXRsaW5lOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgdG9wOiAuMTg3NXJlbTtcXG4gICAgYm90dG9tOiAuMTg3NXJlbTtcXG4gICAgbGVmdDogLjE4NzVyZW07XFxuICAgIHJpZ2h0OiAuMTg3NXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtbWF0ZXJpYWw6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtbWF0ZXJpYWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogaW5pdGlhbDtcXG4gICAgY29udGVudDogdW5zZXQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLXJvdW5kZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1yb3VuZGVkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtcm91bmRlZDpiZWZvcmUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLWNpcmNsZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLWNpcmNsZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1jaXJjbGU6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1jaXJjbGU6YmVmb3JlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLXNxdWFyZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLXNxdWFyZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtc3F1YXJlOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtc3F1YXJlOmJlZm9yZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaGFzLWFuaW1hdGlvbjpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5oYXMtYW5pbWF0aW9uOmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgb3BhY2l0eSAuMnMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLCBvcGFjaXR5IC4ycyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaGFzLWFuaW1hdGlvbjpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmhhcy1hbmltYXRpb246Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmhhcy1hbmltYXRpb24uaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmhhcy1hbmltYXRpb24uaXMtbWF0ZXJpYWw6Y2hlY2tlZCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByYWRpby16b29tLWluIC4zcyBib3RoO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcmFkaW8tem9vbS1pbiAuM3MgYm90aDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjBiNmJjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiNmJjOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpbzpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpbzpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5NDlkYTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDlkYTU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICM0OTUwNTc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItcHJpbWFyeS5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1wcmltYXJ5LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2NjZTVmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZTVmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItcHJpbWFyeTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1wcmltYXJ5OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItcHJpbWFyeTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItcHJpbWFyeTpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1wcmltYXJ5LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXByaW1hcnk6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXByaW1hcnkuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXByaW1hcnk6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk5Y2FmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5Y2FmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItcHJpbWFyeS5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXNlY29uZGFyeS5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnkuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXNlY29uZGFyeTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zZWNvbmRhcnk6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXNlY29uZGFyeTpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zZWNvbmRhcnkuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc2Vjb25kYXJ5OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnkuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXNlY29uZGFyeTpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXN1Y2Nlc3MuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc3VjY2Vzcy5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNhZmVjYmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmVjYmQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXN1Y2Nlc3M6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc3VjY2VzczpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXN1Y2Nlc3M6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXN1Y2Nlc3M6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc3VjY2Vzcy5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zdWNjZXNzOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zdWNjZXNzLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zdWNjZXNzOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM4NmUyOWI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NmUyOWI7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXN1Y2Nlc3MuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1pbmZvLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWluZm8uaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTdlOWY0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdlOWY0OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1pbmZvOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWluZm86YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1pbmZvOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1pbmZvOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWluZm8uZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItaW5mbzpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItaW5mby5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItaW5mbzpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2FkZWVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FkZWVlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1pbmZvLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItaW5mby5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzE3YTJiODsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItaW5mby5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItaW5mby5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itd2FybmluZy5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci13YXJuaW5nLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjRkMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjRkMzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itd2FybmluZzpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci13YXJuaW5nOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itd2FybmluZzpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itd2FybmluZzpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci13YXJuaW5nLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXdhcm5pbmc6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXdhcm5pbmcuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXdhcm5pbmc6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZTdhMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTdhMDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itd2FybmluZy5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhbmdlci5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYW5nZXIuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmFlM2U1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlM2U1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYW5nZXI6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFuZ2VyOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFuZ2VyOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYW5nZXI6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFuZ2VyLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhbmdlcjpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFuZ2VyLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYW5nZXI6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2YzYjdiZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzYjdiZDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFuZ2VyLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFuZ2VyLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYW5nZXIuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItbGlnaHQuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItbGlnaHQuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWxpZ2h0OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWxpZ2h0OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItbGlnaHQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWxpZ2h0OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWxpZ2h0LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWxpZ2h0OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1saWdodC5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItbGlnaHQ6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1saWdodC5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWxpZ2h0LmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTllY2VmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1saWdodC5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItbGlnaHQuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhcmsuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFyay5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICM5NmEwYWE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NmEwYWE7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhcms6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFyazpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhcms6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhcms6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFyay5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYXJrOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYXJrLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYXJrOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM3YTg3OTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTg3OTM7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhcmsuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYXJrLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYXJrLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYXJrLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1zbWFsbCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLXNtYWxsIHtcXG4gICAgd2lkdGg6IDAuODc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuODc1cmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1sYXJnZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLWxhcmdlIHtcXG4gICAgd2lkdGg6IDEuMjVyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByYWRpby16b29tLWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgcmFkaW8tem9vbS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD10b2dnbGUtY2hlY2tib3gtcmFkaW8uY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdG9nZ2xlLWNoZWNrYm94LXJhZGlvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7RUFLRTs7QUFFRjs7RUFFRSx3QkFBd0I7S0FDckIscUJBQXFCO1VBQ2hCLGdCQUFnQjtFQUN4QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFFO0VBQ3JCOzs7SUFHRSxzQkFBc0IsRUFBRTtFQUMxQjs7O0lBR0UsbUJBQW1CLEVBQUU7RUFDdkI7O0lBRUUsZ0JBQWdCLEVBQUU7SUFDbEI7O01BRUUsZ0JBQWdCLEVBQUU7RUFDdEI7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGdEQUFnRCxFQUFFO0VBQ3BEOztJQUVFLGFBQWEsRUFBRTtFQUNqQjs7SUFFRSxhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZLEVBQUU7RUFDaEI7O0lBRUUsYUFBYSxFQUFFO0VBQ2pCOztJQUVFLHNCQUFzQixFQUFFO0lBQ3hCOztNQUVFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsUUFBUTtNQUNSLG1DQUFtQztjQUMzQiwyQkFBMkI7TUFDbkMsY0FBYyxFQUFFO0lBQ2xCOztNQUVFLFVBQVUsRUFBRTtFQUNoQjs7SUFFRSxxQ0FBcUMsRUFBRTtJQUN2Qzs7TUFFRSxvREFBb0QsRUFBRTtFQUMxRDs7SUFFRSxzQkFBc0IsRUFBRTtFQUMxQjs7SUFFRSxxQkFBcUI7SUFDckIseUJBQXlCLEVBQUU7RUFDN0I7OztJQUdFLHFCQUFxQjtJQUNyQix5QkFBeUIsRUFBRTtFQUM3Qjs7SUFF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RWxCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YseUNBQXlDO1lBQ2pDLGlDQUFpQyxFQUFFO0VBQzdDO0lBQ0UsVUFBVSxFQUFFLEVBQUU7QUFDbEIsb0RBQW9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIVxcbiAqIHRvZ2dsZS1jaGVja2JveC1yYWRpbyB2Mi4wLjIgKGh0dHBzOi8vYWxleGRvbmguZ2l0aHViLmlvL3RvZ2dsZS1jaGVja2JveC1yYWRpby8pXFxuICpcXG4gKiBDb3B5cmlnaHQgMjAxOCBBbGV4IERvXFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vYWxleGRvbmgvdG9nZ2xlLWNoZWNrYm94LXJhZGlvL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXFxuICovXFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLFxcbmlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAuMXJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMi4yNXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlcjogMnB4ICNjZWQ0ZGEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGU6YmVmb3JlLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGU6YWZ0ZXIsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmRpc2FibGVkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGU6ZGlzYWJsZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuZGlzYWJsZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGU6ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtc3F1YXJlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNxdWFyZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLXNxdWFyZTpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zcXVhcmU6YmVmb3JlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwLjc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuNzVyZW07XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGxlZnQ6IDEuMjVyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICB0b3A6IC4xMjVyZW07XFxuICAgIGxlZnQ6IC4yNXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGxlZnQ6IDEuMjVyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1tYXRlcmlhbCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1tYXRlcmlhbCB7XFxuICAgIG1hcmdpbjogLjI3NWVtIC4xNzVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW1hdGVyaWFsOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLW1hdGVyaWFsOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEuMzI1cmVtO1xcbiAgICAgIGhlaWdodDogMS4zMjVyZW07XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgbGVmdDogLS4zMjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDFyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5oYXMtYW5pbWF0aW9uLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmhhcy1hbmltYXRpb24ge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5oYXMtYW5pbWF0aW9uOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmhhcy1hbmltYXRpb246YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0OTUwNTc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGU6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5NDlkYTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDlkYTU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbWF0ZXJpYWw6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzc4ODM4ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4ODM4ZTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXByaW1hcnk6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnk6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1wcmltYXJ5OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1wcmltYXJ5OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItcHJpbWFyeS5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXByaW1hcnk6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk5Y2FmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5Y2FmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItcHJpbWFyeS5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNjZiMGZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiMGZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1wcmltYXJ5LmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItcHJpbWFyeS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXNlY29uZGFyeTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnk6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnk6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zZWNvbmRhcnkuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXNlY29uZGFyeS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3M6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3M6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zdWNjZXNzOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zdWNjZXNzOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc3VjY2Vzcy5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXN1Y2Nlc3M6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzg2ZTI5YjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZTI5YjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXN1Y2Nlc3MuaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc3VjY2Vzcy5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNWRkODc5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkODc5OyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1zdWNjZXNzLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itc3VjY2Vzcy5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm86YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWluZm86YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm86Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1pbmZvOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1pbmZvLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1pbmZvOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItaW5mby5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWluZm86ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzdhZGVlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhZGVlZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWluZm8uaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItaW5mby5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNGNkM2U5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkM2U5OyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1pbmZvLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItaW5mby5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmc6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXdhcm5pbmc6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmc6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci13YXJuaW5nOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci13YXJuaW5nLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci13YXJuaW5nOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itd2FybmluZy5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLXdhcm5pbmc6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZTdhMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTdhMDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW91dGxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itd2FybmluZy5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkYjZkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYjZkOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci13YXJuaW5nLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3Itd2FybmluZy5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhbmdlcjpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFuZ2VyOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYW5nZXI6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXI6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhbmdlci5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFuZ2VyOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFuZ2VyLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFuZ2VyOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmM2I3YmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2I3YmQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtb3V0bGluZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFuZ2VyLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYW5nZXIuaXMtbWF0ZXJpYWw6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ViOGM5NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViOGM5NTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFuZ2VyLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFuZ2VyLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItbGlnaHQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWxpZ2h0OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1saWdodDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWxpZ2h0OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1saWdodC5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItbGlnaHQ6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1saWdodC5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWxpZ2h0OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWxpZ2h0LmlzLW91dGxpbmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItbGlnaHQuaXMtb3V0bGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWxpZ2h0LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1saWdodC5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItbGlnaHQuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1saWdodC5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmNvbG9yLWxpZ2h0LmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItbGlnaHQuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYXJrOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFyazpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFyay5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFyazpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhcmsuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5jb2xvci1kYXJrOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM3YTg3OTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTg3OTM7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5jb2xvci1kYXJrLmlzLW91dGxpbmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFyay5pcy1vdXRsaW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFyay5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuY29sb3ItZGFyay5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFyay5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhcmsuaXMtbWF0ZXJpYWw6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzYyNmQ3ODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNmQ3ODsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuY29sb3ItZGFyay5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmNvbG9yLWRhcmsuaXMtbWF0ZXJpYWw6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zbWFsbCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zbWFsbCB7XFxuICAgIHdpZHRoOiAxLjk2ODc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuODc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjg3NXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtc21hbGw6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtc21hbGw6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMC42MjVyZW07XFxuICAgICAgaGVpZ2h0OiAwLjYyNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtc21hbGw6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zbWFsbDpjaGVja2VkOmJlZm9yZSB7XFxuICAgICAgbGVmdDogMS4wOTM3NXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtc21hbGwuaXMtb3V0bGluZTpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zbWFsbC5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDAuMzc1cmVtO1xcbiAgICAgIGhlaWdodDogMC4zNzVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLXNtYWxsLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zbWFsbC5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAxLjA5Mzc1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zbWFsbC5pcy1tYXRlcmlhbDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnRvZ2dsZS5pcy1zbWFsbC5pcy1tYXRlcmlhbDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxLjEyNXJlbTtcXG4gICAgICBoZWlnaHQ6IDEuMTI1cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1zbWFsbC5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLXNtYWxsLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAwLjg0Mzc1cmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbGFyZ2UsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2Uge1xcbiAgICB3aWR0aDogMi44MTI1cmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLWxhcmdlOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLWxhcmdlOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgaGVpZ2h0OiAxcmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1sYXJnZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLWxhcmdlOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAxLjU2MjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0udG9nZ2xlLmlzLWxhcmdlLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2UuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAwLjc1cmVtO1xcbiAgICAgIGhlaWdodDogMC43NXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbGFyZ2UuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLWxhcmdlLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDEuNTYyNXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS50b2dnbGUuaXMtbGFyZ2UuaXMtbWF0ZXJpYWw6YmVmb3JlLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS50b2dnbGUuaXMtbGFyZ2UuaXMtbWF0ZXJpYWw6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgIGhlaWdodDogMS41cmVtOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnRvZ2dsZS5pcy1sYXJnZS5pcy1tYXRlcmlhbDpjaGVja2VkOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10udG9nZ2xlLmlzLWxhcmdlLmlzLW1hdGVyaWFsOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAxLjMxMjVyZW07IH1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveCxcXG5pbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAuMXJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlcjogMnB4ICNjZWQ0ZGEgc29saWQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmJlZm9yZSwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3g6YWZ0ZXIsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmRpc2FibGVkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveDpkaXNhYmxlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmRpc2FibGVkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3g6ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveDphY3RpdmUsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmZvY3VzLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3g6YWN0aXZlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3g6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTIuNSU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveDpjaGVja2VkOmJlZm9yZSwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtaG92ZXJhYmxlOmhvdmVyOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtaG92ZXJhYmxlOmhvdmVyOmJlZm9yZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBsZWZ0OiAycHg7XFxuICAgIHJpZ2h0OiAycHg7XFxuICAgIHRvcDogMjAlO1xcbiAgICBoZWlnaHQ6IDQwJTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtb3V0bGluZTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtb3V0bGluZTpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtbWF0ZXJpYWw6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtbWF0ZXJpYWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogaW5pdGlhbDtcXG4gICAgY29udGVudDogdW5zZXQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmlzLXJvdW5kZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtY2lyY2xlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtY2lyY2xlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1zcXVhcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1zcXVhcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtbWF0ZXJpYWw6Y2hlY2tlZCB7XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgxMi41JSwgLTEyLjUlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgxMi41JSwgLTEyLjUlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaGFzLWFuaW1hdGlvbjpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5oYXMtYW5pbWF0aW9uOmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTE2NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTE2NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIG9wYWNpdHkgLjJzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgb3BhY2l0eSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94Lmhhcy1hbmltYXRpb246Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5oYXMtYW5pbWF0aW9uOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94Lmhhcy1hbmltYXRpb24uaXMtbWF0ZXJpYWwsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5oYXMtYW5pbWF0aW9uLmlzLW1hdGVyaWFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4ycyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLCBoZWlnaHQgLjJzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgaGVpZ2h0IC4ycyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjBiNmJjOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94OmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDk1MDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveDpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5NDlkYTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDlkYTU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICM0OTUwNTc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXByaW1hcnkuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItcHJpbWFyeS5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNjY2U1ZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXByaW1hcnk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItcHJpbWFyeTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXByaW1hcnk6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXByaW1hcnk6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItcHJpbWFyeS5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1wcmltYXJ5OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1wcmltYXJ5LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1wcmltYXJ5OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5OWNhZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OWNhZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnkuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnk6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeTpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnkuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc2Vjb25kYXJ5OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1zZWNvbmRhcnkuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeTpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc3VjY2Vzcy5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1zdWNjZXNzLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2FmZWNiZDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc3VjY2VzczpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1zdWNjZXNzOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc3VjY2VzczpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itc3VjY2VzczpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1zdWNjZXNzLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3M6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3MuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3M6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzg2ZTI5YjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZTI5YjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itc3VjY2Vzcy5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXN1Y2Nlc3MuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWluZm8uaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItaW5mby5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNhN2U5ZjQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWluZm86YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItaW5mbzpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWluZm86Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWluZm86Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzE3YTJiODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItaW5mby5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1pbmZvOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1pbmZvLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1pbmZvOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM3YWRlZWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YWRlZWU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWluZm8uaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1pbmZvLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci13YXJuaW5nLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXdhcm5pbmcuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmNGQzOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci13YXJuaW5nOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLXdhcm5pbmc6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci13YXJuaW5nOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci13YXJuaW5nOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLXdhcm5pbmcuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3Itd2FybmluZzpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itd2FybmluZy5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itd2FybmluZzpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlN2EwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlN2EwOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3Itd2FybmluZy5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItZGFuZ2VyLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhbmdlci5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmYWUzZTU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhbmdlcjpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYW5nZXI6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYW5nZXI6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhbmdlcjpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYW5nZXIuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItZGFuZ2VyOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYW5nZXIuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhbmdlcjpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjNiN2JkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNiN2JkOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYW5nZXIuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYW5nZXIuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWxpZ2h0LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWxpZ2h0LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWxpZ2h0OmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWxpZ2h0OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItbGlnaHQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWxpZ2h0OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWxpZ2h0LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWxpZ2h0OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1saWdodC5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItbGlnaHQ6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1saWdodC5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWxpZ2h0LmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTllY2VmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYXJrLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhcmsuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTZhMGFhOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYXJrOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLmNoZWNrYm94LmNvbG9yLWRhcms6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYXJrOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5jb2xvci1kYXJrOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzNDNhNDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLmNoZWNrYm94LmNvbG9yLWRhcmsuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guY29sb3ItZGFyazpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFyay5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFyazpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2E4NzkzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E4NzkzOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5jb2xvci1kYXJrLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guY29sb3ItZGFyay5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM0M2E0MDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtc21hbGwsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1zbWFsbCB7XFxuICAgIHdpZHRoOiAwLjg3NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjg3NXJlbTsgfVxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XS5jaGVja2JveC5pcy1zbWFsbC5pcy1tYXRlcmlhbDpjaGVja2VkLFxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1zbWFsbC5pcy1tYXRlcmlhbDpjaGVja2VkIHtcXG4gICAgICBoZWlnaHQ6IDAuNDM3NXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtbGFyZ2UsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5jaGVja2JveC5pcy1sYXJnZSB7XFxuICAgIHdpZHRoOiAxLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0uY2hlY2tib3guaXMtbGFyZ2UuaXMtbWF0ZXJpYWw6Y2hlY2tlZCxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10uY2hlY2tib3guaXMtbGFyZ2UuaXMtbWF0ZXJpYWw6Y2hlY2tlZCB7XFxuICAgICAgaGVpZ2h0OiAwLjYyNXJlbTsgfVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLFxcbmlucHV0W3R5cGU9cmFkaW9dLnJhZGlvIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IC4xcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiAycHggI2NlZDRkYSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86YmVmb3JlLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpbzphZnRlcixcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uZGlzYWJsZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvOmRpc2FibGVkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uZGlzYWJsZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvOmFjdGl2ZSwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86Zm9jdXMsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzphY3RpdmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdG9wOiAuMTI1cmVtO1xcbiAgICBib3R0b206IC4xMjVyZW07XFxuICAgIGxlZnQ6IC4xMjVyZW07XFxuICAgIHJpZ2h0OiAuMTI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvOmNoZWNrZWQ6YmVmb3JlLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1ob3ZlcmFibGU6aG92ZXI6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW86Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1ob3ZlcmFibGU6aG92ZXI6YmVmb3JlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtb3V0bGluZTpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtb3V0bGluZTpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIHRvcDogLjE4NzVyZW07XFxuICAgIGJvdHRvbTogLjE4NzVyZW07XFxuICAgIGxlZnQ6IC4xODc1cmVtO1xcbiAgICByaWdodDogLjE4NzVyZW07IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLW1hdGVyaWFsOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLW1hdGVyaWFsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IGluaXRpYWw7XFxuICAgIGNvbnRlbnQ6IHVuc2V0OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1yb3VuZGVkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtcm91bmRlZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtcm91bmRlZDpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLXJvdW5kZWQ6YmVmb3JlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1jaXJjbGUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1jaXJjbGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gICAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtY2lyY2xlOmJlZm9yZSxcXG4gICAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtY2lyY2xlOmJlZm9yZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1zcXVhcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1zcXVhcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLXNxdWFyZTpiZWZvcmUsXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLXNxdWFyZTpiZWZvcmUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmhhcy1hbmltYXRpb246YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaGFzLWFuaW1hdGlvbjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIG9wYWNpdHkgLjJzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgb3BhY2l0eSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmhhcy1hbmltYXRpb246Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5oYXMtYW5pbWF0aW9uOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5oYXMtYW5pbWF0aW9uLmlzLW1hdGVyaWFsOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5oYXMtYW5pbWF0aW9uLmlzLW1hdGVyaWFsOmNoZWNrZWQge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcmFkaW8tem9vbS1pbiAuM3MgYm90aDtcXG4gICAgICAgICAgICBhbmltYXRpb246IHJhZGlvLXpvb20taW4gLjNzIGJvdGg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2IwYjZiYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjZiYzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW86YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpbzpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW86Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzQ5NTA1NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW86ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpbzpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTQ5ZGE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5ZGE1OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDk1MDU3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXByaW1hcnkuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItcHJpbWFyeS5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNjY2U1ZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2U1ZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXByaW1hcnk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItcHJpbWFyeTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXByaW1hcnk6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXByaW1hcnk6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItcHJpbWFyeS5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1wcmltYXJ5OmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1wcmltYXJ5LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1wcmltYXJ5OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5OWNhZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OWNhZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXByaW1hcnkuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1wcmltYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zZWNvbmRhcnkuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc2Vjb25kYXJ5LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zZWNvbmRhcnk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc2Vjb25kYXJ5OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc2Vjb25kYXJ5OmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnk6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc2Vjb25kYXJ5LmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXNlY29uZGFyeTpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc2Vjb25kYXJ5LmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnk6ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zZWNvbmRhcnkuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zZWNvbmRhcnkuaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXNlY29uZGFyeS5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc2Vjb25kYXJ5LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zdWNjZXNzLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXN1Y2Nlc3MuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWZlY2JkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZlY2JkOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zdWNjZXNzOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zdWNjZXNzOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1zdWNjZXNzOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXN1Y2Nlc3MuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc3VjY2VzczpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc3VjY2Vzcy5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc3VjY2VzczpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODZlMjliO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZlMjliOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1zdWNjZXNzLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc3VjY2Vzcy5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itc3VjY2Vzcy5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itc3VjY2Vzcy5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItaW5mby5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1pbmZvLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2E3ZTlmNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZTlmNDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItaW5mbzpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1pbmZvOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItaW5mbzpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItaW5mbzpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1pbmZvLmRpc2FibGVkOmNoZWNrZWQsIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWluZm86ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWluZm8uZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWluZm86ZGlzYWJsZWQ6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzdhZGVlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhZGVlZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItaW5mby5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWluZm8uaXMtb3V0bGluZTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWluZm8uaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWluZm8uaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXdhcm5pbmcuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itd2FybmluZy5pcy1ob3ZlcmFibGU6aG92ZXI6bm90KDpjaGVja2VkKTpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY0ZDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY0ZDM7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXdhcm5pbmc6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3Itd2FybmluZzpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXdhcm5pbmc6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLXdhcm5pbmc6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3Itd2FybmluZy5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci13YXJuaW5nOmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci13YXJuaW5nLmRpc2FibGVkOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci13YXJuaW5nOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmU3YTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU3YTA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLXdhcm5pbmcuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci13YXJuaW5nLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYW5nZXIuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFuZ2VyLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZhZTNlNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTNlNTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFuZ2VyOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhbmdlcjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhbmdlcjpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFuZ2VyOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhbmdlci5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYW5nZXI6ZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhbmdlci5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFuZ2VyOmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmM2I3YmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2I3YmQ7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhbmdlci5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFuZ2VyLmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYW5nZXIuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWxpZ2h0LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWxpZ2h0LmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1saWdodDpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1saWdodDpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWxpZ2h0OmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1saWdodDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTllY2VmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1saWdodC5kaXNhYmxlZDpjaGVja2VkLCBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1saWdodDpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItbGlnaHQuZGlzYWJsZWQ6Y2hlY2tlZCxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWxpZ2h0OmRpc2FibGVkOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItbGlnaHQuaXMtb3V0bGluZTpiZWZvcmUsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1saWdodC5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2U5ZWNlZjsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItbGlnaHQuaXMtb3V0bGluZTpjaGVja2VkOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWxpZ2h0LmlzLW91dGxpbmU6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYXJrLmlzLWhvdmVyYWJsZTpob3Zlcjpub3QoOmNoZWNrZWQpOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhcmsuaXMtaG92ZXJhYmxlOmhvdmVyOm5vdCg6Y2hlY2tlZCk6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTZhMGFhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZhMGFhOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYXJrOmJlZm9yZSxcXG4gIGlucHV0W3R5cGU9cmFkaW9dLnJhZGlvLmNvbG9yLWRhcms6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYXJrOmNoZWNrZWQsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5jb2xvci1kYXJrOmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzNDNhNDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IH1cXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLnJhZGlvLmNvbG9yLWRhcmsuZGlzYWJsZWQ6Y2hlY2tlZCwgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFyazpkaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFyay5kaXNhYmxlZDpjaGVja2VkLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFyazpkaXNhYmxlZDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2E4NzkzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E4NzkzOyB9XFxuICBpbnB1dFt0eXBlPWNoZWNrYm94XS5yYWRpby5jb2xvci1kYXJrLmlzLW91dGxpbmU6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFyay5pcy1vdXRsaW5lOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM0M2E0MDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uY29sb3ItZGFyay5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlLFxcbiAgaW5wdXRbdHlwZT1yYWRpb10ucmFkaW8uY29sb3ItZGFyay5pcy1vdXRsaW5lOmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtc21hbGwsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1zbWFsbCB7XFxuICAgIHdpZHRoOiAwLjg3NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjg3NXJlbTsgfVxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ucmFkaW8uaXMtbGFyZ2UsXFxuICBpbnB1dFt0eXBlPXJhZGlvXS5yYWRpby5pcy1sYXJnZSB7XFxuICAgIHdpZHRoOiAxLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmFkaW8tem9vbS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHJhZGlvLXpvb20taW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dG9nZ2xlLWNoZWNrYm94LXJhZGlvLmNzcy5tYXAgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9taWFuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWlhbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGlueS1kYXRlLXBpY2tlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbnktZGF0ZS1waWNrZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZ2dsZS1jaGVja2JveC1yYWRpby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZ2dsZS1jaGVja2JveC1yYWRpby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIEw9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBKPXQ9PkwodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgSz0odCxlKT0+e0oodCk7Zm9yKHZhciBuIGluIGUpTCh0LG4se2dldDplW25dLGVudW1lcmFibGU6ITB9KX07SyhleHBvcnRzLHtkZWZhdWx0OigpPT5CLGRlZmF1bHRPcHRpb25zOigpPT55fSk7dmFyIFU9dD0+dCYmdHlwZW9mIHQ9PVwib2JqZWN0XCImJiFBcnJheS5pc0FycmF5KHQpJiYhKHQgaW5zdGFuY2VvZiBOb2RlTGlzdCkmJiEodCBpbnN0YW5jZW9mIE5vZGUpJiYhKHQuZWwgaW5zdGFuY2VvZiBOb2RlKTtmdW5jdGlvbiBYKHQsZSl7cmV0dXJuIGUmJnQmJk9iamVjdC5rZXlzKHQpLmZvckVhY2gobj0+e2xldCBvPXRbbl07aWYobj09PVwiY2xhc3NcInx8bj09PVwiY2xhc3NOYW1lXCIpe2xldCByPW8mJm8udHJpbSgpLnNwbGl0KC9bXFxzXSsvKTtyJiZyLmxlbmd0aCYmZS5jbGFzc0xpc3QuYWRkKC4uLnIpfWVsc2Ugbj09PVwiaW5uZXJIVE1MXCJ8fG49PT1cInRleHRDb250ZW50XCJ8fHR5cGVvZiBvPT1cImZ1bmN0aW9uXCJ8fG4uc3RhcnRzV2l0aChcIiRcIik/ZVtuXT1vOm8hPT0hMSYmbyE9PXZvaWQgMCYmbyE9PW51bGwmJmUuc2V0QXR0cmlidXRlKG4sbyl9KSxlfWZ1bmN0aW9uIEgodCxlKXtpZighIXQpe2lmKCF0LmZvckVhY2gpe2UuYXBwZW5kKHQpO3JldHVybn1pZih0LmZvckVhY2gpe3QuZm9yRWFjaChuPT5IKG4sZSkpO3JldHVybn19fWZ1bmN0aW9uIHAodCwuLi5lKXtsZXRbbiwuLi5vXT10LnNwbGl0KFwiLlwiKSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobnx8XCJkaXZcIiksYT1lWzBdLGk9VShhKSYmYTtyZXR1cm4gby5sZW5ndGgmJihyLmNsYXNzTmFtZT1vLmpvaW4oXCIgXCIpKSxYKGksciksSChpP2Uuc2xpY2UoMSk6ZSxyKSxyfWZ1bmN0aW9uIGQodCxlLG4sbyl7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihlLG4sbyksKCk9PnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4sbyl9dmFyIFQ9dD0+ZT0+e2xldCBuPXQ+MD9cIm5leHRFbGVtZW50U2libGluZ1wiOlwicHJldmlvdXNFbGVtZW50U2libGluZ1wiLG89ZS50YXJnZXRbbl07Zm9yKGxldCByPTA7byYmcjxNYXRoLmFicyh0KS0xOysrcilvPW9bbl07byYmby5mb2N1cygpfTtmdW5jdGlvbiBmKHQsZSl7bGV0IG49e0Fycm93TGVmdDpUKC0xKSxBcnJvd1VwOlQoLXQpLEFycm93UmlnaHQ6VCgxKSxBcnJvd0Rvd246VCh0KX07cmV0dXJuIG89PntsZXQgcj1lJiZlW28uY29kZV18fG5bby5jb2RlXTtyJiYoby5wcmV2ZW50RGVmYXVsdCgpLHIobykpfX1mdW5jdGlvbiBtKHQsZSxuKXtyZXR1cm4gcChcImJ1dHRvblwiLHt0YWJpbmRleDotMSx0eXBlOlwiYnV0dG9uXCIsLi4uZSxjbGFzc05hbWU6dH0sbil9dmFyIF89dD0+YDAwJHt0fWAuc2xpY2UoLTIpLE89KHQsZSk9PntsZXQgbj1lLnRpbWVGb3JtYXQ9PT0xMjtyZXR1cm5gJHt0LmdldEhvdXJzKCklKG4/MTI6MjQpfHwobj8xMjowKX1gfSxTPXQ9Pl8odC5nZXRNaW51dGVzKCkpLEE9dD0+dC50YXJnZXQuc2VsZWN0KCk7ZnVuY3Rpb24gWSh0LGUpe2xldCBuPWUudGltZUZvcm1hdD09PTI0P1wiXCI6dC5nZXRIb3VycygpPj0xMj9cIiBQTVwiOlwiIEFNXCI7cmV0dXJuIE8odCxlKStcIjpcIitTKHQpK259ZnVuY3Rpb24gRih0LGUpe2xldCBuPWUuZ2V0SG91cnMoKSxvPU8oZSx0KSxyPVMoZSksYT1uPj0xMj9cInBtXCI6XCJhbVwiO3JldHVybntoaDpvLG1tOnIsYW1wbTphfX1mdW5jdGlvbiB6KHQsZSl7bGV0IG49cGFyc2VJbnQodC5oaHx8XCIwXCIsMTApO3JldHVybiBlP24lMTIrKHQuYW1wbT09PVwicG1cIj8xMjowKTpufWZ1bmN0aW9uIE4odCl7bGV0e29wdHM6ZX09dCx7bGFuZzpufT1lLG89ZS50aW1lRm9ybWF0PT09MTIscj1GKGUsdC5zZWxlY3RlZERhdGV8fHQuY3VycmVudERhdGUpLGE9KCk9PntsZXQgbD1uZXcgRGF0ZSh0LmN1cnJlbnREYXRlKTtsLnNldEhvdXJzKHoocixvKSxwYXJzZUludChyLm1tfHxcIjBcIiwxMCkpLHQuZ290byhsKX0saT1sPT57bC5jb2RlPT09XCJFbnRlclwiJiYobC5wcmV2ZW50RGVmYXVsdCgpLGwudGFyZ2V0Lm9uY2hhbmdlKGwpLHQuYXBwbHkoKSl9LGM9cChcImlucHV0LmRwLXR4dC10aW1lLmRwLXR4dC1oaFwiLHt0eXBlOlwidGV4dFwiLHBsYWNlaG9sZGVyOlwiaGhcIixtYXhsZW5ndGg6MixvbmZvY3VzOkEsb25rZXlkb3duOmksb25jaGFuZ2UobCl7ci5oaD1sLnRhcmdldC52YWx1ZSxhKCl9LHZhbHVlOnIuaGh9KSx1PXAoXCJpbnB1dC5kcC10eHQtdGltZS5kcC10eHQtbW1cIix7cGxhY2Vob2xkZXI6XCJtbVwiLHR5cGU6XCJ0ZXh0XCIsbWF4bGVuZ3RoOjIsb25mb2N1czpBLG9ua2V5ZG93bjppLG9uY2hhbmdlKGwpe3IubW09bC50YXJnZXQudmFsdWUsYSgpfSx2YWx1ZTpyLm1tfSkscz1tKFwiZHAtYW1wbVwiLHt0YWJpbmRleDpcImF1dG9cIixvbmNsaWNrKGwpe3IuYW1wbT1yLmFtcG09PT1cInBtXCI/XCJhbVwiOlwicG1cIixsLnRhcmdldC50ZXh0Q29udGVudD1yLmFtcG0sYSgpfX0sci5hbXBtKSxoPXAoXCJmb290ZXIuZHAtdGltZS1mb290ZXJcIixjLFwiOlwiLHUsbz9zOlwiXCIsbi5hcHBseVRleHQmJm0oXCJkcC1hcHBseVwiLHt0YWJpbmRleDpcImF1dG9cIixvbmNsaWNrKCl7dC5hcHBseSgpfX0sbi5hcHBseVRleHQpKTtyZXR1cm4gZCh0LnJvb3QsXCJzZWxlY3RlZGRhdGVjaGFuZ2VcIiwoKT0+e3Quc2VsZWN0ZWREYXRlJiYoT2JqZWN0LmFzc2lnbihyLEYodC5vcHRzLHQuc2VsZWN0ZWREYXRlKSksYy52YWx1ZT1yLmhoLHUudmFsdWU9ci5tbSxzLnRleHRDb250ZW50PXIuYW1wbSl9KSxofWZ1bmN0aW9uIHkoKXtsZXQgdD17bGFuZzp7YXBwbHlUZXh0OlwiQXBwbHlcIixkYXlzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxtb250aHM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdfSx0aW1lRm9ybWF0OjEyLGhpZ2hsaWdodGVkRGF0ZTpuZXcgRGF0ZSxmb3JtYXQoZSl7cmV0dXJuIGUuZ2V0TW9udGgoKSsxK1wiL1wiK2UuZ2V0RGF0ZSgpK1wiL1wiK2UuZ2V0RnVsbFllYXIoKSsodC5waWNrVGltZT9cIiBcIitZKGUsdCk6XCJcIil9LHBhcnNlKGUpe2xldCBuPW5ldyBEYXRlKGUpO3JldHVybiBpc05hTihuKT92b2lkIDA6bn0sZGF0ZUNsYXNzKCl7cmV0dXJuXCJcIn0saW5SYW5nZShlKXtsZXR7bWluOm4sbWF4Om99PXQ7cmV0dXJuKCFufHxlPj1uKSYmKCFvfHxlPD1vKX0sYXBwZW5kVG86ZG9jdW1lbnQuYm9keSxkYXlPZmZzZXQ6MH07cmV0dXJuIHR9ZnVuY3Rpb24gRCgpe3ZhciB0PW5ldyBEYXRlO3JldHVybiB0LnNldEhvdXJzKDAsMCwwLDApLHR9ZnVuY3Rpb24geCh0LGUpe3JldHVybih0JiZ0LnRvRGF0ZVN0cmluZygpKT09PShlJiZlLnRvRGF0ZVN0cmluZygpKX1mdW5jdGlvbiBnKHQsZSl7cmV0dXJuIHQ9bmV3IERhdGUodCksdC5zZXREYXRlKHQuZ2V0RGF0ZSgpK2UpLHR9ZnVuY3Rpb24gdih0LGUsbil7dD1uZXcgRGF0ZSh0KTt2YXIgbz10LmdldERhdGUoKSxyPXQuZ2V0TW9udGgoKStlO3JldHVybiB0LnNldERhdGUoMSksdC5zZXRNb250aChuPygxMityKSUxMjpyKSx0LnNldERhdGUobyksdC5nZXREYXRlKCk8byYmdC5zZXREYXRlKDApLHR9ZnVuY3Rpb24gdyh0LGUpe3JldHVybiB0PW5ldyBEYXRlKHQpLHQuc2V0RnVsbFllYXIodC5nZXRGdWxsWWVhcigpK2UpLHR9ZnVuY3Rpb24gQyh0LGUpe3JldHVybiB0PW5ldyBEYXRlKHQpLHQuc2V0RnVsbFllYXIoZSksdH1mdW5jdGlvbiBqKHQsZSl7cmV0dXJuIHYodCxlLXQuZ2V0TW9udGgoKSl9ZnVuY3Rpb24gRSh0LGUsbil7cmV0dXJuIHQmJihlJiZ0PGU/ZTpuJiZ0Pm4/bjp0KX1mdW5jdGlvbiAkKHQpe2xldHtvcHRzOmUsY3VycmVudERhdGU6bn09dCx7bW9udGhzOm99PWUubGFuZyxyPW4uZ2V0TW9udGgoKSxhPXAoXCIuZHAtbW9udGhzLmRwLXN1Ym1lbnVcIix7b25jbGljazpjPT5jLnN0b3BQcm9wYWdhdGlvbigpLG9ua2V5ZG93bjpmKDMpfSxvLm1hcCgoYyx1KT0+bShgZHAtbW9udGgke3I9PT11P1wiIGRwLXNlbGVjdGVkXCI6XCJcIn1gLHtvbmNsaWNrOigpPT50LmdvdG8oaihuLHUpKX0sYykpKTt0LnN1Ym1lbnUoYSk7bGV0IGk9YS5xdWVyeVNlbGVjdG9yKFwiLmRwLXNlbGVjdGVkXCIpO2kmJmkuZm9jdXMoKX1mdW5jdGlvbiBHKHQpe2xldCBlPVtdLHttYXg6bixtaW46b309dC5vcHRzLHI9KG4/bmV3IERhdGUobik6dyhEKCksMjUpKS5nZXRGdWxsWWVhcigpLGE9KG8/bmV3IERhdGUobyk6dyhEKCksLTI1KSkuZ2V0RnVsbFllYXIoKTtmb3IobGV0IGk9YTtpPD1yOysraSllLnB1c2goaSk7cmV0dXJuIGV9ZnVuY3Rpb24gSSh0KXtsZXR7Y3VycmVudERhdGU6ZSxzZWxlY3RlZERhdGU6bn09dCxvPWUuZ2V0RnVsbFllYXIoKSxyPW4/LmdldEZ1bGxZZWFyKCksYT1wKFwiLmRwLXllYXJzLmRwLXN1Ym1lbnVcIix7b25jbGljazpjPT5jLnN0b3BQcm9wYWdhdGlvbigpLG9ua2V5ZG93bjpmKDEpfSxHKHQpLm1hcChjPT5tKGBkcC15ZWFyJHtvPT09Yz9cIiBkcC1zZWxlY3RlZFwiOlwiXCJ9JHtyPT09Yz9cIiBkcC1zZWxlY3RlZFwiOlwiXCJ9YCx7b25jbGljazooKT0+dC5nb3RvKEMoZSxjKSl9LGMpKSk7dC5zdWJtZW51KGEpO2xldCBpPWEucXVlcnlTZWxlY3RvcihcIi5kcC1zZWxlY3RlZFwiKTtpJiZpLmZvY3VzKCl9ZnVuY3Rpb24gUSh0LGUpe2xldCBuPVtdLG89bmV3IERhdGUodCk7by5zZXREYXRlKDEpLG8uc2V0RGF0ZSgxLW8uZ2V0RGF5KCkrZSksZSYmby5nZXREYXRlKCk9PT1lKzEmJm8uc2V0RGF0ZShlLTYpO2ZvcihsZXQgcj0wO3I8Nio3OysrciluLnB1c2gobmV3IERhdGUobykpLG8uc2V0RGF0ZShvLmdldERhdGUoKSsxKTtyZXR1cm4gbn1mdW5jdGlvbiBNKHQsZSl7bGV0e29wdHM6bixjdXJyZW50RGF0ZTpvLHNlbGVjdGVkRGF0ZTpyfT10LHtkYXlzOmEsbW9udGhzOml9PW4ubGFuZyxjPW8uZ2V0TW9udGgoKSx1PUQoKTtyZXR1cm4gcChgLmRwLWJvZHkuJHtlfWAscChcImhlYWRlci5kcC1jYWwtaGVhZGVyXCIsbShcImRwLWNhbC1tb250aFwiLHtvbmNsaWNrOnM9PntzLnN0b3BQcm9wYWdhdGlvbigpLCQodCl9fSxpW2NdKSxtKFwiZHAtY2FsLXllYXJcIix7b25jbGljazpzPT57cy5zdG9wUHJvcGFnYXRpb24oKSxJKHQpfX0sby5nZXRGdWxsWWVhcigpKSkscChcIi5kcC1kYXlzXCIse29ua2V5ZG93bjpmKDcse0Fycm93TGVmdChzKXt0LmdvdG8oZyhuZXcgRGF0ZShwYXJzZUludChzLnRhcmdldC5kYXRhc2V0LmRhdGUpKSwtMSkpfSxBcnJvd1VwKHMpe3QuZ290byhnKG5ldyBEYXRlKHBhcnNlSW50KHMudGFyZ2V0LmRhdGFzZXQuZGF0ZSkpLC03KSl9LEFycm93UmlnaHQocyl7dC5nb3RvKGcobmV3IERhdGUocGFyc2VJbnQocy50YXJnZXQuZGF0YXNldC5kYXRlKSksMSkpfSxBcnJvd0Rvd24ocyl7dC5nb3RvKGcobmV3IERhdGUocGFyc2VJbnQocy50YXJnZXQuZGF0YXNldC5kYXRlKSksNykpfX0pfSxhLm1hcCgocyxoKT0+cChcInNwYW4uZHAtY29sLWhlYWRlclwiLGFbKGgrbi5kYXlPZmZzZXQpJWEubGVuZ3RoXSkpLFEobyxuLmRheU9mZnNldCkubWFwKHM9PntsZXQgaD1zLmdldE1vbnRoKCkhPT1jLGw9IW4uaW5SYW5nZShzKSxiPXgocyx1KSxrPXgocyxvKSxSPXgocyxyKSxXPVwiZHAtZGF5XCIrKGg/XCIgZHAtZWRnZS1kYXlcIjpcIlwiKSsoaz9cIiBkcC1jdXJyZW50XCI6XCJcIikrKFI/XCIgZHAtc2VsZWN0ZWRcIjpcIlwiKSsobD9cIiBkcC1kYXktZGlzYWJsZWRcIjpcIlwiKSsoYj9cIiBkcC1kYXktdG9kYXlcIjpcIlwiKStuLmRhdGVDbGFzcyhzKTtyZXR1cm4gbShXLHtkaXNhYmxlZDpsLG9uY2xpY2soKXtuLnBpY2tUaW1lP3Quc2V0U2VsZWN0ZWREYXRlKHMpOnQuYXBwbHkocyl9LHRhYmluZGV4Oms/XCJcIjotMSxcImRhdGEtZGF0ZVwiOnMuZ2V0VGltZSgpfSxzLmdldERhdGUoKSl9KSkpfWZ1bmN0aW9uIFYodCl7cmV0dXJuIHAoXCIuZHAtY2FsXCIse3RhYmluZGV4Oi0xfSxwKFwiLmRwLWNhbC1oZWFkZXItcGxhY2Vob2xkZXJcIiksbShcImRwLXByZXZcIix7b25jbGljazooKT0+dC5nb3RvKHYodC5jdXJyZW50RGF0ZSwtMSkpLFwiYXJpYS1sYWJlbFwiOlwiUHJldlwifSxcIlxcdTIwMzlcIiksbShcImRwLW5leHRcIix7b25jbGljazooKT0+dC5nb3RvKHYodC5jdXJyZW50RGF0ZSwxKSksXCJhcmlhLWxhYmVsXCI6XCJOZXh0XCJ9LFwiXFx1MjAzQVwiKSxNKHQsXCJcIikpfXZhciBQPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMub3B0cz1lLHRoaXMuY3VycmVudERhdGU9ZS5oaWdobGlnaHRlZERhdGUsdGhpcy5yb290PVYodGhpcyksZS5waWNrVGltZSYmdGhpcy5yb290LmFwcGVuZChOKHRoaXMpKSxkKHRoaXMucm9vdCxcImNsaWNrXCIsKCk9PnRoaXMuc3VibWVudSgpKX1yZWRyYXcoZSl7dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoXCIuZHAtYm9keVwiKS5yZXBsYWNlV2l0aChlKSx0aGlzLnN1Ym1lbnUoKX1zZXRPcHRzKGUpe09iamVjdC5hc3NpZ24odGhpcy5vcHRzLGUpLHRoaXMuc2VsZWN0ZWREYXRlPUUodGhpcy5zZWxlY3RlZERhdGUsZS5taW4sZS5tYXgpLHRoaXMuY3VycmVudERhdGU9RSh0aGlzLmN1cnJlbnREYXRlLGUubWluLGUubWF4KSx0aGlzLnJlZHJhdyhNKHRoaXMsXCJcIikpfXN1Ym1lbnUoZSl7bGV0IG49dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHAtc3VibWVudVwiKTshZSYmIW4ubGVuZ3RofHwobi5mb3JFYWNoKG89Pm8ucmVtb3ZlKCkpLGU/dGhpcy5yb290LmFwcGVuZENoaWxkKGUpOnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiLmRwLWN1cnJlbnRcIikuZm9jdXMoKSl9Z290byhlKXtsZXQgbj10aGlzLmN1cnJlbnREYXRlIT09ZSxvPXRoaXMuY3VycmVudERhdGU8ZSxyPXRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKT09PWUuZ2V0TW9udGgoKSYmdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpPT09ZS5nZXRGdWxsWWVhcigpO3RoaXMuY3VycmVudERhdGU9ZSx0aGlzLnJlZHJhdyhNKHRoaXMscj9cIlwiOm8/XCJkcC1ib2R5LW5leHRcIjpcImRwLWJvZHktcHJldlwiKSksbiYmdGhpcy5yb290LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY3VycmVudGRhdGVjaGFuZ2VcIix7ZGV0YWlsOmV9KSksc2V0VGltZW91dCgoKT0+e3RoaXMucm9vdC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KXx8dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoXCIuZHAtY3VycmVudFwiKS5mb2N1cygpfSl9c2V0U2VsZWN0ZWREYXRlKGUpe3RoaXMuc2VsZWN0ZWREYXRlPUUoZXx8dGhpcy5jdXJyZW50RGF0ZSx0aGlzLm9wdHMubWluLHRoaXMub3B0cy5tYXgpLHRoaXMuZ290byh0aGlzLnNlbGVjdGVkRGF0ZSksdGhpcy5yb290LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2VsZWN0ZWRkYXRlY2hhbmdlXCIse2RldGFpbDp0aGlzLnNlbGVjdGVkRGF0ZX0pKX1hcHBseShlKXt0aGlzLnNldFNlbGVjdGVkRGF0ZShlKSx0aGlzLnJvb3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJhcHBseVwiLHtkZXRhaWw6dGhpc30pKX19O2Z1bmN0aW9uIHEodCxlKXtsZXR7cm9vdDpuLG9wdHM6b309dCxyPVtdLGE9KCk9PntyLmZvckVhY2godT0+dSgpKSxyPVtdLG4ucmVtb3ZlKCl9LGk9KCk9PnAoXCIudGFiLWNhdGNoZXJcIix7dGFiaW5kZXg6XCIwXCIsb25mb2N1cygpe2UuZm9jdXMoKSxhKCl9fSksYz0oKT0+e24uaXNDb25uZWN0ZWR8fCh0LnNldFNlbGVjdGVkRGF0ZSh0Lm9wdHMucGFyc2UoZS52YWx1ZSkpLG4uY2xhc3NMaXN0LmFkZChcImRwLWZseW91dFwiKSxvLmFwcGVuZFRvLmFwcGVuZChuKSxaKGUsdCksbi5xdWVyeVNlbGVjdG9yKFwiLmRwLWN1cnJlbnRcIikuZm9jdXMoKSxyPVtkKGRvY3VtZW50LmJvZHksXCJmb2N1c1wiLHU9Pnt1LnRhcmdldCE9PWRvY3VtZW50LmJvZHkmJnUudGFyZ2V0IT09ZSYmIW4uY29udGFpbnModS50YXJnZXQpJiZhKCl9LCEwKSxkKGRvY3VtZW50LmJvZHksXCJtb3VzZWRvd25cIix1PT57dS50YXJnZXQhPT1lJiYhbi5jb250YWlucyh1LnRhcmdldCkmJmEoKX0pXSl9O24ucHJlcGVuZChpKCkpLG4uYXBwZW5kKGkoKSksZChlLFwiY2xpY2tcIixjKSxkKGUsXCJmb2N1c1wiLGMpLGQobixcImFwcGx5XCIsKCk9PntlLnZhbHVlPXQuc2VsZWN0ZWREYXRlP28uZm9ybWF0KHQuc2VsZWN0ZWREYXRlKTpcIlwiLGUuZm9jdXMoKSxhKCl9KX1mdW5jdGlvbiBaKHQsZSl7bGV0IG49OCxvPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxyPWUucm9vdCxhPXdpbmRvdy5zY3JvbGxYLGk9d2luZG93LnNjcm9sbFksYz10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHU9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPWMubGVmdCthLGg9Yy5ib3R0b20raStuLGw9e2xlZnQ6YCR7c31weGB9LGI9e3RvcDpgJHtoK259cHhgfTtoK3UuaGVpZ2h0Pm8uY2xpZW50SGVpZ2h0K2kmJihiPXt0b3A6YCR7TWF0aC5tYXgobixpK2MudG9wLW4tdS5oZWlnaHQpfXB4YH0pLHMrdS53aWR0aD5vLmNsaWVudFdpZHRoK2EmJihsPXtsZWZ0OmAke01hdGgubWF4KG4sYStvLmNsaWVudFdpZHRoLXUud2lkdGgtbil9cHhgfSksT2JqZWN0LmFzc2lnbihyLnN0eWxlLGIsbCksZS5yb290LnN0eWxlLnZpc2liaWxpdHk9XCJcIn1mdW5jdGlvbiBCKHQpe2xldCBlPU9iamVjdC5hc3NpZ24oeSgpLHQpO2UubGFuZz1PYmplY3QuYXNzaWduKHkoKS5sYW5nLHQ/LmxhbmcpO2xldCBuPW5ldyBQKGUpO3JldHVybiBlLmlucHV0JiZxKG4sZS5pbnB1dCksbn1cbiIsImNvbnN0IHByb2plY3RPcGVyYXRpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0IChwcm9qZWN0TmFtZSwgLi4udGFza3MpIHtcbiAgICAgICAgY29uc3QgdGFza3NKU09OID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIHRhc2tzSlNPTik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdCAocHJvamVjTmFtZSwgdGFzaykge1xuICAgICAgICBjb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjTmFtZSkpO1xuXG4gICAgICAgIGlmIChzdG9yZWRUYXNrcykge1xuICAgICAgICAgICAgc3RvcmVkVGFza3MucHVzaCh0YXNrKTsgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWNOYW1lLCBKU09OLnN0cmluZ2lmeShzdG9yZWRUYXNrcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWNOYW1lLCB0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlYXJjaEN1cnJlbnRQcm9qZWN0IChjdXJyZW50UHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKSk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0VGFza3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrVGl0bGUpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpO1xuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza1RpdGxlKTtcbiAgICAgICAgdGFza3MgPSBKU09OLnN0cmluZ2lmeSh0YXNrcylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIHRhc2tzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGFza1RpdGxlKTtcblxuICAgICAgICByZXR1cm4gdGFza1swXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrIChwcm9qZWN0TmFtZSwgb2xkVGFza1RpdGxlLCB1cGRhdGVkVGFzaykge1xuXG4gICAgICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09PSBvbGRUYXNrVGl0bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZFRhc2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0cyAocHJvamVjdHMpIHtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW5lcmFsXCIpKSBjcmVhdGVQcm9qZWN0KFwiZ2VuZXJhbFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cyAoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRhc2tzKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVsZXRGb3JtRGF0YSAocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlRnJvbURhdGEgPSBbXTtcblxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qQ2hlY2tib3hJZCA9IHByb2plY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIl9cIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qQ2hlY2tib3hWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2pDaGVja2JveElkKS5jaGVja2VkO1xuXG4gICAgICAgICAgICBkZWxldGVGcm9tRGF0YS5wdXNoKHtuYW1lOiBwcm9qZWN0ICxpc0NoZWNrZWQ6IHByb2pDaGVja2JveFZhbHVlfSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGRlbGV0ZUZyb21EYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvcnRUYXNrc0J5UHJpb3JpdHkgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IGltcG9ydGFudFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpLmZpbHRlcih0YXNrID0+IHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICBfc29ydFRhc2tzQnlEYXRlKGltcG9ydGFudFRhc2tzKTtcbiAgICAgICAgY29uc3Qgbm90SW1wb3J0YW50VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkuZmlsdGVyKHRhc2sgPT4gIXRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICBfc29ydFRhc2tzQnlEYXRlKG5vdEltcG9ydGFudFRhc2tzKTtcbiAgICAgICAgY29uc3Qgc29ydGVkVGFza3MgPSBpbXBvcnRhbnRUYXNrcy5jb25jYXQobm90SW1wb3J0YW50VGFza3MpO1xuXG4gICAgICAgIHJldHVybiBzb3J0ZWRUYXNrcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc29ydFRhc2tzQnlEYXRlICh0YXNrcykge1xuICAgICAgICB0YXNrcy5zb3J0KCh0YWtzQSwgdGFrc0IpID0+IHRha3NBLmR1ZURhdGUgPiB0YWtzQi5kdWVEYXRlID8gMSA6IC0xKTtcblxuICAgICAgICByZXR1cm4gdGFza3NcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3QsIGFkZFRhc2tUb1Byb2plY3QsIHNlYXJjaEN1cnJlbnRQcm9qZWN0LCBkZWxldGVUYXNrRnJvbVByb2plY3QsIGdldFRhc2tGcm9tUHJvamVjdCwgdXBkYXRlVGFzaywgZGVsZXRlUHJvamVjdHMsIGdldFByb2plY3RzLCBnZXRUYXNrcywgXG4gICAgICAgICAgICBnZXREZWxldEZvcm1EYXRhLCBzb3J0VGFza3NCeVByaW9yaXR5fVxufSkoKTtcblxuZXhwb3J0IHtwcm9qZWN0T3BlcmF0aW9uc307IiwiY29uc3QgdGFza09wZXJhdGlvbnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0ltcG9ydGFudCwgaXNEb25lKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaXNJbXBvcnRhbnQsIGlzRG9uZSB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFRhc2tEYXRhICgpIHtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZV9kYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0ltcG9ydGFudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbXBvcnRhbnRcIikuY2hlY2tlZDtcblxuICAgICAgICBpZiAodGl0bGVJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIGlzSW1wb3J0YW50SW5wdXR9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSB0byBmaWxsIG91dCBhbGwgcmVxdWlyZWQgZmllbGRzIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlVGFzaywgZ2V0VGFza0RhdGF9O1xufSkoKTtcblxuXG5cbmV4cG9ydCB7IHRhc2tPcGVyYXRpb25zIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyB0YXNrT3BlcmF0aW9ucyB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBUaW55RGF0ZVBpY2tlciBmcm9tICd0aW55LWRhdGUtcGlja2VyJztcbmltcG9ydCB7cHJvamVjdE9wZXJhdGlvbnN9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICcuL2ltZy9pY29uczgtZ2l0aHViLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWcvZGVsZXRlLXN2Z3JlcG8tY29tLnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltZy9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiXG47XG5pbXBvcnQgXCIuL2ltZy9tZW51LXN2Z3JlcG8tY29tLnN2Z1wiXG5pbXBvcnQgXCIuLi9zcmMvc3R5bGVzL21pYW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGVzL2xpc3QuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGVzL3RpbnktZGF0ZS1waWNrZXIuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGVzL3RvZ2dsZS1jaGVja2JveC1yYWRpby5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9zdHlsZXMvZm9ybXMuY3NzXCI7XG5cbmNvbnN0IERPTU1hbmlwdWxhdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgX2FwcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtdGl0bGVcIik7XG4gICAgY29uc3QgX2FkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuICAgIGNvbnN0IF9kZWxldGVQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvamVjdFwiKTtcbiAgICBjb25zdCBfcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29uc3QgX3NpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2tzIChwcm9qZWN0TmFtZSkge1xuICAgICAgICBfY29udGVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3QtdGl0bGVcIilcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gX2NhcGl0YWxpemVGaXJzdExldHRlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgIF9jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgaW1wb3J0YW50RGl2ID0gX2NyZWF0ZUNvbnRhaW5lckRpdihcIkltcG9ydGFudCB0YXNrc1wiKVxuICAgICAgICBfY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbnREaXYpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzRGl2ID0gX2NyZWF0ZUNvbnRhaW5lckRpdihcIlRhc2tzXCIpO1xuICAgICAgICBfY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG5cbiAgICAgICAgY29uc3Qgbm9EYXRlRGl2ID0gX2NyZWF0ZUNvbnRhaW5lckRpdihcIk5vIGR1ZSBkYXRlXCIpO1xuICAgICAgICBfY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChub0RhdGVEaXYpO1xuXG4gICAgICAgIGNvbnN0IGRvbmVEaXYgPSBfY3JlYXRlQ29udGFpbmVyRGl2KFwiRG9uZVwiKTtcbiAgICAgICAgX2NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZURpdik7XG5cblxuICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3RPcGVyYXRpb25zLnNvcnRUYXNrc0J5UHJpb3JpdHkocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkXCIpO1xuICAgICAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJvamVjdE5hbWV9LSR7aW5kZXh9YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0hlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1oZWFkZXJcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHRhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIsIFwiY29sb3ItZGFya1wiKVxuICAgICAgICAgICAgaWYgKHRhc2suaXNEb25lKSB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInR1cmVcIik7XG4gICAgICAgICAgICB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKSk7XG4gICAgICAgICAgICB0YXNrSGVhZGVyRGl2LmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG5cbiAgICAgICAgICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVG9Eb25lID0gcHJvamVjdE9wZXJhdGlvbnMuZ2V0VGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrVG9Eb25lLmlzRG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza1RvRG9uZS5pc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0T3BlcmF0aW9ucy51cGRhdGVUYXNrKHByb2plY3ROYW1lLCB0YXNrLnRpdGxlLCB0YXNrVG9Eb25lKTtcblxuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpXG4gICAgICAgICAgICB0YXNrSGVhZGVyRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDYXJkQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRhc2tDYXJkQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gX2NyZWF0ZUFjdGlvbkJ0bihlZGl0SWNvbiwgXCJlZGl0LWltZ1wiLCBcImVkaXQtYnRuXCIpO1xuICAgICAgICAgICAgdGFza0NhcmRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkRm9ybShcIkVkaXQgdGFza1wiKTtcbiAgICAgICAgICAgICAgICBUaW55RGF0ZVBpY2tlcih7IGlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlX2RhdGUnKSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBkYXlPZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX2ZpbGxPdXRGb3JtKHByb2plY3ROYW1lLCB0YXNrLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0YSA9IHRhc2tPcGVyYXRpb25zLmdldFRhc2tEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRG9uZVZhbHVlID0gdGFzay5pc0RvbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrT3BlcmF0aW9ucy5jcmVhdGVUYXNrKHRhc2tEYXRhLnRpdGxlSW5wdXQsIHRhc2tEYXRhLmRlc2NyaXB0aW9uSW5wdXQsIHRhc2tEYXRhLmR1ZURhdGVJbnB1dCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5pc0ltcG9ydGFudElucHV0LCBpc0RvbmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RPcGVyYXRpb25zLnVwZGF0ZVRhc2socHJvamVjdE5hbWUsIG9sZFRhc2tUaXRsZSwgbmV3VGFzayk7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IF9jcmVhdGVBY3Rpb25CdG4oZGVsZXRlSWNvbiwgXCJkZWxldGUtaW1nXCIsIFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgICAgIHRhc2tDYXJkQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIF9kZWxldGVUYXNrQ2FyZChgJHtwcm9qZWN0TmFtZX0tJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3BlcmF0aW9ucy5kZWxldGVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRhc2sudGl0bGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhc2tIZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGFza0NhcmRCdG5Db250YWluZXIpO1xuXG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgICAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQobmV3IERhdGUodGFzay5kdWVEYXRlKSwgJ2RvIE1NTU0geScpXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7Zm9ybWF0dGVkRGF0ZX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiTm8gZHVlIGRhdGVcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2tDYXJkLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgIT09IHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgX3Nob3dEZXRhaWxzKHRhc2ssIHRhc2tDYXJkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfaGlkZURldGFpbHModGFza0NhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGFzay5pc0ltcG9ydGFudCkgdGFza0hlYWRlckRpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLmlzRG9uZSkge1xuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vTGlzdGVuZXJFZGl0QnRuID0gZWRpdEJ0bi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChub0xpc3RlbmVyRWRpdEJ0biwgZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9MaXN0ZW5lckRlbGV0QnRuID0gZGVsZXRlQnRuLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobm9MaXN0ZW5lckRlbGV0QnRuLCBkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICAgICAgZG9uZURpdi5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICBub0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0NhcmQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnREaXYuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ29udGFpbmVyRGl2IChkaXZUaXRsZSkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkaXZDbGFzcyA9IGRpdlRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtkaXZDbGFzc30tY29udGFpbmVyYCwgXCJ0YXNrLWdyb3VwLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBkaXZUaXRsZTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVBY3Rpb25CdG4gKGltYWdlLCBpbWdDbGFzcywgYnRuQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYnRuQ2xhc3MpO1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChpbWdDbGFzcyk7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIHJldHVybiBidG47XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9zaG93RGV0YWlscyh0YXNrLCB0YXNrQ2FyZCkge1xuICAgICAgICBjb25zdCBkZXRhaWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXRhaWxEaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXRhaWxEaXYudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGRldGFpbERpdik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9oaWRlRGV0YWlscyAodGFza0NhcmQpIHtcbiAgICAgICAgdGFza0NhcmQucmVtb3ZlQ2hpbGQodGFza0NhcmQubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBoaWRlU2lkZWJhciAoKSB7XG4gICAgICAgIF9hcHBUaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIF9hZGRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBfZGVsZXRlUHJvakJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIF9wcm9qQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgX3NpZGViYXIuc3R5bGUud2lkdGggPSBcIjV2d1wiO1xuICAgICAgICBfc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzaG93U2lkZWJhciAoKSB7XG4gICAgICAgIF9hcHBUaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBfYWRkQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIF9kZWxldGVQcm9qQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIF9wcm9qQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIF9zaWRlYmFyLnN0eWxlLndpZHRoID0gXCJ2YXIoLS1zaWRlYmFyLXdpZHRoKVwiO1xuICAgICAgICBfc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZElkKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMgKCkge1xuICAgICAgICBfcHJvakNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICAgICAgX3Byb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0T3BlcmF0aW9ucy5nZXRQcm9qZWN0cygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKFwicHJvai1uYW1lXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgcHJvakRpdi50ZXh0Q29udGVudCA9IF9jYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvakRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgX2NvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3RPcGVyYXRpb25zLmdldFRhc2tzKHByb2plY3ROYW1lKTsgXG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF9wcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jYXBpdGFsaXplRmlyc3RMZXR0ZXIgKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsb2FkRm9ybShmb3JtTmFtZSkge1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50KTtcblxuICAgICAgICBjb25zdCBmb3JtTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgICAgICAgZm9ybUxlZ2VuZC50ZXh0Q29udGVudCA9IGZvcm1OYW1lO1xuICAgICAgICBmb3JtTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIik7XG4gICAgICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGZvcm1MZWdlbmQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IF9jcmVhdFRleHRJbnB1dChcIlByb2plY3RcIiwgXCJwcm9qZWN0XCIsIHRydWUsIFwiR2VuZXJhbFwiLCBmYWxzZSwgXCJpbnB1dC1jb250YWluZXJcIiwgXCJwcm9qZWN0LWlucHV0XCIpO1xuICAgICAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBfY3JlYXRUZXh0SW5wdXQoXCJUaXRsZVwiLCBcInRpdGxlXCIsIHRydWUsIFwiV2FzaCBkaXNoZXNcIiwgZmFsc2UsIFwiaW5wdXQtY29udGFpbmVyXCIsIFwidGl0bGUtaW5wdXRcIik7XG4gICAgICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBfY3JlYXRUZXh0SW5wdXQoXCJEZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGZhbHNlLCBcIlwiLCB0cnVlLCBcImlucHV0LWNvbnRhaW5lclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IF9jcmVhdFRleHRJbnB1dChcIkR1ZSBkYXRlXCIsIFwiZHVlX2RhdGVcIiwgZmFsc2UsIFwiXCIsIGZhbHNlLCBcImlucHV0LWNvbnRhaW5lclwiLCBcImRhdGUtaW5wdXRcIik7XG4gICAgICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgaW1wb3J0YW50VG9nZ2xlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1wb3J0YW50VG9nZ2xlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydGFudFRvZ2dsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbXBvcnRhbnRUb2dnbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGltcG9ydGFudFRvZ2dsZUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9nZ2xlXCIpO1xuICAgICAgICBpbXBvcnRhbnRUb2dnbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFudFwiKVxuICAgICAgICBpbXBvcnRhbnRUb2dnbGVEaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50VG9nZ2xlSW5wdXQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW1wb3J0YW50VG9nZ2xlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGltcG9ydGFudFRvZ2dsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgICAgaW1wb3J0YW50VG9nZ2xlTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZ2dsZS1sYWJlbFwiKTtcbiAgICAgICAgaW1wb3J0YW50VG9nZ2xlTGFiZWwudGV4dENvbnRlbnQgPSBcIkltcG9ydGFudFwiO1xuICAgICAgICBpbXBvcnRhbnRUb2dnbGVEaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50VG9nZ2xlTGFiZWwpO1xuICAgICAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChpbXBvcnRhbnRUb2dnbGVEaXYpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1CdG5Db250YW5pZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JtQnRuQ29udGFuaWVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0bi1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0J0bkNsYXNzID0gZm9ybU5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIik7XG4gICAgICAgIGNvbnN0IHRhc2tCdG4gPSBfY3JlYXRUZXh0QnV0dG9uKGZvcm1OYW1lLCB0cnVlLCB0YXNrQnRuQ2xhc3MpO1xuICAgICAgICBmb3JtQnRuQ29udGFuaWVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IF9jcmVhdFRleHRCdXR0b24oXCJDYW5jZWxcIiwgdHJ1ZSwgXCJjYW5jZWwtYnRuXCIpO1xuICAgICAgICBmb3JtQnRuQ29udGFuaWVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICAgICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybUJ0bkNvbnRhbmllcik7XG5cbiAgICAgICAgY29uc3QgcmVxdWlyZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJlcXVpcmVkVGl0bGUuY2xhc3NMaXN0LmFkZChcInJlcXVpcmVkLXRpdGxlXCIpO1xuICAgICAgICByZXF1aXJlZFRpdGxlLnRleHRDb250ZW50ID0gXCIqcmVxdWlyZWRcIjtcbiAgICAgICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVxdWlyZWRUaXRsZSk7IFxuXG4gICAgICAgIF9jb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgX2NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0VGV4dElucHV0IChpbnB1dE5hbWUsIGlucHR1SWQsIHJlcXVpcmVkLCBwbGFjZWhvbGRlciwgaXNUZXh0YXJlYSwgLi4uY29udGFpbmVyQ2xhc3Nlcykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jb250YWluZXJDbGFzc2VzKTtcbiAgICBcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXROYW1lO1xuICAgICAgICBpZiAoIHJlcXVpcmVkID09PSB0cnVlICkgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbC50ZXh0Q29udGVudCArIFwiKlwiO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdHVJZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgbGV0IGlucHV0O1xuICAgICAgICBpZiAoaXNUZXh0YXJlYSkge1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB0dUlkKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuXG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gcmVxdWlyZWQ7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBfY3JlYXRUZXh0QnV0dG9uICh0ZXh0Q29udGVudCwgaXNTaW1wbGVCdXR0b24sIC4uLmJ0bkNsYXNzZXMpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYnRuQ2xhc3Nlcyk7XG4gICAgICAgIGlmIChpc1NpbXBsZUJ1dHRvbikgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuXG4gICAgICAgIHJldHVybiBidG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZmlsbE91dEZvcm0ocHJvamVjTmFtZSwgdGFza1RpdGxlKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0T3BlcmF0aW9ucy5nZXRUYXNrRnJvbVByb2plY3QocHJvamVjTmFtZSwgdGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIik7XG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY05hbWU7XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZV9kYXRlXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgaW1wb3J0YW50VG9nZ2xlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcG9ydGFudFwiKTtcbiAgICAgICAgaW1wb3J0YW50VG9nZ2xlSW5wdXQuY2hlY2tlZCA9IHRhc2suaXNJbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFByb2plY3QgKFByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdFRhc2tzID0gcHJvamVjdE9wZXJhdGlvbnMuc2VhcmNoQ3VycmVudFByb2plY3QoUHJvamVjdE5hbWUpO1xuICAgICAgICBkaXNwbGF5VGFza3MoUHJvamVjdE5hbWUsIGN1cnJlbnRQcm9qZWN0VGFza3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWREZWxldEZvcm0gKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZWxldGVGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZm9ybS1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpXG5cbiAgICAgICAgZGVsZXRlRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0aXRsZUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIHRpdGxlTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIik7XG4gICAgICAgIHRpdGxlTGVnZW5kLnRleHRDb250ZW50ID0gXCJEZWxldGUgcHJvamVjdHNcIjtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxlZ2VuZCk7XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBfY3JlYXRlQ2hlY2tib3gocHJvamVjdCk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmb3JtQnRuQ29udGFuaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9ybUJ0bkNvbnRhbmllci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG4tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IF9jcmVhdFRleHRCdXR0b24oXCJEZWxldGUgcHJvamVjdHNcIiwgdHJ1ZSwgXCJkZWxldGUtcHJvai1idG5cIik7XG4gICAgICAgIGZvcm1CdG5Db250YW5pZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBfY3JlYXRUZXh0QnV0dG9uKFwiQ2FuY2VsXCIsIHRydWUsIFwiY2FuY2VsLWJ0blwiKTtcbiAgICAgICAgZm9ybUJ0bkNvbnRhbmllci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJ0bkNvbnRhbmllcik7XG5cbiAgICAgICAgX2NvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBfY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVGb3JtQ29udGFpbmVyKTsgICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDaGVja2JveChjaGVja2JveExhYmVsKSB7XG4gICAgICAgIGNvbnN0IGlkRm9yID0gY2hlY2tib3hMYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoXCIgXCIsIFwiX1wiKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgaWRGb3IpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaWRGb3IpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIiwgXCJjb2xvci1kYW5nZXJcIik7XG4gICAgICAgIGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkRm9yKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBfY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGNoZWNrYm94TGFiZWwpO1xuICAgICAgICBjaGVja2JveERpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrYm94RGl2O1xuICAgIH1cblxuICAgIHJldHVybiB7aGlkZVNpZGViYXIsIHNob3dTaWRlYmFyLCBkaXNwbGF5UHJvamVjdHMsIGRpc3BsYXlUYXNrcywgbG9hZEZvcm0sIGxvYWRQcm9qZWN0LCBsb2FkRGVsZXRGb3JtfTtcbn0pKCk7XG5cbmxldCBpc1NpZGViYXJFeHBhbmRlZCA9IHRydWU7XG5sZXQgY3VycmVudFByb2plY3ROYW1lID0gXCJnZW5lcmFsXCI7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xuY29uc3QgZGVsUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3RcIik7XG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIERPTU1hbmlwdWxhdGlvbi5sb2FkRm9ybShcIkFkZCB0YXNrXCIpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKTtcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIkdlbmVyYWxcIjtcbiAgICBUaW55RGF0ZVBpY2tlcih7IGlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlX2RhdGUnKSxcbiAgICAgIG1pbjogbmV3IERhdGUoKSxcbiAgICAgIGRheU9mZnNldDogMSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTtcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0YSA9IHRhc2tPcGVyYXRpb25zLmdldFRhc2tEYXRhKCk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tzUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuZXdUYXNrRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tPcGVyYXRpb25zLmNyZWF0ZVRhc2sobmV3VGFza0RhdGEudGl0bGVJbnB1dCwgbmV3VGFza0RhdGEuZGVzY3JpcHRpb25JbnB1dCwgXG4gICAgICAgICAgICAgICAgbmV3VGFza0RhdGEuZHVlRGF0ZUlucHV0LCBuZXdUYXNrRGF0YS5pc0ltcG9ydGFudElucHV0LCBmYWxzZSk7XG4gICAgICAgICAgICBwcm9qZWN0T3BlcmF0aW9ucy5hZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2tzUHJvamVjdCwgbmV3VGFzayk7XG5cbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5kaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5sb2FkUHJvamVjdCggbmV3VGFza3NQcm9qZWN0ICk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4gRE9NTWFuaXB1bGF0aW9uLmxvYWRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZSkpXG59KVxuXG5kZWxQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0T3BlcmF0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgIERPTU1hbmlwdWxhdGlvbi5sb2FkRGVsZXRGb3JtKHByb2plY3RzKTtcblxuICAgIGNvbnN0IGZvcm1EZWxQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvai1idG5cIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpO1xuXG4gICAgZm9ybURlbFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gcHJvamVjdE9wZXJhdGlvbnMuZ2V0RGVsZXRGb3JtRGF0YShwcm9qZWN0cyk7XG4gICAgICAgIHByb2plY3RPcGVyYXRpb25zLmRlbGV0ZVByb2plY3RzKGZvcm1EYXRhKTtcblxuICAgICAgICBET01NYW5pcHVsYXRpb24uZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi5sb2FkUHJvamVjdCggY3VycmVudFByb2plY3ROYW1lICk7ICAgICAgICBcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gRE9NTWFuaXB1bGF0aW9uLmxvYWRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZSkpO1xufSlcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc1NpZGViYXJFeHBhbmRlZCkge1xuICAgICAgICBcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLmhpZGVTaWRlYmFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnNob3dTaWRlYmFyKCk7XG4gICAgfVxuXG4gICAgaXNTaWRlYmFyRXhwYW5kZWQgPSAhaXNTaWRlYmFyRXhwYW5kZWQ7XG59KTtcblxucHJvamVjdE9wZXJhdGlvbnMuY3JlYXRlUHJvamVjdChcImdlbmVyYWxcIik7XG5cbkRPTU1hbmlwdWxhdGlvbi5kaXNwbGF5UHJvamVjdHMoKTtcbkRPTU1hbmlwdWxhdGlvbi5kaXNwbGF5VGFza3MoXCJnZW5lcmFsXCIpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=