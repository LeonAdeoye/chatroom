import React, {Component} from 'react';
import ChatEntryComponent from "./ChatEntryComponent";
import RoomListComponent from "./RoomListComponent";
import ConversationComponent from "./ConversationComponent";
import {Grid, Box, Stack} from '@mui/material'

class ChatroomAppComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            heightValue: 50
        }
    }
    render()
    {
        const changeHeight = (value) =>
        {
            this.setState({heightValue: value});
        }

        return (
            <>
                <Grid container rowSpacing={0}
                      columnSpacing={0.25}
                      style={{ backgroundColor:'#404040', color:'white' }}
                      height='1000px'>
                    <Grid item  xl={2} style={{ borderRight: '2px solid white' }}>
                        <Box><RoomListComponent/></Box>
                    </Grid>
                    <Grid item xl>
                        <Stack>
                            <Box sx={{height: this.state.heightValue === 100 ? '900px' : '950px'}}>
                                <ConversationComponent/>
                            </Box>
                            <Box sx={{height: this.state.heightValue === 100 ? '100px' : '50px'}}>
                                <ChatEntryComponent changeHeight={changeHeight}/>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default ChatroomAppComponent;
