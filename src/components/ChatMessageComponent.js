import React, {Component} from 'react';
import {connect} from "react-redux";

class ChatMessageComponent extends Component
{
    render()
    {
        return (
            <div>
                <span>{this.props.chatMessage}</span>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        chatMessage: ownProps.chatMessage
    }
}

// Note that you need to pass null if you do not need to subscribe to state changes in the store and only want to dispatch actions. For example.
//export default connect(null, mapDispatchToProps) (ChatMessageComponent);
export default connect(mapStateToProps) (ChatMessageComponent);
