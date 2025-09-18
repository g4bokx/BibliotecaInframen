function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function filtrarLibros() {
  let input = document.getElementById("busqueda").value.toLowerCase();
  let libros = document.getElementsByClassName("libro");

  for (let i = 0; i < libros.length; i++) {
    let texto = libros[i].textContent.toLowerCase();
    if (texto.includes(input)) {
      libros[i].classList.remove("oculto");
    } else {
      libros[i].classList.add("oculto"); 
    }
  }
}

function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }
  alert("¡Mensaje enviado con éxito!");
  return true;
}