document.getElementById("mobile-menu-icon").addEventListener("click", function () {
    var ul = document.querySelector("ul");
    ul.classList.toggle("active");

    var header = document.querySelector("header");
    header.classList.toggle("active");

    var img = document.querySelector("img");
    img.classList.toggle("active");
  });
  

function validar() {
  var nombre = document.getElementById("nombre")
}
