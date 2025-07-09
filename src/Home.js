import BearLogo from "./images/BearLogo.png";
import MainText from "./images/MainText.png";

export const container = document.querySelector("#content");

export function loadHome() {
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const div = document.createElement("div");
    div.classList.add("addedContent");

    img1.classList.add("logo");
    img2.classList.add("textImage");
    img1.setAttribute("src", BearLogo);
    img2.setAttribute("src", MainText);

    container.appendChild(div);
    div.appendChild(img1);
    div.appendChild(img2);
}
