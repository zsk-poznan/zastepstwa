
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./DatePicker.production.js");
  } else {
    module.exports = require("./DatePicker.development.js");
  }
  