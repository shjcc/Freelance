// load in the title on page load
window.onload = function () {
    const title = document.querySelector(".about-title");
    title.classList.add("fade-up");
};

// animate skills-grid section
document.addEventListener("DOMContentLoaded", () => {
    const aboutItems = document.querySelectorAll(".about-item");

    const observerOptions = {
        threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    aboutItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
});

// animate skills-grid section
document.addEventListener("DOMContentLoaded", () => {
    const skillsItems = document.querySelectorAll(".skills-item");
    const skillsTitle = document.querySelector(".skills-title");

    const observerOptions = {
        threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    observer.observe(skillsTitle);

    skillsItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
});