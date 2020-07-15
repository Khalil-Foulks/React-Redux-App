import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/actions';
import TeamCard from './TeamCard'

const TeamsList = props => {
    useEffect(() => {
        props.fetchTeams();
    }, []);
    return (
        <div>
            {props.isLoading && <h4>Loading Teams Data...</h4>}
            {props.error && (
                <p className='error'>Uh oh, something happened... {props.error}</p>
            )}
            {props.teams > 0 && (
                <div>
                    {props.teams.map(team =>(
                        // <TeamCard key = {team.teams_id} teamInfo = {team} />
                        <div key = {team.teams_id}> {team.full_name} </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading:state.isLoading,
        teams: state.teams,
        error: state.error
    }
}

export default connect(mapStateToProps,{ fetchTeams })(TeamsList)