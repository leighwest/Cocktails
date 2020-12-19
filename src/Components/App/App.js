import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import CocktailList from '../CocktailList/CocktailList';
import CocktailsDb from '../../Util/CocktailsDb';

// const cocktail = {
//   imageSrc: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
//   name: 'Blue Margarita',
//   ingredients: ['1 1/2 oz Tequila', '1 oz Blue Curacao', '1 oz Lime juice', 'Coarse Salt'],
//   type: 'Ordinary Drink',
//   glass: 'Cocktail glass',
//   instructions: 'Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.'
// };

// const cocktails = [cocktail, cocktail, cocktail, cocktail, cocktail, cocktail];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: []
    };

    this.searchCocktails = this.searchCocktails.bind(this);
  }

  searchCocktails(term) {
    CocktailsDb.searchCocktailsDb(term).then(cocktails => {
      this.setState({ cocktails: cocktails });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Cocktails</h1>
        <SearchBar searchCocktails={this.searchCocktails}/>
        <CocktailList cocktails={this.state.cocktails}/>
      </div>

    );
  }
}

export default App;
