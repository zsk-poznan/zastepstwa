
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./ThemeProvider.production.js");
  } else {
    module.exports = require("./ThemeProvider.development.js");
  }
  