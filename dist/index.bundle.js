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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/images/Ellipse.png */ "./src/images/Ellipse.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
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

/*Navbar styling*/

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
  font-size: calc(24px + (52 - 24) * ((100vw - 300px) / (3840 - 1600)));
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
  font-size: calc(10px + (38 - 10) * ((100vw - 300px) / (3840 - 300)));
}

nav li.active {
  border-bottom: 2px solid red;
}

/* HomePage Styling */
.mainContent {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}

.outerWord {
  display: flex;
  justify-content: center;
  align-items: end;
  /* width: 470px; */
  width: 50%;
  margin-top: 100px;
  grid-column: 1/ 2;
  grid-row: 1 / 2;
  /* border: 1px solid red; */
}

img.word {
  /* width: 219px;
  height: 396px; */
  width: 47%;
  /* height: 100%; */

  /* border: 1px solid red; */
}

.text {
  display: flex;
  /* margin-left: 126px; */
  justify-content: center;
  align-items: center;
  /* width: 470px; */
  /* height: 240; */
  width: 80%;
  /* border: 1px solid red; */
  grid-column: 1/2;
  grid-row: 2/3;
}
.text p {
  width: 67%;
  font-size: calc(8px + (20 - 8) * ((100vw - 300px) / (3840 - 1600)));
}

img.plate {
  /* width: 1040px; */
  width: 90%;
  margin-right: 121px;
  /* border: 1px solid red; */
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  align-self: center;
}

