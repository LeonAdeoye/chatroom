import React, {Component} from 'react';
import {connect} from "react-redux";
import {createRoom, fetchRooms} from "../redux/roomList/roomListActions";

class RoomListComponent extends Component
{
    render()
    {
        console.log("props: ",this.props);
        return (
            <>
                <ul>
                    {
                        this.props.rooms.map((room, index) => <li key={index}>{room}</li>)
                    }
                </ul>
                <button onClick={this.props.fetchRooms}>Fetch Rooms</button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.roomList.rooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRoom: () => dispatch(createRoom()),
        fetchRooms: () => dispatch(fetchRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RoomListComponent);

