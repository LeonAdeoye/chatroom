import React, {Component} from 'react';
import {connect} from "react-redux";
import {Box} from "@mui/material";

class ActivityComponent extends Component
{
    constructActivity(users, instigatorId, targetId, action)
    {
        if(users && users.length > 0)
        {
            const instigatorName = users.find(user => user.id === instigatorId).fullName;
            const targetName = users.find(user => user.id === targetId).fullName;
            switch(action)
            {
                case "ADD_ADMIN":
                    return `+++++++++++++++++${instigatorName} added new administrator ${targetName} to the room+++++++++++++++++`;
                case "REMOVE_ADMIN":
                    return `-----------------${instigatorName} removed administrator ${targetName} to the room-----------------`;
                case "ADD_MEMBER":
                    return `+++++++++++++++++${instigatorName} added new member ${targetName} to the room+++++++++++++++++`;
                case "REMOVE_MEMBER":
                    return `-----------------${instigatorName} removed member ${targetName} to the room-----------------`;
                default:
                    return "";
            }
        }
        return "";
    }

    render()
    {
        const {users, activity} = this.props;
        return (
            <div>
                <Box sx={{backgroundColor:'darkgray', height: '20px', color: 'black'}}>{ this.constructActivity(users, activity.instigatorId, activity.thirdPartyId, activity.activity) }</Box>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        users: state.user.users,
        activity: ownProps.activity
    }
}

export default connect(mapStateToProps) (ActivityComponent);
