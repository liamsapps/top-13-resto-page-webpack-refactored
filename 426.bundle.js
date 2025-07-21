"use strict";
(self["webpackChunktop_13_resto_page_webpack_refactored"] = self["webpackChunktop_13_resto_page_webpack_refactored"] || []).push([[426],{

/***/ 426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addContent: () => (/* binding */ addContent)
/* harmony export */ });
function addContent() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "PIZZA";

    content.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";       

    // Pizza #1
    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    const menuPrice1 = document.createElement("div");
    menuPrice1.className = "menu-item";
    
    const pizza_1_Title = document.createElement("h2");
    pizza_1_Title.textContent = "MARGHERITA";
        
    const pizza_1_Desc = document.createElement("p");
    pizza_1_Desc.textContent = "Fresh basil, mozzarella, olive oil, Mozzarella di Buffalo / Anchovies";
    
    const pizza_1_Price = document.createElement("p");
    pizza_1_Price.textContent = "$14 / $18";
    
    menuItem1.appendChild(pizza_1_Title);
    menuItem1.appendChild(pizza_1_Desc);
    menuPrice1.appendChild(pizza_1_Price);
    
    menuItems.appendChild(menuItem1);
    menuItems.appendChild(menuPrice1);

    // Pizza #2
    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    const menuPrice2 = document.createElement("div");
    menuPrice2.className = "menu-item";
    
    const pizza_2_Title = document.createElement("h2");
    pizza_2_Title.textContent = "TOUTE GARNIE";
        
    const pizza_2_Desc = document.createElement("p");
    pizza_2_Desc.textContent = "Pepperoni, mushrooms, green peppers, mozzarella and provolone cheese";   
   
    const pizza_2_Price = document.createElement("p");
    pizza_2_Price.textContent = "$15 / $20";
    
    menuItem2.appendChild(pizza_2_Title);
    menuItem2.appendChild(pizza_2_Desc);    
    menuPrice2.appendChild(pizza_2_Price);
    
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuPrice2);

    // Pizza #3
    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    const menuPrice3 = document.createElement("div");
    menuPrice3.className = "menu-item";
    
    const pizza_3_Title = document.createElement("h2");    
    pizza_3_Title.textContent = "RUSTICA";
        
    const pizza_3_Desc = document.createElement("p");
    pizza_3_Desc.textContent = "Artichokes, black olives, grilled peppers, homemade Italian sausage, garlic and caciocavallo";
    
    const pizza_3_Price = document.createElement("p");
    pizza_3_Price.textContent = "$17 / $24";
    
    menuItem3.appendChild(pizza_3_Title);
    menuItem3.appendChild(pizza_3_Desc);    
    menuPrice3.appendChild(pizza_3_Price);
    
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuPrice3);

    // Pizza #4
    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    const menuPrice4 = document.createElement("div");
    menuPrice4.className = "menu-item";
    
    const pizza_4_Title = document.createElement("h2");
    pizza_4_Title.textContent = "MAZZARINA";
        
    const pizza_4_Desc = document.createElement("p");
    pizza_4_Desc.textContent = "Cherry tomatoes, prosciutto, arugula, house vinaigrette, fresh basil, ricotta cheese";
    
    const pizza_4_Price = document.createElement("p");
    pizza_4_Price.textContent = "$17 / $23";
    
    menuItem4.appendChild(pizza_4_Title);
    menuItem4.appendChild(pizza_4_Desc);
    menuPrice4.appendChild(pizza_4_Price);
    
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuPrice4);

    // Pizza #5
    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    const menuPrice5 = document.createElement("div");
    menuPrice5.className = "menu-item";
    
    const pizza_5_Title = document.createElement("h2");
    pizza_5_Title.textContent = "MEAT LOVER";
        
    const pizza_5_Desc = document.createElement("p");
    pizza_5_Desc.textContent = "Pancetta, sausage, spicy calabrese, red onions and mozzarella";
    
    const pizza_5_Price = document.createElement("p");
    pizza_5_Price.textContent = "$17 / $24";
    
    menuItem5.appendChild(pizza_5_Title);
    menuItem5.appendChild(pizza_5_Desc);
    menuPrice5.appendChild(pizza_5_Price);
    
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuPrice5);

    // Pizza #6
    const menuItem6 = document.createElement("div");
    menuItem6.className = "menu-item";
    const menuPrice6 = document.createElement("div");
    menuPrice6.className = "menu-item";
    
    const pizza_6_Title = document.createElement("h2");
    pizza_6_Title.textContent = "VEGETARIANA";
        
    const pizza_6_Desc = document.createElement("p");
    pizza_6_Desc.textContent = "Pesto, grilled vegetables, red onions, black olives and goat cheese Merguez";
    
    const pizza_6_Price = document.createElement("p");
    pizza_6_Price.textContent = "$16 / $22";
    
    menuItem6.appendChild(pizza_6_Title);
    menuItem6.appendChild(pizza_6_Desc);
    menuPrice6.appendChild(pizza_6_Price);
    
    menuItems.appendChild(menuItem6);
    menuItems.appendChild(menuPrice6);

    content.appendChild(menuItems);
}



/***/ })

}]);