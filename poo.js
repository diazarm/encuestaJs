// Permitir a los usuarios crear encuestas con opciones de respuesta
//  Permitir a los usuarios votar en las encuestas
//  Mostrar los resultados de las encuestas
//  Almacenar los datos de las encuestas y los votos en una variable
//  Almacenar los datos de las encuestas y los votos en una estructura de datos
//  Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.

const encuestas = []


class formEncuesta{
    constructor(encuesta, opciones){
        this.encuesta = encuesta
        this.opciones = opciones
    }
}

var cantEnc = parseInt(prompt("ingrese la cantidad de encuestas"))

    if (cantEnc >= 2){
        for (let i = 0; i < cantEnc; i++) {
            var encuesta = prompt("Inserte una nueva encuesta:")
            var opciones = prompt("Inserte las opciones de respuesta:")
            let nuevaEncuesta = new formEncuesta(encuesta, opciones.split(","))
            encuestas.push(nuevaEncuesta) 
        }
        console.log("prueba",encuestas)
    }
    else{console.log("minimo debe ingresar 8 encuestas")}



var respuestas = []

function votar(encuestas) {
    console.log("Bienvenidos a la encuesta, conteste las siguiente preguntas")
    for(let i=0; i< cantEnc; i++){
        console.log(`La pregunta es ${encuestas[i].encuesta}? y las opciones son ${encuestas[i].opciones}`)
    }
    console.log("Resolucion!")
    for (let i=0; i<cantEnc; i++){
        var respuesta = prompt(`Elija la respuesta a la pregunta ${encuestas[i].encuesta} las opciones son ${encuestas[i].opciones}`)
        respuestas.push(respuesta)
        console.log(`la respuesta a ${encuestas[i].encuesta} es ${respuestas[i]} `)
        }
    alert("Gracias por participar")
}

votar(encuestas)




// const encuestas = [];

// class formEncuesta {
//     constructor(encuesta, opciones) {
//         this.encuesta = encuesta;
//         this.opciones = opciones;
//     }
// }

// let cantEnc = prompt("Ingrese la cantidad de encuestas:");

// if (cantEnc >= 2) {
//     for (let i = 0; i < cantEnc; i++) {
//         var encuesta = prompt("Inserte una encuesta:");
//         var opciones = prompt("Inserte las opciones de respuesta, separadas por comas:");
//         let nuevaEncuesta = new formEncuesta(encuesta, opciones.split(","));
//         encuestas.push(nuevaEncuesta);
//     }
//     console.log(encuestas);
// } else {
//     console.log("Debe ingresar al menos 2 encuestas.");
// }

// const respuestas = [];

// function votar(encuestas) {
//     console.log("Bienvenidos a la encuesta, conteste las siguientes preguntas:");
//     for (let i = 0; i < encuestas.length; i++) {
//         console.log(`La pregunta es: ${encuestas[i].encuesta} y las opciones son: ${encuestas[i].opciones.join(", ")}`);
//         let respuesta = prompt("Ingrese su respuesta:");
//         respuestas.push(respuesta);
//     }
//     console.log("Resolución:");
//     for (let i = 0; i < respuestas.length; i++) {
//         console.log(`La respuesta a "${encuestas[i].encuesta}" es "${respuestas[i]}"`);
//     }
// }

// if (encuestas.length > 0) {
//     votar(encuestas);
// }
