
const numero1 = 10
const numero2 = 5
const resultadoTotal = numero1+numero2
console.log(resultadoTotal)


// let numeroA = parseInt(prompt('ingrese un numero'))

// if(numeroA === 6){
//    alert('el numero es 6')
// }   else {
//        alert('el numero no es 6')
// }



let numeroA = parseInt(prompt('ingrese un numero'))

if(numeroA === 6){
    alert('el numero es 6')
}   else {
        alert('el numero no es 6')
}

const ingresarEdad = parseInt(prompt('ingrese su edad'))

if (edad >= 0 &&  edad <= 10){
    alert('niño');

} else if (edad  > 10 &&  edad <= 18){
    alert('adolescente');

} else if (edad  >19 &&   edad <= 80){
    alert(adulto);
    
}else if (edad   > 81 &&   edad <= 100){
    alert('anciano')
}

switch (edad) {
    case edad >=0 && edad<=10:
        alert('es un niño');
        break;
        case edad >=11 && edad<=18:
            alert('es un adolescente');
            break;
        default:
            alert('ingrese la edad correctamente')
        case edad >=19 && edad<=80:
            alert('es un adulto');
            break;
            case edad >=81 && edad<=100:
                alert('es un anciano');
                break;
        }


for(let i =1 ; i<=3; i++){
    i = i+2
    let nombreIngresado = prompt('ingrese su nombre');
    if(nombreIngresado === "Sayen"){
        alert('ha ingresado Sayen')
        continue
    }
    alert('su turno fue registrado, es el nro'+ i)

}



function nombreAIngresar (){
    let nombreIngresado = prompt('ingrese su nombre');
    alert('nombreIngresad');
}
function edadAIngresar (){
    let edadIngresada = prompt('ingrese su edad');
    alert(edadIngresada);
}
function nombreYEdad (){
    let nombreIngresado = prompt('ingrese su nombre');
    alert(nombreIngresado);
    let edadIngresada = prompt('ingrese su edad');
    alert(edadIngresada);
}

edadAIngresar()
nombreYEdad()
nombreAIngresar()


//objetos// 
const persona1 = {
    nombre: Mara , edad: 20 , calle: stateresita}

    function persona(nombre, edad, calle) {
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.calle = literal.calle;
    }

    console.log(persona1.nombre,persona1[edad])
    console.log(persona1.calle)
    const persona2 = new persona("Ailen" , 23, "mariano moreno");


    let cadena = "clase objetos";
    console.log(cadena.length);
    console.log(cadena.toLowerCase());
    console.log(cadena.toUpperCase);


//arrays//

const arrayDeNumeros = [0,1,2,3,4]
const arrayDeNombres = [Ailen,Mara,Suyai]

console.log(arrayDeNombres)


for (let index = 0;index<4;index++){

    if(arrayDeNombres[index] === "mara"){
        console.log("Encontramos a Mara"+(index+1));
        break 
    
    }
}

const listaNombres = [];
let   cantidad     = 5;

do{
    let nombreAIngresar = prompt('ingrese su nombre')
    listaNombres.push(nombreAIngresar)
    console.log(listaNombres.length)
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["MARA", "AILEN"]);

alert(nuevaLista.join("/n"));

//funciones//

function sumarRango(desde,hasta){
}
let total1 = 0
for (let i = 1;i<=10;i++){
    total1 += i 
}
console.log(total1) //55

sumarRango(1,5)

function mayorQue(n) {
    return (m) => m > n 
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) ) // true
console.log( mayorQueDiez(8) )  // false


const productos = [
    {nombre:'abrigos',precio:1000},
    {nombre:'remeras',precio:700},
    {nombre:'pantalones',precio:1200}]

let total = 0 

productos.forEach(  (elemento)=> {
    total+= elemento.precio
    console.log(elemento,nombre,elemento.precio)
})

console.log(total)

//DOM//

let parrafos = document.getElementsByClassName<("parrafo") 
console.log(document.getElementById("contenedor") )
console.log(document.getElementsByName("div"))

for (const parrafo of parrafos){
    console.log
}


////////////////////////////////////////////////
console.log(document.body)
console.log(document.getElementsByClassName("parrafo"))

let nombreGuardado = localStorage.getItem('nombre')

if(nombreGuardado){
    alert('Bienvenido')
}else{
    let nombre = prompt('Ingrese su nombre')
    localStorage.setItem('nombre',nombre);
}

