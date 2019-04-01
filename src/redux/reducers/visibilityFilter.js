import { VISIBILITY_FILTERS } from '../../constants'

const initialState = VISIBILITY_FILTERS.ALL
export default function(state = initialState, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}
