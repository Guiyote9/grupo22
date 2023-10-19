document.getElementById("mobile-menu-icon").addEventListener("click", function () {
    var ul = document.querySelector("ul");
    ul.classList.toggle("active");

    var header = document.querySelector("header");
    header.classList.toggle("active");

    var img = document.querySelector("img");
    img.classList.toggle("active");
  });
  
  const nombreYApellido = /^[a-zA-Z\s]+$/;
  const paraEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  const telefonoArg = /^11\d{8}$/;
  const nombreCalle = /^[a-zA-Z0-9\s]+$/;
  const numerosYLetras = /^[a-zA-Z0-9]+$/;

  function validar() {
    var msjError = document.getElementById("error");
    var nombre = document.getElementById("nombre").value;
    var valorSeleccionado = document.querySelector('input[name="cliente"]:checked');
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var solicitud = document.getElementById("solicitud").value;
    var cepillo = document.getElementById("cepillo").value;

    if (!nombreYApellido.test(nombre)) {
      msjError.innerHTML = "Ingrese un nombre y apellido correcto.";
      return;
    }
    msjError.innerHTML = "";

    if (!valorSeleccionado){
      msjError.innerHTML = "Indique si es cliente o no.";
      return;
    }
    msjError.innerHTML = "";

    if (!paraEmail.test(email)) {
      msjError.innerHTML = "Ingrese un E-Mail correcto.";
      return;
    }
    msjError.innerHTML = "";

    if (!telefonoArg.test(telefono)) {
      msjError.innerHTML = "Teléfono inválido. Formato: 11XXXXXXXX.";
      return;
    }
    msjError.innerHTML = "";

    if (solicitud === "") {
      msjError.innerHTML = "Su solicitud no puede estar en blanco.";
      return;
    }

    if (cepillo === "seleccione") {
      msjError.innerHTML = "Seleccione una opción de cepillo.";
      return;
    }

    document.getElementById("formularioContacto").submit(); 
  }
