'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const compare = (a, b) => {
  const teacherA = a.substitute_teacher.toUpperCase();
  const teacherB = b.substitute_teacher.toUpperCase();

  let comparison = 0;
  if (teacherA > teacherB) {
    comparison = 1;
  } else if (teacherA < teacherB) {
    comparison = -1;
  }
  return comparison;
}

module.exports = {
  index: async ctx => {
    let entities;

    console.log(ctx.query)

    entities = await strapi.services.substitutions.find(ctx.query)

    if (entities.length !== 0) {
      let url = entities[0].file.url
      const data = axios.get(`http://localhost:1337${url}`)
        .then(res => {
          const $ = cheerio.load(res.data);

          const scrapedData = [];

          $("body > table > tbody > tr").each((index, element) => {
            if (index === 0) return true;
              const tds = $(element).find("td");
              const lesson_id = $(tds[0]).text();
              const teacher = $(tds[1]).text();
              const group = $(tds[2]).text();
              const lesson_name = $(tds[3]).text();
              const classroom = $(tds[4]).text();
              const substitute_teacher = $(tds[5]).text();
              const notes = $(tds[6]).text();
              const tableRow = { classroom, group, lesson_id, lesson_name, notes, substitute_teacher, teacher };
              scrapedData.push(tableRow);
          });
            
          scrapedData.shift();

          return {data: scrapedData.sort(compare)}
        })
        .catch(err => {
          return err;
        })
      return data;
    } else {
      return 404;
    }  
  },

  teachers: async ctx => {
    let entities;

    entities = await strapi.services.substitutions.find(ctx.query)

    if (entities.length !== 0) {
      let url = entities[0].file.url
      const data = axios.get(`http://localhost:1337${url}`)
        .then(res => {
          const $ = cheerio.load(res.data);

          const scrapedData = [];

          $("body > table > tbody > tr").each((index, element) => {
            if (index === 0) return true;
              const tds = $(element).find("td");
              const teacher = $(tds[1]).text();
              scrapedData.push(teacher);
          });
            
          scrapedData.shift();

          return {data: Array.from(new Set(scrapedData))}
        })
        .catch(err => {
          return err;
        })
      return data;
    } else {
      return 404;
    }  
  },
  teacher: async ctx => {
    let entities;

    const { slug } = ctx.params;

    entities = await strapi.services.substitutions.find(ctx.query)

    if (entities.length !== 0) {
      let url = entities[0].file.url
      const data = axios.get(`http://localhost:1337${url}`)
        .then(res => {
          const $ = cheerio.load(res.data);

          const scrapedData = [];

          $("body > table > tbody > tr").each((index, element) => {
            if (index === 0) return true;
              const tds = $(element).find("td");
              const lesson_id = $(tds[0]).text();
              const teacher = $(tds[1]).text();
              const group = $(tds[2]).text();
              const lesson_name = $(tds[3]).text();
              const classroom = $(tds[4]).text();
              const substitute_teacher = $(tds[5]).text();
              const notes = $(tds[6]).text();
              const tableRow = { classroom, group, lesson_id, lesson_name, notes, substitute_teacher, teacher };
              scrapedData.push(tableRow);
          });
            
          scrapedData.shift();
          const filteredData = scrapedData.filter(a => a.substitute_teacher === slug);

          return {data: filteredData}
        })
        .catch(err => {
          return err;
        })
      return data;
    } else {
      return 404;
    }  
  },
};
