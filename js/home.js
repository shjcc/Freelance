// gsap anims
gsap.registerPlugin(ScrollTrigger);

// animate section 
document.querySelectorAll("section").forEach((section) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      scrub: false,
      onLeave: () => {
        gsap.to(section, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(section, {
          opacity: 0,
          y: -100,
          duration: 0.8,
          ease: "power2.inOut",
        });
      },
    }
  });

  tl.fromTo(section, {
    opacity: 0,
    y: -100,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });
});

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
    .type("Hello!", { delay: 800 })
    .delete(null, { delay: 500 })
    .type("I am a Web")
    .move(null, { to: "END" })
    .type(' <span class="place">Developer</span>.', { delay: 800 })
    .move(-10, { delay: 350 })
    .move(11, { delay: 350 })
    .delete(".place", { delay: 800 })
    .type('<em><strong class="font-semibold"> Designer.</strong></em>', {
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