let cantidadDeAlumnos = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0 ; i < cantidadDeAlumnos ; i++) {    /* toma los nombres y les asigna 0 asistencias para iniciar */
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)),0];
}

const tomarAsistencia = (nombre , pos, dia)=>{ 
    let presencia = prompt(`${nombre} asitio el dia ${(dia+1)} ? (p = presente)`);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[pos][1]++;
    }
}

for (i = 0 ; i < 30; i++){   /* ya que hay que tomar asistencia por 30 dias */
    for (alumno in alumnosTotales){   /* Ya que es "in" nos pasara la posicion */
        tomarAsistencia(alumnosTotales[alumno][0], alumno, i) 
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
            Presentes: ${alumnosTotales[alumno][1]} <br>
            Ausencias: ${30 - alumnosTotales[alumno][1]} <br>`;
    if (30 - alumnosTotales[alumno][1] >= 18){
        resultado+= `Reprobado por inasistencias<br>`;
    }
    else{
        resultado+= `Aprobado con la mayoria de asistencias<br><br>`;
    }
    document.write(resultado);
}