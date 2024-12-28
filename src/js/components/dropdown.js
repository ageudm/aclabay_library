
import {$$} from '../utils/methods.js'

function Dropdown ({navDropdown, navDropdownButton, navOpen}) {
    this.navDropdown = navDropdown;
    this.navDropdownButton = navDropdownButton;
    this.navOpen = navOpen;

    this.dropdownFunction = () => {
        $$(`${navDropdown}`).forEach((dropdown) => {
        dropdown.querySelector(`${navDropdownButton}`).addEventListener('click', () => {
            $$(`${navDropdown}`).forEach((item) => {
            if(item !== dropdown) {
                item.classList.remove(`${navOpen}`)
            }
            });

            dropdown.classList.toggle(`${navOpen}`)
        })
        })
    }
}; 
  
  
export {Dropdown};