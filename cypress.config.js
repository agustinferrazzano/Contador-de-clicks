// cypress.config.js

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Configuración de los tests: puedes elegir solo ciertos tests o directorios
    specPattern: 'cypress/integration/**/*.spec.js',
    // Configuración de la URL base para los tests E2E
    baseUrl: 'http://localhost:5173',  // Asegúrate de que el puerto coincida con el de tu servidor

    // Tiempo de espera por defecto para cada comando
    defaultCommandTimeout: 10000,  // 10 segundos

    // Habilitar o deshabilitar la interfaz gráfica de Cypress
    video: true,  // Graba los videos de las pruebas (útil para la depuración)

    // Habilitar o deshabilitar la captura de pantalla en fallos
    screenshotOnRunFailure: true,

    // Configuración de los encabezados para las pruebas
    supportFile: false,  // Puede ser útil si no necesitas un archivo de soporte como 'commands.js'

    // Otras configuraciones opcionales que podrías querer ajustar
    retries: {
      runMode: 2,  // Número de reintentos en modo ejecución (si falla una prueba)
      openMode: 0, // Número de reintentos en modo abierto (interfaz gráfica)
    },

    // Especifica el directorio para los reports de Cypress
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',


  },
});
