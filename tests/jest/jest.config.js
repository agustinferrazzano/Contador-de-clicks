// jest.config.js
export default {
  transform: {
    '^.+\\.js$': 'babel-jest', // Usa babel-jest para transformar los archivos JS
  },
  testEnvironment: 'jest-environment-jsdom',  // Para pruebas en el navegador
  moduleFileExtensions: ['js', 'jsx'],  // Extensiones soportadas
};
