let brand = document.querySelectorAll(".nav-brand");
let defaultBrand = document.getElementsByClassName("default")[0];
let imgset = [
    {
        name: "zakkushi",
        img: "images/1.jpg",
        imgsm: "images/1sm.jpg"
    },
    {
        name: "raijin",
        img: "images/2.jpg",
        imgsm: "images/2sm.jpg"
    },
    {
        name: "raizo",
        img: "images/3.jpg",
        imgsm: "images/3sm.jpg"
    },
    {
        name: "hashigo",
        img: "images/4.jpg",
        imgsm: "images/4sm.jpg"
    },
    {
        name: "lab",
        img: "images/5.jpg",
        imgsm: "images/5sm.jpg"
    },
];
let brandImage = document.getElementById("brand-image");
let brandImageSm = document.getElementById("brand-image-sm");
let menuContainer = document.getElementById("menu-container");
let menuHamburger = document.getElementById("menu-hamburger");
let menuText = menuHamburger.getElementsByTagName("p")[0];
let ourMenu = document.getElementById("our-menu");
let ourMenuContainer = document.getElementById("our-menu-container");


// open menu window when hamburger clicked
menuHamburger.addEventListener("click", () => {
    menuContainer.classList.toggle("open");
    menuHamburger.classList.toggle("open");

    if(menuText.innerText === "MENU") {
        menuText.innerText = "CLOSE";
    } else {
        menuText.innerText = "MENU";
    }
})

// our menu location show
ourMenu.addEventListener("click", () => {
    ourMenu.classList.toggle("chosen");
    ourMenuContainer.classList.toggle("chosen")
})

