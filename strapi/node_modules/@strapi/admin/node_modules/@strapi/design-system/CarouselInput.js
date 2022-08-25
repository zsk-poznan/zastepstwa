
  'use strict';
  
  if (process.env.NODE_ENV === "production") {
    module.exports = require("./CarouselInput.production.js");
  } else {
    module.exports = require("./CarouselInput.development.js");
  }
  