let nombre = prompt('Ingrese su nombre')

localStorage.setItem('nombre',nombre);
console.log(nombreGuardado)

//eventos
let boton = document.getElementById('boton')
function tipoDeRespuesta(evento){
    boton.addEventListener(evento,respuestaClick)
}
tipoDeRespuesta('mouseleave')

function respuestaClick(){
    console.log('Ingresar')
}

let inputNombre = document.getElementById('inputNombre')

inputNombre.addEventListener('keydown',respuestaClick)

function respuestaClick(){
    console.log('se activo el teclado')
}


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDeFaul();
    console.log(e)
    let formulario = e.target
    console.log(e.target.children[0].value)
    
    alert('Se han enviado los datos')
    //console.log("Formulario Enviado")
}

//STORAGE//
let nombreGuardado2 = sessionStorage.getItem('nombre')

if(nombreGuardado2){
    alert('Buen dia ${nombreGuardado2}')
} else{
    let nombre2 = prompt('Ingrese su nombre');
    sessionStorage.setItem('nombre2',nombre2);
}


for (let i = 0; 1 < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ sessionStorage.getItem(clave));
}

                    //

const carrito = document.getElementById('carrito');
const vestidos = document.getElementById('lista-vestidos');
const listaVestidos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

eventslisteners();

function eventslisteners() 
{
    vestidos.addEventListener('click', comprarVestido);

    carrito.addEventListener('click', eliminarVestido);

    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

    document.addEventListener('DOMContentLoaded', leerLS)

}

function comprarVestido(e) 
{
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const vestido = e.target.parentElement.parentElement;
        leerDatosVestido(vestido);
    }    
}


function leerDatosVestido(vestido) {
    const infoVestido = {
        imagen: vestido.querySelector('img').src,
        titulo: vestido.querySelector('h4').textContent,
        precio: vestido.querySelector('.precio span').textContent,
        id: vestido.querySelector('a').getAttribute('data-id')
    }

    insertarVestido(infoVestido);
}

function insertarVestido(vestido) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${vestido.imagen}" width="100"></td>
        <td>${vestido.titulo}</td>
        <td>${vestido.precio}</td>
        <td><a href="#" class="borrar-vestido" data-id="${vestido.id}">X</a></td>    
    `;
    listaVestidos.appendChild(row);
    guardarVestidoLocalStorage(vestido);

}

function eliminarVestido(e) 
{
    e.preventDefault();

    let vestido, vestidoId;

    if (e.target.classList.contains('borrar-vestido')) {
        e.target.parentElement.parentElement.remove(); 
    }  
    vestido = e.target.parentElement.parentElement;
    vestidoId = vestido.querySelector('a').getAttribute('data-id');   
    eliminarVestidoLS(vestidoId);
}

function vaciarcarrito() 
{
    while(listaVestidos.firstChild){
        listaVestidos.removeChild(listaVestidos.firstChild);
    }    
    vaciarLs();

    return false;    
}

function guardarVestidoLocalStorage(vestido)
{
    let vestidos;
    vestidos = obtenerVestidosLocalStorage();
    vestidos.push(vestido);
    localStorage.setItem('vestidos', JSON.stringify(vestidos));
}


function obtenerVestidosLocalStorage() 
{
    let vestidosLS;
    if (localStorage.getItem('vestidos') === null) {
        vestidosLS = [];        
    } else {
        vestidosLS = JSON.parse(localStorage.getItem('vestidos'));
    }
    return vestidosLS;
}

function leerLS() 
{
    let vestidosLS;

    vestidosLS = obtenervestidosLocalStorage();

    vestidosLS.forEach(function (vestido) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><img src="${vestido.imagen}" width="100"></td>
        <td>${vestido.titulo}</td>
        <td>${vestido.precio}</td>
        <td><a href="#" class="borrar-vestido" data-id="${vestido.id}">X</a></td>    
    `;
        listavestidos.appendChild(row);

    })
}

function eliminarvestidosLS(vestido) 
{
    let vestidosLS;
    vestidosLS = obtenervestidosLocalStorage();
    vestidosLS.forEach
    {
        if (vestidoLS.id === vestido) {
        vestidoLS.splice(index, 1);
        }
}
    {
    localStorage.setItem('vestidos', JSON.stringify(vestidosLS));
}
}
function vaciarLs() {
    localStorage.clear();
}

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title:'Has agregado al carrito correctamente',
    showConfirmButton: false,
    timer: 1000
})


