//Emulating the DOM with JavaScript???

//grab the H1 from the page
//"h1" can be any valid CSS selector
//let heading = document.querySelectorAll("h1");
let heading = document.querySelector("h1");

console.log(heading);

//change the text of the h1
heading.textContent = "CHANGING THE TEXT AHAHAHAHA!!!";

//changing text color
heading.style.color = "red";
heading.style.boxShadow = "0px 0px 10px red";

//retreive an element id from the page
document.getElementById("topics").style.color = "red";
//same thing different
document.querySelector("#topics").style.color = "blue";

//select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/40/Astasahasrika_Prajnaparamita_Dharmacakra_Discourse.jpeg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled");
image.setAttribute("width", "1000px");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.style.color = "green";
})