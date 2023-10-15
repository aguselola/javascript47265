// alert("Bienvenido a Perla Estetica y Relax! A continuación ingrese su nombre y el servicio que se va a realizar para que se le sea asignado un turno...");


// for(let turno = 10; turno <=20; turno++){

//     if(turno <= 12){
//         let nombre = prompt("Ingrese su nombre");
//         while(nombre === ""){
//             alert("Tiene que ingresar un nombre, de lo contrario no podremos asignarle un turno")

//             nombre = prompt("Ingrese su nombre");
//         }
//         let servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");

//         while(servicio !== "masajes" && servicio !== "limpieza de cutis" && servicio !== "dermaplaning" && servicio !== "depilación láser" && servicio !== "depilacion laser"){
//             alert("Tiene que ingresar un servicio válido")
//             servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");
//         }
//             alert(`Turno ${turno}am Nombre: ${nombre} para el servicio de ${servicio}`);


//     }else{
//         let nombre = prompt("Ingrese su nombre");

//         while(nombre === ""){
//             alert("Tiene que ingresar un nombre, de lo contrario no podremos asignarle un turno")

//             nombre = prompt("Ingrese su nombre");
//         }
//         let servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");

//         while(servicio !== "masajes" && servicio !== "limpieza de cutis" && servicio !== "dermaplaning" && servicio !== "depilación láser"){
//             alert("Tiene que ingresar un servicio válido")
//             servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");
//         }
            
        
//         alert(`Turno ${turno}pm Nombre: ${nombre} para el servicio de ${servicio}`);


        
//     }

// }

// alert("Desafortunadamente nos hemos quedado sin turnos para el día de hoy, lo esperamos mañana! Que tenga lindo día :)");


alert("Bienvenido a Perla Estetica y Relax! A continuación, ingrese su nombre y el servicio que se va a realizar para que se le asigne un turno...");

const turnos = [];

for (let turno = 10; turno <= 20; turno++) {
    let nombre = prompt("Ingrese su nombre");
    
    while (nombre === "") {
        alert("Tiene que ingresar un nombre, de lo contrario no podremos asignarle un turno");
        nombre = prompt("Ingrese su nombre");
    }

    let servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");

    while (servicio !== "masajes" && servicio !== "limpieza de cutis" && servicio !== "dermaplaning" && servicio !== "depilación láser" && servicio !== "depilacion laser") {
        alert("Tiene que ingresar un servicio válido");
        servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");
    }
    const turnoInfo = {
        nombre: nombre,
        servicio: servicio,
    };
    
    if (turno <= 12) {
        turnoInfo.turno = `${turno}am`;
    } else {
        turnoInfo.turno = `${turno}pm`;
    }
    
    turnos.push(turnoInfo);

    alert(`Turno ${turnoInfo.turno} Nombre: ${turnoInfo.nombre} para el servicio de ${turnoInfo.servicio}`);

}

alert("Desafortunadamente nos hemos quedado sin turnos para el día de hoy. ¡Lo esperamos mañana! Que tenga un lindo día :)");


function buscarPorNombre(nombre) {
    return turnos.filter(turno => turno.nombre === nombre);
}


const nombreBuscado = prompt("Ingrese el nombre que desea buscar:");
const resultadosPorNombre = buscarPorNombre(nombreBuscado);

if (resultadosPorNombre.length > 0) {
    alert("Resultados encontrados por nombre:");
        resultadosPorNombre.forEach(turno => {
            alert(`Turno ${turno.turno} Nombre: ${turno.nombre} para el servicio de ${turno.servicio}`);
        });
} else {
    alert("No se encontraron resultados para el nombre ingresado.");
}

