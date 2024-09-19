// const { container } = require("webpack");

let marcas = ["tech", "sol", "group"];

let adj = ["fast", "smart", "secure"];

let dominioComercial = [".com", ".net", ".org"];

let arraydearrays = [marcas, adj, dominioComercial];
 
// const { container } = require("webpack");

let marcas = ["tech", "sol", "group"];

let adj = ["fast", "smart", "secure"];

let dominioComercial = [".com", ".net", ".org"];

let arraydearrays = [marcas, adj, dominioComercial];

/*Solucion usando bucles for 
for (let marca of marcas) {
  for (let adjetivo of adj) {
    for (let dominio of dominioComercial) {
      console.log("www." + marca + adjetivo + dominio);
    }
  }
}
*/

/*
function test (array, array2, array3) {
  for (let element1 of array) {
    for (let element2 of array2) {
      for (let element3 of array3) {
        console.log("www." + element1 + element2 + element3);
      }
    }
  }
}
test (marcas,adj,dominioComercial);
*/

//Usando .map
let dominios = marcas.map(m => 
  adj.map(a =>
    dominioComercial.map(d =>
      m+a+d
    )
  )
).flat(2);

console.log(dominios);
