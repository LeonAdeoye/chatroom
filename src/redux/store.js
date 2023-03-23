import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore()
{
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)));
}

export default configureStore;
