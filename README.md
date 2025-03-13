# Proyecto: **Amigo Secreto**

## Descripción
Este proyecto es una aplicación web que permite gestionar un juego de "Amigo Secreto". Los usuarios pueden ingresar los nombres de sus amigos, añadirlos a una lista y luego hacer un sorteo para descubrir quién es el amigo secreto de cada uno. El sorteo es realizado de forma aleatoria y el nombre del amigo secreto se muestra en la interfaz.

## Características
- **Agregar amigos**: Los usuarios pueden añadir los nombres de sus amigos a una lista.
- **Sorteo aleatorio**: El sistema selecciona aleatoriamente un nombre de la lista de amigos.
- **Interfaz dinámica**: Los amigos se muestran en una lista actualizada cada vez que se añaden o se realiza el sorteo.

## Tecnologías utilizadas
- **HTML**: Estructura básica de la página web.
- **CSS**: Estilo y diseño para la interfaz de usuario.
- **JavaScript**: Lógica de la aplicación, incluyendo la adición de amigos y el sorteo aleatorio.

## Instalación

Para correr este proyecto localmente, simplemente sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Sukiih/amigo_secreto_challenge.git

## Cómo funciona

### 1. Agregar amigos
- Escribe el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir".
- Los amigos se mostrarán en una lista debajo del campo de entrada.

### 2. Sorteo de amigo secreto
- Haz clic en el botón "Sortear amigo secreto" para realizar el sorteo.
- Si hay amigos en la lista, se mostrará el nombre del amigo secreto en la sección de resultados.
- Si la lista está vacía, aparecerá una alerta avisando que no hay amigos para sortear.

## Lógica detrás del sorteo
1. La aplicación mantiene una lista de amigos en un **array** llamado `amigos`.
2. Al hacer clic en el botón de sorteo, se genera un índice aleatorio utilizando `Math.random()` y `Math.floor()`.
3. Con ese índice, se selecciona un amigo aleatorio de la lista y se muestra su nombre en la sección de resultados.

## Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un **fork** de este repositorio.
2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad

3. Realiza los cambios y asegúrate de que todo funcione correctamente.
4. Haz un commit con un mensaje descriptivo.
5. Envía un pull request para revisión.
