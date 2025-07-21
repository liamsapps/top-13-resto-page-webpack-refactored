// Handle menu item button clicks
export function setupMenuNavigation() {
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
    'salads-btn': () => import('./salads.js'),
    'pasta-btn': () => import('./pasta.js'),
    'pizza-btn': () => import('./pizza.js'),
    'desserts-btn': () => import('./desserts.js'),
    'wine-btn': () => import('./wine.js')
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