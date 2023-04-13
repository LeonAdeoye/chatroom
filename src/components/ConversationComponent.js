import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"
import RoomHeaderComponent from "./RoomHeaderComponent";
import {Box} from "@mui/material";
import ActivityComponent from "./ActivityComponent";

class ConversationComponent extends Component
{
    render()
    {
        const {conversation, selectedRoom, activities} = this.props;
        const result = conversation.concat(activities).sort((a, b) => new Date(a["timeStamp"]).getTime() - new Date(b["timeStamp"]).getTime());

        return (
            conversation && selectedRoom
            ?
            <Box>
                <RoomHeaderComponent/>
                { result.map(content => content['activity'] ? <ActivityComponent key={content['id']} activity={content}/> : <ChatMessageComponent key={content['id']} chatMessage={content}/>) }
            </Box>
            :
            null
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        conversation: state.roomList.conversation,
        activities: state.roomList.activities,
        selectedRoom: state.roomList.selectedRoom
    }
}

export default connect(mapStateToProps) (ConversationComponent);


