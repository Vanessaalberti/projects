class instalador{
    constructor(cantidadD, puntuacion, peso, n){
        this.cantD = cantidadD;
        this.punt = puntuacion;
        this.peso = peso;
        this.num = n;
        this.install = false;
        this.open = false;
    }
    info(){
        document.write(`<b>La app numero ${this.num} tiene los siguientes datos:</b></br>
        Cantidad de descargas: <b>${this.cantD}</b></br>
        Puntaje: <b>${this.punt}</b></br>
        Peso: <b>${this.peso}</b></br></br>`)
    }
    instalar(){
        if(this.install == false){
            this.install = true;
            alert("Aplicacion instalada");
        }
        else {
            alert("La aplicacion ya estaba instalada");
        }
    }
    desinstalar(){
        if(this.install == true){
            this.install = false;
            alert("Aplicacion desinstalada correctamente");
        }
        else {
            alert("La aplicacion ya estaba desinstalada");
        }
    }
    abrir(){
        if(this.install == true){
            if(this.open == false){
                alert("Abriendo aplicacion");
                this.open = true;
            }
            else{
                alert("La aplicacion ya esta abierta");
            }
        }
        else{
            alert("La aplicacion no esta instalada, no se puede abrir")
        }
        
    }
    cerrar(){
        if(this.install == true){
            if(this.open == true){
                this.open = false;
                alert("Cerrando aplicacion");
            }
            else{
                alert("La aplicacion no estaba abierta");
            }
        }
        else{
            alert("La aplicacion no esta instalada, no se puede abrir");
        }
    }
}

const app1 = new instalador("1K", "100 Likes", "20mb", 1);
const app2 = new instalador("2K", "200 Likes", "20mb", 2);
const app3 = new instalador("3K", "150 Likes", "20mb", 3);
const app4 = new instalador("4K", "1000 Likes", "20mb", 4);
const app5 = new instalador("500", "10 Likes", "20mb", 5);
const app6 = new instalador("1K", "1030 Likes", "20mb", 6);
const app7 = new instalador("1.5K", "1500 Likes", "20mb", 7);

app1.info()
app2.info()
app3.info()
app4.info()
app5.info()
app6.info()
app7.info()
    
//app1.instalar()
//app1.desinstalar()
//app1.instalar()
//app1.abrir()
//app1.cerrar()