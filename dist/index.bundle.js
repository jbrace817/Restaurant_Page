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
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");


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

document.body.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.showHomepage)());


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tDO0FBQ0M7QUFDSztBQUNqQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVEQUFZO0FBQzFCLENBQUM7QUFDRDtBQUNBLHlDQUFJO0FBQ0osY0FBYyx1REFBWTtBQUMxQixFQUFFLHlDQUFJO0FBQ04sRUFBRSx5Q0FBSTtBQUNOLEVBQUUsNENBQU87QUFDVCxFQUFFLCtDQUFRO0FBQ1YsRUFBRSx5REFBZTtBQUNqQixDQUFDO0FBQ0QseUNBQUk7QUFDSixjQUFjLCtDQUFRO0FBQ3RCLEVBQUUseUNBQUk7QUFDTixFQUFFLHlDQUFJO0FBQ04sRUFBRSw0Q0FBTztBQUNULEVBQUUsdURBQVk7QUFDZCxFQUFFLHlEQUFlO0FBQ2pCLENBQUM7QUFDRCw0Q0FBTztBQUNQLGNBQWMseURBQWU7QUFDN0IsRUFBRSw0Q0FBTztBQUNULEVBQUUseUNBQUk7QUFDTixFQUFFLHlDQUFJO0FBQ04sRUFBRSx1REFBWTtBQUNkLEVBQUUsK0NBQVE7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2QmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLm5hdmJhciBoMSB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxubmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG5uYXYgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiBsaS5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudCB7XHJcbiAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7ICovXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLm91dGVyV29yZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIHdpZHRoOiA0NzBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBncmlkLWNvbHVtbjogMS8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbmltZy53b3JkIHtcclxuICB3aWR0aDogMjE5cHg7XHJcbiAgaGVpZ2h0OiAzOTZweDtcclxuXHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTI2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDcwcHg7XHJcbiAgaGVpZ2h0OiAyNDA7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgZ3JpZC1yb3c6IDIvMztcclxufVxyXG5cclxuaW1nLnBsYXRlIHtcclxuICB3aWR0aDogMTA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTIxcHg7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICBncmlkLXJvdzogMSAvIDM7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ub3V0ZXJDaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgd2lkdGg6IDg4MHB4O1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIHdpZHRoOiA4ODBweDtcclxuICBoZWlnaHQ6IDg4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgODElLCA0OSUsIDAuNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC00MCU7XHJcbiAgYm90dG9tOiAtNDUlO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZW51Q29udGFpbmVyIHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgd2lkdGg6IDc4NHB4O1xyXG4gIGhlaWdodDogNDUycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWF1dG8tcm93czogMTEzcHg7XHJcbiAgZ2FwOiAxcHg7XHJcbn1cclxuXHJcbi5tZW51SXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgd2lkdGg6IDM5MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZW51SXRlbSBoZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWVudUl0ZW0gaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm1lbnVJdGVtIGFydGljbGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHdpZHRoOiA0MWNoO1xyXG59XHJcblxyXG4ubWVudUl0ZW0gaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0Q29udGFpbmVyIHtcclxuICB3aWR0aDogNTI4cHg7XHJcbiAgaGVpZ2h0OiA1ODhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNyk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbi5jb250YWN0Q29udGFpbmVyIGhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG59XHJcbi52aXNpdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4uY29udGFjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmNvbnRhY3QgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmhvdXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5uYXZiYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgaDEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAubWFpbkNvbnRlbnQge1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7ICovXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVOztFQUVWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsNEVBQTRFO0VBQzVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QiwyQkFBMkI7RUFDN0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgaDEge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4O1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGkuYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluQ29udGVudCB7XFxyXFxuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTsgKi9cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi5vdXRlcldvcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gIHdpZHRoOiA0NzBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvIDI7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxufVxcclxcblxcclxcbmltZy53b3JkIHtcXHJcXG4gIHdpZHRoOiAyMTlweDtcXHJcXG4gIGhlaWdodDogMzk2cHg7XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTI2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQ3MHB4O1xcclxcbiAgaGVpZ2h0OiAyNDA7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZ3JpZC1yb3c6IDIvMztcXHJcXG59XFxyXFxuXFxyXFxuaW1nLnBsYXRlIHtcXHJcXG4gIHdpZHRoOiAxMDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEyMXB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3V0ZXJDaXJjbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgd2lkdGg6IDg4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA4ODBweDtcXHJcXG4gIGhlaWdodDogODgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDgxJSwgNDklLCAwLjQ4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAtNDAlO1xcclxcbiAgYm90dG9tOiAtNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVDb250YWluZXIge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgd2lkdGg6IDc4NHB4O1xcclxcbiAgaGVpZ2h0OiA0NTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IDExM3B4O1xcclxcbiAgZ2FwOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgd2lkdGg6IDM5MnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIGhlYWRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gaHIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIGFydGljbGUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHdpZHRoOiA0MWNoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUyOHB4O1xcclxcbiAgaGVpZ2h0OiA1ODhweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNyk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdENvbnRhaW5lciBoZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDJweDtcXHJcXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcclxcbn1cXHJcXG4udmlzaXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG4uY29udGFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5ob3VycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgaDEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluQ29udGVudCB7XFxyXFxuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpOyAqL1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdE9iaiA9IHtcclxuICBhZGRyZXNzOiBcIjEyMyBNYWluIFN0cmVldFwiLFxyXG4gIGNpdHk6IFwiU2FuIEZyYW5jaXNjbywgQ0EgOTIxMjVcIixcclxuICBwaG9uZTogXCIoMjM1KTMyMS0xMjM0XCIsXHJcbiAgZW1haWw6IFwiaW5mb0BzdXNoaXBsYWNlLmNvbVwiLFxyXG4gIG1mOiBcIk1vbmRheSAtIEZyaWRheTogMTFhbSAtIDEwcG1cIixcclxuICBzYXQ6IFwiU2F0dXJkYXk6IDExYW0gLSAxMXBtXCIsXHJcbiAgc3VuOiBcIlN1bmRheTogQ2xvc2VkXCIsXHJcbn07XHJcblxyXG4vL0RpdnNcclxuY29uc3QgZGl2X2NvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKTtcclxuY29uc3QgZGl2X3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2X3Zpc2l0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpdFwiKTtcclxuY29uc3QgZGl2X2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuY29uc3QgZGl2X2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2X2hvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcclxuXHJcbi8vU2VjdGlvbiBoZWFkZXJzXHJcbmNvbnN0IGhkcl92aXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbmNvbnN0IGhkcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGRyX2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbi8vVmlzaXQgRWxlbWVudHNcclxuY29uc3QgYWRkcmVzc192aXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5jb25zdCBjaXR5X3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4vL0NvbnRhY3QgRWxlbWVudHNcclxuY29uc3QgcGhvbmVfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5jb25zdCBlbWFpbF9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4vL0hvdXJzIEVsZW1lbnRzXHJcbmNvbnN0IG1vblRvRnJpX2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IHNhdF9ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5jb25zdCBzdW5faG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29udGFjdEluZm8oKSB7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAvL3Zpc2l0XHJcbiAgaGRyX3Zpc2l0LnRleHRDb250ZW50ID0gXCJWaXNpdFwiO1xyXG4gIGFkZHJlc3NfdmlzaXQudGV4dENvbnRlbnQgPSBjb250YWN0T2JqLmFkZHJlc3M7XHJcbiAgY2l0eV92aXNpdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouY2l0eTtcclxuICBkaXZfdmlzaXQuYXBwZW5kQ2hpbGQoaGRyX3Zpc2l0KTtcclxuICBkaXZfdmlzaXQuYXBwZW5kQ2hpbGQoYWRkcmVzc192aXNpdCk7XHJcbiAgZGl2X3Zpc2l0LmFwcGVuZENoaWxkKGNpdHlfdmlzaXQpO1xyXG4gIC8vY29udGFjdFxyXG4gIGhkcl9jb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgcGhvbmVfY29udGFjdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmoucGhvbmU7XHJcbiAgcGhvbmVfY29udGFjdC5ocmVmID0gXCJ0ZWw6IDIzNS0zMjEtMTIzNFwiO1xyXG4gIGVtYWlsX2NvbnRhY3QudGV4dENvbnRlbnQgPSBjb250YWN0T2JqLmVtYWlsO1xyXG4gIGVtYWlsX2NvbnRhY3QuaHJlZiA9IFwibWFpbHRvOmluZm9Ac3VzaGlwbGFjZS5jb21cIjtcclxuXHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQoaGRyX2NvbnRhY3QpO1xyXG4gIGRpdl9jb250YWN0LmFwcGVuZENoaWxkKHBob25lX2NvbnRhY3QpO1xyXG4gIGRpdl9jb250YWN0LmFwcGVuZENoaWxkKGVtYWlsX2NvbnRhY3QpO1xyXG4gIC8vaG91cnNcclxuICBoZHJfaG91cnMudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbiAgbW9uVG9GcmlfaG91cnMudGV4dENvbnRlbnQgPSBjb250YWN0T2JqLm1mO1xyXG4gIHNhdF9ob3Vycy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouc2F0O1xyXG4gIHN1bl9ob3Vycy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouc3VuO1xyXG4gIGRpdl9ob3Vycy5hcHBlbmRDaGlsZChoZHJfaG91cnMpO1xyXG4gIGRpdl9ob3Vycy5hcHBlbmRDaGlsZChtb25Ub0ZyaV9ob3Vycyk7XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKHNhdF9ob3Vycyk7XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKHN1bl9ob3Vycyk7XHJcblxyXG4gIGRpdl9jb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl92aXNpdCk7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X2NvbnRhY3QpO1xyXG4gIGRpdl9jb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl9ob3Vycyk7XHJcbiAgcmV0dXJuIGRpdl9jb250YWN0Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUNvbnRhY3RJbmZvKCkge1xyXG4gIGRpdl9jb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIGRpdl9jb250YWN0Q29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdkJhclwiO1xyXG5pbXBvcnQgSW1nV29yZEZvclN1c2hpIGZyb20gXCIuL2ltYWdlcy9zdXNoaV9qYXBhbmVzZS5wbmdcIjtcclxuaW1wb3J0IEltZ1BsYXRlT2ZTdXNoaSBmcm9tIFwiLi9pbWFnZXMvQ29tcG9uZW50IDkucG5nXCI7XHJcblxyXG4vL0VsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBobU1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmNvbnN0IG91dGVyV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCB0ZXh0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4vL0NsYXNzIGxpc3Qgb2YgZWxlbWVudHNcclxuaG1NYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRcIik7XHJcbm91dGVyV29yZC5jbGFzc0xpc3QuYWRkKFwib3V0ZXJXb3JkXCIpO1xyXG50ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG5cclxuLy9JbWFnZXNcclxuY29uc3Qgd29yZFN1c2hpID0gbmV3IEltYWdlKCk7XHJcbndvcmRTdXNoaS5zcmMgPSBJbWdXb3JkRm9yU3VzaGk7XHJcbndvcmRTdXNoaS5hbHQgPSAnSmFwZW5lc2UgY2FsaWdyYXBoeSBmb3IgdGhlIHdvcmQgXCJzdXNoaVwiJztcclxud29yZFN1c2hpLmNsYXNzTGlzdC5hZGQoXCJ3b3JkXCIpO1xyXG5jb25zdCBwbGF0ZSA9IG5ldyBJbWFnZSgpO1xyXG5wbGF0ZS5zcmMgPSBJbWdQbGF0ZU9mU3VzaGk7XHJcbnBsYXRlLmFsdCA9IFwiUGxhdGUgb2Ygc3VzaGlcIjtcclxucGxhdGUuY2xhc3NMaXN0LmFkZChcInBsYXRlXCIpO1xyXG5cclxuLy9QYXJhZ3JhcGggb2YgdGV4dFxyXG50ZXh0UGFyYWdyYXBoLnRleHRDb250ZW50ID1cclxuICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFyY2hpdGVjdG8gZWFxdWUsIGRvbG9yZW0gbGFib3Jpb3NhbSBjb25zZXF1dW50dXIgcGVyc3BpY2lhdGlzcGxhY2VhdC4gUG9ycm8gZG9sb3JlbXF1ZSBudWxsYSBlb3MsIHF1YWVyYXQgbmVtbyB0ZW1wb3JpYnVzIGlkIGVsaWdlbmRpIGxhYm9ydW0gdGVtcG9yYSBsYXVkYW50aXVtLiBRdW8sIG51bXF1YW0uIFBvc3NpbXVzISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBMYWJvcmlvc2FtIGZhY2VyZSB2b2x1cHRhdGVtIGJlYXRhZSxyZXBlbGxlbmR1cywgdmVuaWFtIGJsYW5kaXRpaXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SG9tZXBhZ2UoKSB7XHJcbiAgLy9PZmZzZXQgb2YgbmF2YmFyXHJcbiAgbGV0IG9mZnNldCA9IG5hdmJhci5vZmZzZXRIZWlnaHQ7XHJcbiAgLy9lbGVtZW50c1xyXG4gIGhtTWFpbkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBvdXRlcldvcmQuYXBwZW5kQ2hpbGQod29yZFN1c2hpKTtcclxuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRQYXJhZ3JhcGgpO1xyXG4gIGhtTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhdGUpO1xyXG4gIGhtTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3V0ZXJXb3JkKTtcclxuICBobU1haW5Db250ZW50LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xyXG4gIGNvbnNvbGUubG9nKG5hdmJhci5vZmZzZXRIZWlnaHQpO1xyXG5cclxuICBobU1haW5Db250ZW50LnN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDB2aCAtIFwiICsgb2Zmc2V0ICsgXCJweClcIjtcclxuXHJcbiAgcmV0dXJuIGhtTWFpbkNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlSG9tZXBhZ2UoKSB7XHJcbiAgaG1NYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIHJldHVybiBobU1haW5Db250ZW50O1xyXG59XHJcbiIsImltcG9ydCBJbWFnZTEgZnJvbSBcIi4vaW1hZ2VzL21lbnVJdGVtLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UyIGZyb20gXCIuL2ltYWdlcy9UdW5hUm9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTMgZnJvbSBcIi4vaW1hZ2VzL1NhbG1vblJvbGwxLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2U0IGZyb20gXCIuL2ltYWdlcy9TcGljeVJvbGwxLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2U1IGZyb20gXCIuL2ltYWdlcy9TaGlpdGFrZVJvbGwxLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2U2IGZyb20gXCIuL2ltYWdlcy9sb2JzdGVyUm9sbDEucG5nXCI7XHJcblxyXG4vL0ltYWdlc1xyXG5jb25zdCBpbWdfQ2FsaWZvcm5pYSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfdHVuYSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfc2FsbW9uID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ19zcGljeSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfc2hpaXRha2UgPSBuZXcgSW1hZ2UoKTtcclxuY29uc3QgaW1nX2xvYnN0ZXIgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbi8vQXJyYXkgb2YgbWVudSBJdGVtc1xyXG5jb25zdCBhcnJheU9mTWVudU9iamVjdHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJDYWxpZm9ybmlhIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfQ2FsaWZvcm5pYS5zcmMgPSBJbWFnZTEpLFxyXG4gICAgYWx0VGV4dDogKGltZ19DYWxpZm9ybmlhLmFsdCA9IFwiU3VzaGkgQ2FsaWZvcm5pYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUdW5hIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfdHVuYS5zcmMgPSBJbWFnZTIpLFxyXG4gICAgYWx0VGV4dDogKGltZ190dW5hLmFsdCA9IFwiU3VzaGkgVHVuYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYWxtb24gUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19zYWxtb24uc3JjID0gSW1hZ2UzKSxcclxuICAgIGFsdFRleHQ6IChpbWdfc2FsbW9uLmFsdCA9IFwiU3VzaGkgU2FsbW9uIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNocmltcCBUZW1wdXJhIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfc2FsbW9uLnNyYyA9IEltYWdlNCksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NhbG1vbi5hbHQgPSBcIlN1c2hpIFNocmltcCBUZW11cmEgUm9sbFwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU3BpY3kgVHVuYSBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NwaWN5LnNyYyA9IEltYWdlNCksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NwaWN5LmFsdCA9IFwiU3VzaGkgU3BpY3kgVHVuYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTcGljeSBTYWxtb24gUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19zcGljeS5zcmMgPSBJbWFnZTQpLFxyXG4gICAgYWx0VGV4dDogKGltZ19zcGljeS5hbHQgPSBcIlN1c2hpIFNwaWN5IFNhbG1vbiBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTaGlpdGFrZSBNdXNocm9vbSBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NoaWl0YWtlLnNyYyA9IEltYWdlNSksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NoaWl0YWtlLmFsdCA9IFwiU3VzaGkgU2hpaXRha2UgTXVzaHJvb20gUm9sbFwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTG9ic3RlciBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX2xvYnN0ZXIuc3JjID0gSW1hZ2U2KSxcclxuICAgIGFsdFRleHQ6IChpbWdfbG9ic3Rlci5hbHQgPSBcIlN1c2hpIGxvYnN0ZXIgUm9sbFwiKSxcclxuICB9LFxyXG5dO1xyXG5cclxuLy9EaXZlIHRoYXQgaG9sZHMgdGhlIG1lbnUgaXRlbSBjb21wb25lbnRzLlxyXG5jb25zdCBkaXZfTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vL2NsYXNzZXNcclxuZGl2X01lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVDb250YWluZXJcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgZGl2X01lbnVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHJcbiAgaWYgKGRpdl9NZW51Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ICE9PSBhcnJheU9mTWVudU9iamVjdHMubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZNZW51T2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZfTWVudUl0ZW1Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkaXZfTWVudUl0ZW1Db21wb25lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xyXG4gICAgICBjb25zdCBuYW1lT2ZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgICAgbmFtZU9mSXRlbS50ZXh0Q29udGVudCA9IGFycmF5T2ZNZW51T2JqZWN0c1tpXS5uYW1lO1xyXG4gICAgICBjb25zdCBockxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltYWdlLnNyYyA9IGFycmF5T2ZNZW51T2JqZWN0c1tpXS5pbWFnZTtcclxuICAgICAgaW1hZ2UuYWx0ID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLmFsdFRleHQ7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5hcHBlbmRDaGlsZChuYW1lT2ZJdGVtKTtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKGhyTGluZSk7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgICBkaXZfTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfTWVudUl0ZW1Db21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGl2X01lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTWVudSgpIHtcclxuICBkaXZfTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIHJldHVybiBkaXZfTWVudUNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBzaG93SG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5jb25zdCBuYXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuY29uc3QgbmF2RWxlbWVudF9VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250ZW50XCIpO1xyXG5cclxuLy9jbGlja2FibGUgbmF2YmFyIGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5leHBvcnQgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2QmFyKCkge1xyXG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xyXG4gIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IFwiU3VzaGkgUGxhY2VcIjtcclxuICBob21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xyXG4gIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XHJcbiAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xyXG4gIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2RWxlbWVudF9VbCk7XHJcbiAgbmF2RWxlbWVudF9VbC5hcHBlbmRDaGlsZChob21lKTtcclxuICBuYXZFbGVtZW50X1VsLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIG5hdkVsZW1lbnRfVWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2RWxlbWVudCk7XHJcbiAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoc2hvd0hvbWVwYWdlKCkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IG5hdkJhciwgaG9tZSwgbWVudSwgY29udGFjdCB9IGZyb20gXCIuL25hdkJhclwiO1xyXG5pbXBvcnQgeyBzaG93SG9tZXBhZ2UsIGhpZGVIb21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcbmltcG9ydCB7IHNob3dDb250YWN0SW5mbywgaGlkZUNvbnRhY3RJbmZvIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgeyBzaG93TWVudSwgaGlkZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG4vL0JvZHlcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbi8vQmFja2dyb3VuZCBjaXJjbGVcclxuY29uc3QgY2lyY2xlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY2lyY2xlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvdXRlckNpcmNsZVwiKTtcclxuY2lyY2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcbmNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xyXG5cclxuLy9OYXZiYXJcclxuYm9keS5wcmVwZW5kKG5hdkJhcigpKTtcclxuXHJcbi8vQmFja2dyb3VuZCBjaXJjbGUgZGl2XHJcbmJvZHkuYXBwZW5kKGNpcmNsZUNvbnRhaW5lcik7XHJcblxyXG4vL0xvYWRzIGhvbWVwYWdlIGFmdGVyIG5hdmJhciBsb2Fkcy4gVGhpcyBoYXMgdG8gaGFwcGVuIGZvciB0aGUgb2Zmc2V0IGhlaWdodCBmb3IgdGhlIHZpZXdwb3J0LlxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBib2R5LmFwcGVuZChzaG93SG9tZXBhZ2UoKSk7XHJcbn0sIDIwMCk7XHJcblxyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYm9keS5hcHBlbmQoc2hvd0hvbWVwYWdlKCkpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhpZGVNZW51KCk7XHJcbiAgaGlkZUNvbnRhY3RJbmZvKCk7XHJcbn0pO1xyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYm9keS5hcHBlbmQoc2hvd01lbnUoKSk7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaGlkZUhvbWVwYWdlKCk7XHJcbiAgaGlkZUNvbnRhY3RJbmZvKCk7XHJcbn0pO1xyXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYm9keS5hcHBlbmQoc2hvd0NvbnRhY3RJbmZvKCkpO1xyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhpZGVIb21lcGFnZSgpO1xyXG4gIGhpZGVNZW51KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=