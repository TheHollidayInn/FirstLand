import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Link from 'next/link'

import Nav from '../components/Nav'
import NationalParks from '../data/data'

const AnyReactComponent = ({ text }) => <div style={{
  width: '10px', height: '10px', borderRadius: '50%', background: 'green'
  }}>

</div>;

export default function SearchPage() {
  const [filters, setFilters] = useState({
    campsites: false,
    search: '',
  });

  const trails = NationalParks

  const filteredTrails = trails
    .filter(t => {
      let canshow = true;
      if (filters.campsites) canshow &= t.isCampsite
      if (filters.search) canshow &= t.title.toLocaleLowerCase().indexOf(filters.search.toLocaleLowerCase()) != -1
      return canshow
    })
    .slice(0, 30);

  if (!filteredTrails[0]) return 

  const defaultProps = {
      center: {
        lat: 41,
        lng: -101,
      },
      zoom: 4
    };
   
  return (
    <div id="search-page">
      <Nav />
      
      <header>
        <section className="filters">
          <input
            type="text"
            onChange={(e) => setFilters({...filters, search: e.target.value})}
           />
          <div>Dates</div>
          <div 
            onClick={() => {
              setFilters({...filters, campsites: !filters.campsites})
            }}
            className={filters.campsites ? "on": "off"}
          >
            Campsites
          </div>
          <div>Lodging2</div>
        </section>
      </header>

      <section id="search">
        <div id="search-results">
          {
            filteredTrails
              .map(t => (
                <div className="search-card">
                  <img src={t.image} />
                  <Link href="/hikes/1">
                    <h6>{t.title}</h6>
                  </Link>
                  <span>{decodeURIComponent(t.nativeLand)}</span>
                </div>
              ))
          }
        </div>

        <div class="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBIk2j_fy6LJT5XHPUmuJDgcDOCalF1bsU"}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
            {
              filteredTrails.map(t => (<AnyReactComponent
                lat={t.location[0] || 0}
                lng={t.location[1] || 0}
                text={t.title}
              />))
            }
          </GoogleMapReact>
        </div>
      </section>
    </div>
  );
};