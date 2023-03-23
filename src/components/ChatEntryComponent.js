import React, {Component} from 'react';
import {createChatMessage} from "../redux/chatEntry/chatEntryActions";
import {connect} from "react-redux";

class ChatEntryComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            newChatMessage: ''
        }
    }

    setNewChatMessage = (event) =>
    {
        this.state.newChatMessage = event.target.value;
    }

    render()
    {
        return (
            <>
                <h2>Chat Message: {this.props.chatMessage}</h2>
                <input type='text' value={this.props.chatMessage} onChange={this.setNewChatMessage}/>
                <button onClick={() => this.props.enterChatMessage(this.state.newChatMessage)}>Enter</button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chatMessage: state.chatEntry.chatMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enterChatMessage: (newChatMessage) => dispatch(createChatMessage(newChatMessage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChatEntryComponent);
