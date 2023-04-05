import React, {Component} from 'react';
import {Stack, Box, Typography, IconButton, Tooltip} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

class RoomHeaderComponent extends Component
{
    render()
    {
        const handleAddAdminClick = () =>
        {

        }

        const handleAddMemberClick = () =>
        {

        }

        return (
            <div>
                <Stack width={'100%'} sx={{ border:1, borderColor:'white', backgroundColor:'#363535'}}>
                    <Box ><Typography variant='h5' fontFamily='Cursive' sx={{color:'lightgrey'}}>{this.props.roomName}</Typography></Box>
                    <Stack direction='row'>
                        <Tooltip title={<Typography fontSize={20}>Add a new member to the chat room.</Typography>}>
                            <IconButton size='small' onClick={handleAddMemberClick} sx={{ color: 'white'}}>
                                <PersonAddIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={<Typography fontSize={20}>Add a new administrator to the chat room.</Typography>}>
                            <IconButton size='small' onClick={handleAddAdminClick} sx={{ color: 'white'}}>
                                <AddModeratorIcon/>
                            </IconButton>
                        </Tooltip>
                        <Typography sx={{color:'lightgrey'}}  variant="subtitle2">members: {this.props.memberCount}</Typography>
                    </Stack>
                </Stack>
            </div>
        );
    }
}

export default RoomHeaderComponent;
