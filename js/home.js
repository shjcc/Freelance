// functions for the home page

// typewrite function
new TypeIt(".hero-title", {
    speed: 80,
    deleteSpeed: 100,
    loop: true,
})
    .type("I build websites.")
    .delete()
    .type("I also build cats?")
    .go();
