import MenuImg from "./images/Menu.png";
import {container} from "./Home";

export function loadMenu() {
    const img = document.createElement("img");
    const text = document.createElement("h1");
    const div = document.createElement("div");

    div.classList.add("addedContent");
    text.textContent = "Menu";
    img.classList.add("MenuImg");
    img.setAttribute("src", MenuImg);

    container.appendChild(div);
    div.appendChild(img);
    div.appendChild(text);
}
