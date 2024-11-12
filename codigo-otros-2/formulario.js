let formulario = document.querySelector(".formulario") //Para seleccionar una clase se utiliza la sintaxis .class_name

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  let nameField = formulario.elements[0] //renombré el nombre de la variable a nameField
  let ageField = formulario.elements[1] //renombré el nombre de la variable a ageField
  let nationalityField = formulario.elements[2] //renombré el nombre de la variable a nationalityField

  let nombre = nameField.value
  let edad = ageField.value

  let i = nationalityField.selectedIndex
  let nacionalidad = nationalityField.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nameField.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    ageField.classList.add("error")
  }

if (nombre.length > 0 
  && (edad >= 18 
    && edad <= 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}


function agregarInvitado(nombre, edad, nacionalidad) {
  
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
  
  let lista = document.getElementById("lista-de-invitados")
  
  let elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

// Se eliminó el siguiente bloque de texto ya que cumple la misma función que la función crearElemento 

// let spanNombre = document.createElement("span")
// let inputNombre = document.createElement("input")
// let espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
}
}

// Se eliminó esta porción de código ya que dentro de la función agregar invitado ya se crean los botones correspondientes para eliminar a cada invitado

// let botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// let corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);