// typewriter effect
function runTyping() {
  new TypeIt(".hero-title", {
    loop: false,
    waitUntilVisible: true,
    afterComplete: async (instance) => {
      await instance.destroy();
      setTimeout(runTyping, 500);
    },
  })
    .type("Custom ")
    .type(' <span class="place">websites</span>.', { delay: 800 })
    .delete(".place", { delay: 800 })
    .type('<em> code.</em>', {
      speed: 100,
      delay: 800,
    })
    .delete(null, {delay: 800})
    .type("Web ")
    .move(null, { to: "END" })
    .type(' <span class="place">Development</span>.', { delay: 800 })
    .delete(".place", { delay: 800 })
    .type('<em> Design.</em>', {
      speed: 100,
      delay: 800,
    })
    .delete(null, { delay: 500 })
    .go();
}

runTyping();

// projects sample buttons 
const list = document.querySelector(".projects-grid");
const item = document.querySelector(".p-item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
  if (direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}

// animate service title 
document.addEventListener("DOMContentLoaded", () => {
  const serviceTitleWrapper = document.querySelector(".service-title-wrapper");
  const serviceCards = document.querySelectorAll(".service-item");

  const observerOptions = {
    threshold: .1,
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

  observer.observe(serviceTitleWrapper);

  serviceCards.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
});

