import React, {Component} from 'react';
import {connect} from "react-redux";
import {Box} from "@mui/material";

class ChatMessageComponent extends Component
{
    render()
    {
        return (
            <div>
                <Box sx={{backgroundColor:'primary.main', color:'white'}}>{this.props.chatMessage}</Box>
                <br/>
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
