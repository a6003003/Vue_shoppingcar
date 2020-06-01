var path = require('path');

module.exports = {
  //...
  devServer: {
    https: true,
   // port: 9000,
    disableHostCheck: true,
    https: {
      key: fs.readFileSync('./cert/abels-key.key'),
      cert: fs.readFileSync('./cert/abels-cert.pem'),
      ca: fs.readFileSync('./cert/abels-csr.pem'),
    }
  }
};