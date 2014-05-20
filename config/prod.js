var config = module.exports = {};

config.webServer = {
  port: process.env.PORT
};

config.database = {
  mongoUrl: process.env.MONGOURL
};

config.twilio = {
  accountSid: process.env.TWILIO_ACCOUNTSID,
  authToken: process.env.TWILIO_AUTHTOKEN,
  phonenumber: process.env.TWILIO_PHONENUMBER
};