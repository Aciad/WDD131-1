const gallery = document.querySelector('.image-container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");

menuButton.addEventListener('click', ShowMenu);

gallery.addEventListener('click', openModal);

function ShowMenu() {
    menu.classList.toggle("hidden");
}

function openModal(e) { 
    var srcString = e.target.src;
    srcString = srcString.slice(0, -6);
    srcString += "full.jpg";
    modalImage.src = srcString;
    // modal.
    modal.showModal();
    
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
     