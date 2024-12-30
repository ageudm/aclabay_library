// import {$, $$} from './src/js/utils/methods.js';
import { Dropdown } from './components/dropdown.js';
import { navToggle } from './utils/toggle_methods.js';

/* **************
    NAV DROPDOWN
********************* */
const navDropdown = new Dropdown({
  navDropdown: '.nav-dropdown',
  navDropdownButton: '.nav-dropdown-button',
  navOpen: 'open'
}).dropdownFunction();


/* **************
    NAV TOGGLE
********************* */
navToggle('.toggle-menu',  '.nav', '.main');