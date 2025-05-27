//EJERCICIO 1

//Punto 1
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas);
//Punto 2
frutas.push("uva");
console.log(frutas);
//Punto 3
frutas.unshift("frutilla");
console.log(frutas);
//Punto 4
frutas.shift("frutilla");
console.log(frutas)
//Punto 5
frutas.pop("uva");
console.log(frutas)


//EJERCICIO 2

//Punto 1
let nombres = ["Marcelo", "Ernesto", "Florinda"]
//Punto 2
console.log("Cantidad inicial de nombres:", nombres.length);
//Punto 3
nombres.push("Carlos");
nombres.push("Ana");
//Punto 4
console.log("Cantidad final de nombres:", nombres.length);

//EJERCICIO 3

//Punto 1
let numeros = [1, 2, 3, 4, 5];
//Punto 2
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//EJERCICIO 4

//Punto 1
let Numeros = [5, 10, 15, 20];
let suma = 0;
//Punto 2
for (let i = 0; i < Numeros.length; i++) {
  suma += Numeros[i];
}
//Punto 3
console.log("La suma total es: " + suma);

//EJERCICIO 5

//Punto 1
let palabras = [];

for (let i = 0; i < 5; i++) {
  let palabra = prompt("Escribí una palabra:");
  //Punto 2
  palabras.push(palabra);
}
//Punto 3
console.log("Las palabras ingresadas son:");
console.log(palabras);