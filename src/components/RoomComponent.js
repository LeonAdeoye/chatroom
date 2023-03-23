import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchConversation} from "../redux/room/roomActions";
import {Box} from '@mui/material'

class RoomComponent extends Component
{
    render()
    {
        return (
            <>
                <Box sx={{
                    backgroundColor:'#404040',
                    borderColor:'white',
                    borderWidth:'1px',
                    color:'white',
                    height: '20px',
                    padding: '10px',
                    '&:hover': { backgroundColor: '#626060'} }}
                    onClick={this.props.fetchConversation}>{this.props.roomName}</Box>
            </>
        );
    }
}

// The second parameter is props of the component itself passed in by the parent.
// By convention, the second parameter is called ownProps.
const mapStateToProps = (state, ownProps) =>
{
    return {
        roomName: ownProps.roomName
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        fetchConversation: () => dispatch(fetchConversation(ownProps.roomName))
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (RoomComponent);

export default connect(mapStateToProps, mapDispatchToProps) (RoomComponent);
