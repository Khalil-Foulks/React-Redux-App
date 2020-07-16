import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/actions';
import TeamCard from './TeamCard'

const TeamsList = props => {
    useEffect(() => {
        props.fetchTeams();
    }, []);

    {console.log('PROPS.TEAMS: ',props)}
    return (
        <div>
            {props.isLoading && <h4>Loading Teams Data...</h4>}
            {props.error && (
                <p className='error'>Uh oh, something happened... {props.error}</p>
            )}
            {props.teams && (
                <div 
                    className="container" 
                    style={{display: "flex", flexWrap:"wrap", justifyContent: "space-evenly"}}
                >
                    {props.teams.map(team =>(
                        <TeamCard key = {team.id} teamInfo = {team} />
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
        error: state.error,
    }
}

export default connect(mapStateToProps,{ fetchTeams })(TeamsList)