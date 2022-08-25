
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./ProgressBar.production.js");
  } else {
    module.exports = require("./ProgressBar.development.js");
  }
  