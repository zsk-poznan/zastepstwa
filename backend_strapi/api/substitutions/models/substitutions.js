'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

const fs = require('fs')

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.file) {
        
        data.json = {"hello": "world"}
      }
    },
    async beforeUpdate(params, data) {
      if (data.file) {
        console.log(data)
        // fs.readFile(`data.file.url`, (err, data) => {
        //   console.log(data)
        // })
        data.json = {"hello": "world"}
      }
    },
  },
};
