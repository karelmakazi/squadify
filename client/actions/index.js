export const UPDATE_COHORT_POOL = 'UPDATE_COHORT_POOL'

export function updateCohortPool (selected) {
  return {
    type: UPDATE_COHORT_POOL,
    selected
  }
}
