import React, {Component} from 'react';
import ChatEntryComponent from "./ChatEntryComponent";
import RoomListComponent from "./RoomListComponent";
import ConversationComponent from "./ConversationComponent";

class ChatroomAppComponent extends Component
{
    render()
    {
        return (
            <>
                <ChatEntryComponent/>
                <RoomListComponent/>
                <ConversationComponent/>
            </>
        );
    }
}

export default ChatroomAppComponent;
