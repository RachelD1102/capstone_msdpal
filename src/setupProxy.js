const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {

    app.use(createProxyMiddleware('/api', {
        target: 'https://uofumsdpal.dev',
        changeOrigin: true,
        secure: false
    }))

}