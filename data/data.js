import NationalParks from '../data/national-parks.json'
import IndigenousLand from '../data/indigenous-land.json'
const inside = require('../libs/point-in-polygon');


NationalParks.forEach(p => {
  IndigenousLand.features.forEach(l => {
    if (!p.nativeLand) p.nativeLand = []
    const isInside = inside([ p.X, p.Y ], l.geometry.coordinates[0])
    if (isInside) p.nativeLand.push(l.properties.Name)
  })
})


const trails = NationalParks.map(t => ({
  title: t.UNIT_NAME,
  nativeLand: t.nativeLand,
  description: `Alum Cave Trail to Mount LeConte is a 10.5 mile heavily trafficked out and back trail located 
  near Gatlinburg, Tennessee that features a waterfall and is rated as difficult. 
  The trail is primarily used for hiking, walking, and nature trips and is best used from March until November.`,
  image: t.image || 'https://cdn-assets.alltrails.com/uploads/photo/image/19207607/extra_large_cf917f806afe3158e429f89e21a2b674.jpg',
  isCampsite: true,
  location: [t.Y, t.X]
}));

export default trails