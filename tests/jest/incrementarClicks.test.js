import { incrementarClick, configurarBotonClick } from "../../src/main.js"

describe('Pruebas para la función incrementarClick', () => {
  let contador;
  let boton;

  beforeEach(() => {
    
    document.body.innerHTML = ` 
      <button id="botonClick">Click me</button>
      <p id="contador">Clicks: 0</p>
    `;
    boton = document.getElementById('botonClick');
    contador = document.getElementById('contador');


    configurarBotonClick(boton,contador);
  }); 
// Este test verifica que el contador se incremente correctamente al hacer clic en el botón
  test('Debería incrementar el contador correctamente', () => {
    expect(incrementarClick()).toBe(1);  
    expect(incrementarClick()).toBe(2); 
    expect(incrementarClick()).toBe(3);  
  });

});