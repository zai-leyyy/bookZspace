// ===============================
// BOOK DATA
// ===============================

const books = [
    {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        price: "Php 529.00"
    },

    {
        title: "Twilight",
        author: "Stephenie Meyer",
        price: "Php 495.00"
    },

    {
        title: "Percy Jackson and the Olympians",
        author: "Rick Riordan",
        price: "Php 535.00"
    },

    {
        title: "Between The Rainbox",
        author: "Ineryss",
        price: "Php 499.00"
    },

    {
        title: "Over The Horizon",
        author: "Ineryss",
        price: "Php 469.00"
    },

    {
        title: "Behind The Blue Skies",
        author: "Ineryss",
        price: "Php 485.00"
    },

    {
        title: "Chasing The Sun",
        author: "Inksteady",
        price: "Php 339.00"
    },

    {
        title: "Taming The Waves",
        author: "Inksteady",
        price: "Php 355.00"
    },

    {
        title: "Loving The Sky",
        author: "Inksteady",
        price: "Php 349.00"
    }
];


// ===============================
// ELEMENTS
// ===============================

const carousel = document.getElementById("carousel");

const cards = document.querySelectorAll(".book-card");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const bookTitle = document.getElementById("bookTitle");

const bookAuthor = document.getElementById("bookAuthor");

const bookPrice = document.getElementById("bookPrice");


// ===============================
// NEXT BUTTON
// ===============================

nextBtn.addEventListener("click", () => {

    carousel.scrollBy({
        left: 270,
        behavior: "smooth"
    });

});


// ===============================
// PREVIOUS BUTTON
// ===============================

prevBtn.addEventListener("click", () => {

    carousel.scrollBy({
        left: -270,
        behavior: "smooth"
    });

});


// ===============================
// CLICK BOOK
// ===============================

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        bookTitle.textContent = books[index].title;

        bookAuthor.textContent = books[index].author;

        bookPrice.textContent = books[index].price;


        // Scroll to product details

        document.getElementById("details").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// CENTER BOOK EFFECT
// ===============================

function updateBooks() {

    const center =
        window.innerWidth / 2;

    cards.forEach(card => {

        const rect =
            card.getBoundingClientRect();

        const cardCenter =
            rect.left + rect.width / 2;

        const distance =
            Math.abs(center - cardCenter);


        if (distance < 150) {

            card.style.transform =
                "scale(1.08) translateY(-10px)";

            card.style.opacity = "1";

            card.style.filter = "none";

        } else {

            card.style.transform =
                "scale(0.9)";

            card.style.opacity = "0.6";

            card.style.filter =
                "grayscale(30%)";

        }

    });

}


// Update while scrolling

carousel.addEventListener(
    "scroll",
    updateBooks
);


// Update when page loads

window.addEventListener(
    "load",
    updateBooks
);

window.addEventListener(
    "resize",
    updateBooks
);

function toggleMenu() {

    const menu = document.getElementById("menuDropdown");

    menu.classList.toggle("show");

}