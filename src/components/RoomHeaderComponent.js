import React, {Component} from 'react';
import {Stack, Box, Typography, Button} from "@mui/material";
import NewRoomDialogComponent from "./NewRoomDialogComponent";

class RoomHeaderComponent extends Component
{
    render()
    {
        return (
            <div>
                <Stack width={'100%'} sx={{ border:1, borderColor:'white', backgroundColor:'#363535'}}>
                    <Box ><Typography variant='h5' fontFamily='Cursive' sx={{color:'lightgrey'}}>{this.props.roomName}</Typography></Box>
                    <Stack direction='row'><Typography sx={{color:'lightgrey'}}  variant="subtitle2">members: {this.props.memberCount}</Typography></Stack>
                </Stack>
            </div>
        );
    }
}

export default RoomHeaderComponent;
