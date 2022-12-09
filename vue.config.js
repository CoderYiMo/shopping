module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://kumanxuan1.f3322.net:8001',
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
