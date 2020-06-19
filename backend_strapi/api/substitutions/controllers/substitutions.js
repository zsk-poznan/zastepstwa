'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const axios = require('axios');


module.exports = {
  index: async ctx => {
    let entities;

    entities = await strapi.services.substitutions.find(ctx.query)

    let url = entities[0].file.url
    let json = entities[0].json

    const getJson = axios.get(`http://localhost:1337${url}`)
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })

    return {url: url, json: getJson};
  },
};
