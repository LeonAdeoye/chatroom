import React, {Component} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material'
import {connect} from "react-redux";
import {toggleAddChatRoomMemberDialogFlag} from "../redux/room/roomActions";
import {Autocomplete } from '@mui/material'
import {fetchUsers} from "../redux/user/userActions";
import {addMemberToRoom} from "../redux/roomList/roomListActions";

class AddChatRoomMemberDialogComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            newRoomMemberFullName: ''
        }
    }

    componentDidMount()
    {
        this.props.fetchUsers();
    }

    render()
    {
        const {openAddChatRoomMemberDialogFlag, toggleAddChatRoomMemberDialogFlag, users, addMemberToRoom, loggedInUserId, selectedRoom} = this.props;

        const handleOnChangeEvent = (event, newValue) =>
        {
            this.setState({newRoomMemberFullName: newValue});
        }

        const handleCancel= () =>
        {
            toggleAddChatRoomMemberDialogFlag();
        }

        const handleSubmit = () =>
        {
            toggleAddChatRoomMemberDialogFlag();
            let newRoomMemberId = users.find(user => user.fullName === this.state.newRoomMemberFullName).id
            addMemberToRoom(selectedRoom.id, newRoomMemberId, loggedInUserId);
        }

        const handleKeyPress = (event) =>
        {
            if(event.key === 'Enter' && this.state.newRoomMemberFullName !== '')
            {
                handleSubmit();
                event.preventDefault();
            }
        }

        return (
            <div>
                <Dialog aria-labelledby='dialog-title'
                        width='500px'
                        height='80px'
                        sx={{ backgroundColor: '#404040'}}
                        open={openAddChatRoomMemberDialogFlag}>
                    <DialogTitle id='dialog-title' sx={{ backgroundColor: 'white', color: '#404040'}} >New Member In {selectedRoom.roomName}</DialogTitle>
                    <DialogContent sx={{ width: '500px', height: '80px', backgroundColor: '#404040', color: 'lightgrey'}} onKeyPress={handleKeyPress}>
                        <Autocomplete size='small'
                                      renderInput={(params) => <TextField {...params}
                                                                          label='Select member to add to room'
                                                                          InputLabelProps={{ style: { color: 'white' }}}
                                                                          />}
                                      options={users.map(user => user.fullName)}
                                      value={this.state.newRoomMemberFullName}
                                      onChange={handleOnChangeEvent}
                                      freeSolo
                                      variant='outlined'
                                      width='70%'
                                      sx={{mt:2, mb:2, mr:2, ml:2, width:'90%', backgroundColor:'#575555', borderColor:'white', color:'white'}}
                        />
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: '#404040'}}>
                        <Button variant='outlined' sx={{ backgroundColor: '#404040', borderColor:'white', color: 'white', '&:hover': {
                                backgroundColor: '#4f4e4e',
                                borderColor:'white'
                            }}} onClick={handleCancel}>Cancel</Button>
                        <Button disabled={this.state.newRoomMemberFullName === ''} variant='outlined' sx={{ backgroundColor: '#404040', borderColor:'white', color: 'white', '&:hover': {
                                backgroundColor: '#4f4e4e',
                                borderColor:'white'
                            }}} autoFocus onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        openAddChatRoomMemberDialogFlag: state.room.openAddChatRoomMemberDialogFlag,
        users: state.user.users,
        loggedInUserId: state.user.loggedInUserId,
        selectedRoom: state.roomList.selectedRoom
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        toggleAddChatRoomMemberDialogFlag: () => dispatch(toggleAddChatRoomMemberDialogFlag()),
        fetchUsers: () => dispatch(fetchUsers()),
        addMemberToRoom: (selectedRoomId, newRoomMemberId, loggedInUserId) => dispatch(addMemberToRoom(selectedRoomId, newRoomMemberId, loggedInUserId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddChatRoomMemberDialogComponent);
