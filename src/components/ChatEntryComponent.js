import React, {Component} from 'react';
import {createChatMessage} from "../redux/chatEntry/chatEntryActions";
import {connect} from "react-redux";

class ChatEntryComponent extends Component
{
    render()
    {
        return (
            <div>
                <h2>Chat Message: {this.props.chatMessage}</h2>
                <button onClick={this.props.enterChatMessage}>Enter</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        chatMessage: state.chatMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        enterChatMessage: () => dispatch(createChatMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChatEntryComponent);
