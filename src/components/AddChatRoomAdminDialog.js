import React, {Component} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material'
import {connect} from "react-redux";
import {toggleAddChatRoomAdminDialogFlag} from "../redux/room/roomActions";

class AddChatRoomAdminDialog extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            newRoomAdmin: ''
        }
    }

    render()
    {
        const {openAddChatRoomAdminDialogFlag, toggleAddChatRoomAdminDialogFlag} = this.props;

        const handleOnChangeEvent = (event) =>
        {
            this.setState({newRoomAdmin: event.target.value})
        }

        const handleCancel= () =>
        {
            toggleAddChatRoomAdminDialogFlag();
        }

        const handleSubmit = () =>
        {
            toggleAddChatRoomAdminDialogFlag();
        }

        return (
            <div>
                <Dialog aria-labelledby='dialog-title'
                        width='400px'
                        height='80px'
                        sx={{ backgroundColor: '#404040'}}
                        open={openAddChatRoomAdminDialogFlag}
                        onClose={() => this.setState({ newRoomAdmin: ''} )}>
                    <DialogTitle id='dialog-title' sx={{ backgroundColor: 'white', color: '#404040'}} >Add New Chat Room Admin</DialogTitle>
                    <DialogContent sx={{ width: '400px', height: '80px', backgroundColor: '#404040', color: 'lightgrey'}}>
                        <TextField label='Select the name of new administrator...'
                                   variant='outlined'
                                   width='70%'
                                   size="small"
                                   onChange={handleOnChangeEvent}
                                   InputLabelProps={{ style: { color: 'white' } }}
                                   inputProps={{ style: { color: 'white'} }}
                                   sx={{mt:2, mb:2, mr:2, ml:2, width:'90%', backgroundColor:'#575555', borderColor:'white'}}/>
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
        openAddChatRoomAdminDialogFlag: state.room.openAddChatRoomAdminDialogFlag
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleAddChatRoomAdminDialogFlag: () => dispatch(toggleAddChatRoomAdminDialogFlag())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddChatRoomAdminDialog);
