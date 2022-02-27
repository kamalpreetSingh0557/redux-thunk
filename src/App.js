import logo from './logo.svg';
import './App.css';
import Bat from './Components/Bat';
import store from './Redux/store';
import {Provider} from 'react-redux';
import Ball from './Components/Ball';
import User from './Components/User';

function App() {
  return (
  <>
    <Provider store={store}>
    <Bat />
    <Ball />
    <User />
    </Provider>
  </>
  );
}

export default App;
