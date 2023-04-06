import React, {Component} from 'react';
import {Stack, Box, Typography, IconButton, Tooltip} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import {connect} from "react-redux";
import {toggleAddChatRoomAdminDialogFlag, toggleAddChatRoomMemberDialogFlag} from "../redux/room/roomActions";
import AddChatRoomAdminDialogComponent from "./AddChatRoomAdminDialogComponent";
import AddChatRoomMemberDialogComponent from "./AddChatRoomMemberDialogComponent";

class RoomHeaderComponent extends Component
{
    render()
    {
        const {selectedRoom, openAddChatRoomAdminDialogFlag, openAddChatRoomMemberDialogFlag, toggleAddChatRoomAdminDialogFlag, toggleAddChatRoomMemberDialogFlag} = this.props;

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
                {openAddChatRoomAdminDialogFlag ? <AddChatRoomAdminDialogComponent room={selectedRoom}/> : null}
                {openAddChatRoomMemberDialogFlag ? <AddChatRoomMemberDialogComponent room={selectedRoom}/> : null}
                <Stack width={'100%'} sx={{ border:1, borderColor:'white', backgroundColor:'#363535'}}>
                    <Box ><Typography variant='h5' fontFamily='Cursive' sx={{color:'lightgrey'}}>{selectedRoom.roomName}</Typography></Box>
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
                        <Typography sx={{color:'lightgreen'}}  variant="subtitle2">Members: [{selectedRoom.members.length}]</Typography>
                        <Typography sx={{color:'red'}}  variant="subtitle2">Admins: [{selectedRoom.administrators.length}]</Typography>
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
        openAddChatRoomMemberDialogFlag: state.room.openAddChatRoomMemberDialogFlag,
        selectedRoom: state.roomList.selectedRoom
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

