//inicio POO (Programacion orientada a objetos)

const cantidad = prompt("Cuantos autos quieres registrar?");
const carros = [];
let cont
let respuesta

class auto {
    constructor(color, año, marca){
        this.color = color;
        this.year = año;
        this.marca = marca;
        this.inf = `El auto es color ${this.color}, marca ${this.marca} del año ${this.year} ` ;
    }
}
for (i = 0; i < cantidad; i++){
    carros[i] = new auto(prompt(`Color del auto numero ${i + 1}`), prompt(`año del auto ${i + 1}`), prompt(`marca del auto ${i + 1}`)); 
}

respuesta = (cont)=>{
    if (cont == "si" || cont == "SI"){
        let posi = prompt("De que numero de auto quieres saber la informacion?");
        alert(carros[posi - 1].inf);
        cont = prompt("Quieres saber la informacion de otro auto?");
        respuesta(cont);
    }
    else {
        alert("Hasta luego!");
    }
}

cont = prompt("Quieres saber la informacion de un auto?");
respuesta(cont);
