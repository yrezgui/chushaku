var config = module.exports = {};

config.vendor = {
  styles: [
    './vendor/pure/pure.css'
  ],
  scripts: [
    'vendor/lodash/dist/lodash.js',
    'vendor/angular/angular.js',
    'vendor/angular-animate/angular-animate.js',
    'vendor/angular-route/angular-route.js',
    'vendor/angular-resource/angular-resource.js',
    'vendor/angular-sanitize/angular-sanitize.js'
  ],
  views: [],
  images: [],
  fonts: [
    './vendor/ionic/release/fonts/**/*'
  ]
};

config.path = {
  build:      './www',
  styles:     ['./src/**/*.styl'],
  scripts:    ['./src/**/*.js'],
  views:      ['./src/**/*.jade'],
  fonts:      ['./src/fonts/**/*'],
  images:     ['./src/images/**/*'],
  configs:    ['./src/config/**/*']
};

config.webServer = {
  port: 5050
};

config.database = {
  mongoUrl: 'mongodb://localhost/chushaku'
};