import NationalParks from '../data/national-parks.json'
import IndigenousLand from '../data/indigenous-land.json'
import WikiNationalParks from '../data/wikiParks.json'
import TribeLinks from './tribeLinks.json'
import Images from './images.json'

const inside = require('../libs/point-in-polygon');

const imagesSaved = Images.reduce((prev, curr) => {
  curr.image = `https://${curr.image}`
  prev[curr.park] = curr
  return prev
}, {})

NationalParks.forEach(p => {
  IndigenousLand.features.forEach(l => {
    if (!p.nativeLand) p.nativeLand = []
    const isInside = inside([ p.X, p.Y ], l.geometry.coordinates[0])
    if (isInside) {
      const matchTribe = TribeLinks.filter(tl => tl.name.indexOf(l.properties.Name) !== -1)
      let link;
      if (matchTribe.length > 0) {
        link = `https://en.wikipedia.org${matchTribe[0].link}`
      }

      p.nativeLand.push({
        name: l.properties.Name,
        link,
      })
    }
  })

  const matchWiki = WikiNationalParks.filter(wp => p.UNIT_NAME.indexOf(wp.title.replace("\n", "")) !== -1);
  if (matchWiki.length > 0) p.image = matchWiki[0].image
})


const trails = NationalParks.map(t => ({
  title: t.UNIT_NAME,
  nativeLand: t.nativeLand,
  description: `Alum Cave Trail to Mount LeConte is a 10.5 mile heavily trafficked out and back trail located 
  near Gatlinburg, Tennessee that features a waterfall and is rated as difficult. 
  The trail is primarily used for hiking, walking, and nature trips and is best used from March until November.`,
  image:  imagesSaved[t.UNIT_NAME] && imagesSaved[t.UNIT_NAME].image || t.image || 'https://cdn-assets.alltrails.com/uploads/photo/image/19207607/extra_large_cf917f806afe3158e429f89e21a2b674.jpg',
  isCampsite: true,
  location: [t.Y, t.X]
}));

export default trails