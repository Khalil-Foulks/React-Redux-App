import { FETCH_TEAMS_START } from '../actions/actions'

const initialState = {
    isLoading: false,
    teams: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAMS_START:
            return{
                isLoading: true
            }
        default:
            return state;
    }
};
  