import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import CocktailList from '../CocktailList/CocktailList';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Cocktails</h1>
        <SearchBar />
        <CocktailList />
      </div>

    );
  }
}

export default App;
