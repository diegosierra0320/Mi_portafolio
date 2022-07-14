
const iconBurger = document.querySelector("#iconBurger");
const menu = document.querySelector("#menu");

iconBurger.addEventListener("click", function (){
    menu.classList.toggle("show_menu");
});