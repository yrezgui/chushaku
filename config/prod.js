var config = module.exports = {};

config.webServer = {
  port: process.env.PORT
};

config.database = {
  mongoUrl: process.env.MONGOURL
};