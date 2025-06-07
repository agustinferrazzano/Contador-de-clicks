const boton = document.getElementById('botonClick');
const contador = document.getElementById('contador');

let clicks = parseInt(localStorage.getItem('clicks')) || 0;
contador.textContent = `Clicks: ${clicks}`;

boton.addEventListener('click' () => {
  clicks++;
  localStorage.setItem('clicks', clicks);
  contador.textContent = `Clicks: ${clicks}`;
});
