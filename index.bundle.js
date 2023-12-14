/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
  console.log(offset);

  // div_mainContainer.style.height = "calc(100vh - " + offset + "px)";
  document.documentElement.style.setProperty("--nav-height", `${offset}px`);

  screen.orientation.addEventListener("change", () => {
    document.documentElement.style.setProperty("--nav-height", `${offset}px`);
    window.location.reload();
    console.log(_navBar__WEBPACK_IMPORTED_MODULE_0__.navbar.offsetHeight);
  });
  console.log(offset);
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
setTimeout(() => {
  document.body.append((0,_homepage__WEBPACK_IMPORTED_MODULE_2__.showHomepage)());
  console.log(_navBar__WEBPACK_IMPORTED_MODULE_1__.navbar.offsetHeight);
}, 100);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBZTtBQUM3QixFQUFFLDRDQUFPO0FBQ1QsRUFBRSx5Q0FBSTtBQUNOLEVBQUUseUNBQUk7QUFDTixFQUFFLHVEQUFZO0FBQ2QsRUFBRSwrQ0FBUTtBQUNWLENBQUM7QUFDRDtBQUNBLHVCQUF1Qix1REFBWTtBQUNuQyxjQUFjLDJDQUFNO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBjb250YWN0T2JqID0ge1xyXG4gIGFkZHJlc3M6IFwiMTIzIE1haW4gU3RyZWV0XCIsXHJcbiAgY2l0eTogXCJTYW4gRnJhbmNpc2NvLCBDQSA5MjEyNVwiLFxyXG4gIHBob25lOiBcIigyMzUpMzIxLTEyMzRcIixcclxuICBlbWFpbDogXCJpbmZvQHN1c2hpcGxhY2UuY29tXCIsXHJcbiAgbWY6IFwiTW9uZGF5IC0gRnJpZGF5OiAxMWFtIC0gMTBwbVwiLFxyXG4gIHNhdDogXCJTYXR1cmRheTogMTFhbSAtIDExcG1cIixcclxuICBzdW46IFwiU3VuZGF5OiBDbG9zZWRcIixcclxufTtcclxuXHJcbi8vRGl2c1xyXG5jb25zdCBkaXZfY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9jb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xyXG5jb25zdCBkaXZfdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfdmlzaXQuY2xhc3NMaXN0LmFkZChcInZpc2l0XCIpO1xyXG5jb25zdCBkaXZfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5jb25zdCBkaXZfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZfaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG5cclxuLy9TZWN0aW9uIGhlYWRlcnNcclxuY29uc3QgaGRyX3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGRyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5jb25zdCBoZHJfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuLy9WaXNpdCBFbGVtZW50c1xyXG5jb25zdCBhZGRyZXNzX3Zpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IGNpdHlfdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbi8vQ29udGFjdCBFbGVtZW50c1xyXG5jb25zdCBwaG9uZV9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbmNvbnN0IGVtYWlsX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbi8vSG91cnMgRWxlbWVudHNcclxuY29uc3QgbW9uVG9GcmlfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuY29uc3Qgc2F0X2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmNvbnN0IHN1bl9ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDb250YWN0SW5mbygpIHtcclxuICBkaXZfY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIC8vdmlzaXRcclxuICBoZHJfdmlzaXQudGV4dENvbnRlbnQgPSBcIlZpc2l0XCI7XHJcbiAgYWRkcmVzc192aXNpdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouYWRkcmVzcztcclxuICBjaXR5X3Zpc2l0LnRleHRDb250ZW50ID0gY29udGFjdE9iai5jaXR5O1xyXG4gIGRpdl92aXNpdC5hcHBlbmRDaGlsZChoZHJfdmlzaXQpO1xyXG4gIGRpdl92aXNpdC5hcHBlbmRDaGlsZChhZGRyZXNzX3Zpc2l0KTtcclxuICBkaXZfdmlzaXQuYXBwZW5kQ2hpbGQoY2l0eV92aXNpdCk7XHJcbiAgLy9jb250YWN0XHJcbiAgaGRyX2NvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBwaG9uZV9jb250YWN0LnRleHRDb250ZW50ID0gY29udGFjdE9iai5waG9uZTtcclxuICBwaG9uZV9jb250YWN0LmhyZWYgPSBcInRlbDogMjM1LTMyMS0xMjM0XCI7XHJcbiAgZW1haWxfY29udGFjdC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouZW1haWw7XHJcbiAgZW1haWxfY29udGFjdC5ocmVmID0gXCJtYWlsdG86aW5mb0BzdXNoaXBsYWNlLmNvbVwiO1xyXG5cclxuICBkaXZfY29udGFjdC5hcHBlbmRDaGlsZChoZHJfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxfY29udGFjdCk7XHJcbiAgLy9ob3Vyc1xyXG4gIGhkcl9ob3Vycy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICBtb25Ub0ZyaV9ob3Vycy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmoubWY7XHJcbiAgc2F0X2hvdXJzLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zYXQ7XHJcbiAgc3VuX2hvdXJzLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zdW47XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKGhkcl9ob3Vycyk7XHJcbiAgZGl2X2hvdXJzLmFwcGVuZENoaWxkKG1vblRvRnJpX2hvdXJzKTtcclxuICBkaXZfaG91cnMuYXBwZW5kQ2hpbGQoc2F0X2hvdXJzKTtcclxuICBkaXZfaG91cnMuYXBwZW5kQ2hpbGQoc3VuX2hvdXJzKTtcclxuXHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X3Zpc2l0KTtcclxuICBkaXZfY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfY29udGFjdCk7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2X2hvdXJzKTtcclxuICByZXR1cm4gZGl2X2NvbnRhY3RDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udGFjdEluZm8oKSB7XHJcbiAgZGl2X2NvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICByZXR1cm4gZGl2X2NvbnRhY3RDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2QmFyXCI7XHJcbmltcG9ydCBJbWdXb3JkRm9yU3VzaGkgZnJvbSBcIi4vaW1hZ2VzL3N1c2hpX2phcGFuZXNlLnBuZ1wiO1xyXG5pbXBvcnQgSW1nUGxhdGVPZlN1c2hpIGZyb20gXCIuL2ltYWdlcy9Db21wb25lbnQgOS5wbmdcIjtcclxuXHJcbi8vRWxlbWVudHNcclxuY29uc3QgZGl2X21haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuLy9EaXYgY29udGFpbmluZyB0aGUgSW1nV29yZEZvclN1c2hpIGltYWdlXHJcbmNvbnN0IGRpdl9vdXRlcldvcmRGb3JTdXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4vL0hvbXBhZ2UgVGV4dFxyXG5jb25zdCBkaXZfdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IHBfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuLy9DbGFzc25hbWVzIGFkZGVkIHRvIHRoZSBlbGVtZW50c1xyXG5kaXZfbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRcIik7XHJcbmRpdl9vdXRlcldvcmRGb3JTdXNoaS5jbGFzc0xpc3QuYWRkKFwib3V0ZXJXb3JkXCIpO1xyXG5kaXZfdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuXHJcbi8vSW1hZ2VzXHJcbmNvbnN0IHdvcmRTdXNoaSA9IG5ldyBJbWFnZSgpO1xyXG53b3JkU3VzaGkuc3JjID0gSW1nV29yZEZvclN1c2hpO1xyXG53b3JkU3VzaGkuYWx0ID0gJ0phcGVuZXNlIGNhbGlncmFwaHkgZm9yIHRoZSB3b3JkIFwic3VzaGlcIic7XHJcbndvcmRTdXNoaS5jbGFzc0xpc3QuYWRkKFwid29yZFwiKTtcclxuXHJcbmNvbnN0IHBsYXRlID0gbmV3IEltYWdlKCk7XHJcbnBsYXRlLnNyYyA9IEltZ1BsYXRlT2ZTdXNoaTtcclxucGxhdGUuYWx0ID0gXCJQbGF0ZSBvZiBzdXNoaVwiO1xyXG5wbGF0ZS5jbGFzc0xpc3QuYWRkKFwicGxhdGVcIik7XHJcblxyXG4vL1BhcmFncmFwaCBvZiB0ZXh0XHJcbnBfdGV4dC50ZXh0Q29udGVudCA9XHJcbiAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBcmNoaXRlY3RvIGVhcXVlLCBkb2xvcmVtIGxhYm9yaW9zYW0gY29uc2VxdXVudHVyIHBlcnNwaWNpYXRpc3BsYWNlYXQuIFBvcnJvIGRvbG9yZW1xdWUgbnVsbGEgZW9zLCBxdWFlcmF0IG5lbW8gdGVtcG9yaWJ1cyBpZCBlbGlnZW5kaSBsYWJvcnVtIHRlbXBvcmEgbGF1ZGFudGl1bS4gUXVvLCBudW1xdWFtLiBQb3NzaW11cyEgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTGFib3Jpb3NhbSBmYWNlcmUgdm9sdXB0YXRlbSBiZWF0YWUscmVwZWxsZW5kdXMsIHZlbmlhbSBibGFuZGl0aWlzXCI7XHJcblxyXG4vL0Z1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgZWxlbWVudHNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dIb21lcGFnZSgpIHtcclxuICAvL09mZnNldCBvZiBuYXZiYXJcclxuICBsZXQgb2Zmc2V0ID0gbmF2YmFyLm9mZnNldEhlaWdodDtcclxuICAvL2VsZW1lbnRzXHJcbiAgZGl2X21haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkaXZfb3V0ZXJXb3JkRm9yU3VzaGkuYXBwZW5kQ2hpbGQod29yZFN1c2hpKTtcclxuICBkaXZfdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChwX3RleHQpO1xyXG4gIGRpdl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXRlKTtcclxuICBkaXZfbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZfb3V0ZXJXb3JkRm9yU3VzaGkpO1xyXG4gIGRpdl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl90ZXh0Q29udGFpbmVyKTtcclxuICBjb25zb2xlLmxvZyhvZmZzZXQpO1xyXG5cclxuICAvLyBkaXZfbWFpbkNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwdmggLSBcIiArIG9mZnNldCArIFwicHgpXCI7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1uYXYtaGVpZ2h0XCIsIGAke29mZnNldH1weGApO1xyXG5cclxuICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW5hdi1oZWlnaHRcIiwgYCR7b2Zmc2V0fXB4YCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBjb25zb2xlLmxvZyhuYXZiYXIub2Zmc2V0SGVpZ2h0KTtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhvZmZzZXQpO1xyXG4gIHJldHVybiBkaXZfbWFpbkNvbnRhaW5lcjtcclxufVxyXG5cclxuLy9GdW5jdGlvbiB0byBoaWRlIGVsZW1lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlSG9tZXBhZ2UoKSB7XHJcbiAgZGl2X21haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICByZXR1cm4gZGl2X21haW5Db250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IEltYWdlMSBmcm9tIFwiLi9pbWFnZXMvbWVudUl0ZW0ucG5nXCI7XHJcbmltcG9ydCBJbWFnZTIgZnJvbSBcIi4vaW1hZ2VzL1R1bmFSb2xsMS5wbmdcIjtcclxuaW1wb3J0IEltYWdlMyBmcm9tIFwiLi9pbWFnZXMvU2FsbW9uUm9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTQgZnJvbSBcIi4vaW1hZ2VzL1NwaWN5Um9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTUgZnJvbSBcIi4vaW1hZ2VzL1NoaWl0YWtlUm9sbDEucG5nXCI7XHJcbmltcG9ydCBJbWFnZTYgZnJvbSBcIi4vaW1hZ2VzL2xvYnN0ZXJSb2xsMS5wbmdcIjtcclxuXHJcbi8vSW1hZ2VzXHJcbmNvbnN0IGltZ19DYWxpZm9ybmlhID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ190dW5hID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ19zYWxtb24gPSBuZXcgSW1hZ2UoKTtcclxuY29uc3QgaW1nX3NwaWN5ID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IGltZ19zaGlpdGFrZSA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBpbWdfbG9ic3RlciA9IG5ldyBJbWFnZSgpO1xyXG5cclxuLy9BcnJheSBvZiBtZW51IEl0ZW1zXHJcbmNvbnN0IGFycmF5T2ZNZW51T2JqZWN0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkNhbGlmb3JuaWEgUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19DYWxpZm9ybmlhLnNyYyA9IEltYWdlMSksXHJcbiAgICBhbHRUZXh0OiAoaW1nX0NhbGlmb3JuaWEuYWx0ID0gXCJTdXNoaSBDYWxpZm9ybmlhIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR1bmEgUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ190dW5hLnNyYyA9IEltYWdlMiksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3R1bmEuYWx0ID0gXCJTdXNoaSBUdW5hIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNhbG1vbiBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NhbG1vbi5zcmMgPSBJbWFnZTMpLFxyXG4gICAgYWx0VGV4dDogKGltZ19zYWxtb24uYWx0ID0gXCJTdXNoaSBTYWxtb24gUm9sbFwiKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2hyaW1wIFRlbXB1cmEgUm9sbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCB0ZW1wb3JhIHV0IGVhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVWxsYW0gb2ZmaWNpaXMgZmFjaWxpcyBxdWkgb2RpdCBwZXJzcGljaWF0aXMuXCIsXHJcbiAgICBpbWFnZTogKGltZ19zYWxtb24uc3JjID0gSW1hZ2U0KSxcclxuICAgIGFsdFRleHQ6IChpbWdfc2FsbW9uLmFsdCA9IFwiU3VzaGkgU2hyaW1wIFRlbXVyYSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTcGljeSBUdW5hIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfc3BpY3kuc3JjID0gSW1hZ2U0KSxcclxuICAgIGFsdFRleHQ6IChpbWdfc3BpY3kuYWx0ID0gXCJTdXNoaSBTcGljeSBUdW5hIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNwaWN5IFNhbG1vbiBSb2xsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IHRlbXBvcmEgdXQgZWEhIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBVbGxhbSBvZmZpY2lpcyBmYWNpbGlzIHF1aSBvZGl0IHBlcnNwaWNpYXRpcy5cIixcclxuICAgIGltYWdlOiAoaW1nX3NwaWN5LnNyYyA9IEltYWdlNCksXHJcbiAgICBhbHRUZXh0OiAoaW1nX3NwaWN5LmFsdCA9IFwiU3VzaGkgU3BpY3kgU2FsbW9uIFJvbGxcIiksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNoaWl0YWtlIE11c2hyb29tIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfc2hpaXRha2Uuc3JjID0gSW1hZ2U1KSxcclxuICAgIGFsdFRleHQ6IChpbWdfc2hpaXRha2UuYWx0ID0gXCJTdXNoaSBTaGlpdGFrZSBNdXNocm9vbSBSb2xsXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMb2JzdGVyIFJvbGxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEltcGVkaXQgdGVtcG9yYSB1dCBlYSEgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIG9mZmljaWlzIGZhY2lsaXMgcXVpIG9kaXQgcGVyc3BpY2lhdGlzLlwiLFxyXG4gICAgaW1hZ2U6IChpbWdfbG9ic3Rlci5zcmMgPSBJbWFnZTYpLFxyXG4gICAgYWx0VGV4dDogKGltZ19sb2JzdGVyLmFsdCA9IFwiU3VzaGkgbG9ic3RlciBSb2xsXCIpLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vL0RpdmUgdGhhdCBob2xkcyB0aGUgbWVudSBpdGVtIGNvbXBvbmVudHMuXHJcbmNvbnN0IGRpdl9NZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbi8vY2xhc3Nlc1xyXG5kaXZfTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICBkaXZfTWVudUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG5cclxuICBpZiAoZGl2X01lbnVDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgIT09IGFycmF5T2ZNZW51T2JqZWN0cy5sZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZk1lbnVPYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRpdl9NZW51SXRlbUNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRpdl9NZW51SXRlbUNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XHJcbiAgICAgIGNvbnN0IG5hbWVPZkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgICBuYW1lT2ZJdGVtLnRleHRDb250ZW50ID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLm5hbWU7XHJcbiAgICAgIGNvbnN0IGhyTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBhcnJheU9mTWVudU9iamVjdHNbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1hZ2Uuc3JjID0gYXJyYXlPZk1lbnVPYmplY3RzW2ldLmltYWdlO1xyXG4gICAgICBpbWFnZS5hbHQgPSBhcnJheU9mTWVudU9iamVjdHNbaV0uYWx0VGV4dDtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKG5hbWVPZkl0ZW0pO1xyXG4gICAgICBkaXZfTWVudUl0ZW1Db21wb25lbnQuYXBwZW5kQ2hpbGQoaHJMaW5lKTtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgICAgZGl2X01lbnVJdGVtQ29tcG9uZW50LmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICAgIGRpdl9NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl9NZW51SXRlbUNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkaXZfTWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNZW51KCkge1xyXG4gIGRpdl9NZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcmV0dXJuIGRpdl9NZW51Q29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IHNob3dIb21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcblxyXG4vL0VsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBoMV9yZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuY29uc3QgbmF2X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5jb25zdCB1bF9uYXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuLy9jbGlja2FibGUgbmF2YmFyIGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5leHBvcnQgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4vL05hdmJhciBjbGFzc1xyXG5uYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcclxuXHJcbi8vRnVuY3Rpb24gYXBwZW5kaW5nIGVsZW1lbnRtc1xyXG5leHBvcnQgZnVuY3Rpb24gbmF2QmFyKCkge1xyXG4gIGgxX3Jlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IFwiU3VzaGkgUGxhY2VcIjtcclxuICBob21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xyXG4gIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XHJcbiAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcclxuICBuYXZiYXIuYXBwZW5kQ2hpbGQoaDFfcmVzdGF1cmFudE5hbWUpO1xyXG4gIG5hdl9lbGVtZW50LmFwcGVuZENoaWxkKHVsX25hdkVsZW1lbnQpO1xyXG4gIHVsX25hdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgdWxfbmF2RWxlbWVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuICB1bF9uYXZFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdl9lbGVtZW50KTtcclxuICByZXR1cm4gbmF2YmFyO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBuYXZCYXIsIGhvbWUsIG1lbnUsIGNvbnRhY3QsIG5hdmJhciB9IGZyb20gXCIuL25hdkJhclwiO1xyXG5pbXBvcnQgeyBzaG93SG9tZXBhZ2UsIGhpZGVIb21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcbmltcG9ydCB7IHNob3dDb250YWN0SW5mbywgaGlkZUNvbnRhY3RJbmZvIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgeyBzaG93TWVudSwgaGlkZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG4vL0JvZHlcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4vL0JhY2tncm91bmQgY2lyY2xlXHJcbmNvbnN0IGRpdl9vdXRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IGRpdl9pbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdl9vdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKFwib3V0ZXJDaXJjbGVcIik7XHJcbmRpdl9vdXRlckNpcmNsZS5hcHBlbmRDaGlsZChkaXZfaW5uZXJDaXJjbGUpO1xyXG5kaXZfaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuXHJcbi8vTmF2YmFyXHJcbmJvZHkucHJlcGVuZChuYXZCYXIoKSk7XHJcblxyXG4vL0JhY2tncm91bmQgY2lyY2xlIGRpdlxyXG5ib2R5LmFwcGVuZChkaXZfb3V0ZXJDaXJjbGUpO1xyXG5cclxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJvZHkuYXBwZW5kKHNob3dIb21lcGFnZSgpKTtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBoaWRlTWVudSgpO1xyXG4gIGhpZGVDb250YWN0SW5mbygpO1xyXG59KTtcclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJvZHkuYXBwZW5kKHNob3dNZW51KCkpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhpZGVIb21lcGFnZSgpO1xyXG4gIGhpZGVDb250YWN0SW5mbygpO1xyXG59KTtcclxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJvZHkuYXBwZW5kKHNob3dDb250YWN0SW5mbygpKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBoaWRlSG9tZXBhZ2UoKTtcclxuICBoaWRlTWVudSgpO1xyXG59KTtcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2hvd0hvbWVwYWdlKCkpO1xyXG4gIGNvbnNvbGUubG9nKG5hdmJhci5vZmZzZXRIZWlnaHQpO1xyXG59LCAxMDApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=