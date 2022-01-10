/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContacts() {
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("contacts");
    returnDiv.setAttribute("id", "main-content");

    const contact1 = makeContact("Fredrik Broccoli", "555-666-777-8", "fredrik@pizzamancy.org", "Head Pizzamancer");
    const contact2 = makeContact("Lala Pepperoni", "666-777-888-9", "lala@pizzamancy.org", "Pizzamancy Overlord");
    const contact3 = makeContact("John \"Pizza\" Italy", "123-456-789-0", "john@pizzamancy.org", "He's Italian");

    const contacts = [contact1, contact2, contact3];
    contacts.forEach(contact => {
        contact.classList.add("contact-item");
        returnDiv.appendChild(contact);
    });

    return returnDiv;
}

function makeContact(name, number, email, specialty) {
    const contact = document.createElement("div");
    contact.classList.add("contact-item");
    const contactName = makeItem("h3", name);
    const contactNumber = makeItem("p", number);
    const contactEmail = makeItem("p", email);
    const contactSpecialty = makeItem("p", specialty);

    contact.appendChild(contactName);
    contact.appendChild(contactSpecialty);
    contact.appendChild(contactNumber);
    contact.appendChild(contactEmail);
    

    return contact;
}

function makeItem(element, text) {
    const item = document.createElement(element);
    item.textContent = text;
    return item;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContacts);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function loadHome() {
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("home");
    returnDiv.setAttribute("id", "main-content")
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    para1.textContent = "Pizza made with pazzion";
    para2.textContent = "A taste of Italian tradition and love";
    para3.textContent = "Visit today!";

    const img = document.createElement("img");
    img.src = "../src/pizzachef.jpg";


    returnDiv.appendChild(para1);
    returnDiv.appendChild(para2);
    returnDiv.appendChild(img);
    returnDiv.appendChild(para3);

    return returnDiv;
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenu() {
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("menu");
    returnDiv.setAttribute("id", "main-content");

    const item1 = makeItem("Quattro Formaggi", "A pizza topped with a combination of four kinds of cheese, perfect for a particularly cheesy meal. Taste traditional Italy in one perfectly cooked dish now, with quattro formaggi!");
    returnDiv.appendChild(item1);

    const item2 = makeItem("Margherita", "\"The queen of the table\", some call her. a true classic, simply topped with mozzarella cheese, tomato sauce and basil. There's nothing to say, it's simple perfection.")
    returnDiv.appendChild(item2);

    const item3 = makeItem("Quattro Stagioni", "Another fan favorite, the quattro stagioni always makes an impression. It's common to find ham, mushrooms, olives and other toppings, as long as it has its own quarter anything goes!")
    returnDiv.appendChild(item3);

    return returnDiv;
}

function makeItem(header, description) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemHeader = document.createElement("h2");
    itemHeader.textContent = header;
    item.appendChild(itemHeader);

    const itemPara = document.createElement("p");
    itemPara.textContent = description;
    item.appendChild(itemPara);
    return item;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");




function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantTitle = document.createElement("h1");
    restaurantTitle.textContent = "Pizzamancy";
    header.appendChild(restaurantTitle);

    const nav = document.createElement("nav");
    const [homeButton, menuButton, contactButton] = createHeaderButtons();
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    header.appendChild(nav);

    return header;
}

function createHeaderButtons() {
    const homeButton = document.createElement("button");
    homeButton.setAttribute("id", "home");
    homeButton.textContent = "home";
    homeButton.classList.add("active");
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menu");
    menuButton.textContent = "menu"
    const contactButton = document.createElement("button");
    contactButton.setAttribute("id", "contact");
    contactButton.textContent = "contact";
    const navButtons = [homeButton, menuButton, contactButton];
    navButtons.forEach(button => {
        button.classList.add("nav-button");
        button.addEventListener("click", (e) => {
            if (button.classList.contains("active")) {
                return;
            }
            navButtons.forEach(item => {
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                }
            });
            button.classList.add("active");
            const mainDiv = document.querySelector(".main");
            mainDiv.replaceChildren();
            const id = button.getAttribute("id");
            if (id === "home") {
                mainDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
            } else if (id === "menu") {
                mainDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
            } else if (id === "contact") {
                mainDiv.appendChild((0,_contacts__WEBPACK_IMPORTED_MODULE_2__["default"])());
            }
        });
    });
    return navButtons;
}

