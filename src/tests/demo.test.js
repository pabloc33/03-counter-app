
describe('Pruebas en el archivo demo.test.js', () => {
  
  test('deben ser iguales los string', ()=> {

//1. inicializacion
const mensaje = 'Hola mundo';  

//2. estímulo
const mensaje2 = `Hola mundo`;

//3. Observar el comportamiento
expect(mensaje).toBe(mensaje2);
})
})



