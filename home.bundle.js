/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

// UNUSED EXPORTS: loadPage

;// ./src/images/pasta_meatballs.png
/* harmony default export */ const pasta_meatballs = (__webpack_require__.p + "pasta_meatballs.9fe43894ddf74855eeaa667fa7ce79a2.webp");
;// ./src/images/oven-pizza.jpg
/* harmony default export */ const oven_pizza = (__webpack_require__.p + "oven-pizza.f80c5f4ed377087636a2ae942c83d2cb.webp");
;// ./src/images/penne_broccoli.png
/* harmony default export */ const penne_broccoli = (__webpack_require__.p + "penne_broccoli.dec640206279e3b41ae7d2279ab210c0.webp");
;// ./src/images/salad-dish.jpg
/* harmony default export */ const salad_dish = (__webpack_require__.p + "salad-dish.785fd2b8c2bae6dfaa65707de43e6366.webp");
;// ./src/images/ciabatta-bread.jpg
/* harmony default export */ const ciabatta_bread = (__webpack_require__.p + "ciabatta-bread.7acd6dcac51fb3a1a0ed15c74dab8df5.webp");
;// ./src/images/wine-bottle-glass.jpg
/* harmony default export */ const wine_bottle_glass = (__webpack_require__.p + "wine-bottle-glass.92c7de2768713eb32824c18de488a672.webp");
;// ./src/home.js






   
function loadPage() {
    const content = document.querySelector("#content");
    
    // TOP DIV
    const topDiv = document.createElement("div");
    topDiv.className = "home-images";

    const image1 = document.createElement("img");
    image1.src = imgPastaMeatballs1;
    const image2 = document.createElement("img");
    image2.src = imgOvenPizza2;
    const image3 = document.createElement("img");
    image3.src = imgPenneBroccoli3;

    topDiv.appendChild(image1);
    topDiv.appendChild(image2);
    topDiv.appendChild(image3);
    
    // MIDDLE DIV
    const middleDiv = document.createElement("div");
    middleDiv.id = "home-middle";

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Alberto's Eatery";

    const para1 = document.createElement("p");
    para1.textContent = "Authentic Italian flavors, crafted with passion. Enjoy handmade pasta, wood-fired pizzas, and classic dishes made from family recipes. Fresh ingredients, warm hospitality—just like Nonna's kitchen.";

    const para2 = document.createElement("p");
    para2.textContent = "Buon appetito!";

    middleDiv.appendChild(h1);
    middleDiv.appendChild(para1);
    middleDiv.appendChild(para2);

    // BOTTOM DIV
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "home-images";

    const image4 = document.createElement("img");
    image4.src = imgSaladDish4;
    const image5 = document.createElement("img");
    image5.src = imgCiabattaBread5;
    const image6 = document.createElement("img");
    image6.src = imgWineBottleGlass6;   

    bottomDiv.appendChild(image4);
    bottomDiv.appendChild(image5);
    bottomDiv.appendChild(image6);

    content.appendChild(topDiv);
    content.appendChild(middleDiv);
    content.appendChild(bottomDiv);    
}




/******/ })()
;