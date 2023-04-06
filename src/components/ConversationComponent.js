import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"
import RoomHeaderComponent from "./RoomHeaderComponent";
import {Box} from "@mui/material";

class ConversationComponent extends Component
{
    render()
    {
        const {selectedRoom} = this.props;
        return (
            selectedRoom && selectedRoom.conversation ? (<Box>
                <RoomHeaderComponent roomName={selectedRoom.name} memberCount={selectedRoom.memberCount}/>
                {selectedRoom.conversation.map((chatMessage) => <ChatMessageComponent key={chatMessage.id} index={chatMessage.id} chatMessage={chatMessage}/>)}
            </Box>) : null
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        selectedRoom: state.roomList.selectedRoom
    }
}

export default connect(mapStateToProps) (ConversationComponent);


