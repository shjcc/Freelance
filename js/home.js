// functions for the home page

// typewriter function
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