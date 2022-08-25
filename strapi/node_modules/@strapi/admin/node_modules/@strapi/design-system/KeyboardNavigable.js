
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./KeyboardNavigable.production.js");
  } else {
    module.exports = require("./KeyboardNavigable.development.js");
  }
  