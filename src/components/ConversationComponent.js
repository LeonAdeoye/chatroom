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
            selectedRoom && <Box>
                <RoomHeaderComponent roomName={selectedRoom.name} memberCount={selectedRoom.memberCount}/>
                {conversation.slice(0,10).map((chatMessage) => <ChatMessageComponent key={chatMessage.id} index={chatMessage.id} chatMessage={chatMessage}></ChatMessageComponent>)}
            </Box>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        conversation: state.room.conversation,
        errorMessage: state.room.errorMessage,
        selectedRoom: state.roomList.selectedRoom
    }
}

export default connect(mapStateToProps) (ConversationComponent);


