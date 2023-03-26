import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack, Box, Typography} from "@mui/material";
import {selectChatMessage} from "../redux/chatMessage/chatMessageActions";

class ChatMessageComponent extends Component
{
    render()
    {
        const {selectChatMessage, chatMessage, myChatMessageIndex, selectedChatMessageIndex} = this.props;
        const handleSelectChatMessage = () => selectChatMessage();
        return (
            <div>
                <Stack sx={{
                    color:'white',
                    '&:hover': {
                        backgroundColor: '#4f4e4e'
                    }}}
                       direction='row'
                       onClick={handleSelectChatMessage}
                       bgcolor={selectedChatMessageIndex === myChatMessageIndex ? '#2c2929' : '#404040'}>
                    <Box ml={2} mr={2}><Typography variant={"subtitle2"}>09:45 AM</Typography></Box>
                    <Box mr={2}><Typography sx={{fontWeight: 'bold'}}>Leon Adeoye:</Typography></Box>
                    <Box><Typography fontFamily='cursive' color='lightgrey'>{chatMessage}</Typography></Box>
                </Stack>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        chatMessage: ownProps.chatMessage.title,
        myChatMessageIndex: ownProps.index,
        selectedChatMessageIndex: state.chatMessage.selectedChatMessageIndex
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        selectChatMessage: () => dispatch(selectChatMessage(ownProps.index))
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (ChatMessageComponent);
export default connect(mapStateToProps, mapDispatchToProps) (ChatMessageComponent);
