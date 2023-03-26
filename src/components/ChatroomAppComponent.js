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
                <Grid container rowSpacing={0}
                      columnSpacing={0.25}
                      style={{ backgroundColor:'#404040', color:'white' }}
                      height='950px'>
                    <Grid item  xl={2} style={{ borderRight: '2px solid white' }}>
                        <Box><RoomListComponent/></Box>
                    </Grid>
                    <Grid item xl>
                        <Stack>
                            <Box height='900px'>
                                <ConversationComponent/>
                            </Box>
                            <Box height='50px'>
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
