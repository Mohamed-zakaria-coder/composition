let navbar = document.querySelector(".navbar")
let menu = document.querySelector(".menu")

menu.addEventListener("click", function(e){
    e.stopPropagation()
    navbar.classList.toggle("show")
})