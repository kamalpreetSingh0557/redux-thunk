import logo from './logo.svg';
import './App.css';
import Bat from './Components/Bat';
import store from './Redux/store';
import {Provider} from 'react-redux';
import Ball from './Components/Ball';

function App() {
  return (
  <>
    <Provider store={store}>
    <Bat />
    <Ball />
    </Provider>
  </>
  );
}

export default App;
