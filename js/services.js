window.onload = function () {
    const title = document.querySelector(".services-title");
    const subtitle = document.querySelector(".services-subtitle");
    title.classList.add("fade-up");
};

document.addEventListener("DOMContentLoaded", () => {
    const serviceTitle = document.querySelector(".section-title");
    const serviceSubtitle = document.querySelector(".section-subtitle");

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

    setTimeout(() => {
        observer.observe(serviceTitle);
        observer.observe(serviceSubtitle);
    }, 500);


});