// setTimeout() nos permitirá extender los tiempos de carga

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Primer Saludo")
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Segundo Saludo")
});

// PRUEBA 1
// Ejecutando promesas en parelelo
// La que tiene menor tiempo en ms de ejecutará primero
/*
p1.then((respuesta) => {
  console.log(respuesta)
});

p2.then((respuesta) => {
  console.log(respuesta)
});
*/

// PRUEBA 2 
// Ejecutar la p2, después de p1
/*
p1.then((res1) =>{
  console.log(res1)
  p2.then((res2) =>{
    console.log(res2)
    console.log("Proceso concluido")
  })
})
*/

// PRUEBA 3
// Ejecutar ambas promesas

Promise.all([p1, p2]).then((respuestas) => {
  console.log(respuestas);
});