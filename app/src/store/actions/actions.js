import axios from 'axios'

const URL = 'https://www.balldontlie.io/api/v1/teams'

export const FETCH_TEAMS_START = "FETCH_TEAMS_START"
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAM_SUCCESS"
export const FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE"

export const fetchTeams = () => {
    return dispatch => {
        dispatch({ type: FETCH_TEAMS_START });
        axios.get(URL)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                debugger
            })
    }
}