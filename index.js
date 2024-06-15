const [operacion, nombre_animal, edad, tipo_animal, color_animal, enfermedad] = process.argv.slice(2)
const {leer, registrar} = require('./operaciones')
// console.log(operacion,nombre_animal,edad,tipo_animal,color_animal,enfermedad)

if (operacion !== undefined) {
 if (operacion.trim().toLowerCase() === 'registrar') {
  registrar(nombre_animal, edad, tipo_animal, color_animal, enfermedad)
 } else if (operacion.trim().toLowerCase() === 'leer') {
  leer()
 } else {
  console.log('Ingrese una opción válida')
 }
} else {
 console.log('Error de entrada, seleccione una operación "Registrar ó Leer"')
}
