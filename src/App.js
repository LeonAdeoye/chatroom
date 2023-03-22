import './App.css';
import ChatroomAppComponent from "./components/ChatroomAppComponent";
import {Provider} from 'react-redux'
import store from "./redux/chatEntry/store";
import ChatEntryComponent from "./components/ChatEntryComponent";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <ChatEntryComponent/>
          </div>
      </Provider>
  );
}

export default App;
