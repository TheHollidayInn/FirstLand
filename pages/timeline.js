import React from 'react';

import Nav from '../components/Nav'
import Timeline from '../components/Timeline'

function TimeLinePage() {
  return <div>
    <Nav />

    <header>
      <h2 className="home-title">History of Important Native American Acts</h2>
      {/* <h4>A description.</h4>  */}
    </header>

    <Timeline />
  </div>
}

export default TimeLinePage
