import React, {Component} from 'react';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import {Stack, Typography} from "@mui/material";

class FavouritesFolderComponent extends Component
{
    render()
    {
        return (
            <div>
                <Stack direction='row' sx={{ color: 'white' }}><FolderSpecialIcon/><Typography sx={{ml:2}}>Favourites</Typography></Stack>
            </div>
        );
    }
}

export default FavouritesFolderComponent;
