import React, {useState} from 'react';
// import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import CocktailList from '../CocktailList/CocktailList';
import CocktailsDb from '../../Util/CocktailsDb';


// this might not work
import CocktailDetails from '../CocktailDetails/CocktailDetails';
import { Route } from 'react-router-dom';



export const Home = () => {
  const[cocktails, setCocktails] = useState([]);
  const [value, changeVal] = useState('');

  const searchCocktails = (term) => {
    CocktailsDb.searchCocktailsDb(term).then(cocktails => {
      setCocktails(cocktails);
    })
  }

  return (
      <div className="App">
        <Route 
          exact path="/" 
          render={() => (
              <SearchBar searchCocktails={searchCocktails} value={value} changeVal={changeVal}/>
          )}
        />
        <Route 
          exact path="/" 
          render={() => (
              <CocktailList cocktails={cocktails}/>
          )}
        />
        <Route 
          path="/viewcocktail/:cocktailId" 
          render={() => (
              <CocktailDetails/>
          )}
        />   
      </div>
  );
}

export default Home;
