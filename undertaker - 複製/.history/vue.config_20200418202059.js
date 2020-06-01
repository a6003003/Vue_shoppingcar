var path = require('path');

module.exports = {
  //...
  devServer: {
    https: true,
   // port: 9000,
    disableHostCheck: true,
    https: {
      key: fs.readFileSync('D:/program/vue/undertaker/cert/abels-key.key'),
      cert: fs.readFileSync('D:/program/vue/undertaker/cert//cert/abels-cert.pem'),
      ca: fs.readFileSync('D:/program/vue/undertaker/cert//cert/abels-csr.pem'),
    }
  }
};