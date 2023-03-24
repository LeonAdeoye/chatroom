import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchConversation} from "../redux/room/roomActions";
import {addRoomToFavourites, closeRoom} from "../redux/roomList/roomListActions";
import {Box, IconButton, Stack, Typography} from '@mui/material'
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

class RoomComponent extends Component
{
    render()
    {
        const {selectedRoomIndex, myRoomIndex, fetchConversation, roomName, closeRoom, addToFavourites} = this.props;
        const handleFetchConversation = () => fetchConversation();
        const handleCloseRoom = () => closeRoom();
        const handleAddToFavourites = () => addToFavourites();
        return (
            <>
                <Box sx={{
                    p:0.25,
                    borderRadius: '7px',
                    color:'white',
                    height: '20px',
                    padding: '10px',
                    textOverflow: 'ellipsis',
                    textAlign: 'center',
                    ml:0.5,
                    mr:0.5,
                    '&:hover': {
                        backgroundColor: '#575555',
                        borderColor:'white',
                        border:1,
                        ml:0.5,
                        mr:0.5
                    }}}
                    bgcolor={selectedRoomIndex === myRoomIndex ? '#2c2929' : '#404040'}
                    onClick={handleFetchConversation}>
                        <Stack direction='row' >
                            <Typography>{roomName}</Typography>
                            <Box display="flex" alignItems="right">
                                <IconButton sx={{ color:'white'}} onClick={handleAddToFavourites}>
                                    <StarBorderPurple500RoundedIcon/>
                                </IconButton>
                                <IconButton sx={{ color:'white'}} size='small' onClick={handleCloseRoom}>
                                    <CloseRoundedIcon/>
                                </IconButton>
                            </Box>
                        </Stack>
                    </Box>
            </>
        );
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        roomName: ownProps.roomName,
        myRoomIndex: ownProps.index,
        selectedRoomIndex: state.room.selectedRoomIndex
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        fetchConversation: () => dispatch(fetchConversation(ownProps.index)),
        closeRoom: () => dispatch(closeRoom(ownProps.index)),
        addToFavourites: () => dispatch(addRoomToFavourites(ownProps.index))
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (RoomComponent);
export default connect(mapStateToProps, mapDispatchToProps) (RoomComponent);
