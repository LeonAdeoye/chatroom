import React, {Component} from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material'
import {connect} from "react-redux";
import {addUser, fetchUsers, loginUser, toggleOpenLoginDialogFlag} from "../redux/user/userActions";

class LoginDialogComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            fullName: ''
        }
    }

    componentDidMount()
    {
        this.props.fetchUsers();
    }

    render()
    {
        const {openLoginDialogFlag, toggleOpenLoginDialogFlag, loginUser, users, addUser} = this.props;

        const handleOnChangeEvent = (event) =>
        {
            this.setState({fullName: event.target.value});
        }

        const handleSubmit = () =>
        {
            let loginFullName = this.state.fullName;
            let result = users.find(user => user.fullName === loginFullName);

            if(result !== undefined)
                loginUser(result.id);
            else
                addUser(loginFullName);

            toggleOpenLoginDialogFlag();
        }

        const handleKeyPress = (event) =>
        {
            if(event.key === 'Enter' && this.state.fullName !== '')
            {
                handleSubmit();
                event.preventDefault();
            }
        }

        return (
            <div>
                <Dialog aria-labelledby='dialog-title'
                        width='400px'
                        height='80px'
                        sx={{ backgroundColor: '#404040'}}
                        open={openLoginDialogFlag}>
                    <DialogTitle id='dialog-title' sx={{ backgroundColor: 'white', color: '#404040'}} >Login To Chat Rooms</DialogTitle>
                    <DialogContent sx={{ width: '400px', height: '80px', backgroundColor: '#404040', color: 'lightgrey'}} onKeyPress={handleKeyPress}>
                        <TextField label='Enter your full name...'
                                   variant='outlined'
                                   width='70%'
                                   size="small"
                                   onChange={handleOnChangeEvent}
                                   InputLabelProps={{ style: { color: 'white' } }}
                                   inputProps={{ style: { color: 'white'} }}
                                   sx={{mt:2, mb:2, mr:2, ml:2, width:'90%', backgroundColor:'#575555', borderColor:'white'}}/>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: '#404040'}}>
                        <Button disabled={this.state.fullName === ""} variant='outlined' sx={{ backgroundColor: '#404040', borderColor:'white', color: 'white', '&:hover': {
                                backgroundColor: '#4f4e4e',
                                borderColor:'white'
                            }}} autoFocus onClick={handleSubmit}>Login</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        openLoginDialogFlag: state.user.openLoginDialogFlag,
        users: state.user.users
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        toggleOpenLoginDialogFlag: () => dispatch(toggleOpenLoginDialogFlag()),
        loginUser: (userId) => dispatch(loginUser(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        addUser: (fullName) => dispatch(addUser(fullName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginDialogComponent);
