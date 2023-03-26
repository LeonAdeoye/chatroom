import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"
import RoomHeaderComponent from "./RoomHeaderComponent";

class ConversationComponent extends Component
{
    render()
    {
        const {conversation} = this.props;
        return (
            <>
                <RoomHeaderComponent roomName="Leon's Room" memberCount="115"/>
                {conversation.slice(0,10).map((chatMessage) => <ChatMessageComponent key={chatMessage.id} index={chatMessage.id} chatMessage={chatMessage}></ChatMessageComponent>)}
            </>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        conversation: state.room.conversation,
        errorMessage: state.room.errorMessage
    }
}

export default connect(mapStateToProps) (ConversationComponent);


