//Crear un array para almacenar los nombres
let amigos = [];
let amigoIngresado;

function agregarAmigo() {
	//Capturar el valor del campo de entrada
	amigoIngresado = document.getElementById("amigo").value;
	//console.log(amigoIngresado);

	////Validar la entrada:
	if (!amigoIngresado) {
		alert("Por favor, inserte un nombre.");
	} else {
		//Actualizar el array de amigos:
		amigos.push(amigoIngresado);
		//console.log(amigos);
		//Limpiar el campo de entrada
		document.getElementById("amigo").value = "";
		listadoAmigos();
		document.getElementById("resultado").innerHTML = "";
	}
}

function sortearAmigo() {
	// Validar que haya amigos disponibles:
	if (amigos.length != 0) {
		// Generar un índice aleatorio
		let indiceAleatorio = Math.floor(Math.random() * amigos.length);
		//console.log(indiceAleatorio);

		// Obtener el nombre sorteado:
		let resultadoAmigoSecreto = document.getElementById("resultado");
		resultadoAmigoSecreto.innerHTML = "";
		// Mostrar el resultado
		resultadoAmigoSecreto.innerHTML =
			"<li>" +
			"El amigo secreto sorteado es: " +
			amigos[indiceAleatorio] +
			"</li>";
		document.getElementById("listaAmigos").innerHTML = "";
		mejoraNoRepetirAmigos(indiceAleatorio);
	} else {
		alert(
			"Ya se sortearon todos los amigos disponibles, agrega nuevos nombres para seguir sorteando"
		);
		document.getElementById("resultado").innerHTML = "";
	}
}

function listadoAmigos() {
	// Obtener el elemento de la lista
	let listaAmigos = document.getElementById("listaAmigos");
	// Limpiar la lista existente
	listaAmigos.innerHTML = "";
	// Iterar sobre el arreglo
	for (let i = 0; i < amigos.length; i++) {
		// Agregar elementos a la lista
		listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
	}
}

function mejoraNoRepetirAmigos(indiceAEliminar) {
	amigos.splice(indiceAEliminar, 1);
}
