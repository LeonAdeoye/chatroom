import './App.css';
import {Provider} from 'react-redux'
import configureStore from "./redux/store";
import ChatEntryComponent from "./components/ChatEntryComponent";
import RoomListComponent from "./components/RoomListComponent";

function App() {
  return (
      <Provider store={configureStore()}>
          <div className="App">
              <ChatEntryComponent/>
              <RoomListComponent/>
          </div>
      </Provider>
  );
}

export default App;
