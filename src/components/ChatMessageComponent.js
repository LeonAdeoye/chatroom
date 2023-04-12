import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack, Box, Typography} from "@mui/material";
import {selectChatMessage} from "../redux/chatMessage/chatMessageActions";

class ChatMessageComponent extends Component
{
    render()
    {
        const {selectChatMessage, chatMessage, myChatMessageIndex, selectedChatMessageIndex, timeStamp, authorId, users} = this.props;
        const handleSelectChatMessage = () => selectChatMessage();
        return (
            users.length > 0 && <div>
                <Stack sx={{
                    color:'white',
                    '&:hover': {
                        backgroundColor: '#4f4e4e'
                    }}}
                       direction='row'
                       onClick={handleSelectChatMessage}
                       bgcolor={selectedChatMessageIndex === myChatMessageIndex ? '#2c2929' : '#404040'}>
                    <Box mr={1}><Typography sx={{fontWeight: 'bold'}}>{users.find(user => user.id === authorId).fullName}:</Typography></Box>
                    <Box ml={1} mr={1}><Typography fontSize='4' fontFamily='Arial' color='lightblue'>{new Date(timeStamp).toLocaleTimeString()}</Typography></Box>
                    <Box><Typography fontFamily='cursive' color='lightgrey'>{chatMessage}</Typography></Box>
                </Stack>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        chatMessage: ownProps.chatMessage.content,
        myChatMessageIndex: ownProps.chatMessage.id,
        authorId: ownProps.chatMessage.authorId,
        timeStamp:ownProps.chatMessage.timeStamp,
        selectedChatMessageIndex: state.chatMessage.selectedChatMessageIndex,
        users: state.user.users
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
