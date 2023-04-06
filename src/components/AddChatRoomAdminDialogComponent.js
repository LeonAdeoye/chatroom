import React, {Component} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material'
import {connect} from "react-redux";
import {toggleAddChatRoomAdminDialogFlag} from "../redux/room/roomActions";
import {Autocomplete} from "@mui/lab";
import {fetchUsers} from "../redux/user/userActions";
import {addAdminToRoom} from "../redux/roomList/roomListActions";

class AddChatRoomAdminDialogComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            newRoomAdminId: ''
        }
    }

    componentDidMount()
    {
        this.props.fetchUsers();
    }

    render()
    {
        const {openAddChatRoomAdminDialogFlag, toggleAddChatRoomAdminDialogFlag, users, loggedInUserId, selectedRoom} = this.props;

        const handleOnChangeEvent = (event) =>
        {
            this.setState({newRoomAdminId: event.target.value})
        }

        const handleCancel= () =>
        {
            toggleAddChatRoomAdminDialogFlag();
        }

        const handleSubmit = () =>
        {
            toggleAddChatRoomAdminDialogFlag();
            addAdminToRoom(selectedRoom.id, this.state.newRoomAdminId, loggedInUserId);
        }

        return (
            <div>
                <Dialog aria-labelledby='dialog-title'
                        width='500px'
                        height='80px'
                        sx={{ backgroundColor: '#404040'}}
                        open={openAddChatRoomAdminDialogFlag}>
                    <DialogTitle id='dialog-title' sx={{ backgroundColor: 'white', color: '#404040'}} >New Admin In {selectedRoom.roomName}</DialogTitle>
                    <DialogContent sx={{ width: '500px', height: '80px', backgroundColor: '#404040', color: 'lightgrey'}}>
                        <Autocomplete size='small'
                                      renderInput={(params) => <TextField {...params} label='Select administrator to add room' />}
                                      options={users}
                                      value={this.state.newRoomAdminId}
                                      onChange={handleOnChangeEvent}
                                      freeSolo
                                      variant='outlined'
                                      width='70%'
                                      InputLabelProps={{ style: { color: 'white' } }}
                                      inputProps={{ style: { color: 'white'} }}
                                      sx={{mt:2, mb:2, mr:2, ml:2, width:'90%', backgroundColor:'#575555', borderColor:'white'}}
                        />
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: '#404040'}}>
                        <Button variant='outlined' sx={{ backgroundColor: '#404040', borderColor:'white', color: 'white', '&:hover': {
                                backgroundColor: '#4f4e4e',
                                borderColor:'white'
                            }}} onClick={handleCancel}>Cancel</Button>
                        <Button variant='outlined' sx={{ backgroundColor: '#404040', borderColor:'white', color: 'white', '&:hover': {
                                backgroundColor: '#4f4e4e',
                                borderColor:'white'
                            }}} autoFocus onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state) =>
{
    return {
        openAddChatRoomAdminDialogFlag: state.room.openAddChatRoomAdminDialogFlag,
        users: state.user.users,
        loggedInUserId: state.user.loggedInUserId,
        selectedRoom: state.roomList.selectedRoom
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleAddChatRoomAdminDialogFlag: () => dispatch(toggleAddChatRoomAdminDialogFlag()),
        fetchUsers: () => dispatch(fetchUsers()),
        addAdminToRoom: (selectedRoomId, newRoomMember, loggedInUserId) => dispatch(addAdminToRoom(selectedRoomId, newRoomMember, loggedInUserId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddChatRoomAdminDialogComponent);
