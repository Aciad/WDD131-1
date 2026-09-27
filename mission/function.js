
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let main = document.querySelector('.main');
let body = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        main.style.color = "white";
        body.style.backgroundColor = "#3A3B3C";
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-white.png")

    } else {
        // code for changes to colors and logo
        main.style.color = "black";
        body.style.backgroundColor = "white";
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp")
    }
}           
                    