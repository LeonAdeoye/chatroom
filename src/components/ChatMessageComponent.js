import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack, Typography, Grid} from "@mui/material";
import {selectChatMessage} from "../redux/chatMessage/chatMessageActions";
import InputBase from "@mui/material/InputBase";

class ChatMessageComponent extends Component
{
    shouldComponentUpdate(nextProps, nextState, nextContent)
    {
        const val = JSON.stringify(nextProps.chatMessage) !== JSON.stringify(this.props.chatMessage);
        return val;
    }

    render()
    {
        const {selectChatMessage, chatMessage, myChatMessageIndex, selectedChatMessageIndex, timeStamp, authorId, users} = this.props;

        const handleSelectChatMessage = () => selectChatMessage();

        return (
            users.length > 0 && <div>
                <Stack sx={{color:'white'}}
                       direction='row'
                       onClick={handleSelectChatMessage}
                       bgcolor={selectedChatMessageIndex === myChatMessageIndex ? '#2c2929' : '#404040'}>
                    <Grid container>
                        <Grid item xs={0.75}>
                            <Typography fontSize='4' fontFamily='Arial' color='lightblue'>{new Date(timeStamp).toLocaleTimeString()}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{fontWeight: 'bold'}}>{users.find(user => user.id === authorId).fullName}:</Typography>
                        </Grid>
                        <Grid item xs={10.25}>
                            <InputBase sx={{ padding: 0, backgroundColor: '#404040', color:'lightgray', fontFamily: 'cursive'}}
                                       multiline={true} value={chatMessage} fullWidth/>
                        </Grid>
                    </Grid>
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


export default connect(mapStateToProps, mapDispatchToProps) (ChatMessageComponent);
