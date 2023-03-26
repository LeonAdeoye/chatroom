import React, {Component} from 'react';
import {createChatMessage} from "../redux/chatEntry/chatEntryActions";
import {connect} from "react-redux";
import {Stack, IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

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
                <Stack bgcolor='#104040' width='100%' direction='row' height='50px'>
                    <Paper component="form"  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%', backgroundColor: '#404040', border: '1.5px solid white' }}>
                        <IconButton sx={{color:'white'}} size='small'>
                            <ArticleIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, backgroundColor: '#404040', color:'white'}}
                            placeholder="Enter your chat message here..."
                            inputProps={{ 'aria-label': 'enter chat' }}
                        />
                        <IconButton size='small' onClick={() => this.props.enterChatMessage(this.state.newChatMessage)} sx={{color:'white'}}>
                            <SendIcon/>
                        </IconButton>
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
