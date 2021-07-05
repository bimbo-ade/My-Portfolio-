const menubar = document.getElementById("menubar");
const nav = document.querySelector(".navbar");
const cont = document.querySelector(".container");
const home = document.getElementById("wrap");
const project = document.getElementById("my-projects");
const contact = document.getElementById("contact");

menubar.addEventListener("click", function () {
  nav.classList.toggle("nav");
});

home.addEventListener("click", checkNav);
project.addEventListener("click", checkNav);
contact.addEventListener("click", checkNav);

function checkNav() {
  nav.classList.remove("nav");
}
