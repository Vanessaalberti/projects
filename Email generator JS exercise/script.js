const correo = "@gmail.com";
let nombre
let direccionCorreo

let respuesta = ()=>{
    let r = prompt(`Quiere generar otro correo?
        1 - Si 
        2 - No`)
    if (r == 1 || r == "si" || r == "SI" || r == "Si" || r == "sI"){
        direc()
    }
    else if(r == 2 || r == "no" || r == "NO" || r == "No" || r == "nO"){
        alert("Hasta luego!")
    }
    else{
        alert("opcion invalida, por favor ingrese un numero valido")
        respuesta()
    }
}

let direc = ()=>{
    nombre = prompt("Ingresa un nombre y un apellido para generar un correo")
    let resultado = nombre.split(" ")
    let cuenta = 0
    for (pos in resultado){
        cuenta++
    }
    if (cuenta == 2){
        for(pos in resultado[0]){
            if(resultado[1][0].includes(resultado[0][pos])){
                direccionCorreo = (resultado[0].substring(0,pos)).concat(resultado[1]);
                break
            }
        }
        if(!(resultado[1][0].includes(resultado[0][pos]))){
            direccionCorreo = (resultado[0].substring(0,2)).concat(resultado[1]);
        }
        alert(`Tu direccion de correo electronico es: ${direccionCorreo.concat(correo)}`);
        document.write(`Tu direccion de correo electronico es: <b>${direccionCorreo.concat(correo)}</b></br>`);
        respuesta()
    }
    else {       
        alert("Ingresa un nombre y un apellido por favor")
        direc()
    }
}

alert("La funcion de este sistema es crear correos electronicos en base al nombre y apellido de la persona, verificando si alguna letra del nombre coincide con la primera letra del apellido, de ser asi se escribira el nombre hasta ese punto y seguido de ahi, el apellido, de no ser asi solo se escribiran 2 letras del nombre y el resto el apellido.")
direc()



