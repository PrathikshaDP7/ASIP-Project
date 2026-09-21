// ================= NAVBAR =================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= MENU FILTER =================

const filters = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");

filters.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filters.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        foodCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 300);

            }

        });

    });

});


// ================= SCROLL ANIMATION =================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= RESERVATION =================

const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !date || !guests) {

        alert("Please fill all the fields.");

        return;

    }

    toast.classList.add("show");

    bookingForm.reset();

    setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

});


// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 7%";

    } else {

        navbar.style.padding = "22px 7%";

    }

});