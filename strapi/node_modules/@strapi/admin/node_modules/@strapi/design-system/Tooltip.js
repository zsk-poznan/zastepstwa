
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Tooltip.production.js");
  } else {
    module.exports = require("./Tooltip.development.js");
  }
  