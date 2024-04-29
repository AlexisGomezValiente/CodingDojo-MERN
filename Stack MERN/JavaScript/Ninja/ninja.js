class Ninja{
    constructor(nombre, salud, velocidad = 3, fuerza = 3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    drinkSake(){
        this.salud += 10;
    }
}

class Sensei extends Ninja{
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10){
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom(){
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
        super.drinkSake();
    }
}

let sensei = new Sensei('Sensei Laurence');
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();