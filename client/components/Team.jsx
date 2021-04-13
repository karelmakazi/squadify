import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import { updateCohortPool } from '../actions'

function createIntialTeam (size, pool, setTeamRoster) {
  const randomIndices = _.uniq(
    _.times(size * 3, () => _.random(pool.length - 1))
  )
  const teamIndices = randomIndices.slice(randomIndices.length - size)
  const teamRoster = teamIndices.map((index) => pool[index])

  setTeamRoster(teamRoster)
  // return teamRoster
}

function setCohortPool (currentTeam, dispatch) {
  dispatch(updateCohortPool(currentTeam))
}

function Team ({ teamName }) {
  const dispatch = useDispatch()
  const [currentRoster, setTeamRoster] = useState([])
  // const cohortAvailablePool = useSelector((state) => state.cohortPool)

  // useEffect(() => {
  //   setCohortPool(currentRoster, dispatch)
  // }, [currentRoster])

  const selectedTeam = createIntialTeam(4, cohortAvailablePool, setTeamRoster)

  return (
    <div className="">
      <h1>Team: {teamName}</h1>
      {selectedTeam &&
        selectedTeam.map((teamMember, index) => (
          <li key={index}> {teamMember} </li>
        ))}
    </div>
  )
}

export default Team
