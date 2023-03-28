import React, {Component} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material'

class NewRoomDialogComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            roomName: ''
        }
    }

    render()
    {
        const handleOnChangeEvent = (event) =>
        {
            this.setState({roomName: event.target.value})
        }

        const handleCancel= () =>
        {
            console.log(this.state.roomName);
            this.setState({ roomName: ''});
        }

        const handleSubmit = () =>
        {
            console.log(this.state.roomName);
            this.setState({ roomName: ''});
        }

        return (
            <div>
                <Dialog aria-labelledby='dialog-title'
                        width='300px'
                        height='200px'
                        sx={{ width: '600px', height: '300px', backgroundColor: '#404040', color: 'lightgrey'}}
                        open={this.props.openFlag}
                        onClose={() => this.setState({ roomName: ''} )}>
                    <DialogTitle id='dialog-title'>Add New Room</DialogTitle>
                    <DialogContent sx={{ width: '600px', height: '300px', backgroundColor: '#404040', color: 'lightgrey'}}>
                        <TextField label='Enter name of rooms...'
                                   variant='outlined'
                                   width='80%'
                                   size="small"
                                   onChange={handleOnChangeEvent}
                                   InputLabelProps={{ style: { color: 'white' } }}
                                   inputProps={{ style: { color: 'white', borderColor: 'white'} }}
                                   sx={{mt:2, mb:2, mr:2, ml:2, width:'90%', backgroundColor:'#575555'}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button autoFocus onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NewRoomDialogComponent;
