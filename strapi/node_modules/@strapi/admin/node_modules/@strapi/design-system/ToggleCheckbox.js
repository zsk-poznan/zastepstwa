
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./ToggleCheckbox.production.js");
  } else {
    module.exports = require("./ToggleCheckbox.development.js");
  }
  