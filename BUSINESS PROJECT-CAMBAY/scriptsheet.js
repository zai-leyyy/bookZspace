/* =========================
   BUILD THE STORY
========================= */

function buildStories() {

    const cards =
        document.querySelectorAll(".puzzle-card");

    const button =
        document.getElementById("buildButton");


    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.toggle("built");

        }, index * 150);

    });


    /*
        Change button text
    */

    setTimeout(() => {

        const firstCard =
            document.querySelector(".puzzle-card");

        if (firstCard.classList.contains("built")) {

            button.textContent =
                "✨ Story Complete!";

        } else {

            button.textContent =
                "🧩 Build the Story";

        }

    }, 800);
}


/* =========================
   BOOK POPUP
========================= */

function showBook(title, author) {

    document.getElementById("popupTitle")
        .textContent = title;

    document.getElementById("popupAuthor")
        .textContent = "by " + author;

    document.getElementById("popup")
        .classList.add("active");
}


/* =========================
   CLOSE POPUP
========================= */

function closePopup() {

    document.getElementById("popup")
        .classList.remove("active");
}


/* =========================
   CLICK OUTSIDE POPUP
========================= */

document.getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePopup();

        }

    }
);

function toggleMenu() {

    const menu = document.getElementById("menuDropdown");

    menu.classList.toggle("show");

}