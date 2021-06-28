const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware("/devApi",{
        target:"localhost:8080",
        changeOrigin: true,
        pathRewrite:{
            "^/devApi": "",
        }
    }))
};