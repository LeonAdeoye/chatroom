import './App.css';
import {Provider} from 'react-redux'
import configureStore from "./redux/store";
import ChatEntryComponent from "./components/ChatEntryComponent";
import RoomListComponent from "./components/RoomListComponent";
import ConversationComponent from "./components/ConversationComponent";

function App() {
  return (
      <Provider store={configureStore()}>
          <div className="App">
              <ChatEntryComponent/>
              <RoomListComponent/>
              <ConversationComponent/>
          </div>
      </Provider>
  );
}

export default App;
