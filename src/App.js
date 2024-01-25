import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AKWABA</h1>
        </header>
        <p className="App-intro">
          Pour ajouter du contenu au site merci d'inserer les fichier dans le repertoire <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
