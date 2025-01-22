// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Selección de elementos HTML
const inputAmigo = document.getElementById('amigo');
const btnAdd = document.getElementById('btn-add');
const btnDraw = document.getElementById('btn-draw');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo a la lista
btnAdd.addEventListener('click', () => {
    const nombreAmigo = inputAmigo.value.trim(); // Obtenemos el valor sin espacios extra

    // Validaciones
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert("El nombre ya está en la lista.");
        inputAmigo.value = ""; // Limpiar el campo
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista visual
    actualizarLista();
});

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar contenido previo

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
btnDraw.addEventListener('click', () => {
    resultado.innerHTML = ""; // Limpiar resultado previo
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Validación: verificar que haya nombres en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Sorteo: seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoTexto = document.createElement('p');
    resultadoTexto.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(resultadoTexto);
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
   

});
