const menubar = document.getElementById("menubar");
const navBar = document.querySelector(".navbar");
const cont = document.querySelector(".container");
const home = document.getElementById("wrap");
const project = document.getElementById("my-projects");
const contact = document.getElementById("contact");

menubar.addEventListener("click", function () {
  navBar.classList.toggle("nav");
});

home.addEventListener("click", checkNav);
project.addEventListener("click", checkNav);
contact.addEventListener("click", checkNav);
navBar.addEventListener("click", checkNav);

function checkNav() {
  navBar.classList.remove("nav");
}
