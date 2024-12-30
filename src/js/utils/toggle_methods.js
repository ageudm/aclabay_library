import {$, $$} from './utiliti_methods.js';

/* **************
    TOGGLE NAVBAR
********************* */
const navToggle = (toggleBtn, navMenu, main) => {
    $(`${toggleBtn}`).addEventListener('click', () => {
        $(`${navMenu}`).classList.toggle('open')
        $(`${main}`).classList.toggle('reset-margin')
    })
}; export {navToggle};