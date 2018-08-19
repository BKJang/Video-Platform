const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config, { dev }) {
    config.devServer = config.devServer || {}
    config.devServer.proxy = {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        onProxyReq(request, req, res) {
          request.setHeader('origin', 'http://localhost:8080')
        }
        //pathRewrite: { '^/api': '/api' }
      }
    }

    config.resolve.alias = {
      common: path.join(__dirname, './components/common/'),
      components: path.join(__dirname, './components/'),
      public: path.join(__dirname, './public/'),
      img: path.join(__dirname, './public/img/')
    }

    //config.devServer.proxy = 'http://localhost:7000/api'

    return config
  }
})
