// 1. Functions

// function myFunction(name) {
//     //console.log("Ungajunka");
//     console.log("Hello, " + name + "!");
// }

    //call the function "Invoke", "Execute", Etc.
//myFunction("Alice");

// 2. Event Listeners
    // retrieve something from the dom
    // let select = document.querySelector("#theme-select");
    // //register an event listener
    // //event we are listening for, function to call when event is called
    // // select.addEventListener("change", myFunction);
    // select.addEventListener("change", handleEvent);

    // function handleEvent(event) {
    //     console.log(event);
    //     console.log(event.target.value);
    // }
 
// 3. If statements




let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          