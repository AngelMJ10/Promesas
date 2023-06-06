// Funciones tradicionales 
function saludar(nombre){
  return `Bienvenido ${nombre}`
}

function mostrarAmigos(){
  return ['Juan' , 'Luis', 'Pedro']
}

/*
let resultado1 = saludar('Jhon')
console.log(resultado1);            // Forma 1
console.log(mostrarAmigos());       // Forma 2
*/


// Objeto
// Función flecha / parámetro
const perfil = {
  'apellidos'     : 'Marquina Jaime',
  'nombres'       : 'Angel Marquina Jaime',
  'edad'          : 18,
  'estaCasado'    : false,
  'amigos'        : ['Chaca' , 'Uribe' , 'Diego'],
  'contacto'      : {
    'telefono'    : ['951531166'],
    'ciudad'      : 'Chincha',
    'casPropia'   : true
  },
  'skill'         : function () {
    // console.log("¡Yo sé programar!")
    return "I know how to program"
  }
}

console.log(perfil.skill())