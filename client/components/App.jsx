import React from 'react'

import Team from './Team'

const tempTeams = ['Blossom', 'ButterCup', 'Bubbles']

function App () {
  return (
    <div>
      {tempTeams.map((team, index) => (
        <Team key={index} teamName={team} />
      ))}
    </div>
  )
}

export default App
