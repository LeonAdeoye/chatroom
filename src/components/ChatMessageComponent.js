import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack} from "@mui/material";

class ChatMessageComponent extends Component
{
    render()
    {
        return (
            <div>
                <Stack sx={{backgroundColor:'primary.main', color:'white'}} direction='row'>
                    <span>12:45 am, </span>
                    <span>Leon Adeoye: </span>
                    <span>{this.props.chatMessage}</span>
                </Stack>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        chatMessage: ownProps.chatMessage
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (ChatMessageComponent);
export default connect(mapStateToProps) (ChatMessageComponent);
