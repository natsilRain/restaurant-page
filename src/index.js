import "./styles.css";
import { generateHomeContent } from "./home.js";
import { generateMenuContent } from "./menu.js";
import { generateContactContent } from "./contact.js";

generateHomeContent();

const homeBtn = document.getElementById("homeBtn");
const menuBtn  = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

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

contactBtn.addEventListener("click", (e) => {
    const content = document.querySelector(".content-div");
    content.remove();
    generateContactContent();
});