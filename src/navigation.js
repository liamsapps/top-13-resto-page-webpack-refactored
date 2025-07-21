// Handle header button clicks 
export function setupNavigation() {
  const homeBtn = document.querySelector('#home-btn');  
  const menuBtn = document.querySelector('#menu-btn');  
  const aboutBtn = document.querySelector('#about-btn');
  const content = document.querySelector('#content');
  
  const components = {
    'home-btn': () => import('./home.js'),
    'menu-btn': () => import('./menu.js'),
    'about-btn': () => import('./about.js')
  };
  
  [homeBtn, menuBtn, aboutBtn].forEach(btn => btn.addEventListener('click', () => {
    const buttonId = btn.id;

    components[buttonId]().then(module => {
        content.innerHTML = '';
        module.loadPage();
    });    
  }));  
}


