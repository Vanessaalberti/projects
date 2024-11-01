const ppt = ["Piedra","Papel","Tijera"];

let juego = ()=>{
    let respuesta = prompt(`Elgie una opcion!
        1 - Piedra
        2 - Papel
        3 - Tijera
        4 - Salir del juego`);
    if (respuesta == 1 || respuesta == 2 || respuesta == 3){
        let numRam = Math.floor(Math.random() * 3);
        let numRes = --respuesta;
        if (numRam == numRes){
            alert(`Ganaste! sacaste ${ppt[numRes]} y la computadora eligio lo mismo!`)
        }
        else {
            
            alert(`Casi! sacaste ${ppt[numRes]} y la computadora eligio ${ppt[numRam]}!`)
        }
        let repeat = prompt(`Quieres volver a jugar?
            1 - Si
            2 - No`);
            if (repeat == 1){
                juego()
            }
            else if (repeat == 2){
                alert("Hasta luego!")
            }
            else{
                alert("Dato invalido, se iniciara nuevamente el juego")
                juego()
            }
    }
    else if (respuesta == 4){
        alert("Hasta luego!")
    }
    else{
        alert("Ingresa un numero valido")
        juego()
    }
}

juego()
