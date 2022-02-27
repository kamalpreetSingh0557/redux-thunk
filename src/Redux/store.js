import {applyMiddleware, createStore} from "redux";
import batReducer from "./batReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../Redux/rootReducer';

// import thunk from 'redux-thunk';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(rootReducer, composeWithDevTools());

export default store;