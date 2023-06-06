// operador await(esperar) funciona ÚNICAMENTE en funciones asíncronas
// await is only valid async functions
/*
let promesa = new await Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 20)
})

promesa 
  .then((res) => {console.log(res)})
*/

async function testPromesas(){
  let promesa1 = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 20)
  })

  let promesa2 = await new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 100)
  })
  console.log(promesa1 + promesa2)
}

testPromesas();