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
    .type('<em> Designer.</em>', {
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


// var $container = $('.bg2-wrapper');
// var $drone = $('.bg2');
// var droneCenter = {
//   x: $drone.width() / 2,
//   y: $drone.height() / 2
// };

// $container.on('mousemove', function(event) {
//   $drone.css('transform', `translate3d(${event.offsetX - droneCenter.x}px, ${event.offsetY - droneCenter.y}px, 0)`);
// });
