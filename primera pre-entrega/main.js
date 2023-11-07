document.getElementById('asignarTurno').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const servicio = document.getElementById('servicio').value;
    const hora = document.getElementById('hora').value;
    
    
    if (parseInt(hora) <= 20) {
        const turnoTexto = `${nombre} - Servicio: ${servicio} - Hora: ${hora}:00`;

        const nuevoP = document.createElement('p');
        nuevoP.textContent = turnoTexto;
        document.getElementById('turnosAsignados').appendChild(nuevoP);

        const horaSelect = document.getElementById('hora');
        const horaValue = horaSelect.value;
        
        let optionToRemove = null;
        
        for (let i = 0; i < horaSelect.options.length; i++) {
            if (parseInt(horaSelect.options[i].value) === parseInt(horaValue)) {
                optionToRemove = horaSelect.options[i];
                break;
            }
        }
        
        if (optionToRemove) {
            horaSelect.removeChild(optionToRemove);
        }

        nombre.value = '';
        
        let turnos = JSON.parse(localStorage.getItem("turnos")) || [];
            
        turnos.push(turnoTexto);
        
        localStorage.setItem("turnos", JSON.stringify(turnos));
        
    } else {
        alert("No se pueden asignar turnos después de las 20:00 hrs.");
    }
});

// Función para realizar la búsqueda de turnos en el localStorage
function buscarTurnos() {
    const buscarInput = document.getElementById('buscarInput');
    const resultadosBusqueda = document.getElementById('resultadosBusqueda');

    const nombreABuscar = buscarInput.value.trim();
    if (nombreABuscar === "") {
        resultadosBusqueda.textContent = "Ingrese un nombre para buscar.";
        return;
    }

    let turnos = JSON.parse(localStorage.getItem("turnos")) || [];

    const resultados = turnos.filter(turno => turno.includes(nombreABuscar));

    if (resultados.length > 0) {
        const listaResultados = document.createElement('ul');
        resultados.forEach(resultado => {
            const item = document.createElement('li');
            item.textContent = resultado;
            listaResultados.appendChild(item);
        });
        resultadosBusqueda.innerHTML = "";
        resultadosBusqueda.appendChild(listaResultados);
    } else {
        resultadosBusqueda.textContent = "No se encontraron resultados.";
    }
}

document.getElementById('buscarTurno').addEventListener('click', buscarTurnos);