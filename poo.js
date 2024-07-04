// Permitir a los usuarios crear encuestas con opciones de respuesta
//  Permitir a los usuarios votar en las encuestas
//  Mostrar los resultados de las encuestas
//  Almacenar los datos de las encuestas y los votos en una variable
//  Almacenar los datos de las encuestas y los votos en una estructura de datos
//  Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.

let encuestas = []


class formEncuesta{
    constructor(encuesta, opciones){
        this.encuesta = encuesta
        this.opciones = opciones
    }
}

let cantEnc = prompt("ingrese la cantidad de encuestas")

if (cantEnc >= 2){
    for (let i = 0; i < cantEnc; i++) {
        var encuesta = prompt("Inserte una encuesta:")
        var opciones = prompt("Inserte las opciones de respuesta, separados por ,  :")
        let nuevaEncuesta = new formEncuesta(encuesta, opciones)
        encuestas.push(nuevaEncuesta) 
    }
    console.log(encuestas)
}
else{console.log("minimo debe ingresar 8 encuestas")}