import {createStore} from "redux";
import batReducer from "./batReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../Redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;