/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-wrap: nowrap;
}

.navbar h1 {
  /* border: 1px solid red; */
  width: 25%;
  text-align: center;
}

nav {
  width: 50%;

  /* border: 1px solid red; */
}

nav ul {
  display: flex;
  justify-content: space-around;
}

nav li {
  list-style: none;
  border-bottom: 2px;
  padding: 10px 10px 5px 10px;
  cursor: pointer;
}

nav li.active {
  border-bottom: 2px solid red;
}

.mainContent {
  /* height: calc(100vh - 48px); */
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  /* border: 1px solid red; */
}

.outerWord {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 470px;
  margin-top: 100px;
  grid-column: 1/ 2;
  grid-row: 1 / 2;
}

img.word {
  width: 219px;
  height: 396px;

  /* border: 1px solid red; */
}

.text {
  display: flex;
  margin-left: 126px;
  align-items: center;
  width: 470px;
  height: 240;
  /* border: 1px solid red; */
  grid-column: 1/2;
  grid-row: 2/3;
}

img.plate {
  width: 1040px;
  margin-right: 121px;
  /* border: 1px solid red; */
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  align-self: center;
}

.outerCircle {
  position: absolute;
  /* border: 1px solid red; */
  width: 880px;
  height: 800px;
  overflow: hidden;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.circle {
  width: 880px;
  height: 880px;
  background-color: hsla(0, 81%, 49%, 0.48);
  border-radius: 50%;
  position: absolute;
  right: -40%;
  bottom: -45%;
}

.hidden {
  visibility: hidden;
}

.menuContainer {
  /* border: 1px solid red; */
  width: 784px;
  height: 452px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 113px;
  gap: 1px;
}

.menuItem {
  position: relative;
  border: 1px solid #000000;
  width: 392px;
  background-color: #fff;
}

.menuItem header {
  font-weight: 400;
  font-size: 20px;
}

.menuItem hr {
  border: 1px solid #ff0000;
  width: 90%;
  z-index: -1;
}

.menuItem article {
  font-size: 12px;
  font-weight: 300;
  width: 41ch;
}

.menuItem img {
  position: absolute;
  top: 0;
  right: 0px;
  width: 80px;
}

.contactContainer {
  width: 528px;
  height: 588px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: hsla(0, 0%, 100%, 0.7);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  /* border: 1px solid red; */
}

.contactContainer header {
  font-size: 32px;
  font-weight: 400;
  text-decoration: underline 2px;
  text-underline-offset: 5px;
}
.visit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.contact a {
  text-decoration: none;
  text-decoration-color: none;
  color: inherit;
}

.hours {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

@media screen and (max-width: 576px) {
  .navbar {
    flex-direction: column;
  }

  .navbar h1 {
    width: 100%;
    /* border: 1px solid red; */
  }

  nav {
    width: 100%;
    margin-right: 0;
  }

  .mainContent {
    /* height: calc(100vh - 48px); */
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    /* border: 1px solid red; */
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;;EAEV,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,QAAQ;EACR,SAAS;EACT,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;EACtB,wCAAwC;EACxC,4EAA4E;EAC5E,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,8BAA8B;EAC9B,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,2BAA2B;EAC7B;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gCAAgC;IAChC,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,2BAA2B;EAC7B;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-wrap: nowrap;\r\n}\r\n\r\n.navbar h1 {\r\n  /* border: 1px solid red; */\r\n  width: 25%;\r\n  text-align: center;\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n\r\n  /* border: 1px solid red; */\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\nnav li {\r\n  list-style: none;\r\n  border-bottom: 2px;\r\n  padding: 10px 10px 5px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\nnav li.active {\r\n  border-bottom: 2px solid red;\r\n}\r\n\r\n.mainContent {\r\n  /* height: calc(100vh - 48px); */\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.outerWord {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: end;\r\n  width: 470px;\r\n  margin-top: 100px;\r\n  grid-column: 1/ 2;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nimg.word {\r\n  width: 219px;\r\n  height: 396px;\r\n\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.text {\r\n  display: flex;\r\n  margin-left: 126px;\r\n  align-items: center;\r\n  width: 470px;\r\n  height: 240;\r\n  /* border: 1px solid red; */\r\n  grid-column: 1/2;\r\n  grid-row: 2/3;\r\n}\r\n\r\nimg.plate {\r\n  width: 1040px;\r\n  margin-right: 121px;\r\n  /* border: 1px solid red; */\r\n  grid-column: 2 / 3;\r\n  grid-row: 1 / 3;\r\n  align-self: center;\r\n}\r\n\r\n.outerCircle {\r\n  position: absolute;\r\n  /* border: 1px solid red; */\r\n  width: 880px;\r\n  height: 800px;\r\n  overflow: hidden;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.circle {\r\n  width: 880px;\r\n  height: 880px;\r\n  background-color: hsla(0, 81%, 49%, 0.48);\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: -40%;\r\n  bottom: -45%;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.menuContainer {\r\n  /* border: 1px solid red; */\r\n  width: 784px;\r\n  height: 452px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-auto-rows: 113px;\r\n  gap: 1px;\r\n}\r\n\r\n.menuItem {\r\n  position: relative;\r\n  border: 1px solid #000000;\r\n  width: 392px;\r\n  background-color: #fff;\r\n}\r\n\r\n.menuItem header {\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n\r\n.menuItem hr {\r\n  border: 1px solid #ff0000;\r\n  width: 90%;\r\n  z-index: -1;\r\n}\r\n\r\n.menuItem article {\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  width: 41ch;\r\n}\r\n\r\n.menuItem img {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0px;\r\n  width: 80px;\r\n}\r\n\r\n.contactContainer {\r\n  width: 528px;\r\n  height: 588px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  background-color: hsla(0, 0%, 100%, 0.7);\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.contactContainer header {\r\n  font-size: 32px;\r\n  font-weight: 400;\r\n  text-decoration: underline 2px;\r\n  text-underline-offset: 5px;\r\n}\r\n.visit {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 300;\r\n}\r\n.contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 300;\r\n}\r\n\r\n.contact a {\r\n  text-decoration: none;\r\n  text-decoration-color: none;\r\n  color: inherit;\r\n}\r\n\r\n.hours {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 300;\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n  .navbar {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .navbar h1 {\r\n    width: 100%;\r\n    /* border: 1px solid red; */\r\n  }\r\n\r\n  nav {\r\n    width: 100%;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .mainContent {\r\n    /* height: calc(100vh - 48px); */\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    /* border: 1px solid red; */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideContactInfo: () => (/* binding */ hideContactInfo),
/* harmony export */   showContactInfo: () => (/* binding */ showContactInfo)
/* harmony export */ });
const contactObj = {
  address: "123 Main Street",
  city: "San Francisco, CA 92125",
  phone: "(235)321-1234",
  email: "info@sushiplace.com",
  mf: "Monday - Friday: 11am - 10pm",
  sat: "Saturday: 11am - 11pm",
  sun: "Sunday: Closed",
};

//Divs
const div_contactContainer = document.createElement("div");
div_contactContainer.classList.add("contactContainer");
const div_visit = document.createElement("div");
div_visit.classList.add("visit");
const div_contact = document.createElement("div");
div_contact.classList.add("contact");
const div_hours = document.createElement("div");
div_hours.classList.add("hours");

//Section headers
const hdr_visit = document.createElement("header");
const hdr_contact = document.createElement("header");
const hdr_hours = document.createElement("header");

//Visit Elements
const address_visit = document.createElement("p");
const city_visit = document.createElement("p");

//Contact Elements
const phone_contact = document.createElement("a");
const email_contact = document.createElement("a");

//Hours Elements
const monToFri_hours = document.createElement("p");
const sat_hours = document.createElement("p");
const sun_hours = document.createElement("p");

function showContactInfo() {
  div_contactContainer.classList.remove("hidden");
  //visit
  hdr_visit.textContent = "Visit";
  address_visit.textContent = contactObj.address;
  city_visit.textContent = contactObj.city;
  div_visit.appendChild(hdr_visit);
  div_visit.appendChild(address_visit);
  div_visit.appendChild(city_visit);
  //contact
  hdr_contact.textContent = "Contact";
  phone_contact.textContent = contactObj.phone;
  phone_contact.href = "tel: 235-321-1234";
  email_contact.textContent = contactObj.email;
  email_contact.href = "mailto:info@sushiplace.com";

  div_contact.appendChild(hdr_contact);
  div_contact.appendChild(phone_contact);
  div_contact.appendChild(email_contact);
  //hours
  hdr_hours.textContent = "Hours";
  monToFri_hours.textContent = contactObj.mf;
  sat_hours.textContent = contactObj.sat;
  sun_hours.textContent = contactObj.sun;
  div_hours.appendChild(hdr_hours);
  div_hours.appendChild(monToFri_hours);
  div_hours.appendChild(sat_hours);
  div_hours.appendChild(sun_hours);

  div_contactContainer.appendChild(div_visit);
  div_contactContainer.appendChild(div_contact);
  div_contactContainer.appendChild(div_hours);
  return div_contactContainer;
}

function hideContactInfo() {
  div_contactContainer.classList.add("hidden");
  return div_contactContainer;
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideHomepage: () => (/* binding */ hideHomepage),
/* harmony export */   hmMainContent: () => (/* binding */ hmMainContent),
/* harmony export */   showHomepage: () => (/* binding */ showHomepage)
/* harmony export */ });
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");
/* harmony import */ var _images_sushi_japanese_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sushi_japanese.png */ "./src/images/sushi_japanese.png");
/* harmony import */ var _images_Component_9_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Component 9.png */ "./src/images/Component 9.png");




//Elements
const hmMainContent = document.createElement("div");

const outerWord = document.createElement("div");
const textContainer = document.createElement("div");
const textParagraph = document.createElement("p");

//Class list of elements
hmMainContent.classList.add("mainContent");
outerWord.classList.add("outerWord");
textContainer.classList.add("text");

//Images
const wordSushi = new Image();
wordSushi.src = _images_sushi_japanese_png__WEBPACK_IMPORTED_MODULE_1__;
wordSushi.alt = 'Japenese caligraphy for the word "sushi"';
wordSushi.classList.add("word");
const plate = new Image();
plate.src = _images_Component_9_png__WEBPACK_IMPORTED_MODULE_2__;
plate.alt = "Plate of sushi";
plate.classList.add("plate");

//Paragraph of text
textParagraph.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque, dolorem laboriosam consequuntur perspiciatisplaceat. Porro doloremque nulla eos, quaerat nemo temporibus id eligendi laborum tempora laudantium. Quo, numquam. Possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere voluptatem beatae,repellendus, veniam blanditiis";

function showHomepage() {
  //Offset of navbar
  let offset = _navBar__WEBPACK_IMPORTED_MODULE_0__.navbar.offsetHeight;
  //elements
  hmMainContent.classList.remove("hidden");
  outerWord.appendChild(wordSushi);
  textContainer.appendChild(textParagraph);
  hmMainContent.appendChild(plate);
  hmMainContent.appendChild(outerWord);
  hmMainContent.appendChild(textContainer);
  console.log(_navBar__WEBPACK_IMPORTED_MODULE_0__.navbar.offsetHeight);

  hmMainContent.style.height = "calc(100vh - " + offset + "px)";

  return hmMainContent;
}

function hideHomepage() {
  hmMainContent.classList.add("hidden");
  return hmMainContent;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideMenu: () => (/* binding */ hideMenu),
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _images_menuItem_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menuItem.png */ "./src/images/menuItem.png");
/* harmony import */ var _images_TunaRoll1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/TunaRoll1.png */ "./src/images/TunaRoll1.png");
/* harmony import */ var _images_SalmonRoll1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/SalmonRoll1.png */ "./src/images/SalmonRoll1.png");
/* harmony import */ var _images_SpicyRoll1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/SpicyRoll1.png */ "./src/images/SpicyRoll1.png");
/* harmony import */ var _images_ShiitakeRoll1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ShiitakeRoll1.png */ "./src/images/ShiitakeRoll1.png");
/* harmony import */ var _images_lobsterRoll1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lobsterRoll1.png */ "./src/images/lobsterRoll1.png");







//Images
const img_California = new Image();
const img_tuna = new Image();
const img_salmon = new Image();
const img_spicy = new Image();
const img_shiitake = new Image();
const img_lobster = new Image();

//Array of menu Items
const arrayOfMenuObjects = [
  {
    name: "California Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_California.src = _images_menuItem_png__WEBPACK_IMPORTED_MODULE_0__),
    altText: (img_California.alt = "Sushi California Roll"),
  },
  {
    name: "Tuna Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_tuna.src = _images_TunaRoll1_png__WEBPACK_IMPORTED_MODULE_1__),
    altText: (img_tuna.alt = "Sushi Tuna Roll"),
  },
  {
    name: "Salmon Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_salmon.src = _images_SalmonRoll1_png__WEBPACK_IMPORTED_MODULE_2__),
    altText: (img_salmon.alt = "Sushi Salmon Roll"),
  },
  {
    name: "Shrimp Tempura Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_salmon.src = _images_SpicyRoll1_png__WEBPACK_IMPORTED_MODULE_3__),
    altText: (img_salmon.alt = "Sushi Shrimp Temura Roll"),
  },
  {
    name: "Spicy Tuna Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_spicy.src = _images_SpicyRoll1_png__WEBPACK_IMPORTED_MODULE_3__),
    altText: (img_spicy.alt = "Sushi Spicy Tuna Roll"),
  },
  {
    name: "Spicy Salmon Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_spicy.src = _images_SpicyRoll1_png__WEBPACK_IMPORTED_MODULE_3__),
    altText: (img_spicy.alt = "Sushi Spicy Salmon Roll"),
  },
  {
    name: "Shiitake Mushroom Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_shiitake.src = _images_ShiitakeRoll1_png__WEBPACK_IMPORTED_MODULE_4__),
    altText: (img_shiitake.alt = "Sushi Shiitake Mushroom Roll"),
  },
  {
    name: "Lobster Roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ut ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis facilis qui odit perspiciatis.",
    image: (img_lobster.src = _images_lobsterRoll1_png__WEBPACK_IMPORTED_MODULE_5__),
    altText: (img_lobster.alt = "Sushi lobster Roll"),
  },
];

//Dive that holds the menu item components.
const div_MenuContainer = document.createElement("div");

//classes
div_MenuContainer.classList.add("menuContainer");

function showMenu() {
  div_MenuContainer.classList.remove("hidden");

  if (div_MenuContainer.childElementCount !== arrayOfMenuObjects.length) {
    for (let i = 0; i < arrayOfMenuObjects.length; i++) {
      const div_MenuItemComponent = document.createElement("div");
      div_MenuItemComponent.classList.add("menuItem");
      const nameOfItem = document.createElement("header");
      nameOfItem.textContent = arrayOfMenuObjects[i].name;
      const hrLine = document.createElement("hr");
      const description = document.createElement("article");
      description.textContent = arrayOfMenuObjects[i].description;
      const image = document.createElement("img");
      image.src = arrayOfMenuObjects[i].image;
      image.alt = arrayOfMenuObjects[i].altText;
      div_MenuItemComponent.appendChild(nameOfItem);
      div_MenuItemComponent.appendChild(hrLine);
      div_MenuItemComponent.appendChild(description);
      div_MenuItemComponent.appendChild(image);

      div_MenuContainer.appendChild(div_MenuItemComponent);
    }
  }
  return div_MenuContainer;
}

function hideMenu() {
  div_MenuContainer.classList.add("hidden");
  return div_MenuContainer;
}


/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   navBar: () => (/* binding */ navBar),
/* harmony export */   navbar: () => (/* binding */ navbar)
/* harmony export */ });
const navbar = document.createElement("div");
const restaurantName = document.createElement("h1");
const navElement = document.createElement("nav");
const navElement_Ul = document.createElement("ul");
const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContent");

