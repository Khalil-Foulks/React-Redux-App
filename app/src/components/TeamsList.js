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
            <h2> Teams List Component Renders</h2>
            {props.isLoading && <h4>Loading Teams Data...</h4>}
            {props.error && (
                <p className='error'>Uh oh, something happened... {props.error}</p>
            )}
            {props.teams > 0 && (
                <div>
                    {props.teams.map(team =>(
                        console.log('TEAMS MAP',team),
                        <TeamCard key = {team.id} teamInfo = {team} />
                        // <div key = {team.id}> {team.full_name} </div>
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