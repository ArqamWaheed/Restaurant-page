import ContactImg from "./images/Contact.png";
import {container} from "./Home";

export function loadContact() {
    const img = document.createElement("img");
    const text = document.createElement("h1");
    const div = document.createElement("div");
    text.style.marginTop = 0;
    div.classList.add("addedContent");
    text.textContent = "Contact Us Now!";
    img.classList.add("ContactImg");
    img.setAttribute("src", ContactImg);

    container.appendChild(div);
    div.appendChild(img);
    div.appendChild(text);
}
