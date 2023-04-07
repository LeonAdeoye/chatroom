import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack, IconButton, Tooltip, Typography} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import {createChatMessage} from "../redux/roomList/roomListActions";

class ChatEntryComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            newChatMessage: ''
        }
    }
    render()
    {
        const {createChatMessage, selectedRoom, loggedInUserId} = this.props;

        const submitNewChatMessage = () =>
        {
            createChatMessage(selectedRoom.id, this.state.newChatMessage, loggedInUserId);
        }

        const handleOnChangeNewChatMessage = (event) =>
        {
            this.setState({
                newChatMessage: event.target.value
            });
        }

        return (
            <>
                <Stack bgcolor='#104040' width='100%' direction='row' height='50px'>
                    <Paper component="form"  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%', backgroundColor: '#404040', border: '1.5px solid white' }}>
                        <Tooltip title={<Typography fontSize={20}>Switch to multi-line edit mode.</Typography>}>
                            <IconButton sx={{color:'white'}} size='small'>
                                <ArticleIcon/>
                            </IconButton>
                        </Tooltip>
                        <InputBase onChange={handleOnChangeNewChatMessage}
                            sx={{ ml: 1, flex: 1, backgroundColor: '#404040', color:'white'}}
                            placeholder="Enter your chat message here..."
                            value={this.state.newChatMessage}
                            inputProps={{ 'aria-label': 'enter chat' }}
                        />
                        <Tooltip title={<Typography fontSize={20}>Send your chat message.</Typography>}>
                            <IconButton size='small' onClick={submitNewChatMessage} sx={{color:'white'}}>
                                <SendIcon/>
                            </IconButton>
                        </Tooltip>
                    </Paper>
                </Stack>
            </>
        );
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state) =>
{
    return {
        selectedRoom: state.roomList.selectedRoom,
        loggedInUserId: state.user.loggedInUserId
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        createChatMessage: (roomId, newChatMessage, loggedInUserId) => dispatch(createChatMessage(roomId, newChatMessage, loggedInUserId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChatEntryComponent);
