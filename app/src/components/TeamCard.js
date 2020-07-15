import React from 'react';


const TeamCard = props => {
    return (
        <div>
            <h3>TeamCard Renders</h3>
            {props.teamInfo.full_name}
        </div>
    )
}


export default TeamCard