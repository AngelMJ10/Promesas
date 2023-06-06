let request = require('request-promise');

// Las promesas retornan objetos
let promesa = request('https://www.google.com');

//Se administran utilizando ...
promesa.then(function () {
  console.log('URL cargada');
});

promesa.catch(function (error){
  console.log('Falló la consulta')
  console.log(error)
})

// Se ejecuta luego de the/Catch
// settled = finalizado 
promesa.finally(function () {
  console.log('Promesa finalizada')
})