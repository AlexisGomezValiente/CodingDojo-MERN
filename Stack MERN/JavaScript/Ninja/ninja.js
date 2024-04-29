class Ninja{
    constructor(nombre, salud, velocidad = 3, fuerza = 3, ){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName = () => {
        console.log(this.nombre);
    }

    showStats = () => {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`)
    }

    drinkSake = () => {
        this.salud += 10;
    }
}

let ninja = new Ninja('Alexis', 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake(); // Aumenta la salud del ninja 10 puntos
ninja.showStats();