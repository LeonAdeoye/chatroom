import React, {Component} from 'react';
import {connect} from "react-redux";
import {createRoom, fetchRooms} from "../redux/roomList/roomListActions";
import RoomComponent from "./RoomComponent";

class RoomListComponent extends Component
{
    render()
    {
        return (
            <>
                {
                    this.props.rooms.map((room, index) => <RoomComponent key={room.id} index={room.id} roomName={room.name}></RoomComponent>)
                }
            </>
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

