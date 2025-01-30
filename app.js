let amigos = []

//actualizar lista de amigos
function actualizarLista() {
    const amigoSecreto = document.getElementById('listaAmigos')
    amigoSecreto.innerHTML = '' // Limpiar la lista antes de mostrarla

    // Aquí recorremos el array y agregamos a los amigos
    amigos.forEach(amigo => {
        const li = document.createElement('li')
        li.textContent = amigo
        amigoSecreto.appendChild(li)
    })
}

// Función para agregar amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo')
    const amigo = inputAmigo.value.trim()
    //validamos que no este vacio
    if (amigo === '') {
        alert('Por favor ingresa un nombre.')
        //agregue un estilo visual para que el usuario vea que el campo esta vacio
        inputAmigo.style.border = '2px solid red'
        return
    }
    //verificacion para que no se repitan los nombres de los amigos
    if (amigos.includes(amigo)) {
        alert('El amigo ya se encuentra en la lista.')
        return
    }

    inputAmigo.style.border = ''
    amigos.push(amigo) 
    //limpiamos el campo del input
    inputAmigo.value = '' 

    actualizarLista()
}

function mostrarAmigo() {
    actualizarLista()
}

function sortearAmigo() {
    //verificando que la lista no este vacia
    if(amigos.length === 0) {
        alert('No hay amigos para sortear.')
        return
    }
    // se crea yba constante para obtener un amigo aleatorio
    const amigoSecreto = Math.floor(Math.random() * amigos.length)
    //obtenemos el amigo
    const amigoSorteado = amigos[amigoSecreto]
    const resultado = document.getElementById('resultado')
    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`
}
