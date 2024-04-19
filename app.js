// Datos de los hobbies
const hobbies = [
    { icon: "https://cdn-icons-png.flaticon.com/128/6279/6279463.png", name: "Anime" },
    { icon: "https://cdn-icons-png.flaticon.com/128/1655/1655698.png", name: "Cinefilo" },
    { icon: "https://cdn-icons-png.flaticon.com/128/1027/1027128.png", name: "Cocina" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3330/3330314.png", name: "Libros" },
    { icon: "https://cdn-icons-png.flaticon.com/128/4776/4776023.png", name: "Manga" },
    { icon: "https://cdn-icons-png.flaticon.com/128/11494/11494033.png", name: "Reparación" },
    { icon: "https://cdn-icons-png.flaticon.com/128/3612/3612518.png", name: "Videojuegos" },


];

// Obtener la lista de hobbies
const hobbiesList = document.getElementById("hobbies-list");

// Generar elementos de lista para cada hobby
hobbies.forEach(hobby => {
    const listItem = document.createElement("li");
    listItem.classList.add("d-flex", "flex-column", "align-items-center");

    const icon = document.createElement("img");
    icon.src = hobby.icon;
    icon.alt = hobby.name;
    icon.classList.add("iconos");

    const span = document.createElement("span");
    span.textContent = hobby.name;

    listItem.appendChild(icon);
    listItem.appendChild(span);

    hobbiesList.appendChild(listItem);
});

// Datos de los skills
const skills = [
    { icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
    { icon: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png" },
    { icon: "https://cdn-icons-png.flaticon.com/128/919/919826.png" },
    { icon: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png" },
    { icon: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" }
];

// Obtener la lista de skills
const skillsList = document.getElementById("skills-list");

// Generar elementos de lista para cada skill
skills.forEach(skill => {
    const listItem = document.createElement("li");
    listItem.classList.add("d-flex", "flex-column", "align-items-center");
    const icon = document.createElement("img");
    icon.src = skill.icon;
    icon.classList.add("iconos");

    listItem.appendChild(icon);

    skillsList.appendChild(listItem);
});

// Función para validar el formulario
function validarFormulario() {
    var formulario = document.getElementById('formulario-contacto');
    var campos = formulario.querySelectorAll('.campo-form');

    for (var i = 0; i < campos.length; i++) {
        if (!campos[i].checkValidity()) {
            return false; // Si algún campo no es válido, retorna false
        }
    }

    return true; // Retorna true si todos los campos son válidos
}

// Función para habilitar el botón de enviar cuando todos los campos estén llenos
function habilitarBoton() {
    var formulario = document.getElementById('formulario-contacto');
    var botonEnviar = formulario.querySelector('.btn-send');

    // Verifica si todos los campos están llenos y son válidos
    if (validarFormulario()) {
        botonEnviar.removeAttribute('disabled'); // Habilita el botón de enviar
    } else {
        botonEnviar.setAttribute('disabled', 'disabled'); // Deshabilita el botón de enviar
    }
}

// Agrega eventos de cambio a los campos para verificar la validez del formulario
var campos = document.querySelectorAll('.campo-form');
for (var i = 0; i < campos.length; i++) {
    campos[i].addEventListener('input', habilitarBoton);
}

function send(){
    alert("Mensaje enviado exitosamente")
}