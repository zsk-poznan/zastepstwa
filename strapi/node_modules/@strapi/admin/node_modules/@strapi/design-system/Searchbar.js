
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./Searchbar.production.js");
  } else {
    module.exports = require("./Searchbar.development.js");
  }
  