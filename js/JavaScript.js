document.addEventListener("DOMContentLoaded", function () {
    // Function to close the mobile menu when a menu item is clicked
    function closeMobileMenu() {
        const body = document.querySelector("body");
        const navToggler = document.querySelector(".navbar-toggler");
        const navbarNav = document.querySelector(".navbar-collapse");

        navToggler.classList.add("collapsed");
        navbarNav.classList.remove("show");
        body.classList.remove("menu-opened");
    }

    // Add an event listener to each menu item to close the mobile menu when clicked
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
    });

    // Add an event listener to the menu toggle button to toggle the "menu-opened" class on the body
    const navToggler = document.querySelector(".navbar-toggler");
    navToggler.addEventListener("click", function () {
        const body = document.querySelector("body");
        body.classList.toggle("menu-opened");
    });

    const adoptionForm = document.getElementById("adoption-form");

    adoptionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate form fields
        const catSelection = validateField("cat-selection");
        const nameInput = validateField("name");
        const emailInput = validateField("email");
        const locationInput = validateField("location");
        const ageInput = validateField("age");
        const experienceInput = validateField("experience");
        const messageInput = validateField("message");
        const termsCheckbox = document.getElementById("terms");

        if (
            catSelection === "" ||
            nameInput === "" ||
            emailInput === "" ||
            locationInput === "" ||
            ageInput === "" ||
            experienceInput === "" ||
            messageInput === "" ||
            !termsCheckbox.checked
        ) {
            alert("Please fill in all required fields and accept the terms and conditions.");
        } else if (!validateEmail(emailInput)) {
            alert("Please enter a valid email address.");
        } else if (isNaN(ageInput) || ageInput < 18 || ageInput > 100) {
            alert("Please enter a valid age between 18 and 100.");
        } else {
            // If all validations pass, display a success message
            alert("Adoption form submitted successfully!");
            // You can also send the data to the server or perform other actions here

            // Reset the form to its default state
            adoptionForm.reset();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate form fields by ID
    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        return field ? field.value.trim() : "";
    }
});
