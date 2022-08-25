
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./ToggleInput.production.js");
  } else {
    module.exports = require("./ToggleInput.development.js");
  }
  