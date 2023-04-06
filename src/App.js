import './App.css';
import {Provider} from 'react-redux'
import configureStore from "./redux/store";
import ChatroomAppComponent from "./components/ChatroomAppComponent";
import LoginDialog from "./components/LoginDialogComponent";

function App()
{
  return (
      <Provider store={configureStore()}>
          <div className="App">
              <LoginDialog/>
              <ChatroomAppComponent/>
          </div>
      </Provider>
  );
}

export default App;
