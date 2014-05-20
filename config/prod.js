var config = module.exports = {};

config.webserver = {
  port: process.env.PORT
};

config.webServer = {
  port: process.env.PORT,
  host: process.env.HOSTURL,
  protocol: 'http',
  api: 'api'
};

config.database = {
  mongoUrl: process.env.MONGOURL
};