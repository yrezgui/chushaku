var _             = require('lodash');
var defaultConfig = require('./dev.js');

var environment = process.env.NODE_ENV || 'dev';

if(environment === 'production') {
  var productionConfig = require('./prod.js');

  _.extend(defaultConfig, productionConfig);
}

module.exports = defaultConfig;