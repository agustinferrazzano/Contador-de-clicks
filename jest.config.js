// Configuración de Jest para un proyecto que utiliza Babel y React
export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // Habilitar transformaciones para los archivos JS/JSX
  },
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jsdom',
};
