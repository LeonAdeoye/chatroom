import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchRooms, toggleCreateRoomDialogFlag} from "../redux/roomList/roomListActions";
import RoomComponent from "./RoomComponent";
import {IconButton, Stack, TextField, Tooltip, Typography} from "@mui/material";
import NewRoomDialogComponent from "./NewRoomDialogComponent";
import AddCommentIcon from '@mui/icons-material/AddComment';

class RoomListComponent extends Component
{
    render()
    {
        const {openCreateRoomDialogFlag, toggleCreateRoomDialogFlag} = this.props;

        const handleClick = () =>
        {
            toggleCreateRoomDialogFlag();
        }

        return (
            <div>
                {openCreateRoomDialogFlag ? <NewRoomDialogComponent/> : null}
                <Stack direction='row'>
                    <TextField label='Enter text to filter'
                               variant='outlined'
                               size="small"
                               InputLabelProps={{ style: { color: 'white' } }}
                               inputProps={{ style: { color: 'white', borderColor: 'white'} }}
                               sx={{mt:2, mb:2, mr:0, ml:2, width:'85%', backgroundColor:'#575555'}}/>
                    <Tooltip title={<Typography fontSize={20}>Add a new chat room.</Typography>}>
                        <IconButton size='small' onClick={handleClick} sx={{ color: 'white'}}>
                            <AddCommentIcon/>
                        </IconButton>
                    </Tooltip>
                </Stack>
                 {this.props.rooms.map((room) => <RoomComponent key={room.id} index={room.id} roomName={room.name}/>)}
            </div>
        );
    }

    componentDidMount()
    {
        this.props.fetchRooms();
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        rooms: state.roomList.rooms,
        openCreateRoomDialogFlag: state.roomList.openCreateRoomDialogFlag
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleCreateRoomDialogFlag: () => dispatch(toggleCreateRoomDialogFlag()),
        fetchRooms: () => dispatch(fetchRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomListComponent);

