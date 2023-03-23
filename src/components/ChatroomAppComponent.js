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
                        <Box height='100%' bgcolor='#404040' color='white'><RoomListComponent/></Box>
                    </Grid>
                    <Grid item xl>
                        <Box height='100%' bgcolor='#404040' color='white'>
                            <Stack>
                            <ConversationComponent/>
                            <ChatEntryComponent/>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default ChatroomAppComponent;
