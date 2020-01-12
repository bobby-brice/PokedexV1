import React, { Component }from 'react';
import './App.css';
import Pokegame from './components/Pokegame';
import Header from './components/Header';



class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <Pokegame />
    </div>
  }
}

export default App;
