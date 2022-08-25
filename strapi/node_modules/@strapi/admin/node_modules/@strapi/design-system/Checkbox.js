
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Checkbox.production.js");
  } else {
    module.exports = require("./Checkbox.development.js");
  }
  