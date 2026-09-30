import "./styles.css";
import { generateHomeContent } from "./home.js";
import { generateMenuContent } from "./menu.js";

generateHomeContent();

const homeBtn = document.getElementById("homeBtn");
const menuBtn  = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

homeBtn.addEventListener("click", (e) => {
    const content = document.querySelector(".content-div");
    content.remove();
    generateHomeContent();
});

menuBtn.addEventListener("click", (e) => {
    const content = document.querySelector(".content-div");
    content.remove();
    generateMenuContent();
});