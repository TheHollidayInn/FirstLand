const cheerio = require('cheerio');
const axios = require('axios');
const url = 'https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States';
const file = require('fs')
      
axios.get(url)
  .then((response) => {
      let $ = cheerio.load(response.data);
      const parks = []

      $('table.wikitable tr').each((i, e) => {
        // let links = $(e).attr('href');   
        const element = $(e)   
        const cells = e.children.filter(ch => ch.name === 'th' || ch.name === 'td')   
        if (cells.length === 0) return

        const title = $(cells[0]).text()
        if (!title) return
        if (cells[1].children[0].length === 0 || !cells[1].children[0].children) return

        const image = cells[1].children[0].children[0].attribs.src

        const location = cells[2].children[2]
        const date = $(cells[3]).text()
        const area = $(cells[4]).text()
        const vistorCount = $(cells[5]).html()
        const description = $(cells[6]).text()
        
        parks.push({
          title,
          image,
          // location,
          date,
          area,
          vistorCount,
          description,
        })
      })

      file.writeFileSync('./wikiParks.json', JSON.stringify(parks, null, 4))
  }).catch(function (e) {
    console.log(e);
  });

