const cheerio = require('cheerio');
const axios = require('axios');
const file = require('fs')

const url = 'https://en.wikipedia.org/wiki/List_of_federally_recognized_tribes_in_the_United_States';

      
axios.get(url)
  .then((response) => {
      let $ = cheerio.load(response.data);
      const parks = []

      $('#mw-content-text .mw-redirect').each((i, e) => {
        const element = $(e)   

        const name = element.text()
        const link = element.attr('href')

        parks.push({
          name,
          link,
        })
      })

      file.writeFileSync(`${__dirname}/tribeLinks.json`, JSON.stringify(parks, null, 4))
  }).catch(function (e) {
    console.log(e);
  });

