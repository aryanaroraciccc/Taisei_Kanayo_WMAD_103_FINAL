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
let brandMobile = document.getElementsByClassName("nav-brand-mobile");
let brandNamesMobile = document.getElementsByClassName("brand-name-container-mobile");


// rotate brand every 8 seconds
// *from here* I wrote this part using chatGPT!!!
// let activeIndex = 0;
// function setActiveBrand(index) {
//     for (let i = 0; i < brand.length; i++) {
//         brand[i].classList.remove("active");
//     }
//     brand[index].classList.add("active");
//     brandImage.style.backgroundImage = `url(${imgset[index].img})`;
//     brandImageSm.style.backgroundImage = `url(${imgset[index].imgsm})`;
// }

// function rotateActiveBrand() {
//     setActiveBrand(activeIndex);
//     activeIndex = (activeIndex + 1) % brand.length;
// }

// setInterval(rotateActiveBrand, 8000);
// *to here* I wrote this part using chatGPT!!!



// brand logo hover
for (let i = 0; i < brand.length; i++) {
    let brandName = brand[i].getAttribute("name");
    brand[i].addEventListener("mouseenter", () => {
        
        // remove "active" if other elemets have it
        for (let j = 0; j < brand.length; j++) {
            if (brand[i] !== brand[j]) {
                brand[j].classList.remove("active");
            }
        }

        // add "active" to hovered element
        brand[i].classList.add("active");

        // set image
        for (let j = 0; j < imgset.length; j++) {
            if (brandName === imgset[j].name) {
                brandImage.style.backgroundImage = `url(${imgset[j].img})`;
                brandImageSm.style.backgroundImage = `url(${imgset[j].imgsm})`;
            }
        }
    });
}

// mobile brand logo tap
for (let i = 0; i < brand.length; i++) {
    let brandName = brandMobile[i].getAttribute("name");

    brandMobile[i].addEventListener("click", () => {
        
        // remove "active" if other elemets have it
        for (let j = 0; j < brandMobile.length; j++) {
            if (brandMobile[i] !== brandMobile[j]) {
                brandMobile[j].classList.remove("active");
                brandNamesMobile[j].classList.remove("active");
            }
        }

        // add "active" to hovered element
        brandMobile[i].classList.add("active");
        brandNamesMobile[i].classList.add("active");

        // set image
        for (let j = 0; j < imgset.length; j++) {
            if (brandName === imgset[j].name) {
                brandImage.style.backgroundImage = `url(${imgset[j].img})`;
                brandImageSm.style.backgroundImage = `url(${imgset[j].imgsm})`;
            }
        }
    });
}

// remove "active" class when mouse leaves
for (let i = 0; i < brand.length; i++) {
    brand[i].addEventListener("mouseleave", () => {
        brand[i].classList.remove("active");
    });
}

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

