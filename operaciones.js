const fs = require('fs')

const leer = () =>{
 try {
  const data = fs.readFileSync('citas.json')
  console.log(data.toString())
 } catch (error) {
  console.log('Error de obtención de datos')
 }
}

const registrar = (nombre_animal, edad, tipo_animal, color_animal, enfermedad) =>{
 try {
  const data = fs.readFileSync('citas.json', 'utf8')
  const registros = JSON.parse(data)
  registros.push({
   nombre: nombre_animal,
   edad: edad,
   tipo: tipo_animal,
   color: color_animal,
   enfermedad: enfermedad,
  })
  fs.writeFileSync('citas.json', JSON.stringify(registros))
  console.log('Registro creado con éxito!!')
  } catch (error) {
  console.log('Imposible ingresar el registro')
 }
}

module.exports = {leer, registrar}