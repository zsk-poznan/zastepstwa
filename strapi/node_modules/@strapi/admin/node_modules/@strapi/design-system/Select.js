
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Select.production.js");
  } else {
    module.exports = require("./Select.development.js");
  }
  