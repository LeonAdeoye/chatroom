import React, {Component} from 'react';
import {Stack, Typography} from "@mui/material";
import FolderSharedIcon from '@mui/icons-material/FolderShared';

class RecentFolderComponent extends Component
{
    render()
    {
        return (
            <div>
                <Stack direction='row' sx={{ color: 'white'}}><FolderSharedIcon/><Typography sx={{ml:2}}>Recent</Typography></Stack>
            </div>
        );
    }
}

export default RecentFolderComponent;
