const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      // '@context': path.resolve(__dirname, 'src/context/'),
      // '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true
    }
  }
};
