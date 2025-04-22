// fetch the current year for the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// projects sample buttons 
const list = document.querySelector(".projects-grid");
const item = document.querySelector(".p-item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
    if(direction === "previous") {
        list.scrollBy({ left: -itemWidth, behavior: "smooth"});
    } else {
        list.scrollBy({ left: itemWidth, behavior: "smooth"});
    }
}