//clickable navbar elements
const home = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");

function navBar() {
  navbar.classList.add("navbar");
  restaurantName.innerText = "Sushi Place";
  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";
  navbar.appendChild(restaurantName);
  navElement.appendChild(navElement_Ul);
  navElement_Ul.appendChild(home);
  navElement_Ul.appendChild(menu);
  navElement_Ul.appendChild(contact);
  home.classList.add("active");

  navbar.appendChild(navElement);
  return navbar;
}


/***/ }),

/***/ "./src/images/Component 9.png":
/*!************************************!*\
  !*** ./src/images/Component 9.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Component 9.57910bd69728a7f53b08..png";

/***/ }),

/***/ "./src/images/SalmonRoll1.png":
/*!************************************!*\
  !*** ./src/images/SalmonRoll1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/SalmonRoll1.23e1dbd3bac31f9824a9..png";

/***/ }),

/***/ "./src/images/ShiitakeRoll1.png":
/*!**************************************!*\
  !*** ./src/images/ShiitakeRoll1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/ShiitakeRoll1.b37dffb9b22f65d1804d..png";

/***/ }),

/***/ "./src/images/SpicyRoll1.png":
/*!***********************************!*\
  !*** ./src/images/SpicyRoll1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/SpicyRoll1.a47cb74b9df6f160d896..png";

/***/ }),

