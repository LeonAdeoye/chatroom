import React, {Component} from 'react';
import {createChatMessage} from "../redux/chatEntry/chatEntryActions";
import {connect} from "react-redux";
import {Box} from '@mui/material'

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
        this.setState({
            newChatMessage: event.target.value
        })
    }

    render()
    {
        return (
            <>
                <Box bgcolor='#404040' color='white'>
                    <input type='text' value={this.state.newChatMessage} onChange={e => this.setNewChatMessage(e)}/>
                    <button onClick={() => this.props.enterChatMessage(this.state.newChatMessage)}>Enter</button>
                </Box>
            </>
        );
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        chatMessage: state.chatEntry.chatMessage
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        enterChatMessage: (newChatMessage) => dispatch(createChatMessage(newChatMessage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChatEntryComponent);
