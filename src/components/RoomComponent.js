import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchConversation} from "../redux/room/roomActions";

class RoomComponent extends Component
{
    render()
    {
        return (
            <div>
                <button onClick={this.props.fetchConversation}>{this.props.roomName}</button>
            </div>
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
