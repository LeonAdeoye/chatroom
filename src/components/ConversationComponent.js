import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"
import RoomHeaderComponent from "./RoomHeaderComponent";
import {Box} from "@mui/material";

class ConversationComponent extends Component
{
    render()
    {
        const {conversation, selectedRoom} = this.props;
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

const mapStateToProps = (state, ownProps) =>
{
    return {
        conversation: state.roomList.conversation,
        selectedRoom: state.roomList.selectedRoom
    }
}

export default connect(mapStateToProps) (ConversationComponent);


