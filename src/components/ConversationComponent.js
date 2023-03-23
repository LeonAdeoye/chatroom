import React, {Component} from 'react';
import ChatMessageComponent from "./ChatMessageComponent";
import {connect} from "react-redux"

class ConversationComponent extends Component
{
    render()
    {
        const {conversation, errorMessage} = this.props;
        console.log(errorMessage);
        return errorMessage ?
            (<h2>{errorMessage}</h2>) :
            (<div>{conversation.slice(0,20).map((chatMessage, index) => <ChatMessageComponent key={index} chatMessage={chatMessage}></ChatMessageComponent>)}</div>);
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


