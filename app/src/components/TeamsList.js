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

export default TeamsList