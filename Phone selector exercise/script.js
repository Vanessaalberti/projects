class celulares {
    constructor(color, peso, res, cam, ram){
        this.color = color;
        this.peso = peso;
        this.res = res;
        this.cam = cam;
        this.ram = ram;
        this.inf = `Este celular es color ${this.color}, con una resolucion de ${this.res}p, camara ${this.cam}", peso de ${this.peso}g y ${this.ram}gb de ram`
        this.on = false;
        this.grab = false;
    }
    prender(){
        if (this.on == false){
            alert("Celular encendido");
            this.on= true;
        }
        else {
            alert("Celular apagado");
            this.on = false;
        }
    }
    reiniciar(){
        if(this.on == true){
            alert("Reiniciando celular");
        }
        else{
            alert("El celular esta apagado, no se puede reiniciar");
        }
    }
    tomar_foto(){
        if(this.on == true){
            alert("Foto tomada");
        }
        else{
            alert("No se puede tomar foto, el celular esta apagado");
        }
    }
    grabar_video(){
        if(this.on == true){
            if(this.grab == false){
                alert("Iniciando grabacion");
                this.grab = true;
            }
            else{
                alert("Deteniendo grabacion");
            }
        }
        else {
            alert("El celular esta apagado, no se puede grabar");
        }
    }
}

const cel1 = new celulares("Rojo", 150 , 1080, 6.1, 4);
const cel2 = new celulares("Negro", 200 , 1080, 6.1, 8);
const cel3 = new celulares("Blanco", 130 , 1080, 6.1, 16);

let opciones = (n)=> {
    let corte = false;
    while(corte == false){
        let respuesta = prompt(`Que prueba deseas hacer con el celular numero ${n}?
1 - Encender/Apagar 
2 - Reiniciar
3 - Tomar foto
4 - Grabar/Detener video
5 - Volver al menu`);
        if (respuesta == 1){
            if(n == 1){
                cel1.prender();
            }
            else if(n == 2){
                cel2.prender();
            }
            else if(n == 3){
                cel3.prender();
            }
        }
        else if (respuesta == 2){
            if(n == 1){
                cel1.reiniciar();
            }
            else if(n == 2){
                cel2.reiniciar();
            }
            else if(n == 3){
                cel3.reiniciar();
            }
        }
        else if (respuesta == 3){
            if(n == 1){
                cel1.tomar_foto();
            }
            else if(n == 2){
                cel2.tomar_foto();
            }
            else if(n == 3){
                cel3.tomar_foto();
            }
        }
        else if (respuesta == 4){
            if(n == 1){
                cel1.grabar_video();
            }
            else if(n == 2){
                cel2.grabar_video();
            }
            else if(n == 3){
                cel3.grabar_video();
            }
        }
        else if (respuesta == 5){
            menu();
            break
        }
        else{
            alert("Por favor, ingrese un numero valido");
            opciones(n);
        }
    }
}

let menu = ()=>{
    let respuesta = prompt("De cual de los 3 celulares quieres saber mas informacion? si desea cerrar el menu presione 0");
    if (respuesta == 1){
        alert(cel1.inf);
        opciones(1);
    }
    else if (respuesta == 2){
        alert(cel2.inf);
        opciones(2);
    }
    else if(respuesta == 3){
        alert(cel3.inf);
        opciones(3);
    }
    else if(respuesta == 0){
        alert("Hasta luego!");
    }
    else{
        alert("Atencion, numero invalido, recuerde colocar una opcion del 1 al 3");
        menu();
    }
}



menu();
