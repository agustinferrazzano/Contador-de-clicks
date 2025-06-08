import { incrementarClick, configurarBotonClick } from "../../src/main.js";

describe('Pruebas para la función incrementarClick', () => {
  let contador;
  let boton;

  // Este bloque se ejecuta antes de cada test
  beforeEach(() => {
    // Configuramos el HTML de prueba
    document.body.innerHTML = `
      <button id="botonClick">Click me</button>
      <p id="contador">Clicks: 0</p>
    `;

    // Obtener los elementos del DOM
    boton = document.getElementById('botonClick');
    contador = document.getElementById('contador');

    // Configurar el botón con su evento de clic
    configurarBotonClick(boton, contador);
  });

  // Test para incrementar el contador
  test('Debería incrementar el contador correctamente', () => {
    // Simulamos clics
    boton.click(); // Primer clic
    expect(contador.textContent).toBe('Clicks: 1');

    boton.click(); // Segundo clic
    expect(contador.textContent).toBe('Clicks: 2');

    boton.click(); // Tercer clic
    expect(contador.textContent).toBe('Clicks: 3');
  });
});
