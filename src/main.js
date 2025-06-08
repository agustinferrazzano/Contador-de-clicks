let clicks = 0;

export function incrementarClick() {
  clicks++;
  return clicks;  
}

export function configurarBotonClick(boton,contador) {
  boton.addEventListener('click', () => {
    incrementarClick();
    contador.textContent = 'Clicks: ' + clicks;
  });
}

const elementocontador = document.getElementById('contador');
const elementoboton = document.getElementById('botonClick');

document.addEventListener('DOMContentLoaded', () => { //para asegurar que primero se cargue el dom, y despues llamar a la funcion que escucha los eventos
  configurarBotonClick(elementoboton,elementocontador);
});