'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const parseData = (data) => {
  const $ = cheerio.load(data);

  $('table').find('tbody tr:nth-child(1)').each(()=> {
    $('td').each(() => {
         console.log($(this).text())
     })
  })
}

module.exports = {
  index: async ctx => {
    let entities;

    entities = await strapi.services.substitutions.find(ctx.query)

    if (entities.length !== 0) {
      let url = entities[0].file.url
      const data = axios.get(`http://localhost:1337${url}`)
        .then(res => {
          const $ = cheerio.load(res.data);

          const data = [];

          $('table').find('tbody tr)').each(()=> {
            $('td').each(() => {
                 data.append($(this).text());
             })
          })
          console.log(data);

          return {data: 'sth'}
        })
        .catch(err => {
          return err;
        })
      return data;
    } else {
      return 404;
    }  
  }
};
