import React, { useState, useEffect } from 'react';

import RecipeReviewCard from '../components/HikeCard'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'
import NationalParks from '../data/data'

function HomePage() {
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
    .slice(0, 12);

  return <div>
    <Nav />

    <header>
      <h2 className="home-title">Whose Land Are You Hiking On</h2>
      <h4>Search for a National Park and learn about the tribes that lived there.</h4> 
    </header>

    <SearchBar onChange={(e) => setFilters({...filters, search: e.target.value})} />

    <main>
      <div className="trail-wrap">
        {
          filteredTrails.map(t => {

            return (
              <div class="col" p={1} key={t.title}>
                <RecipeReviewCard 
                  title={t.title} 
                  description={t.description}
                  image={t.image}
                  nativeLand={t.nativeLand}
                  />
              </div>
            )
          })
        }
      </div>
    </main>
  </div>
}

export default HomePage
