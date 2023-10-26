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

  if (!valorSeleccionado) {
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





fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => {
    const valorDolarBlue = data.venta;
    const fecha = new Date(data.fechaActualizacion); 
    
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });

  
    var cardGrande = document.getElementById("cardGrande");
    var cardCerda = document.getElementById("cardCerda");
    var cardPita = document.getElementById("cardPita");
    var cardPVC = document.getElementById("cardPVC");
    var cardNylon = document.getElementById("cardNylon");
    var cardAcero = document.getElementById("cardAcero");
    var cardArrastre = document.getElementById("cardArrastre");
    
    var closeButton = document.getElementById("closeButton");
    var titulo = document.getElementById("tituloCardGrande");
    var imagen = document.getElementById("imagenCardGrande").querySelector("img");
    var descripcion = document.getElementById("descripcionCardGrande");
    var precio = document.getElementById("precio");
    var actuaizado = document.getElementById("actualizado");
    
    cardCerda.addEventListener("click", function (event) {
      cardGrande.style.display = "flex";
    
      titulo.innerHTML = "CERDA"
      imagen.src = "imagenes/imetro-cerda.png"
      descripcion.innerHTML = "Modo lustrado, al igual que el cepillo de cerda, puede utilizar al cepillo de pita para lustrar pisos, tanto de madera, como marmol, terrazo, baldosas, etc. "
      precio.innerHTML = "Precio: $" + (50 * valorDolarBlue).toLocaleString('es-ES');
      actualizado.innerHTML = "Precio actualizado al " + fechaFormateada;
    });
    
    cardPita.addEventListener("click", function (event) {
      cardGrande.style.display = "flex";
    
      titulo.innerHTML = "PITA"
      imagen.src = "imagenes/imetro-pita.png"
      descripcion.innerHTML = "Utilice el cepillo en pisos de madera, para obtener un lustrado superior. En pisos duros, como marmol, terrazo, baldosas, obtendra un resultado excelente, sus pisos quedarán espectaculares con un resplandor soñado. Modo lavado suave, para aquellos pisos que deben ser tratados cuidadosamente, éste tipo de material permite tratarlo convenientemente sin poner en riesgo la integridad de la superficie. Recomendado para pisos con pintura epoxy, porcelanatos, ceramicas, plastificados, entre otros."
      precio.innerHTML = "Precio: $" + (45 * valorDolarBlue).toLocaleString('es-ES');
      actualizado.innerHTML = "Precio actualizado al " + fechaFormateada;
    });
    
    cardPVC.addEventListener("click", function (event) {
      cardGrande.style.display = "flex";
    
      titulo.innerHTML = "PVC"
      imagen.src = "imagenes/imetro-ppl.png"
      descripcion.innerHTML = "El lavado de pisos requiere de la combinación de una herramienta mecanica como el cepillo y un producto químico acorde al tipo de suciedad, en este caso el cepillo de uso generico permite la remoción de suciedad sobre la mayoría de tipos de pisos. Utilizar agua caliente generalmente facilita la limpieza."
      precio.innerHTML = "Precio: $" + (42 * valorDolarBlue).toLocaleString('es-ES');
      actualizado.innerHTML = "Precio actualizado al " + fechaFormateada;
    });
    
    cardNylon.addEventListener("click", function (event) {
      cardGrande.style.display = "flex";
    
      titulo.innerHTML = "NYLON"
      imagen.src = "imagenes/imetro-nylon.png"
      descripcion.innerHTML = "El nylon, material constitutivo, permite una efectiva friccion sobre la alfombra y resulta de suma importancia complementar el uso con un shampoo para alfombras que genere espuma. Para la recollección de la espuma y suciedad removida por el cepillo, recomendamos utilizar una aspiradora polvo/agua para tal efecto. Higienice y limpie convenientemente el cepillo al finalizar el trabajo, para restablecer el formato de los filamentos, debe anjuagar con agua caliente."
      precio.innerHTML = "Precio: $" + (48 * valorDolarBlue).toLocaleString('es-ES');
      actualizado.innerHTML = "Precio actualizado al " + fechaFormateada;
    });
    
    cardAcero.addEventListener("click", function (event) {
      cardGrande.style.display = "flex";
    
      titulo.innerHTML = "ACERO"
      imagen.src = "imagenes/imetro-acero.png"
      descripcion.innerHTML = "Para aquellos casos donde el cepillo pvc no fuera suficiente por tratarse de un tipo de suciedad extrema, aqui es donde destaca el cepillo de acero. Intenso, agresivo, de acción profunda. Ideal combinar con removedores quimicos para complementar la acción de limpieza de la suciedad evitando la fricción innecesaria prolongada de la superficie."
      precio.innerHTML = "Precio: $" + (60 * valorDolarBlue).toLocaleString('es-ES');
      actualizado.innerHTML = "Precio actualizado al " + fechaFormateada;
    });
    
    cardArrastre.addEventListener("click", function (event) {
      cardGrande.style.display = "flex";
    
      titulo.innerHTML = "DISCO DE ARRASTRE"
      imagen.src = "imagenes/imetro-arrastre.png"
      descripcion.innerHTML = "Herramienta indispensable para la utilización de discos de limpieza o 'pads cleaner'. Sus multiples propositos, permiten tambien rasquetear pisos de maderas al poder soportar la viruta."
      precio.innerHTML = "Precio: $" + (44 * valorDolarBlue).toLocaleString('es-ES');
      actualizado.innerHTML = "Precio actualizado al " + fechaFormateada;
    });
    
    closeButton.addEventListener("click", function (event) {
      cardGrande.style.display = "none";
    
    });



  })
