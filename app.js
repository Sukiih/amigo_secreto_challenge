// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    const inputAmigo= document.getElementById('amigo')
    // Con trim se quitan los espacios al principio y final
    const amigo = inputAmigo.value.trim() 
    //verificamos que no este vacio el campo
    if (amigo === '') {
        alert('Por favor ingresa un nombre.')

        //agregue un borde rojo al input vacio para que el usuario vea que es necesario ingresar un nombre
        inputAmigo.style.border = '2px solid red'
        return
    }
    inputAmigo.style.border = ''
    //actualizando el array
    amigos.push(amigo)
    //Se limpia el campo
    inputAmigo.value = ''

    // Crear nuevo li y agregarlo a la lista
    const li = document.createElement('li')
    li.textContent = amigo
    document.getElementById('listaAmigos').appendChild(li)
}
