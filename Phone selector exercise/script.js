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

class altaGama extends celulares{
    constructor(color, peso, res, cam, ram, extracam){
        super(color, peso, res, cam, ram);
        this.extraCam = extracam;
        this.grab_lenta = false;
    }
    camara_lenta(){
        if(this.on == true){
            if(this.grab_lenta == false){
                alert("Iniciando grabacion en camara lenta");
                this.grab_lenta = true;
            }
            else {
                alert("Deteniendo grabacion en camara lenta");
                this.grab_lenta = false;
            }
        }
        else{
            alert("El celular esta apagado, no puede grabar");
        }
    }
    reconocimiento_facial(){
        if(this.on == true){
            alert("Reconocimiento facial realizado");
        }
        else{
            alert("El celular esta apagado, por favor encender para realizar reconocimiento facial");
        }
    }
}


const cel1 = new celulares("Rojo", 150 , 1080, 6.1, 4);
const cel2 = new celulares("Negro", 200 , 1080, 6.1, 8);
const cel3 = new celulares("Blanco", 130 , 1080, 6.1, 16);

const celAltaGama1 = new altaGama("Blanco", 130 , 1080, 6.1, 16, 20);
const celAltaGama2 = new altaGama("Negro", 130 , 1080, 6.1, 16, 20);

let opciones = (n)=> {
    let corte = false;
    while(corte == false){
        let respuesta = prompt(`Que prueba deseas hacer con el celular ${n}?
1 - Encender/Apagar 
2 - Reiniciar
3 - Tomar foto
4 - Grabar/Detener video
5 - Grabar en camara lenta (Solo alta gama)
6 - Reconocimiento facial (Solo alta gama)
7 - Volver al menu`);
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
            else if (n == "Alta gama 1"){
                celAltaGama1.prender();
            }
            else if (n == "Alta gama 2"){
                celAltaGama2.prender();
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
            else if (n == "Alta gama 1"){
                celAltaGama1.reiniciar();
            }
            else if (n == "Alta gama 2"){
                celAltaGama2.reiniciar();
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
            else if (n == "Alta gama 1"){
                celAltaGama1.foto();
            }
            else if (n == "Alta gama 2"){
                celAltaGama2.foto();
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
            else if (n == "Alta gama 1"){
                celAltaGama1.video();
            }
            else if (n == "Alta gama 2"){
                celAltaGama2.video();
            }
        }
        else if (respuesta == 5){
            if(n == "Alta gama 1"){
                celAltaGama1.camara_lenta();
            }
            else if (n == "Alta gama 2"){
                celAltaGama2.camara_lenta();
            }
            else{
                alert("El celular seleccionado no es de alta gama");
            }
        }
        else if (respuesta == 6){
            if(n == "Alta gama 1"){
                celAltaGama1.reconocimiento_facial();
            }
            else if (n == "Alta gama 2"){
                celAltaGama2.reconocimiento_facial();
            }
            else{
                alert("El celular seleccionado no es de alta gama");
            }
        }
        else if (respuesta == 7){
            menu();
            break
        }
        else{
            alert("Por favor, ingrese un numero valido");
            opciones(n);
        }
    }
}

let menuAltaGama = ()=>{
    let respuesta = prompt(`Desea la informacion del celular 1 o el celular 2?
        Para volver al menu presione 3
        Para cerrar el menu presione 0`);
    if(respuesta == 1){
        alert(celAltaGama1.inf);
        opciones("Alta gama 1")
    }
    else if (respuesta == 2){
        alert(celAltaGama2.inf)
        opciones("Alta gama 2");
    }
    else if (respuesta == 0){
        alert("Hasta luego!");
    }
    else if (respuesta == 3){
        menu();
    }
    else{
        alert("Numero invalido, por favor ingrese un numero de las opciones");
        menuAltaGama();
    }
}

let menu = ()=>{
    let respuesta = prompt("De cual de los 3 celulares quieres saber mas informacion? si desea ver los celulares de alta gama presione 4, si desea cerrar el menu presione 0");
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
    else if(respuesta == 4){
        menuAltaGama();
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