function createMain(mainContent) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    mainDiv.setAttribute("id", "main");
    mainDiv.appendChild(mainContent);
    return mainDiv;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = `Copyright © Fredrik B ${new Date().getFullYear()}`;
    return footer;
}

function initializeWebpage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])()));
    content.appendChild(createFooter());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebpage);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");



(0,_webpage__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDNUJ2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CTztBQUNBO0FBQ1E7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpREFBUTtBQUM1QyxjQUFjO0FBQ2Qsb0NBQW9DLGlEQUFRO0FBQzVDLGNBQWM7QUFDZCxvQ0FBb0MscURBQVk7QUFDaEQ7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHlCQUF5QjtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpREFBUTtBQUMzQztBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7O1VDbkZoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOzs7QUFHMUMsb0RBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0cygpIHtcbiAgICBjb25zdCByZXR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHNcIik7XG4gICAgcmV0dXJuRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250ZW50XCIpO1xuXG4gICAgY29uc3QgY29udGFjdDEgPSBtYWtlQ29udGFjdChcIkZyZWRyaWsgQnJvY2NvbGlcIiwgXCI1NTUtNjY2LTc3Ny04XCIsIFwiZnJlZHJpa0BwaXp6YW1hbmN5Lm9yZ1wiLCBcIkhlYWQgUGl6emFtYW5jZXJcIik7XG4gICAgY29uc3QgY29udGFjdDIgPSBtYWtlQ29udGFjdChcIkxhbGEgUGVwcGVyb25pXCIsIFwiNjY2LTc3Ny04ODgtOVwiLCBcImxhbGFAcGl6emFtYW5jeS5vcmdcIiwgXCJQaXp6YW1hbmN5IE92ZXJsb3JkXCIpO1xuICAgIGNvbnN0IGNvbnRhY3QzID0gbWFrZUNvbnRhY3QoXCJKb2huIFxcXCJQaXp6YVxcXCIgSXRhbHlcIiwgXCIxMjMtNDU2LTc4OS0wXCIsIFwiam9obkBwaXp6YW1hbmN5Lm9yZ1wiLCBcIkhlJ3MgSXRhbGlhblwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RzID0gW2NvbnRhY3QxLCBjb250YWN0MiwgY29udGFjdDNdO1xuICAgIGNvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbVwiKTtcbiAgICAgICAgcmV0dXJuRGl2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldHVybkRpdjtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnRhY3QobmFtZSwgbnVtYmVyLCBlbWFpbCwgc3BlY2lhbHR5KSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pdGVtXCIpO1xuICAgIGNvbnN0IGNvbnRhY3ROYW1lID0gbWFrZUl0ZW0oXCJoM1wiLCBuYW1lKTtcbiAgICBjb25zdCBjb250YWN0TnVtYmVyID0gbWFrZUl0ZW0oXCJwXCIsIG51bWJlcik7XG4gICAgY29uc3QgY29udGFjdEVtYWlsID0gbWFrZUl0ZW0oXCJwXCIsIGVtYWlsKTtcbiAgICBjb25zdCBjb250YWN0U3BlY2lhbHR5ID0gbWFrZUl0ZW0oXCJwXCIsIHNwZWNpYWx0eSk7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RTcGVjaWFsdHkpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlcik7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICAgIFxuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VJdGVtKGVsZW1lbnQsIHRleHQpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpdGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RzOyIsIlxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCByZXR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybkRpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICByZXR1cm5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIilcbiAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9IFwiUGl6emEgbWFkZSB3aXRoIHBhenppb25cIjtcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9IFwiQSB0YXN0ZSBvZiBJdGFsaWFuIHRyYWRpdGlvbiBhbmQgbG92ZVwiO1xuICAgIHBhcmEzLnRleHRDb250ZW50ID0gXCJWaXNpdCB0b2RheSFcIjtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IFwiLi4vc3JjL3BpenphY2hlZi5qcGdcIjtcblxuXG4gICAgcmV0dXJuRGl2LmFwcGVuZENoaWxkKHBhcmExKTtcbiAgICByZXR1cm5EaXYuYXBwZW5kQ2hpbGQocGFyYTIpO1xuICAgIHJldHVybkRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHJldHVybkRpdi5hcHBlbmRDaGlsZChwYXJhMyk7XG5cbiAgICByZXR1cm4gcmV0dXJuRGl2O1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCByZXR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJldHVybkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICByZXR1cm5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBpdGVtMSA9IG1ha2VJdGVtKFwiUXVhdHRybyBGb3JtYWdnaVwiLCBcIkEgcGl6emEgdG9wcGVkIHdpdGggYSBjb21iaW5hdGlvbiBvZiBmb3VyIGtpbmRzIG9mIGNoZWVzZSwgcGVyZmVjdCBmb3IgYSBwYXJ0aWN1bGFybHkgY2hlZXN5IG1lYWwuIFRhc3RlIHRyYWRpdGlvbmFsIEl0YWx5IGluIG9uZSBwZXJmZWN0bHkgY29va2VkIGRpc2ggbm93LCB3aXRoIHF1YXR0cm8gZm9ybWFnZ2khXCIpO1xuICAgIHJldHVybkRpdi5hcHBlbmRDaGlsZChpdGVtMSk7XG5cbiAgICBjb25zdCBpdGVtMiA9IG1ha2VJdGVtKFwiTWFyZ2hlcml0YVwiLCBcIlxcXCJUaGUgcXVlZW4gb2YgdGhlIHRhYmxlXFxcIiwgc29tZSBjYWxsIGhlci4gYSB0cnVlIGNsYXNzaWMsIHNpbXBseSB0b3BwZWQgd2l0aCBtb3p6YXJlbGxhIGNoZWVzZSwgdG9tYXRvIHNhdWNlIGFuZCBiYXNpbC4gVGhlcmUncyBub3RoaW5nIHRvIHNheSwgaXQncyBzaW1wbGUgcGVyZmVjdGlvbi5cIilcbiAgICByZXR1cm5EaXYuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuXG4gICAgY29uc3QgaXRlbTMgPSBtYWtlSXRlbShcIlF1YXR0cm8gU3RhZ2lvbmlcIiwgXCJBbm90aGVyIGZhbiBmYXZvcml0ZSwgdGhlIHF1YXR0cm8gc3RhZ2lvbmkgYWx3YXlzIG1ha2VzIGFuIGltcHJlc3Npb24uIEl0J3MgY29tbW9uIHRvIGZpbmQgaGFtLCBtdXNocm9vbXMsIG9saXZlcyBhbmQgb3RoZXIgdG9wcGluZ3MsIGFzIGxvbmcgYXMgaXQgaGFzIGl0cyBvd24gcXVhcnRlciBhbnl0aGluZyBnb2VzIVwiKVxuICAgIHJldHVybkRpdi5hcHBlbmRDaGlsZChpdGVtMyk7XG5cbiAgICByZXR1cm4gcmV0dXJuRGl2O1xufVxuXG5mdW5jdGlvbiBtYWtlSXRlbShoZWFkZXIsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gICAgY29uc3QgaXRlbUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBpdGVtSGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUhlYWRlcik7XG5cbiAgICBjb25zdCBpdGVtUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1QYXJhLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUGFyYSk7XG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0cyBmcm9tIFwiLi9jb250YWN0c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSBcIlBpenphbWFuY3lcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgW2hvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b25dID0gY3JlYXRlSGVhZGVyQnV0dG9ucygpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQnV0dG9ucygpIHtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJob21lXCI7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIm1lbnVcIlxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcImNvbnRhY3RcIjtcbiAgICBjb25zdCBuYXZCdXR0b25zID0gW2hvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b25dO1xuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2QnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgICAgICAgICBtYWluRGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICBpZiAoaWQgPT09IFwiaG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT09IFwibWVudVwiKSB7XG4gICAgICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT09IFwiY29udGFjdFwiKSB7XG4gICAgICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2FkQ29udGFjdHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBuYXZCdXR0b25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKG1haW5Db250ZW50KSB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSBGcmVkcmlrIEIgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YDtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2VicGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbihsb2FkSG9tZSgpKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJwYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJwYWdlIGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuXG5pbml0aWFsaXplV2VicGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==