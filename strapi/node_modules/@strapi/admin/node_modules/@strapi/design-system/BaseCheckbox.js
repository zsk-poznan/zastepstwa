
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./BaseCheckbox.production.js");
  } else {
    module.exports = require("./BaseCheckbox.development.js");
  }
  