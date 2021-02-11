import { UPDATE_COHORT_POOL } from '../actions'

import cohortData from '../../server/public/data/starterCohort'

const initialState = cohortData

const cohortPool = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COHORT_POOL:
      return state.filter((cohorteer) => cohorteer !== action.selected)
    default:
      return state
  }
}

export default cohortPool
