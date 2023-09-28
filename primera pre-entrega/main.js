alert("Bienvenido a Perla Estetica y Relax! A continuación ingrese su nombre y el servicio que se va a realizar para que se le sea asignado un turno...");

for(let turno = 10; turno <=20; turno++){

    if(turno <= 12){
        let nombre = prompt("Ingrese su nombre");
        while(nombre === ""){
            alert("Tiene que ingresar un nombre, de lo contrario no podremos asignarle un turno")

            nombre = prompt("Ingrese su nombre");
        }
        let servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");

        while(servicio !== "masajes" && servicio !== "limpieza de cutis" && servicio !== "dermaplaning" && servicio !== "depilación láser" && servicio !== "depilacion laser"){
            alert("Tiene que ingresar un servicio válido")
            servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");
        }
            alert(`Turno ${turno}am Nombre: ${nombre} para el servicio de ${servicio}`);


    }else{
        let nombre = prompt("Ingrese su nombre");

        while(nombre === ""){
            alert("Tiene que ingresar un nombre, de lo contrario no podremos asignarle un turno")

            nombre = prompt("Ingrese su nombre");
        }
        let servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");

        while(servicio !== "masajes" && servicio !== "limpieza de cutis" && servicio !== "dermaplaning" && servicio !== "depilación láser"){
            alert("Tiene que ingresar un servicio válido")
            servicio = prompt("Ingrese el servicio que se va a querer realizar (masajes, limpieza de cutis, dermaplaning o depilación láser");
        }
            
        
        alert(`Turno ${turno}pm Nombre: ${nombre} para el servicio de ${servicio}`);


        
    }

}

alert("Desafortunadamente nos hemos quedado sin turnos para el día de hoy, lo esperamos mañana! Que tenga lindo día :)");
