import React, {Component} from 'react';
import {connect} from "react-redux";
import {createRoom, fetchRooms} from "../redux/roomList/roomListActions";
import RoomComponent from "./RoomComponent";
import {TextField} from "@mui/material";

class RoomListComponent extends Component
{
    render()
    {
        return (
            <div>
                 <TextField label='Enter text to filter rooms...'
                            variant='outlined'
                            size="small"
                            InputLabelProps={{ style: { color: 'white' } }}
                            inputProps={{ style: { color: 'white', borderColor: 'white'} }}
                            sx={{mt:2, mb:2, mr:2, ml:2, width:'90%', backgroundColor:'#575555'}}/>
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
        rooms: state.roomList.rooms
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        createRoom: () => dispatch(createRoom()),
        fetchRooms: () => dispatch(fetchRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomListComponent);

