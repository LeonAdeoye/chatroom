import React, {Component} from 'react';
import {connect} from "react-redux";
import {Stack, IconButton, Tooltip, Typography} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import {createChatMessage} from "../redux/roomList/roomListActions";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

class ChatEntryComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            newChatMessage: '',
            multilineFlag: false
        }
    }
    render()
    {
        const {createChatMessage, selectedRoom, loggedInUserId, changeHeight} = this.props;

        const submitNewChatMessage = () =>
        {
            createChatMessage(selectedRoom.id, this.state.newChatMessage, loggedInUserId);
            this.setState({newChatMessage: ''});
        }

        const handleOnChangeNewChatMessage = (event) =>
        {
            this.setState({
                newChatMessage: event.target.value
            });
        }

        const handleKeyPress = (event) =>
        {
            if(event.key === 'Enter' && this.state.newChatMessage !== '')
                submitNewChatMessage();

            event.preventDefault();
        }

        const switchToMultiline = () =>
        {
            const value = !this.state.multilineFlag;
            this.setState({multilineFlag: value});
            changeHeight(value?100:50);
        }

        return (
            <>
                <Stack bgcolor='#104040' width='100%' direction='row' sx={{ height: this.state.multilineFlag ? '100px' : '50px' }}>
                    <Paper component="form"  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%', backgroundColor: '#404040', border: '1.5px solid white' }}>
                        {this.state.multilineFlag ?
                        <Tooltip title={<Typography fontSize={20}>Switch back to single-line edit mode.</Typography>}>
                            <IconButton sx={{color:'white'}} size='small' onClick={switchToMultiline}>
                                <FilterListOffIcon/>
                            </IconButton>
                        </Tooltip>
                        :
                        <Tooltip title={<Typography fontSize={20}>Switch back to multi-line edit mode.</Typography>}>
                            <IconButton sx={{color:'white'}} size='small' onClick={switchToMultiline}>
                                <ArticleIcon/>
                            </IconButton>
                        </Tooltip>}
                        {this.state.multilineFlag ?
                        <InputBase onChange={handleOnChangeNewChatMessage}
                                   sx={{ ml: 1, flex: 1, backgroundColor: '#404040', color:'white'}}
                                   placeholder="Enter your chat message here..."
                                   multiline
                                   value={this.state.newChatMessage}
                                   inputProps={{ 'aria-label': 'enter chat', style: { maxHeight: '85px' } }}
                        />
                        :
                        <InputBase onChange={handleOnChangeNewChatMessage}
                            sx={{ ml: 1, flex: 1, backgroundColor: '#404040', color:'white'}}
                            placeholder="Enter your chat message here..."
                            value={this.state.newChatMessage}
                            inputProps={{ 'aria-label': 'enter chat' }}
                        />}
                        <Tooltip title={<Typography fontSize={20}>Send your chat message.</Typography>}>
                            <span onKeyPress={handleKeyPress}>
                                <IconButton disabled={this.state.newChatMessage === ''} size='small' onClick={submitNewChatMessage} sx={{color:'white'}}>
                                    <SendIcon/>
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Paper>
                </Stack>
            </>
        );
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        selectedRoom: state.roomList.selectedRoom,
        loggedInUserId: state.user.loggedInUserId,
        changeHeight: ownProps.changeHeight
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        createChatMessage: (roomId, newChatMessage, loggedInUserId) => dispatch(createChatMessage(roomId, newChatMessage, loggedInUserId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChatEntryComponent);