/***/ "./src/images/TunaRoll1.png":
/*!**********************************!*\
  !*** ./src/images/TunaRoll1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/TunaRoll1.54f82937fab8f910f7d2..png";

/***/ }),

/***/ "./src/images/lobsterRoll1.png":
/*!*************************************!*\
  !*** ./src/images/lobsterRoll1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/lobsterRoll1.9f96997eead4359e9c08..png";

/***/ }),

/***/ "./src/images/menuItem.png":
/*!*********************************!*\
  !*** ./src/images/menuItem.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/menuItem.aac4083038ba9b3c3317..png";

/***/ }),

/***/ "./src/images/sushi_japanese.png":
/*!***************************************!*\
  !*** ./src/images/sushi_japanese.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/sushi_japanese.34fa6e9eb54d8d7f2a0e..png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






//Body
const body = document.body;
//Background circle
const circleContainer = document.createElement("div");
const circle = document.createElement("div");
circleContainer.classList.add("outerCircle");
circleContainer.appendChild(circle);
circle.classList.add("circle");

//Navbar
body.prepend((0,_navBar__WEBPACK_IMPORTED_MODULE_1__.navBar)());

//Background circle div
body.append(circleContainer);

//Loads homepage after navbar loads. This has to happen for the offset height for the viewport.
setTimeout(() => {
  body.append((0,_homepage__WEBPACK_IMPORTED_MODULE_2__.showHomepage)());
}, 200);

_navBar__WEBPACK_IMPORTED_MODULE_1__.home.addEventListener("click", () => {
  body.append((0,_homepage__WEBPACK_IMPORTED_MODULE_2__.showHomepage)());
  _navBar__WEBPACK_IMPORTED_MODULE_1__.home.classList.add("active");
  _navBar__WEBPACK_IMPORTED_MODULE_1__.menu.classList.remove("active");
  _navBar__WEBPACK_IMPORTED_MODULE_1__.contact.classList.remove("active");
  (0,_menu__WEBPACK_IMPORTED_MODULE_4__.hideMenu)();
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__.hideContactInfo)();
});
_navBar__WEBPACK_IMPORTED_MODULE_1__.menu.addEventListener("click", () => {
  body.append((0,_menu__WEBPACK_IMPORTED_MODULE_4__.showMenu)());
  _navBar__WEBPACK_IMPORTED_MODULE_1__.menu.classList.add("active");
  _navBar__WEBPACK_IMPORTED_MODULE_1__.home.classList.remove("active");
  _navBar__WEBPACK_IMPORTED_MODULE_1__.contact.classList.remove("active");
  (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.hideHomepage)();
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__.hideContactInfo)();
});
_navBar__WEBPACK_IMPORTED_MODULE_1__.contact.addEventListener("click", () => {
  body.append((0,_contact__WEBPACK_IMPORTED_MODULE_3__.showContactInfo)());
  _navBar__WEBPACK_IMPORTED_MODULE_1__.contact.classList.add("active");
  _navBar__WEBPACK_IMPORTED_MODULE_1__.home.classList.remove("active");
  _navBar__WEBPACK_IMPORTED_MODULE_1__.menu.classList.remove("active");
  (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.hideHomepage)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_4__.hideMenu)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0M7QUFDQztBQUNLO0FBQ2pCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdURBQVk7QUFDMUIsQ0FBQztBQUNEO0FBQ0EseUNBQUk7QUFDSixjQUFjLHVEQUFZO0FBQzFCLEVBQUUseUNBQUk7QUFDTixFQUFFLHlDQUFJO0FBQ04sRUFBRSw0Q0FBTztBQUNULEVBQUUsK0NBQVE7QUFDVixFQUFFLHlEQUFlO0FBQ2pCLENBQUM7QUFDRCx5Q0FBSTtBQUNKLGNBQWMsK0NBQVE7QUFDdEIsRUFBRSx5Q0FBSTtBQUNOLEVBQUUseUNBQUk7QUFDTixFQUFFLDRDQUFPO0FBQ1QsRUFBRSx1REFBWTtBQUNkLEVBQUUseURBQWU7QUFDakIsQ0FBQztBQUNELDRDQUFPO0FBQ1AsY0FBYyx5REFBZTtBQUM3QixFQUFFLDRDQUFPO0FBQ1QsRUFBRSx5Q0FBSTtBQUNOLEVBQUUseUNBQUk7QUFDTixFQUFFLHVEQUFZO0FBQ2QsRUFBRSwrQ0FBUTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2YmFyIGgxIHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuXHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbm5hdiBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubmF2IGxpLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLm1haW5Db250ZW50IHtcclxuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTsgKi9cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG59XHJcblxyXG4ub3V0ZXJXb3JkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGdyaWQtY29sdW1uOiAxLyAyO1xyXG4gIGdyaWQtcm93OiAxIC8gMjtcclxufVxyXG5cclxuaW1nLndvcmQge1xyXG4gIHdpZHRoOiAyMTlweDtcclxuICBoZWlnaHQ6IDM5NnB4O1xyXG5cclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0NzBweDtcclxuICBoZWlnaHQ6IDI0MDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICBncmlkLXJvdzogMi8zO1xyXG59XHJcblxyXG5pbWcucGxhdGUge1xyXG4gIHdpZHRoOiAxMDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMjFweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gIGdyaWQtcm93OiAxIC8gMztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vdXRlckNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICB3aWR0aDogODgwcHg7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgd2lkdGg6IDg4MHB4O1xyXG4gIGhlaWdodDogODgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCA4MSUsIDQ5JSwgMC40OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTQwJTtcclxuICBib3R0b206IC00NSU7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1lbnVDb250YWluZXIge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICB3aWR0aDogNzg0cHg7XHJcbiAgaGVpZ2h0OiA0NTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtYXV0by1yb3dzOiAxMTNweDtcclxuICBnYXA6IDFweDtcclxufVxyXG5cclxuLm1lbnVJdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICB3aWR0aDogMzkycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lbnVJdGVtIGhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tZW51SXRlbSBociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubWVudUl0ZW0gYXJ0aWNsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgd2lkdGg6IDQxY2g7XHJcbn1cclxuXHJcbi5tZW51SXRlbSBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLmNvbnRhY3RDb250YWluZXIge1xyXG4gIHdpZHRoOiA1MjhweDtcclxuICBoZWlnaHQ6IDU4OHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLmNvbnRhY3RDb250YWluZXIgaGVhZGVyIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XHJcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XHJcbn1cclxuLnZpc2l0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5jb250YWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY29udGFjdCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaG91cnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBoMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5tYWluQ29udGVudCB7XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTsgKi9cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7O0VBRVYsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4Qyw0RUFBNEU7RUFDNUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBoMSB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaS5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpOyAqL1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm91dGVyV29yZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgd2lkdGg6IDQ3MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICBncmlkLWNvbHVtbjogMS8gMjtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLndvcmQge1xcclxcbiAgd2lkdGg6IDIxOXB4O1xcclxcbiAgaGVpZ2h0OiAzOTZweDtcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMjZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDcwcHg7XFxyXFxuICBoZWlnaHQ6IDI0MDtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcucGxhdGUge1xcclxcbiAgd2lkdGg6IDEwNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTIxcHg7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICBncmlkLXJvdzogMSAvIDM7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vdXRlckNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB3aWR0aDogODgwcHg7XFxyXFxuICBoZWlnaHQ6IDgwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgd2lkdGg6IDg4MHB4O1xcclxcbiAgaGVpZ2h0OiA4ODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgODElLCA0OSUsIDAuNDgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IC00MCU7XFxyXFxuICBib3R0b206IC00NSU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUNvbnRhaW5lciB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB3aWR0aDogNzg0cHg7XFxyXFxuICBoZWlnaHQ6IDQ1MnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLWF1dG8tcm93czogMTEzcHg7XFxyXFxuICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICB3aWR0aDogMzkycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gaGVhZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbSBociB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gYXJ0aWNsZSB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgd2lkdGg6IDQxY2g7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbSBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTI4cHg7XFxyXFxuICBoZWlnaHQ6IDU4OHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Q29udGFpbmVyIGhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xcclxcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxyXFxufVxcclxcbi52aXNpdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcbi5jb250YWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBoMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW5Db250ZW50IHtcXHJcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7ICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0T2JqID0ge1xyXG4gIGFkZHJlc3M6IFwiMTIzIE1haW4gU3RyZWV0XCIsXHJcbiAgY2l0eTogXCJTYW4gRnJhbmNpc2NvLCBDQSA5MjEyNVwiLFxyXG4gIHBob25lOiBcIigyMzUpMzIxLTEyMzRcIixcclxuICBlbWFpbDogXCJpbmZvQHN1c2hpcGxhY2UuY29tXCIsXHJcbiAgbWY6IFwiTW9uZGF5IC0gRnJpZGF5OiAxMWFtIC0gMTBwbVwiLFxyXG4gIHNhdDogXCJTYXR1cmRheTogMTFhbSAtIDExcG1cIixcclxuICBzdW46IFwiU3VuZGF5OiBDbG9zZWRcIixcclxufTtcclxuXHJcbi8vRGl2c1xyXG5jb25zdCBkaXZfY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9jb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xyXG5jb25zdCBkaXZfdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfdmlzaXQuY2xhc3NMaXN0LmFkZChcInZpc2l0XCIpO1xyXG5jb25zdCBkaXZfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5jb25zdCBkaXZfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG5cclxuLy9TZWN0aW9uIGhlYWRlcnNcclxuY29uc3QgaGRyX3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGRyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5jb25zdCBoZHJfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuLy9WaXNpdCBFbGVtZW50c1xyXG5jb25zdCBhZGRyZXNzX3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IGNpdHlfdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbi8vQ29udGFjdCBFbGVtZW50c1xyXG5jb25zdCBwaG9uZV9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbmNvbnN0IGVtYWlsX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbi8vSG91cnMgRWxlbWVudHNcclxuY29uc3QgbW9uVG9GcmlfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuY29uc3Qgc2F0X2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IHN1bl9ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb250YWN0SW5mbygpIHtcclxuICBkaXZfY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIC8vdmlzaXRcclxuICBoZHJfdmlzaXQudGV4dENvbnRlbnQgPSBcIlZpc2l0XCI7XHJcbiAgYWRkcmVzc192aXNpdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouYWRkcmVzcztcclxuICBjaXR5X3Zpc2l0LnRleHRDb250ZW50ID0gY29udGFjdE9iai5jaXR5O1xyXG4gIGRpdl92aXNpdC5hcHBlbmRDaGlsZChoZHJfdmlzaXQpO1xyXG4gIGRpdl92aXNpdC5hcHBlbmRDaGlsZChhZGRyZXNzX3Zpc2l0KTtcclxuICBkaXZfdmlzaXQuYXBwZW5kQ2hpbGQoY2l0eV92aXNpdCk7XHJcbiAgLy9jb250YWN0XHJcbiAgaGRyX2NvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBwaG9uZV9jb250YWN0LnRleHRDb250ZW50ID0gY29udGFjdE9iai5waG9uZTtcclxuICBwaG9uZV9jb250YWN0LmhyZWYgPSBcInRlbDogMjM1LTMyMS0xMjM0XCI7XHJcbiAgZW1haWxfY29udGFjdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouZW1haWw7XHJcbiAgZW1haWxfY29udGFjdC5ocmVmID0gXCJtYWlsdG86aW5mb0BzdXNoaXBsYWNlLmNvbVwiO1xyXG5cclxuICBkaXZfY29udGFjdC5hcHBlbmRDaGlsZChoZHJfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxfY29udGFjdCk7XHJcbiAgLy9ob3Vyc1xyXG4gIGhkcl9ob3Vycy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICBtb25Ub0ZyaV9ob3Vycy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmoubWY7XHJcbiAgc2F0X2hvdXJzLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zYXQ7XHJcbiAgc3VuX2hvdXJzLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zdW47XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKGhkcl9ob3Vycyk7XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKG1vblRvRnJpX2hvdXJzKTtcclxuICBkaXZfaG91cnMuYXBwZW5kQ2hpbGQoc2F0X2hvdXJzKTtcclxuICBkaXZfaG91cnMuYXBwZW5kQ2hpbGQoc3VuX2hvdXJzKTtcclxuXHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X3Zpc2l0KTtcclxuICBkaXZfY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X2hvdXJzKTtcclxuICByZXR1cm4gZGl2X2NvbnRhY3RDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udGFjdEluZm8oKSB7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICByZXR1cm4gZGl2X2NvbnRhY3RDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2QmFyXCI7XHJcbmltcG9ydCBJbWdXb3JkRm9yU3VzaGkgZnJvbSBcIi4vaW1hZ2VzL3N1c2hpX2phcGFuZXNlLnBuZ1wiO1xyXG5pbXBvcnQgSW1nUGxhdGVPZlN1c2hpIGZyb20gXCIuL2ltYWdlcy9Db21wb25lbnQgOS5wbmdcIjtcclxuXHJcbi8vRWxlbWVudHNcclxuZXhwb3J0IGNvbnN0IGhtTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3Qgb3V0ZXJXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IHRleHRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbi8vQ2xhc3MgbGlzdCBvZiBlbGVtZW50c1xyXG5obU1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGVudFwiKTtcclxub3V0ZXJXb3JkLmNsYXNzTGlzdC5hZGQoXCJvdXRlcldvcmRcIik7XHJcbnRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcblxyXG4vL0ltYWdlc1xyXG5jb25zdCB3b3JkU3VzaGkgPSBuZXcgSW1hZ2UoKTtcclxud29yZFN1c2hpLnNyYyA9IEltZ1dvcmRGb3JTdXNoaTtcclxud29yZFN1c2hpLmFsdCA9ICdKYXBlbmVzZSBjYWxpZ3JhcGh5IGZvciB0aGUgd29yZCBcInN1c2hpXCInO1xyXG53b3JkU3VzaGkuY2xhc3NMaXN0LmFkZChcIndvcmRcIik7XHJcbmNvbnN0IHBsYXRlID0gbmV3IEltYWdlKCk7XHJcbnBsYXRlLnNyYyA9IEltZ1BsYXRlT2ZTdXNoaTtcclxucGxhdGUuYWx0ID0gXCJQbGF0ZSBvZiBzdXNoaVwiO1xyXG5wbGF0ZS5jbGFzc0xpc3QuYWRkKFwicGxhdGVcIik7XHJcblxyXG4vL1BhcmFncmFwaCBvZiB0ZXh0XHJcbnRleHRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxyXG4gIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXJjaGl0ZWN0byBlYXF1ZSwgZG9sb3JlbSBsYWJvcmlvc2FtIGNvbnNlcXV1bnR1ciBwZXJzcGljaWF0aXNwbGFjZWF0LiBQb3JybyBkb2xvcmVtcXVlIG51bGxhIGVvcywgcXVhZXJhdCBuZW1vIHRlbXBvcmlidXMgaWQgZWxpZ2VuZGkgbGFib3J1bSB0ZW1wb3JhIGxhdWRhbnRpdW0uIFF1bywgbnVtcXVhbS4gUG9zc2ltdXMhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yaW9zYW0gZmFjZXJlIHZvbHVwdGF0ZW0gYmVhdGFlLHJlcGVsbGVuZHVzLCB2ZW5pYW0gYmxhbmRpdGlpc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dIb21lcGFnZSgpIHtcclxuICAvL09mZnNldCBvZiBuYXZiYXJcclxuICBsZXQgb2Zmc2V0ID0gbmF2YmFyLm9mZnNldEhlaWdodDtcclxuICAvL2VsZW1lbnRzXHJcbiAgaG1NYWluQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIG91dGVyV29yZC5hcHBlbmRDaGlsZCh3b3JkU3VzaGkpO1xyXG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dFBhcmFncmFwaCk7XHJcbiAgaG1NYWluQ29udGVudC5hcHBlbmRDaGlsZChwbGF0ZSk7XHJcbiAgaG1NYWluQ29udGVudC5hcHBlbmRDaGlsZChvdXRlcldvcmQpO1xyXG4gIGhtTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcbiAgY29uc29sZS5sb2cobmF2YmFyLm9mZnNldEhlaWdodCk7XHJcblxyXG4gIGhtTWFpbkNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMHZoIC0gXCIgKyBvZmZzZXQgKyBcInB4KVwiO1xyXG5cclxuICByZXR1cm4gaG1NYWluQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVIb21lcGFnZSgpIHtcclxuICBobU1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIGhtTWFpbkNvbnRlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IEltYWdlMSBmcm9tIFwiLi9pbWFnZXMvbWVudUl0ZW0ucG5nXCI7XHJcbmltcG9ydCBJbWFnZTIgZnJvbSBcIi4vaW1hZ2VzL1R1bmFSb2xsMS5wbmdcIjtcclxuaW1wb3J0IEltYWdlMyBmcm9tIFwiLi9pbWFnZXMvU2FsbW9uUm9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTQgZnJvbSBcIi4vaW1hZ2VzL1NwaWN5Um9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTUgZnJvbSBcIi4vaW1hZ2VzL1NoaWl0YWtlUm9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTYgZnJvbSBcIi4vaW1hZ2VzL2xvYnN0ZXJSb2xsMS5wbmdcIjtcclxuXHJcbi8vSW1hZ2VzXHJcbmNvbnN0IGltZ19DYWxpZm9ybmlhID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ190dW5hID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ19zYWxtb24gPSBuZXcgSW1hZ2UoKTtcclxuY29uc3QgaW1nX3NwaWN5ID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ19zaGlpdGFrZSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfbG9ic3RlciA9IG5ldyBJbWFnZSgpO1xyXG5cclxuLy9BcnJheSBvZiBtZW51IEl0ZW1zXHJcbmNvbnN0IGFycmF5T2ZNZW51T2JqZWN0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkNhbGlmb3JuaWEgUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19DYWxpZm9ybmlhLnNyYyA9IEltYWdlMSksXHJcbiAgICBhbHRUZXh0OiAoaW1nX0NhbGlmb3JuaWEuYWx0ID0gXCJTdXNoaSBDYWxpZm9ybmlhIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR1bmEgUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ190dW5hLnNyYyA9IEltYWdlMiksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3R1bmEuYWx0ID0gXCJTdXNoaSBUdW5hIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNhbG1vbiBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NhbG1vbi5zcmMgPSBJbWFnZTMpLFxyXG4gICAgYWx0VGV4dDogKGltZ19zYWxtb24uYWx0ID0gXCJTdXNoaSBTYWxtb24gUm9sbFwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2hyaW1wIFRlbXB1cmEgUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19zYWxtb24uc3JjID0gSW1hZ2U0KSxcclxuICAgIGFsdFRleHQ6IChpbWdfc2FsbW9uLmFsdCA9IFwiU3VzaGkgU2hyaW1wIFRlbXVyYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTcGljeSBUdW5hIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfc3BpY3kuc3JjID0gSW1hZ2U0KSxcclxuICAgIGFsdFRleHQ6IChpbWdfc3BpY3kuYWx0ID0gXCJTdXNoaSBTcGljeSBUdW5hIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNwaWN5IFNhbG1vbiBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NwaWN5LnNyYyA9IEltYWdlNCksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NwaWN5LmFsdCA9IFwiU3VzaGkgU3BpY3kgU2FsbW9uIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNoaWl0YWtlIE11c2hyb29tIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfc2hpaXRha2Uuc3JjID0gSW1hZ2U1KSxcclxuICAgIGFsdFRleHQ6IChpbWdfc2hpaXRha2UuYWx0ID0gXCJTdXNoaSBTaGlpdGFrZSBNdXNocm9vbSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMb2JzdGVyIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfbG9ic3Rlci5zcmMgPSBJbWFnZTYpLFxyXG4gICAgYWx0VGV4dDogKGltZ19sb2JzdGVyLmFsdCA9IFwiU3VzaGkgbG9ic3RlciBSb2xsXCIpLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vL0RpdmUgdGhhdCBob2xkcyB0aGUgbWVudSBpdGVtIGNvbXBvbmVudHMuXHJcbmNvbnN0IGRpdl9NZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbi8vY2xhc3Nlc1xyXG5kaXZfTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICBkaXZfTWVudUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG5cclxuICBpZiAoZGl2X01lbnVDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgIT09IGFycmF5T2ZNZW51T2JqZWN0cy5sZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZk1lbnVPYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRpdl9NZW51SXRlbUNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XHJcbiAgICAgIGNvbnN0IG5hbWVPZkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgICBuYW1lT2ZJdGVtLnRleHRDb250ZW50ID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLm5hbWU7XHJcbiAgICAgIGNvbnN0IGhyTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBhcnJheU9mTWVudU9iamVjdHNbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1hZ2Uuc3JjID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLmltYWdlO1xyXG4gICAgICBpbWFnZS5hbHQgPSBhcnJheU9mTWVudU9iamVjdHNbaV0uYWx0VGV4dDtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKG5hbWVPZkl0ZW0pO1xyXG4gICAgICBkaXZfTWVudUl0ZW1Db21wb25lbnQuYXBwZW5kQ2hpbGQoaHJMaW5lKTtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICAgIGRpdl9NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl9NZW51SXRlbUNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkaXZfTWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNZW51KCkge1xyXG4gIGRpdl9NZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIGRpdl9NZW51Q29udGFpbmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbmNvbnN0IG5hdkVsZW1lbnRfVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGVudFwiKTtcclxuXHJcbi8vY2xpY2thYmxlIG5hdmJhciBlbGVtZW50c1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuZXhwb3J0IGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdkJhcigpIHtcclxuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcclxuICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSBcIlN1c2hpIFBsYWNlXCI7XHJcbiAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcclxuICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xyXG4gIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcclxuICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKG5hdkVsZW1lbnRfVWwpO1xyXG4gIG5hdkVsZW1lbnRfVWwuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgbmF2RWxlbWVudF9VbC5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXZFbGVtZW50X1VsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkVsZW1lbnQpO1xyXG4gIHJldHVybiBuYXZiYXI7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBuYXZCYXIsIGhvbWUsIG1lbnUsIGNvbnRhY3QgfSBmcm9tIFwiLi9uYXZCYXJcIjtcclxuaW1wb3J0IHsgc2hvd0hvbWVwYWdlLCBoaWRlSG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5pbXBvcnQgeyBzaG93Q29udGFjdEluZm8sIGhpZGVDb250YWN0SW5mbyB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgc2hvd01lbnUsIGhpZGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuLy9Cb2R5XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4vL0JhY2tncm91bmQgY2lyY2xlXHJcbmNvbnN0IGNpcmNsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNpcmNsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3V0ZXJDaXJjbGVcIik7XHJcbmNpcmNsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5jaXJjbGUuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuXHJcbi8vTmF2YmFyXHJcbmJvZHkucHJlcGVuZChuYXZCYXIoKSk7XHJcblxyXG4vL0JhY2tncm91bmQgY2lyY2xlIGRpdlxyXG5ib2R5LmFwcGVuZChjaXJjbGVDb250YWluZXIpO1xyXG5cclxuLy9Mb2FkcyBob21lcGFnZSBhZnRlciBuYXZiYXIgbG9hZHMuIFRoaXMgaGFzIHRvIGhhcHBlbiBmb3IgdGhlIG9mZnNldCBoZWlnaHQgZm9yIHRoZSB2aWV3cG9ydC5cclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgYm9keS5hcHBlbmQoc2hvd0hvbWVwYWdlKCkpO1xyXG59LCAyMDApO1xyXG5cclxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJvZHkuYXBwZW5kKHNob3dIb21lcGFnZSgpKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBoaWRlTWVudSgpO1xyXG4gIGhpZGVDb250YWN0SW5mbygpO1xyXG59KTtcclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJvZHkuYXBwZW5kKHNob3dNZW51KCkpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhpZGVIb21lcGFnZSgpO1xyXG4gIGhpZGVDb250YWN0SW5mbygpO1xyXG59KTtcclxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJvZHkuYXBwZW5kKHNob3dDb250YWN0SW5mbygpKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBoaWRlSG9tZXBhZ2UoKTtcclxuICBoaWRlTWVudSgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9