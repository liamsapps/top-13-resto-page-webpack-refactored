import './style.css';
import { setupNavigation } from './navigation.js';

function init() {
    setupNavigation();

    import('./home').then(module => {
        module.loadPage();
    });
}

init();

