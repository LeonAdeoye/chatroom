import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"
import RoomHeaderComponent from "./RoomHeaderComponent";
import {Box} from "@mui/material";

class ConversationComponent extends Component
{
    render()
    {
        const {conversation, selectedRoom, activities} = this.props;
        const content = renderConversation(conversation, activities);

        return (
            conversation && selectedRoom
            ?
            <Box>
                <RoomHeaderComponent/>
                {conversation.map((chatMessage) => <ChatMessageComponent key={chatMessage.id} chatMessage={chatMessage}/>)}
            </Box>
            :
            null
        );
    }
}

const renderConversation = (conversation, activities) =>
{
    let result = [];
    for(let chatMessageIndex = 0; chatMessageIndex < conversation.length; chatMessageIndex++)
    {
        for(let activitiesIndex = 0; activitiesIndex < activities.length; activitiesIndex++)
        {
            let activityTimestamp = new Date(activities[activitiesIndex].timeStamp).getTime();
            let chatMessageTimestamp = new Date(conversation[chatMessageIndex].timeStamp).getTime();

            if(activityTimestamp < chatMessageTimestamp)
            {
                result.push("<ActivityComponent/>");
                let chatMessage = conversation[chatMessageIndex].id;
                result.push("<ChatMessageComponent key={chatMessage.id} chatMessage={chatMessage}/>");
            }
            else
            {
                let chatMessage = conversation[chatMessageIndex].id;
                result.push("<ChatMessageComponent key={chatMessage.id} chatMessage={chatMessage}/>");
                result.push("<ActivityComponent/>");
            }
        }
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        conversation: state.roomList.conversation,
        activities: state.roomList.activities,
        selectedRoom: state.roomList.selectedRoom
    }
}

export default connect(mapStateToProps) (ConversationComponent);


