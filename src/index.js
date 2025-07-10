import "./styles.css";
import {loadHome} from "./Home.js";
import {loadMenu} from "./Menu.js";
import {loadContact} from "./Contact.js";

const navBar = document.querySelector("nav");
loadHome();

navBar.addEventListener('click', function(e) {
    if (e.target.tagName == 'BUTTON') {
        switch(e.target.textContent) {
        case "Home":
            document.querySelector(".addedContent").remove();
            loadHome();
            break;
        case "Menu":
            document.querySelector(".addedContent").remove();
            loadMenu();
            break;
        case "Contact":
            document.querySelector(".addedContent").remove();
            loadContact();
            break;
        }    
    }
})


