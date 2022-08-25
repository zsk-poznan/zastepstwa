
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./TimePicker.production.js");
  } else {
    module.exports = require("./TimePicker.development.js");
  }
  