/* Background Circle */
.outerCircle {
  position: absolute;
  /* border: 1px solid red; */
  /* width: 880px;
  height: 800px; */
  width: 100%;
  height: 100%;

  overflow: hidden;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.circle {
  /* width: 880px;
  height: 880px; */
  /* width: 90%;
  height: 100%;
  border: 1px solid red;
  background-color: rgba(226, 24, 24, 0.48);
  border-radius: 50%;
  
  right: -35%;
  bottom: -35%; */
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  right: -45%;
  bottom: -45%;
  background-repeat: no-repeat;
  background-attachment: scroll;
}

/* Hides the components */
.hidden {
  visibility: hidden;
}

/* Menu Component */
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

/* Contact Page component */
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

/* Mobile Devices */
@media screen and (max-width: 576px) {
  body {
    width: 100dvw;
  }
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

    /* height: 100%; */
    height: 100dvh;
    grid-template-rows: 1fr, 1fr;
    grid-template-columns: none;
    /* border: 1px solid red; */
  }
  img.plate {
    /* width: 1040px; */

    grid-row: 2/3;
    grid-column: 1/3;
    width: 85%;
    margin: auto;
    margin-bottom: 25%;
    /* border: 1px solid red; */
    justify-content: center;
    align-self: center;
  }
  .outerWord {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    /* width: 470px; */
    width: 100%;
    height: 70%;
    grid-column: 1/2;
    grid-row: 1/2;
    /* border: 1px solid red; */
  }

  img.word {
    /* width: 219px;
    height: 396px; */
    width: 100%;
    /* height: 100%; */

    /* border: 1px solid red; */
  }

  .text {
    display: flex;
    /* margin-left: 126px; */
    margin: auto;
    justify-content: center;
    align-items: center;
    /* width: 470px; */
    /* height: 240; */
    width: 90%;
    height: 70%;
    /* border: 1px solid red; */
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .text p {
    width: 95%;
    font-size: 10px;
  }

  .menuContainer {
    /* border: 1px solid red; */
    width: 90%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    gap: 1px;
  }

  .menuItem {
    position: relative;
    border: 1px solid #000000;
    width: 100%;
    background-color: #fff;
  }

  .menuItem header {
    font-weight: 400;
    font-size: 10px;
  }

  .menuItem hr {
    /* border: 1px solid #ff0000; */
    width: 90%;
    z-index: -1;
  }

  .menuItem article {
    font-size: 6px;
    font-weight: 300;
    width: 41ch;
  }

  .menuItem img {
    position: absolute;
    top: 0;
    right: 0px;
    width: 20%;
  }

  .contactContainer {
    /* width: 528px;
    height: 588px; */
    width: 80%;
    height: 70%;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: hsla(0, 0%, 100%, 0.7);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    /* border: 1px solid red; */
  }
  .outerCircle {
    position: absolute;
    /* border: 1px solid red; */
    /* width: 880px;
    height: 800px; */
    width: 100%;
    height: 100%;

    overflow: hidden;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .circle {
    /* width: 880px;
    height: 880px; */
    /* width: 90%;
    height: 100%;
    border: 1px solid red;
    background-color: rgba(226, 24, 24, 0.48);
    border-radius: 50%;
    
    right: -35%;
    bottom: -35%; */
    /* border: 1px solid red; */
    position: absolute;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: contain;
    background-position: top;
    width: 100%;
    height: 100%;
    right: -45%;
    bottom: -60%;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\n/*Navbar styling*/\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-wrap: nowrap;\r\n}\r\n\r\n.navbar h1 {\r\n  /* border: 1px solid red; */\r\n  width: 25%;\r\n  text-align: center;\r\n  font-size: calc(24px + (52 - 24) * ((100vw - 300px) / (3840 - 1600)));\r\n}\r\n\r\nnav {\r\n  width: 50%;\r\n\r\n  /* border: 1px solid red; */\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\nnav li {\r\n  list-style: none;\r\n  border-bottom: 2px;\r\n  padding: 10px 10px 5px 10px;\r\n  cursor: pointer;\r\n  font-size: calc(10px + (38 - 10) * ((100vw - 300px) / (3840 - 300)));\r\n}\r\n\r\nnav li.active {\r\n  border-bottom: 2px solid red;\r\n}\r\n\r\n/* HomePage Styling */\r\n.mainContent {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.outerWord {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: end;\r\n  /* width: 470px; */\r\n  width: 50%;\r\n  margin-top: 100px;\r\n  grid-column: 1/ 2;\r\n  grid-row: 1 / 2;\r\n  /* border: 1px solid red; */\r\n}\r\n\r\nimg.word {\r\n  /* width: 219px;\r\n  height: 396px; */\r\n  width: 47%;\r\n  /* height: 100%; */\r\n\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.text {\r\n  display: flex;\r\n  /* margin-left: 126px; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  /* width: 470px; */\r\n  /* height: 240; */\r\n  width: 80%;\r\n  /* border: 1px solid red; */\r\n  grid-column: 1/2;\r\n  grid-row: 2/3;\r\n}\r\n.text p {\r\n  width: 67%;\r\n  font-size: calc(8px + (20 - 8) * ((100vw - 300px) / (3840 - 1600)));\r\n}\r\n\r\nimg.plate {\r\n  /* width: 1040px; */\r\n  width: 90%;\r\n  margin-right: 121px;\r\n  /* border: 1px solid red; */\r\n  grid-column: 2 / 3;\r\n  grid-row: 1 / 3;\r\n  align-self: center;\r\n}\r\n\r\n/* Background Circle */\r\n.outerCircle {\r\n  position: absolute;\r\n  /* border: 1px solid red; */\r\n  /* width: 880px;\r\n  height: 800px; */\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  overflow: hidden;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.circle {\r\n  /* width: 880px;\r\n  height: 880px; */\r\n  /* width: 90%;\r\n  height: 100%;\r\n  border: 1px solid red;\r\n  background-color: rgba(226, 24, 24, 0.48);\r\n  border-radius: 50%;\r\n  \r\n  right: -35%;\r\n  bottom: -35%; */\r\n  position: absolute;\r\n  background-image: url(\"/src/images/Ellipse.png\");\r\n  background-size: contain;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  right: -45%;\r\n  bottom: -45%;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n}\r\n\r\n/* Hides the components */\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n/* Menu Component */\r\n.menuContainer {\r\n  /* border: 1px solid red; */\r\n  width: 784px;\r\n  height: 452px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-auto-rows: 113px;\r\n  gap: 1px;\r\n}\r\n\r\n.menuItem {\r\n  position: relative;\r\n  border: 1px solid #000000;\r\n  width: 392px;\r\n  background-color: #fff;\r\n}\r\n\r\n.menuItem header {\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n\r\n.menuItem hr {\r\n  border: 1px solid #ff0000;\r\n  width: 90%;\r\n  z-index: -1;\r\n}\r\n\r\n.menuItem article {\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  width: 41ch;\r\n}\r\n\r\n.menuItem img {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0px;\r\n  width: 80px;\r\n}\r\n\r\n/* Contact Page component */\r\n.contactContainer {\r\n  width: 528px;\r\n  height: 588px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  background-color: hsla(0, 0%, 100%, 0.7);\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.contactContainer header {\r\n  font-size: 32px;\r\n  font-weight: 400;\r\n  text-decoration: underline 2px;\r\n  text-underline-offset: 5px;\r\n}\r\n.visit {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 300;\r\n}\r\n.contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 300;\r\n}\r\n\r\n.contact a {\r\n  text-decoration: none;\r\n  text-decoration-color: none;\r\n  color: inherit;\r\n}\r\n\r\n.hours {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 300;\r\n}\r\n\r\n/* Mobile Devices */\r\n@media screen and (max-width: 576px) {\r\n  body {\r\n    width: 100dvw;\r\n  }\r\n  .navbar {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .navbar h1 {\r\n    width: 100%;\r\n    /* border: 1px solid red; */\r\n  }\r\n\r\n  nav {\r\n    width: 100%;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .mainContent {\r\n    /* height: calc(100vh - 48px); */\r\n    display: grid;\r\n\r\n    /* height: 100%; */\r\n    height: 100dvh;\r\n    grid-template-rows: 1fr, 1fr;\r\n    grid-template-columns: none;\r\n    /* border: 1px solid red; */\r\n  }\r\n  img.plate {\r\n    /* width: 1040px; */\r\n\r\n    grid-row: 2/3;\r\n    grid-column: 1/3;\r\n    width: 85%;\r\n    margin: auto;\r\n    margin-bottom: 25%;\r\n    /* border: 1px solid red; */\r\n    justify-content: center;\r\n    align-self: center;\r\n  }\r\n  .outerWord {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: auto;\r\n    /* width: 470px; */\r\n    width: 100%;\r\n    height: 70%;\r\n    grid-column: 1/2;\r\n    grid-row: 1/2;\r\n    /* border: 1px solid red; */\r\n  }\r\n\r\n  img.word {\r\n    /* width: 219px;\r\n    height: 396px; */\r\n    width: 100%;\r\n    /* height: 100%; */\r\n\r\n    /* border: 1px solid red; */\r\n  }\r\n\r\n  .text {\r\n    display: flex;\r\n    /* margin-left: 126px; */\r\n    margin: auto;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* width: 470px; */\r\n    /* height: 240; */\r\n    width: 90%;\r\n    height: 70%;\r\n    /* border: 1px solid red; */\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n  }\r\n  .text p {\r\n    width: 95%;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .menuContainer {\r\n    /* border: 1px solid red; */\r\n    width: 90%;\r\n    height: 60%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-auto-rows: min-content;\r\n    gap: 1px;\r\n  }\r\n\r\n  .menuItem {\r\n    position: relative;\r\n    border: 1px solid #000000;\r\n    width: 100%;\r\n    background-color: #fff;\r\n  }\r\n\r\n  .menuItem header {\r\n    font-weight: 400;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .menuItem hr {\r\n    /* border: 1px solid #ff0000; */\r\n    width: 90%;\r\n    z-index: -1;\r\n  }\r\n\r\n  .menuItem article {\r\n    font-size: 6px;\r\n    font-weight: 300;\r\n    width: 41ch;\r\n  }\r\n\r\n  .menuItem img {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0px;\r\n    width: 20%;\r\n  }\r\n\r\n  .contactContainer {\r\n    /* width: 528px;\r\n    height: 588px; */\r\n    width: 80%;\r\n    height: 70%;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 55%;\r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    background-color: hsla(0, 0%, 100%, 0.7);\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    /* border: 1px solid red; */\r\n  }\r\n  .outerCircle {\r\n    position: absolute;\r\n    /* border: 1px solid red; */\r\n    /* width: 880px;\r\n    height: 800px; */\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    overflow: hidden;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n  }\r\n\r\n  .circle {\r\n    /* width: 880px;\r\n    height: 880px; */\r\n    /* width: 90%;\r\n    height: 100%;\r\n    border: 1px solid red;\r\n    background-color: rgba(226, 24, 24, 0.48);\r\n    border-radius: 50%;\r\n    \r\n    right: -35%;\r\n    bottom: -35%; */\r\n    /* border: 1px solid red; */\r\n    position: absolute;\r\n    background-image: url(\"/src/images/Ellipse.png\");\r\n    background-size: contain;\r\n    background-position: top;\r\n    width: 100%;\r\n    height: 100%;\r\n    right: -45%;\r\n    bottom: -60%;\r\n    background-repeat: no-repeat;\r\n    background-attachment: scroll;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony export */   showHomepage: () => (/* binding */ showHomepage)
/* harmony export */ });
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");
/* harmony import */ var _images_sushi_japanese_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sushi_japanese.png */ "./src/images/sushi_japanese.png");
/* harmony import */ var _images_Component_9_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Component 9.png */ "./src/images/Component 9.png");




//Elements
const div_mainContainer = document.createElement("div");

//Div containing the ImgWordForSushi image
const div_outerWordForSushi = document.createElement("div");

//Hompage Text
const div_textContainer = document.createElement("div");
const p_text = document.createElement("p");

//Classnames added to the elements
div_mainContainer.classList.add("mainContent");
div_outerWordForSushi.classList.add("outerWord");
div_textContainer.classList.add("text");

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
p_text.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque, dolorem laboriosam consequuntur perspiciatisplaceat. Porro doloremque nulla eos, quaerat nemo temporibus id eligendi laborum tempora laudantium. Quo, numquam. Possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere voluptatem beatae,repellendus, veniam blanditiis";

//Function that creates the elements
function showHomepage() {
  //Offset of navbar
  let offset = _navBar__WEBPACK_IMPORTED_MODULE_0__.navbar.offsetHeight;
  //elements
  div_mainContainer.classList.remove("hidden");
  div_outerWordForSushi.appendChild(wordSushi);
  div_textContainer.appendChild(p_text);
  div_mainContainer.appendChild(plate);
  div_mainContainer.appendChild(div_outerWordForSushi);
  div_mainContainer.appendChild(div_textContainer);
  console.log(_navBar__WEBPACK_IMPORTED_MODULE_0__.navbar.offsetHeight);

  div_mainContainer.style.height = "calc(100vh - " + offset + "px)";

  return div_mainContainer;
}

//Function to hide elements
function hideHomepage() {
  div_mainContainer.classList.add("hidden");
  return div_mainContainer;
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


//Elements
const navbar = document.createElement("div");
const h1_restaurantName = document.createElement("h1");
const nav_element = document.createElement("nav");
const ul_navElement = document.createElement("ul");

//clickable navbar elements
const home = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");

//Navbar class
navbar.classList.add("navbar");

//Function appending elementms
function navBar() {
  h1_restaurantName.innerText = "Sushi Place";
  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";
  navbar.appendChild(h1_restaurantName);
  nav_element.appendChild(ul_navElement);
  ul_navElement.appendChild(home);
  ul_navElement.appendChild(menu);
  ul_navElement.appendChild(contact);
  home.classList.add("active");

  navbar.appendChild(nav_element);
  return navbar;
}

// window.addEventListener("load", () => {
//   document.body.append(showHomepage());
// });
setTimeout(() => {
  document.body.append((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.showHomepage)());
  console.log(navbar.offsetHeight);
}, 200);


/***/ }),

/***/ "./src/images/Component 9.png":
/*!************************************!*\
  !*** ./src/images/Component 9.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Component 9.57910bd69728a7f53b08..png";

/***/ }),

/***/ "./src/images/Ellipse.png":
/*!********************************!*\
  !*** ./src/images/Ellipse.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Ellipse.fb515b593d674ced643e..png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
const div_outerCircle = document.createElement("div");
const div_innerCircle = document.createElement("div");
div_outerCircle.classList.add("outerCircle");
div_outerCircle.appendChild(div_innerCircle);
div_innerCircle.classList.add("circle");

//Navbar
body.prepend((0,_navBar__WEBPACK_IMPORTED_MODULE_1__.navBar)());

//Background circle div
body.append(div_outerCircle);

//Loads homepage after navbar loads. This has to happen for the offset height for the viewport.
// setTimeout(() => {
//   body.append(showHomepage());
// }, 300);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFV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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEM7QUFDUDtBQUNLO0FBQ2pCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUNBQUk7QUFDSixjQUFjLHVEQUFZO0FBQzFCLEVBQUUseUNBQUk7QUFDTixFQUFFLHlDQUFJO0FBQ04sRUFBRSw0Q0FBTztBQUNULEVBQUUsK0NBQVE7QUFDVixFQUFFLHlEQUFlO0FBQ2pCLENBQUM7QUFDRCx5Q0FBSTtBQUNKLGNBQWMsK0NBQVE7QUFDdEIsRUFBRSx5Q0FBSTtBQUNOLEVBQUUseUNBQUk7QUFDTixFQUFFLDRDQUFPO0FBQ1QsRUFBRSx1REFBWTtBQUNkLEVBQUUseURBQWU7QUFDakIsQ0FBQztBQUNELDRDQUFPO0FBQ1AsY0FBYyx5REFBZTtBQUM3QixFQUFFLDRDQUFPO0FBQ1QsRUFBRSx5Q0FBSTtBQUNOLEVBQUUseUNBQUk7QUFDTixFQUFFLHVEQUFZO0FBQ2QsRUFBRSwrQ0FBUTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdkJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvRWxsaXBzZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLypOYXZiYXIgc3R5bGluZyovXHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2YmFyIGgxIHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAoNTIgLSAyNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDM4NDAgLSAxNjAwKSkpO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxubmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG5uYXYgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAoMzggLSAxMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDM4NDAgLSAzMDApKSk7XHJcbn1cclxuXHJcbm5hdiBsaS5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi8qIEhvbWVQYWdlIFN0eWxpbmcgKi9cclxuLm1haW5Db250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5vdXRlcldvcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAvKiB3aWR0aDogNDcwcHg7ICovXHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBncmlkLWNvbHVtbjogMS8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG59XHJcblxyXG5pbWcud29yZCB7XHJcbiAgLyogd2lkdGg6IDIxOXB4O1xyXG4gIGhlaWdodDogMzk2cHg7ICovXHJcbiAgd2lkdGg6IDQ3JTtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG5cclxuLnRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEyNnB4OyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogd2lkdGg6IDQ3MHB4OyAqL1xyXG4gIC8qIGhlaWdodDogMjQwOyAqL1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgZ3JpZC1yb3c6IDIvMztcclxufVxyXG4udGV4dCBwIHtcclxuICB3aWR0aDogNjclO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAoMjAgLSA4KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMzg0MCAtIDE2MDApKSk7XHJcbn1cclxuXHJcbmltZy5wbGF0ZSB7XHJcbiAgLyogd2lkdGg6IDEwNDBweDsgKi9cclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTIxcHg7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICBncmlkLXJvdzogMSAvIDM7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBCYWNrZ3JvdW5kIENpcmNsZSAqL1xyXG4ub3V0ZXJDaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgLyogd2lkdGg6IDg4MHB4O1xyXG4gIGhlaWdodDogODAwcHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgLyogd2lkdGg6IDg4MHB4O1xyXG4gIGhlaWdodDogODgwcHg7ICovXHJcbiAgLyogd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyNCwgMjQsIDAuNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBcclxuICByaWdodDogLTM1JTtcclxuICBib3R0b206IC0zNSU7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICByaWdodDogLTQ1JTtcclxuICBib3R0b206IC00NSU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxufVxyXG5cclxuLyogSGlkZXMgdGhlIGNvbXBvbmVudHMgKi9cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBNZW51IENvbXBvbmVudCAqL1xyXG4ubWVudUNvbnRhaW5lciB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIHdpZHRoOiA3ODRweDtcclxuICBoZWlnaHQ6IDQ1MnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDExM3B4O1xyXG4gIGdhcDogMXB4O1xyXG59XHJcblxyXG4ubWVudUl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIHdpZHRoOiAzOTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWVudUl0ZW0gaGVhZGVyIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1lbnVJdGVtIGhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tZW51SXRlbSBhcnRpY2xlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB3aWR0aDogNDFjaDtcclxufVxyXG5cclxuLm1lbnVJdGVtIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4vKiBDb250YWN0IFBhZ2UgY29tcG9uZW50ICovXHJcbi5jb250YWN0Q29udGFpbmVyIHtcclxuICB3aWR0aDogNTI4cHg7XHJcbiAgaGVpZ2h0OiA1ODhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNyk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbi5jb250YWN0Q29udGFpbmVyIGhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG59XHJcbi52aXNpdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4uY29udGFjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmNvbnRhY3QgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmhvdXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4vKiBNb2JpbGUgRGV2aWNlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGJvZHkge1xyXG4gICAgd2lkdGg6IDEwMGR2dztcclxuICB9XHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciBoMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5tYWluQ29udGVudCB7XHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTsgKi9cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDBkdmg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIH1cclxuICBpbWcucGxhdGUge1xyXG4gICAgLyogd2lkdGg6IDEwNDBweDsgKi9cclxuXHJcbiAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgLm91dGVyV29yZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLyogd2lkdGg6IDQ3MHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gIH1cclxuXHJcbiAgaW1nLndvcmQge1xyXG4gICAgLyogd2lkdGg6IDIxOXB4O1xyXG4gICAgaGVpZ2h0OiAzOTZweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG5cclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTI2cHg7ICovXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiB3aWR0aDogNDcwcHg7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDI0MDsgKi9cclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gIH1cclxuICAudGV4dCBwIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudUNvbnRhaW5lciB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcclxuICAgIGdhcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnVJdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAubWVudUl0ZW0gaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudUl0ZW0gaHIge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDsgKi9cclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5tZW51SXRlbSBhcnRpY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHdpZHRoOiA0MWNoO1xyXG4gIH1cclxuXHJcbiAgLm1lbnVJdGVtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0Q29udGFpbmVyIHtcclxuICAgIC8qIHdpZHRoOiA1MjhweDtcclxuICAgIGhlaWdodDogNTg4cHg7ICovXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjcpO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICB9XHJcbiAgLm91dGVyQ2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICAgIC8qIHdpZHRoOiA4ODBweDtcclxuICAgIGhlaWdodDogODAwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgLyogd2lkdGg6IDg4MHB4O1xyXG4gICAgaGVpZ2h0OiA4ODBweDsgKi9cclxuICAgIC8qIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjQsIDI0LCAwLjQ4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG4gICAgcmlnaHQ6IC0zNSU7XHJcbiAgICBib3R0b206IC0zNSU7ICovXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJpZ2h0OiAtNDUlO1xyXG4gICAgYm90dG9tOiAtNjAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxRUFBcUU7QUFDdkU7O0FBRUE7RUFDRSxVQUFVOztFQUVWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFl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O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0U7b0JBQ2dCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsNEVBQTRFO0lBQzVFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQjtvQkFDZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0U7b0JBQ2dCO0lBQ2hCOzs7Ozs7O21CQU9lO0lBQ2YsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix5REFBZ0Q7SUFDaEQsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtFQUMvQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qTmF2YmFyIHN0eWxpbmcqL1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBoMSB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAoNTIgLSAyNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDM4NDAgLSAxNjAwKSkpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTBweCArICgzOCAtIDEwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMzg0MCAtIDMwMCkpKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpLmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lUGFnZSBTdHlsaW5nICovXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5vdXRlcldvcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gIC8qIHdpZHRoOiA0NzBweDsgKi9cXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLyAyO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5pbWcud29yZCB7XFxyXFxuICAvKiB3aWR0aDogMjE5cHg7XFxyXFxuICBoZWlnaHQ6IDM5NnB4OyAqL1xcclxcbiAgd2lkdGg6IDQ3JTtcXHJcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMjZweDsgKi9cXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC8qIHdpZHRoOiA0NzBweDsgKi9cXHJcXG4gIC8qIGhlaWdodDogMjQwOyAqL1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbn1cXHJcXG4udGV4dCBwIHtcXHJcXG4gIHdpZHRoOiA2NyU7XFxyXFxuICBmb250LXNpemU6IGNhbGMoOHB4ICsgKDIwIC0gOCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDM4NDAgLSAxNjAwKSkpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcucGxhdGUge1xcclxcbiAgLyogd2lkdGg6IDEwNDBweDsgKi9cXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEyMXB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCYWNrZ3JvdW5kIENpcmNsZSAqL1xcclxcbi5vdXRlckNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICAvKiB3aWR0aDogODgwcHg7XFxyXFxuICBoZWlnaHQ6IDgwMHB4OyAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICAvKiB3aWR0aDogODgwcHg7XFxyXFxuICBoZWlnaHQ6IDg4MHB4OyAqL1xcclxcbiAgLyogd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyNCwgMjQsIDAuNDgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgXFxyXFxuICByaWdodDogLTM1JTtcXHJcXG4gIGJvdHRvbTogLTM1JTsgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWFnZXMvRWxsaXBzZS5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcmlnaHQ6IC00NSU7XFxyXFxuICBib3R0b206IC00NSU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGVzIHRoZSBjb21wb25lbnRzICovXFxyXFxuLmhpZGRlbiB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgQ29tcG9uZW50ICovXFxyXFxuLm1lbnVDb250YWluZXIge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgd2lkdGg6IDc4NHB4O1xcclxcbiAgaGVpZ2h0OiA0NTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IDExM3B4O1xcclxcbiAgZ2FwOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgd2lkdGg6IDM5MnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIGhlYWRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gaHIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIGFydGljbGUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHdpZHRoOiA0MWNoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBQYWdlIGNvbXBvbmVudCAqL1xcclxcbi5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MjhweDtcXHJcXG4gIGhlaWdodDogNTg4cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjcpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RDb250YWluZXIgaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG59XFxyXFxuLnZpc2l0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgRGV2aWNlcyAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMGR2dztcXHJcXG4gIH1cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBoMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW5Db250ZW50IHtcXHJcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7ICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyLCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgfVxcclxcbiAgaW1nLnBsYXRlIHtcXHJcXG4gICAgLyogd2lkdGg6IDEwNDBweDsgKi9cXHJcXG5cXHJcXG4gICAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNSU7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5vdXRlcldvcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAvKiB3aWR0aDogNDcwcHg7ICovXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgaW1nLndvcmQge1xcclxcbiAgICAvKiB3aWR0aDogMjE5cHg7XFxyXFxuICAgIGhlaWdodDogMzk2cHg7ICovXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuXFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEyNnB4OyAqL1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiB3aWR0aDogNDcwcHg7ICovXFxyXFxuICAgIC8qIGhlaWdodDogMjQwOyAqL1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgfVxcclxcbiAgLnRleHQgcCB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51Q29udGFpbmVyIHtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDYwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVJdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51SXRlbSBoZWFkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudUl0ZW0gaHIge1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwOyAqL1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51SXRlbSBhcnRpY2xlIHtcXHJcXG4gICAgZm9udC1zaXplOiA2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHdpZHRoOiA0MWNoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVJdGVtIGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3RDb250YWluZXIge1xcclxcbiAgICAvKiB3aWR0aDogNTI4cHg7XFxyXFxuICAgIGhlaWdodDogNTg4cHg7ICovXFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNzAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1NSU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgfVxcclxcbiAgLm91dGVyQ2lyY2xlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICAgIC8qIHdpZHRoOiA4ODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDsgKi9cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2lyY2xlIHtcXHJcXG4gICAgLyogd2lkdGg6IDg4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDg4MHB4OyAqL1xcclxcbiAgICAvKiB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDI0LCAyNCwgMC40OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgXFxyXFxuICAgIHJpZ2h0OiAtMzUlO1xcclxcbiAgICBib3R0b206IC0zNSU7ICovXFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL0VsbGlwc2UucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICByaWdodDogLTQ1JTtcXHJcXG4gICAgYm90dG9tOiAtNjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0T2JqID0ge1xyXG4gIGFkZHJlc3M6IFwiMTIzIE1haW4gU3RyZWV0XCIsXHJcbiAgY2l0eTogXCJTYW4gRnJhbmNpc2NvLCBDQSA5MjEyNVwiLFxyXG4gIHBob25lOiBcIigyMzUpMzIxLTEyMzRcIixcclxuICBlbWFpbDogXCJpbmZvQHN1c2hpcGxhY2UuY29tXCIsXHJcbiAgbWY6IFwiTW9uZGF5IC0gRnJpZGF5OiAxMWFtIC0gMTBwbVwiLFxyXG4gIHNhdDogXCJTYXR1cmRheTogMTFhbSAtIDExcG1cIixcclxuICBzdW46IFwiU3VuZGF5OiBDbG9zZWRcIixcclxufTtcclxuXHJcbi8vRGl2c1xyXG5jb25zdCBkaXZfY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9jb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xyXG5jb25zdCBkaXZfdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfdmlzaXQuY2xhc3NMaXN0LmFkZChcInZpc2l0XCIpO1xyXG5jb25zdCBkaXZfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5jb25zdCBkaXZfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG5cclxuLy9TZWN0aW9uIGhlYWRlcnNcclxuY29uc3QgaGRyX3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGRyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5jb25zdCBoZHJfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuLy9WaXNpdCBFbGVtZW50c1xyXG5jb25zdCBhZGRyZXNzX3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IGNpdHlfdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbi8vQ29udGFjdCBFbGVtZW50c1xyXG5jb25zdCBwaG9uZV9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbmNvbnN0IGVtYWlsX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbi8vSG91cnMgRWxlbWVudHNcclxuY29uc3QgbW9uVG9GcmlfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuY29uc3Qgc2F0X2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IHN1bl9ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb250YWN0SW5mbygpIHtcclxuICBkaXZfY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIC8vdmlzaXRcclxuICBoZHJfdmlzaXQudGV4dENvbnRlbnQgPSBcIlZpc2l0XCI7XHJcbiAgYWRkcmVzc192aXNpdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouYWRkcmVzcztcclxuICBjaXR5X3Zpc2l0LnRleHRDb250ZW50ID0gY29udGFjdE9iai5jaXR5O1xyXG4gIGRpdl92aXNpdC5hcHBlbmRDaGlsZChoZHJfdmlzaXQpO1xyXG4gIGRpdl92aXNpdC5hcHBlbmRDaGlsZChhZGRyZXNzX3Zpc2l0KTtcclxuICBkaXZfdmlzaXQuYXBwZW5kQ2hpbGQoY2l0eV92aXNpdCk7XHJcbiAgLy9jb250YWN0XHJcbiAgaGRyX2NvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBwaG9uZV9jb250YWN0LnRleHRDb250ZW50ID0gY29udGFjdE9iai5waG9uZTtcclxuICBwaG9uZV9jb250YWN0LmhyZWYgPSBcInRlbDogMjM1LTMyMS0xMjM0XCI7XHJcbiAgZW1haWxfY29udGFjdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouZW1haWw7XHJcbiAgZW1haWxfY29udGFjdC5ocmVmID0gXCJtYWlsdG86aW5mb0BzdXNoaXBsYWNlLmNvbVwiO1xyXG5cclxuICBkaXZfY29udGFjdC5hcHBlbmRDaGlsZChoZHJfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxfY29udGFjdCk7XHJcbiAgLy9ob3Vyc1xyXG4gIGhkcl9ob3Vycy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICBtb25Ub0ZyaV9ob3Vycy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmoubWY7XHJcbiAgc2F0X2hvdXJzLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zYXQ7XHJcbiAgc3VuX2hvdXJzLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zdW47XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKGhkcl9ob3Vycyk7XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKG1vblRvRnJpX2hvdXJzKTtcclxuICBkaXZfaG91cnMuYXBwZW5kQ2hpbGQoc2F0X2hvdXJzKTtcclxuICBkaXZfaG91cnMuYXBwZW5kQ2hpbGQoc3VuX2hvdXJzKTtcclxuXHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X3Zpc2l0KTtcclxuICBkaXZfY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X2hvdXJzKTtcclxuICByZXR1cm4gZGl2X2NvbnRhY3RDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udGFjdEluZm8oKSB7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICByZXR1cm4gZGl2X2NvbnRhY3RDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2QmFyXCI7XHJcbmltcG9ydCBJbWdXb3JkRm9yU3VzaGkgZnJvbSBcIi4vaW1hZ2VzL3N1c2hpX2phcGFuZXNlLnBuZ1wiO1xyXG5pbXBvcnQgSW1nUGxhdGVPZlN1c2hpIGZyb20gXCIuL2ltYWdlcy9Db21wb25lbnQgOS5wbmdcIjtcclxuXHJcbi8vRWxlbWVudHNcclxuY29uc3QgZGl2X21haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuLy9EaXYgY29udGFpbmluZyB0aGUgSW1nV29yZEZvclN1c2hpIGltYWdlXHJcbmNvbnN0IGRpdl9vdXRlcldvcmRGb3JTdXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vL0hvbXBhZ2UgVGV4dFxyXG5jb25zdCBkaXZfdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IHBfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuLy9DbGFzc25hbWVzIGFkZGVkIHRvIHRoZSBlbGVtZW50c1xyXG5kaXZfbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRcIik7XHJcbmRpdl9vdXRlcldvcmRGb3JTdXNoaS5jbGFzc0xpc3QuYWRkKFwib3V0ZXJXb3JkXCIpO1xyXG5kaXZfdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuXHJcbi8vSW1hZ2VzXHJcbmNvbnN0IHdvcmRTdXNoaSA9IG5ldyBJbWFnZSgpO1xyXG53b3JkU3VzaGkuc3JjID0gSW1nV29yZEZvclN1c2hpO1xyXG53b3JkU3VzaGkuYWx0ID0gJ0phcGVuZXNlIGNhbGlncmFwaHkgZm9yIHRoZSB3b3JkIFwic3VzaGlcIic7XHJcbndvcmRTdXNoaS5jbGFzc0xpc3QuYWRkKFwid29yZFwiKTtcclxuXHJcbmNvbnN0IHBsYXRlID0gbmV3IEltYWdlKCk7XHJcbnBsYXRlLnNyYyA9IEltZ1BsYXRlT2ZTdXNoaTtcclxucGxhdGUuYWx0ID0gXCJQbGF0ZSBvZiBzdXNoaVwiO1xyXG5wbGF0ZS5jbGFzc0xpc3QuYWRkKFwicGxhdGVcIik7XHJcblxyXG4vL1BhcmFncmFwaCBvZiB0ZXh0XHJcbnBfdGV4dC50ZXh0Q29udGVudCA9XHJcbiAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBcmNoaXRlY3RvIGVhcXVlLCBkb2xvcmVtIGxhYm9yaW9zYW0gY29uc2VxdXVudHVyIHBlcnNwaWNpYXRpc3BsYWNlYXQuIFBvcnJvIGRvbG9yZW1xdWUgbnVsbGEgZW9zLCBxdWFlcmF0IG5lbW8gdGVtcG9yaWJ1cyBpZCBlbGlnZW5kaSBsYWJvcnVtIHRlbXBvcmEgbGF1ZGFudGl1bS4gUXVvLCBudW1xdWFtLiBQb3NzaW11cyEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTGFib3Jpb3NhbSBmYWNlcmUgdm9sdXB0YXRlbSBiZWF0YWUscmVwZWxsZW5kdXMsIHZlbmlhbSBibGFuZGl0aWlzXCI7XHJcblxyXG4vL0Z1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgZWxlbWVudHNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dIb21lcGFnZSgpIHtcclxuICAvL09mZnNldCBvZiBuYXZiYXJcclxuICBsZXQgb2Zmc2V0ID0gbmF2YmFyLm9mZnNldEhlaWdodDtcclxuICAvL2VsZW1lbnRzXHJcbiAgZGl2X21haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkaXZfb3V0ZXJXb3JkRm9yU3VzaGkuYXBwZW5kQ2hpbGQod29yZFN1c2hpKTtcclxuICBkaXZfdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwX3RleHQpO1xyXG4gIGRpdl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXRlKTtcclxuICBkaXZfbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfb3V0ZXJXb3JkRm9yU3VzaGkpO1xyXG4gIGRpdl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl90ZXh0Q29udGFpbmVyKTtcclxuICBjb25zb2xlLmxvZyhuYXZiYXIub2Zmc2V0SGVpZ2h0KTtcclxuXHJcbiAgZGl2X21haW5Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMHZoIC0gXCIgKyBvZmZzZXQgKyBcInB4KVwiO1xyXG5cclxuICByZXR1cm4gZGl2X21haW5Db250YWluZXI7XHJcbn1cclxuXHJcbi8vRnVuY3Rpb24gdG8gaGlkZSBlbGVtZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUhvbWVwYWdlKCkge1xyXG4gIGRpdl9tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIGRpdl9tYWluQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBJbWFnZTEgZnJvbSBcIi4vaW1hZ2VzL21lbnVJdGVtLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UyIGZyb20gXCIuL2ltYWdlcy9UdW5hUm9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTMgZnJvbSBcIi4vaW1hZ2VzL1NhbG1vblJvbGwxLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2U0IGZyb20gXCIuL2ltYWdlcy9TcGljeVJvbGwxLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2U1IGZyb20gXCIuL2ltYWdlcy9TaGlpdGFrZVJvbGwxLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2U2IGZyb20gXCIuL2ltYWdlcy9sb2JzdGVyUm9sbDEucG5nXCI7XHJcblxyXG4vL0ltYWdlc1xyXG5jb25zdCBpbWdfQ2FsaWZvcm5pYSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfdHVuYSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfc2FsbW9uID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ19zcGljeSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfc2hpaXRha2UgPSBuZXcgSW1hZ2UoKTtcclxuY29uc3QgaW1nX2xvYnN0ZXIgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbi8vQXJyYXkgb2YgbWVudSBJdGVtc1xyXG5jb25zdCBhcnJheU9mTWVudU9iamVjdHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJDYWxpZm9ybmlhIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfQ2FsaWZvcm5pYS5zcmMgPSBJbWFnZTEpLFxyXG4gICAgYWx0VGV4dDogKGltZ19DYWxpZm9ybmlhLmFsdCA9IFwiU3VzaGkgQ2FsaWZvcm5pYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUdW5hIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfdHVuYS5zcmMgPSBJbWFnZTIpLFxyXG4gICAgYWx0VGV4dDogKGltZ190dW5hLmFsdCA9IFwiU3VzaGkgVHVuYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYWxtb24gUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19zYWxtb24uc3JjID0gSW1hZ2UzKSxcclxuICAgIGFsdFRleHQ6IChpbWdfc2FsbW9uLmFsdCA9IFwiU3VzaGkgU2FsbW9uIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNocmltcCBUZW1wdXJhIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfc2FsbW9uLnNyYyA9IEltYWdlNCksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NhbG1vbi5hbHQgPSBcIlN1c2hpIFNocmltcCBUZW11cmEgUm9sbFwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU3BpY3kgVHVuYSBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NwaWN5LnNyYyA9IEltYWdlNCksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NwaWN5LmFsdCA9IFwiU3VzaGkgU3BpY3kgVHVuYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTcGljeSBTYWxtb24gUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19zcGljeS5zcmMgPSBJbWFnZTQpLFxyXG4gICAgYWx0VGV4dDogKGltZ19zcGljeS5hbHQgPSBcIlN1c2hpIFNwaWN5IFNhbG1vbiBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTaGlpdGFrZSBNdXNocm9vbSBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NoaWl0YWtlLnNyYyA9IEltYWdlNSksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NoaWl0YWtlLmFsdCA9IFwiU3VzaGkgU2hpaXRha2UgTXVzaHJvb20gUm9sbFwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTG9ic3RlciBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX2xvYnN0ZXIuc3JjID0gSW1hZ2U2KSxcclxuICAgIGFsdFRleHQ6IChpbWdfbG9ic3Rlci5hbHQgPSBcIlN1c2hpIGxvYnN0ZXIgUm9sbFwiKSxcclxuICB9LFxyXG5dO1xyXG5cclxuLy9EaXZlIHRoYXQgaG9sZHMgdGhlIG1lbnUgaXRlbSBjb21wb25lbnRzLlxyXG5jb25zdCBkaXZfTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vL2NsYXNzZXNcclxuZGl2X01lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVDb250YWluZXJcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgZGl2X01lbnVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHJcbiAgaWYgKGRpdl9NZW51Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ICE9PSBhcnJheU9mTWVudU9iamVjdHMubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2ZNZW51T2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZfTWVudUl0ZW1Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkaXZfTWVudUl0ZW1Db21wb25lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xyXG4gICAgICBjb25zdCBuYW1lT2ZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgICAgbmFtZU9mSXRlbS50ZXh0Q29udGVudCA9IGFycmF5T2ZNZW51T2JqZWN0c1tpXS5uYW1lO1xyXG4gICAgICBjb25zdCBockxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltYWdlLnNyYyA9IGFycmF5T2ZNZW51T2JqZWN0c1tpXS5pbWFnZTtcclxuICAgICAgaW1hZ2UuYWx0ID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLmFsdFRleHQ7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5hcHBlbmRDaGlsZChuYW1lT2ZJdGVtKTtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKGhyTGluZSk7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgICBkaXZfTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfTWVudUl0ZW1Db21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGl2X01lbnVDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTWVudSgpIHtcclxuICBkaXZfTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIHJldHVybiBkaXZfTWVudUNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBzaG93SG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5cclxuLy9FbGVtZW50c1xyXG5leHBvcnQgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgaDFfcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmNvbnN0IG5hdl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuY29uc3QgdWxfbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbi8vY2xpY2thYmxlIG5hdmJhciBlbGVtZW50c1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuZXhwb3J0IGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuLy9OYXZiYXIgY2xhc3NcclxubmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XHJcblxyXG4vL0Z1bmN0aW9uIGFwcGVuZGluZyBlbGVtZW50bXNcclxuZXhwb3J0IGZ1bmN0aW9uIG5hdkJhcigpIHtcclxuICBoMV9yZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSBcIlN1c2hpIFBsYWNlXCI7XHJcbiAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcclxuICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xyXG4gIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGgxX3Jlc3RhdXJhbnROYW1lKTtcclxuICBuYXZfZWxlbWVudC5hcHBlbmRDaGlsZCh1bF9uYXZFbGVtZW50KTtcclxuICB1bF9uYXZFbGVtZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIHVsX25hdkVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgdWxfbmF2RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZfZWxlbWVudCk7XHJcbiAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZChzaG93SG9tZXBhZ2UoKSk7XHJcbi8vIH0pO1xyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChzaG93SG9tZXBhZ2UoKSk7XHJcbiAgY29uc29sZS5sb2cobmF2YmFyLm9mZnNldEhlaWdodCk7XHJcbn0sIDIwMCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IG5hdkJhciwgaG9tZSwgbWVudSwgY29udGFjdCwgbmF2YmFyIH0gZnJvbSBcIi4vbmF2QmFyXCI7XHJcbmltcG9ydCB7IHNob3dIb21lcGFnZSwgaGlkZUhvbWVwYWdlIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcclxuaW1wb3J0IHsgc2hvd0NvbnRhY3RJbmZvLCBoaWRlQ29udGFjdEluZm8gfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IHNob3dNZW51LCBoaWRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbi8vQm9keVxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuLy9CYWNrZ3JvdW5kIGNpcmNsZVxyXG5jb25zdCBkaXZfb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBkaXZfaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZChcIm91dGVyQ2lyY2xlXCIpO1xyXG5kaXZfb3V0ZXJDaXJjbGUuYXBwZW5kQ2hpbGQoZGl2X2lubmVyQ2lyY2xlKTtcclxuZGl2X2lubmVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcblxyXG4vL05hdmJhclxyXG5ib2R5LnByZXBlbmQobmF2QmFyKCkpO1xyXG5cclxuLy9CYWNrZ3JvdW5kIGNpcmNsZSBkaXZcclxuYm9keS5hcHBlbmQoZGl2X291dGVyQ2lyY2xlKTtcclxuXHJcbi8vTG9hZHMgaG9tZXBhZ2UgYWZ0ZXIgbmF2YmFyIGxvYWRzLiBUaGlzIGhhcyB0byBoYXBwZW4gZm9yIHRoZSBvZmZzZXQgaGVpZ2h0IGZvciB0aGUgdmlld3BvcnQuXHJcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgIGJvZHkuYXBwZW5kKHNob3dIb21lcGFnZSgpKTtcclxuLy8gfSwgMzAwKTtcclxuXHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBib2R5LmFwcGVuZChzaG93SG9tZXBhZ2UoKSk7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaGlkZU1lbnUoKTtcclxuICBoaWRlQ29udGFjdEluZm8oKTtcclxufSk7XHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBib2R5LmFwcGVuZChzaG93TWVudSgpKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBoaWRlSG9tZXBhZ2UoKTtcclxuICBoaWRlQ29udGFjdEluZm8oKTtcclxufSk7XHJcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBib2R5LmFwcGVuZChzaG93Q29udGFjdEluZm8oKSk7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaGlkZUhvbWVwYWdlKCk7XHJcbiAgaGlkZU1lbnUoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==