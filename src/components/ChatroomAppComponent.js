import React, {Component} from 'react';
import ChatEntryComponent from "./ChatEntryComponent";
import RoomsComponent from "./RoomsComponent";
import ConversationComponent from "./ConversationComponent";

class ChatroomAppComponent extends Component
{
    render()
    {
        return (
            <div>
                <ChatEntryComponent/>
                <RoomsComponent/>
                <ConversationComponent/>
            </div>
        );
    }
}

export default ChatroomAppComponent;
