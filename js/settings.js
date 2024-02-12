document.addEventListener("DOMContentLoaded", function () {
    // Load preferences from local storage
    const backgroundColor = localStorage.getItem("backgroundColor");
    const headerColor = localStorage.getItem("headerColor");
    const headerSizeValue = localStorage.getItem("headerSizeValue");

    // Apply loaded preferences
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer"); // Add this line to select the footer

    body.style.backgroundColor = backgroundColor;
    header.style.backgroundColor = headerColor;
    footer.style.backgroundColor = headerColor; // Set the footer background color

    switch (headerSizeValue) {
        case 'small':
            header.style.fontSize = '16px';
            break;
        case 'medium':
            header.style.fontSize = '24px';
            break;
        case 'large':
            header.style.fontSize = '32px';
            break;
        default:
            header.style.fontSize = 'inherit';
    }
});

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

    // Function to apply user preferences
    window.applyPreferences = function () {
        const body = document.querySelector("body");
        const backgroundColor = document.getElementById("background-color").value;
        const headerColor = document.getElementById("header-color").value;
        const headerSizeValue = document.getElementById("header-size").value;

        body.style.backgroundColor = backgroundColor;
        document.querySelector("header").style.backgroundColor = headerColor;
        document.querySelector("footer").style.backgroundColor = headerColor; // Set the footer background color

        // Save preferences in local storage
        localStorage.setItem("backgroundColor", backgroundColor);
        localStorage.setItem("headerColor", headerColor);
        localStorage.setItem("headerSizeValue", headerSizeValue);

        switch (headerSizeValue) {
            case 'small':
                document.querySelector("header").style.fontSize = '16px';
                break;
            case 'medium':
                document.querySelector("header").style.fontSize = '24px';
                break;
            case 'large':
                document.querySelector("header").style.fontSize = '32px';
                break;
            default:
                document.querySelector("header").style.fontSize = 'inherit';
        }

        // Display confirmation message
        alert("Preferences applied successfully:\n\nBackground Color: " + backgroundColor + "\nHeader Color: " + headerColor + "\nHeader Size: " + headerSizeValue);
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.getElementById("apply-button");

    applyButton.addEventListener("click", function () {
        applyPreferences();
    });
});
