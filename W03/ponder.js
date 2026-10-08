const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
// const header = document.querySelector("header");

menuButton.addEventListener('click', ShowMenu);

function ShowMenu() {
    menu.classList.toggle("hidden");
    menuButton.classList.toggle("change");
}