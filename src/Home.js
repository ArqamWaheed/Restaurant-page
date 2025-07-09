import BearLogo from "./images/BearLogo.png";
import MainText from "./images/MainText.png";

export const container = document.querySelector("#content");
const img1 = document.createElement("img");
const img2 = document.createElement("img");

img1.classList.add("logo");
img2.classList.add("textImage");
img1.setAttribute("src", BearLogo);
img2.setAttribute("src", MainText);

container.appendChild(img1);
container.appendChild(img2);
