import React, {Component} from 'react';
import {connect} from "react-redux";
import {addRoomToFavourites, closeRoom, fetchConversation, selectRoom} from "../redux/roomList/roomListActions";
import {Box, Grid, IconButton, Tooltip, Typography} from '@mui/material'
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

class RoomComponent extends Component
{
    render()
    {
        const {loggedInUserId, selectedRoomIndex, myRoomIndex, fetchConversation, roomName, selectRoom, closeRoom, addToFavourites} = this.props;

        const handleFetchConversation = () =>
        {
            selectRoom();
            fetchConversation();
        }

        const handleCloseRoom = () => closeRoom(loggedInUserId, selectedRoomIndex);
        const handleAddToFavourites = () => addToFavourites(loggedInUserId, selectedRoomIndex);

        return (
            <>
                <Box sx={{
                    borderRadius: '7px',
                    color:'white',
                    height: '20px',
                    padding: '10px',
                    textOverflow: 'ellipsis',
                    textAlign: 'center',
                    '&:hover': {
                        backgroundColor: '#4f4e4e',
                        borderColor:'white',
                        border:1
                    }}}
                    bgcolor={selectedRoomIndex === myRoomIndex ? '#363535' : '#404040'}
                    onClick={handleFetchConversation}>
                    <Grid container rowSpacing={0} columnSpacing={0}>
                        <Grid item  xl>
                            <Typography>{roomName}</Typography>
                        </Grid>
                        <Grid item xl={2}>
                            {(selectedRoomIndex === myRoomIndex) &&
                            <Box display="flex" alignItems="center">
                                <Tooltip title={<Typography fontSize={20}>Add chat room to favourites.</Typography>}>
                                    <IconButton sx={{ color:'white'}} size='small' onClick={handleAddToFavourites}>
                                        <StarBorderPurple500RoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={<Typography fontSize={20}>Hide chat room.</Typography>}>
                                    <IconButton sx={{ color:'white'}} size='small' onClick={handleCloseRoom}>
                                        <CloseRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
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
        selectedRoomIndex: state.roomList.selectedRoomIndex,
        loggedInUserId: state.user.loggedInUserId
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        fetchConversation: () => dispatch(fetchConversation(ownProps.index)),
        closeRoom: (userId, roomId) => dispatch(closeRoom(userId, roomId)),
        selectRoom: () => dispatch(selectRoom(ownProps.index)),
        addToFavourites: (userId, roomId) => dispatch(addRoomToFavourites(userId, roomId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomComponent);
