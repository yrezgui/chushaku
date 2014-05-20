var config = module.exports = {};

config.webserver = {
  port: process.env.PORT
};

config.webServer = {
  port: process.env.PORT,
  host: 'domain.com',
  protocol: 'http',
  api: 'api'
};

config.database = {
  mongoUrl: 'mongodb://distanthost.com/chushaku'
};