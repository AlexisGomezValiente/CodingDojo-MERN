class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    padre = () => {
        console.log('PADRE')
    }
}

class Alumno extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido);
        this.edad = edad;
    }

    mostrarInfo = () => {
        console.log(this.nombre, this.apellido, this.edad)
    }
}

let alumno = new Alumno('Alexis', 'Gomez', 20);
alumno.mostrarInfo();
alumno.padre()