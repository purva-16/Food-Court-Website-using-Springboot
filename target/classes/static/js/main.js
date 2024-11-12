
document.addEventListener("DOMContentLoaded", function() {

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// "Back to Top" button functionality
var backToTopButton = document.createElement("button");
backToTopButton.innerHTML = "↑";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

backToTopButton.style.display = "none"; // Initially hidden

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation for the search bar
document.querySelector("form").addEventListener("submit", function (e) {
    const searchInput = document.querySelector("input[type='search']");
    if (!searchInput.value.trim()) {
        e.preventDefault();
        alert("Please enter a search term.");
    }
});

// Dynamic product filtering by price range
document.querySelector("#filterDropdown .dropdown-menu").addEventListener("click", function (e) {
    const filter = e.target.textContent.toLowerCase();
    const products = document.querySelectorAll(".card");

    products.forEach(product => {
        const price = parseInt(product.querySelector(".card-text strong").nextSibling.textContent.replace("₹", ""));
        if (filter === "lowest price" && price > 100) {
            product.style.display = "none";
        } else if (filter === "highest price" && price <= 100) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});


});