"use strict";
(self["webpackChunktop_13_resto_page_webpack_refactored"] = self["webpackChunktop_13_resto_page_webpack_refactored"] || []).push([[313,854],{

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _menuNavigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(779);


function loadPage() {
    const content = document.querySelector("#content");    

    // MENU NAV - ensure buttons only created once
    if (!document.querySelector('#menu-heading') && !document.querySelector('.menu-nav')) {
        const h1 = document.createElement("h1");
        h1.id = "menu-heading";
        h1.textContent = "Alberto's Eatery - Menu";

        content.appendChild(h1);

        const menuNav = document.createElement("nav");
        menuNav.className = "menu-nav";

        // MENU NAV - NAV BUTTONS
        const saladsBtn = document.createElement("button");
        saladsBtn.id = "salads-btn";
        saladsBtn.textContent = "Salads";

        const pastaBtn = document.createElement("button");
        pastaBtn.id = "pasta-btn";
        pastaBtn.textContent = "Pasta";

        const pizzaBtn = document.createElement("button");
        pizzaBtn.id = "pizza-btn";
        pizzaBtn.textContent = "Pizza";

        const dessertsBtn = document.createElement("button");
        dessertsBtn.id = "desserts-btn";
        dessertsBtn.textContent = "Desserts";

        const wineBtn = document.createElement("button");
        wineBtn.id = "wine-btn";
        wineBtn.textContent = "Wine";

        menuNav.appendChild(saladsBtn);
        menuNav.appendChild(pastaBtn);
        menuNav.appendChild(pizzaBtn);
        menuNav.appendChild(dessertsBtn);
        menuNav.appendChild(wineBtn);
        content.appendChild(menuNav);    

        (0,_menuNavigation_js__WEBPACK_IMPORTED_MODULE_0__/* .setupMenuNavigation */ .p)();
    }
}




/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ setupMenuNavigation)
/* harmony export */ });
// Handle menu item button clicks
function setupMenuNavigation() {
  const saladsBtn = document.querySelector("#salads-btn");
  const pastaBtn = document.querySelector("#pasta-btn");
  const pizzaBtn = document.querySelector("#pizza-btn");
  const dessertsBtn = document.querySelector("#desserts-btn");
  const wineBtn = document.querySelector("#wine-btn");
  const menuNav = document.querySelector(".menu-nav");
  // const menuItems = document.querySelector('.menu-items');
  // const menuItems = document.querySelector('."menu-nav" > *');
  // const menuItems = document.querySelector('#content > *');

  const components = {
    'salads-btn': () => __webpack_require__.e(/* import() */ 60).then(__webpack_require__.bind(__webpack_require__, 60)),
    'pasta-btn': () => __webpack_require__.e(/* import() */ 599).then(__webpack_require__.bind(__webpack_require__, 599)),
    'pizza-btn': () => __webpack_require__.e(/* import() */ 426).then(__webpack_require__.bind(__webpack_require__, 426)),
    'desserts-btn': () => __webpack_require__.e(/* import() */ 485).then(__webpack_require__.bind(__webpack_require__, 485)),
    'wine-btn': () => __webpack_require__.e(/* import() */ 383).then(__webpack_require__.bind(__webpack_require__, 383))
  };

  function checkForSiblings() {
    if (menuNav.nextSibling !== null) {
        console.log('menuNav has siblings');
        deleteSiblings();
    } 
  }

  function deleteSiblings() {
    // Remove all next siblings
    let nextSibling = menuNav.nextElementSibling;
    while (nextSibling) {
      const toRemove = nextSibling;
      nextSibling = nextSibling.nextElementSibling;
      toRemove.remove();
    }
  } 
    
  [saladsBtn, pastaBtn, pizzaBtn, dessertsBtn, wineBtn].forEach(btn => btn.addEventListener('click', () => {
    const buttonId = btn.id;

    components[buttonId]().then(module => {
        checkForSiblings();
        module.addContent();
    });   
  }));  
}

/***/ })

}]);