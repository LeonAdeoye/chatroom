import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchConversation} from "../redux/room/roomActions";
import {addRoomToFavourites, closeRoom, selectRoom} from "../redux/roomList/roomListActions";
import {Box, Grid, IconButton, Typography} from '@mui/material'
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

class RoomComponent extends Component
{
    render()
    {
        const {selectedRoomIndex, myRoomIndex, fetchConversation, roomName, selectRoom, closeRoom, addToFavourites} = this.props;

        const handleFetchConversation = () =>
        {
            fetchConversation();
            selectRoom();
        }

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
                        backgroundColor: '#4f4e4e',
                        borderColor:'white',
                        border:1,
                        ml:0.5,
                        mr:0.5
                    }}}
                    bgcolor={selectedRoomIndex === myRoomIndex ? '#2c2929' : '#404040'}
                    onClick={handleFetchConversation}>
                    <Grid container rowSpacing={0} columnSpacing={0}>
                        <Grid item  xl>
                            <Typography>{roomName}</Typography>
                        </Grid>
                        <Grid item xl={2}>
                            {(selectedRoomIndex === myRoomIndex) &&
                            <Box display="flex" alignItems="center">
                                <IconButton sx={{ color:'white'}} size='small' onClick={handleAddToFavourites}>
                                    <StarBorderPurple500RoundedIcon/>
                                </IconButton>
                                <IconButton sx={{ color:'white'}} size='small' onClick={handleCloseRoom}>
                                    <CloseRoundedIcon/>
                                </IconButton>
                            </Box>}
                        </Grid>
                    </Grid>
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
        selectRoom: () => dispatch(selectRoom(ownProps.index)),
        addToFavourites: () => dispatch(addRoomToFavourites(ownProps.index))
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (RoomComponent);
export default connect(mapStateToProps, mapDispatchToProps) (RoomComponent);
