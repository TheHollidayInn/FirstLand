import React, { useState } from 'react';

import Nav from '../components/Nav'
import NationalParks from '../data/data'
import TimeLine from '../components/TimeLine'

function TimeLinePage() {
  return <div>
    <Nav />

    <header>
      <h2 className="home-title">History of Important Native American Acts</h2>
      {/* <h4>A description.</h4>  */}
    </header>

    <TimeLine />
  </div>
}

export default TimeLinePage
