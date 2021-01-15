import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import CocktailList from '../CocktailList/CocktailList';
import CocktailsDb from '../../Util/CocktailsDb';


// this might not work
import CocktailDetails from '../CocktailDetails/CocktailDetails';
import { Route } from 'react-router-dom';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: []
    };

  }

  searchCocktails = (term) => {
    CocktailsDb.searchCocktailsDb(term).then(cocktails => {
      this.setState({ cocktails: cocktails });  
    })
  }

  render() {
    return (
        <div className="App">
          <h1>Cocktails</h1>
                    
          <Route 
            exact path="/" 
            render={() => (
                <SearchBar searchCocktails={this.searchCocktails} />
            )}
          />
          <Route 
            exact path="/" 
            render={() => (
                <CocktailList cocktails={this.state.cocktails}/>
            )}
          />
          <Route 
            path="/viewcocktail/:cocktailId" 
            render={() => (
                <CocktailDetails cocktail={this.state.cocktailDetails}/>
            )}
          />   
          


        </div>
    );
  }
}

export default Home;
