import './App.css';
import {Provider} from 'react-redux'
import configureStore from "./redux/store";
import ChatroomAppComponent from "./components/ChatroomAppComponent";

function App() {
  return (
      <Provider store={configureStore()}>
          <div className="App">
              <ChatroomAppComponent/>
          </div>
      </Provider>
  );
}

export default App;
