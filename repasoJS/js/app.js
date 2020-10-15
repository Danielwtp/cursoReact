//variables var

var aprendiendoJS;

aprendiendoJS = false;
aprendiendoJS = 20;
aprendiendoJS = "queso";

console.log("aprendiendo JS, ", aprendiendoJS);

//variables const

const uwu = "marico";

//uwu = "asd"; //esto peta

//variables let, parecidas a las var

let owo;

//scope
var queso = 'dame var';
console.log("fuera del if, ", queso);

if(queso){
    var queso = "ya no hay queso";
    console.log("en el if, ", queso);
}

console.log("fuera del if, ", queso);

//scope con let o cons
let elqueso = 'dame let';
console.log("fuera del if, ", elqueso);

if(queso){
    let elqueso = "ya no hay queso";
    console.log("en el if, ", elqueso);
}

console.log("fuera del if, ", elqueso);


//template strings

const nombre = "Dani";
const trabajo = "Dev";

//concatenacion

console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//concatenar + de 1 linea

// const contenedorApp = document.querySelector('#app');

// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +    
//             '</ul>';

// let html = `<ul>
//                 <li> Nombre: ${nombre}</li>
//                 <li> Trabajo: ${trabajo}</li>
//             </ul>`;

// contenedorApp.innerHTML = html;

//Funciones
saludar('Juanito');

function saludar( nombre ) {
    console.log('Bienvenido ', nombre);
}

saludar('Pedro');

//expresiones funciones

//client('Juan'); esto no fufa porque está dentro de la variable
const client = function(nombreCliente){
    console.log('Datos... ' + nombreCliente);
}

client('Juan');

//Funciones por default en las funciones

function actividad(nombre = "Marica", actividad = "pene"){
    console.log(`La persona ${nombre}, chupa el ${actividad}`);
}

actividad('Queso', 'pn');
actividad("marico");

//arrow finciton

let viajando2 = (destino, duracion) => `Viajando a ${destino} durante ${duracion}`

let viajando = destino => `Viajando a ${destino} durante ${duracion}`

let viaje = viajando2("Paris", "Queso");


console.log(viaje);


//objet literal

const persona = {
    name: "Dani",
    trabajo: "Dev",
    edad: 500
}

console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.trabajo);
console.log(persona['trabajo']);

//object constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInf = function() {
    return `la tarea ${this.nombre}, tiene prioridad ${this.urgencia}`;
}

const tarea1 = new Tarea('Dano','Urgente');
console.log(tarea1);


console.log(tarea1.mostrarInf());

//Destructuring objeto (sacar valores de un objeto)

let {name} = persona;

console.log(name);

//crear objetos
const cosas = {tarea1, queso, nombre};
console.log(cosas)

//funciones en un objeto

const persona2 = {
    name: "Dani",
    trabajo: "Dev",
    edad: 500,
    info: function(){
        console.log(`${this.name}, trabaja de ${this.trabajo}`)
    },
    info2(){
        console.log(`${this.name}, trabaja de ${this.trabajo}`)
    }
}

persona2.info();
persona2.info2();

//arreglos y .flex-md-wrap-reverse

// const carro = ['Producto 1', 'Producto 2', 'Producto 3'];

// console.log(carro);

// const appCarro = document.querySelector('#app');

// let html='';

// carro.forEach(producto => {
//     html += `<li> ${producto}</li>`
// });

// carro.map(producto => {
//     return `<li> ${producto}</li>`;
// });

// appCarro.innerHTML = html;

//Object keys

console.log(Object.keys(persona));

//Spread operator

let lenguajes = ["JS", "PHP", "Python"];
let framework = ["React", "Laravel", "Django"];

//unir listas

let combinacion = lenguajes.concat(framework);
let combinacion2 = [...lenguajes,...framework];

console.log(combinacion2);

//metodos en arreglos

const personas = [
    {nombre:"Perro", edad:15, secso:"Male", queso:"fresco"},
    {nombre:"Coso", edad:25, secso:"Trans", queso:"padano"},
    {nombre:"Passa", edad:35, secso:"Female", queso:"mozzarela"},
    {nombre:"Baile", edad:45,secso:"Male", queso:"cheddar"},
]

console.log(personas);

const mayores = personas.filter( persona => { 
    return persona.edad > 28;
});

console.log(mayores);

const quesos = personas.find( persona => { 
    return persona.queso === "cheddar";
});

console.log(quesos);

let total = personas.reduce((edadTotal, persona) =>{
    return edadTotal + persona.edad;
}, 0);

console.log(total/personas.length);

//Promises

// const discount = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         let descuento = true;

//         if(descuento){
//             resolve('Descuento aplicado!');
//         }else{
//             reject('No hay descuento');
//         }
//     }, 30);
// });

// discount.then(resultado => {
//     console.log(resultado);
// }).catch(error => {
//     console.log(error);
// });

// //promisex ajx 

// const users = cantidad => new Promise((resolve, reject) => {
//     //pasar cantidad a la api

//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     //llamada ajax

//     const xhr = new XMLHttpRequest();

//     //abrir conexion

//     xhr.open('GET', api, true);

//     //onload

//     xhr.onload = () =>{
//         if(xhr.status === 200){
//             resolve( JSON.parse(xhr.responseText).results );
//         }else{
//             reject(Error(xhr.statusText));
//         }
//     }

//     //opcional(on error)
//     xhr.onerror = (error) => reject(error);

//     //send Request
//     xhr.send();
// });

// users(1).then(
//     miembros => console.log(miembros), 
//     error => console.error(
//         new Error('Hubo un error ', + error)
//     )
// );

// users(40).then(
//     miembros => imprimirHTML(miembros), 
//     error => console.error(
//         new Error('Hubo un error ', + error)
//     )
// );

// function imprimirHTML(usuarios) {
//     let html = '';
//     usuarios.forEach( user => {
//         html += `
//             <li>
//                 Nombre: ${user.name.first} ${user.name.last}
//                 Pais: ${user.nat}
//                 Imagen:
//                     <img src="${user.picture.medium}">
//             </li>
//         `
//     });
//     const contenedorApp = document.querySelector('#app');
//     contenedorApp.innerHTML = html;
// }

import { tareaMierda, crearTarea, endTarea, Homework } from './tareas.js';
import mierda2  from './tareas.js';

const tarea12 = new Homework('queso', 'lmao');

tarea12.mostrar();

console.log(mierda2);
console.log(endTarea());