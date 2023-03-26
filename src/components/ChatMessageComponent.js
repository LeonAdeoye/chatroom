import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack, Box, Typography} from "@mui/material";

class ChatMessageComponent extends Component
{
    render()
    {
        return (
            <div>
                <Stack sx={{ color:'white'}} direction='row' >
                    <Box ml={2} mr={2}><Typography variant={"subtitle2"}>09:45 AM</Typography></Box>
                    <Box mr={2}><Typography sx={{fontWeight: 'bold'}}>Leon Adeoye:</Typography></Box>
                    <Box><Typography fontFamily='cursive' color='lightgrey'>{this.props.chatMessage}</Typography></Box>
                </Stack>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        chatMessage: ownProps.chatMessage.title
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (ChatMessageComponent);
export default connect(mapStateToProps) (ChatMessageComponent);
