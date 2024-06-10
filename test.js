const holaMundo = require('./hola_mundo');

test('Probando la función holaMundo', () => {
  expect(holaMundo()).toBe("¡Hola Mundo!");
});
