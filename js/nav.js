// sticky headers and mobile nav toggles

// detect current pages
const currentLocation = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-center a, .nav-right a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentLocation) {
        link.classList.add("active");
    }
});