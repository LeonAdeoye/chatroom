import React, {Component} from 'react';
import {Stack, Box, Typography, IconButton, Tooltip} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import {connect} from "react-redux";
import {toggleAddChatRoomAdminDialogFlag, toggleAddChatRoomMemberDialogFlag} from "../redux/room/roomActions";
import AddChatRoomAdminDialog from "./AddChatRoomAdminDialog";
import AddChatRoomMemberDialog from "./AddChatRoomMemberDialog";

class RoomHeaderComponent extends Component
{
    render()
    {
        const {openAddChatRoomAdminDialogFlag, openAddChatRoomMemberDialogFlag, toggleAddChatRoomAdminDialogFlag, toggleAddChatRoomMemberDialogFlag} = this.props;

        const handleAddAdminClick = () =>
        {
            toggleAddChatRoomAdminDialogFlag();
        }

        const handleAddMemberClick = () =>
        {
            toggleAddChatRoomMemberDialogFlag();
        }

        return (
            <div>
                {openAddChatRoomAdminDialogFlag ? <AddChatRoomAdminDialog/> : null}
                {openAddChatRoomMemberDialogFlag ? <AddChatRoomMemberDialog/> : null}
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

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        openAddChatRoomAdminDialogFlag: state.room.openAddChatRoomAdminDialogFlag,
        openAddChatRoomMemberDialogFlag: state.room.openAddChatRoomMemberDialogFlag
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleAddChatRoomAdminDialogFlag: () => dispatch(toggleAddChatRoomAdminDialogFlag()),
        toggleAddChatRoomMemberDialogFlag: () => dispatch(toggleAddChatRoomMemberDialogFlag())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomHeaderComponent);

