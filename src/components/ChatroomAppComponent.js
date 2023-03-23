import React, {Component} from 'react';
import ChatEntryComponent from "./ChatEntryComponent";
import RoomListComponent from "./RoomListComponent";
import ConversationComponent from "./ConversationComponent";
import {Grid, Box, Stack} from '@mui/material'

class ChatroomAppComponent extends Component
{
    render()
    {
        return (
            <>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item  xl={2}>
                        <Box height='930px' bgcolor='#404040' color='white'><RoomListComponent/></Box>
                    </Grid>
                    <Grid item xl>
                        <Stack>
                            <Box height='900px' bgcolor='#404040' color='white'>
                                <ConversationComponent/>
                            </Box>
                            <Box height='30px' bgcolor='#404040' color='white'>
                                <ChatEntryComponent/>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default ChatroomAppComponent;
