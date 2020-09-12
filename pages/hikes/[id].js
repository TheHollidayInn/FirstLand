import Nav from '../../components/Nav'

export default function HikePage() {
  // https://www.hipcamp.com/oklahoma/dragonfly-tiny-cabin-getaway/dragonfly-tiny-cabin-2-person-max
  return (
    <div className="hike-detail">
      <Nav />

      <header>
        <img src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_960,q_60,w_1440/v1587910444/campground-photos/flwidsppgrjlik9pfaij.jpg" />
        <img src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_960,q_60,w_1440/v1587910444/campground-photos/flwidsppgrjlik9pfaij.jpg" />
        <img src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_960,q_60,w_1440/v1587910444/campground-photos/flwidsppgrjlik9pfaij.jpg" />
      </header>

      <main>
        <h2>An Example Hike</h2>
        <hr />

        <p>
          The cabin only holds 2 Campers but larger groups may tent camp around the cabin with up to 3 tents. All campers must be accounted for when booking. NO ELECTRICITY, HEAT/AIR (This location is shared with our other primitive campsites but they are far enough away that you have privacy)

          We have updated our CORONAVIRUS/ COVID Message: 
          Read more...
        </p>

        <section className="detail-cards">
          <div className="detail-card">
            <h6>Lodging Provided</h6>
            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
            </ul>
          </div>

          <div className="detail-card">
            <h6>Lodging Provided</h6>
            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
            </ul>
          </div>

          <div className="detail-card">
            <h6>Lodging Provided</h6>
            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}