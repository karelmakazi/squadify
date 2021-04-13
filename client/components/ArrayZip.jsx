import React from 'react'

const fullCohort = [
  'alpha',
  'bravo',
  'charlie',
  'delta',
  'echo',
  'foxtrot',
  'golf',
  'hotel',
  'india',
  'juliet',
  'kilo',
  'mike',
  'november',
  'oscar',
  'papa',
  'quebec',
  'romeo',
  'sierra',
  'tango',
  'uniform',
]

function divideArray(cohort) {
  const check = cohort.length % 2
  console.log('THIS', check)
}

divideArray(fullCohort)

function ArrayZip() {
  return <h1>Sup</h1>
}

export default ArrayZip
