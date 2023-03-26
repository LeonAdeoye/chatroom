import React, {Component} from 'react';
import {Stack, Box, Typography} from "@mui/material";

class RoomHeaderComponent extends Component
{
    render()
    {
        return (
            <div>
                <Stack width={'100%'} sx={{ border:1, borderColor:'white', backgroundColor:'#2c2929'}}>
                    <Box ><Typography variant='h5' fontFamily='Calibri' sx={{color:'lightgrey'}}>{this.props.roomName}</Typography></Box>
                    <Stack direction='row'><Typography sx={{color:'lightgrey'}}  variant="subtitle2">members: {this.props.memberCount}</Typography></Stack>
                </Stack>
            </div>
        );
    }
}

export default RoomHeaderComponent;
