// Funciones asícronas
async function sumar (valor1, valor2) {
  // El retorno construye y asume 'resolve' para la promesa IMPLÍCITA
  /* 
  return new Promise((resolve, reject) => {
    valor1 + valor2
  })
  */
  // Todo ese código está de manera implícita no es necesario ponerlo
  return valor1 + valor2;
}

async function calcular() {
  // setTimout(callback, tiempoEspera, resultado)
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 20)
  })
}

// El resultado será una promesa, con el valor 15
//el estado pendiente no se muestra ya que se ejecuta INNMEDIATAMENTE
console.log(sumar(5,10))

// Proceso en espera
console.log(calcular());

// ¿Cómo vemos el valor de que nos trae la promesa en la funcion calcular()?

calcular()
  .then((res) => {
    console.log(res)
  })