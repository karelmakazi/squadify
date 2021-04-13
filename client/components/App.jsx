import React from 'react'
import { useSelector } from 'react-redux'
 import Team from './Team'

const tempTeams = ['Blossom', 'ButterCup', 'Bubbles']

function App () {
  const cohortAvailablePool = useSelector((state) => state.cohortPool)

  return (
    <div>
      {tempTeams.map((team, index) => (
        <Team key={index} teamName={team} currentPool={cohortAvailablePool} />
      ))}
    </div>
  )
}

export default App
