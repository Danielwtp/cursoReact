//export variables
export const tareaMierda = "pasear al perro";
const tareaMierda2 = "pasear al perro again";
export default tareaMierda2;//una por archivo, tambien pueden objetos

//export funciones
export const crearTarea = (tarea, urgencia) => {
    return `${tarea} tiene prioridad ${urgencia}`;
}

export const endTarea = () => {
    return `tiene prioridad terminada`;
}

//Escribir clases
export class Homework {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;        
    }
    mostrar(){
        console.log(`${this.nombre} tiene prioridad ${this.prioridad}`);
    }
};

class Extra extends Homework{
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar2(){
        super.mostrar();
        console.log(`la cantidad es ${this.cantidad}`);
    }
};
//objetos

let h1 = new Homework('Aprender JS', 'Alta');

h1.mostrar();

//herencia

let compra1 = new Extra('Jabon', 'Alta', 4);

compra1.mostrar2();

