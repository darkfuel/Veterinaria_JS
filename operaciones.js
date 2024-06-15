const fs = require('fs')

const leer = () =>{
 try {
  const data = fs.readFileSync('citas.json')
  console.log(data.toString())
 } catch (error) {
  console.log('Error de obtención de datos')
 }
}

module.exports = {leer}