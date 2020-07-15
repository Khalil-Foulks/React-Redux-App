import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/actions';

const TeamsList = props => {
    useEffect(() => {
        props.fetchTeams();
    }, []);
    return (
        <div>
            <h1>Teams List component is working</h1>
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