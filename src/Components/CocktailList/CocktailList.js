import React from 'react';
import './CocktailList.css';
import Cocktail from '../Cocktail/Cocktail';

class CocktailList extends React.Component {
    render() {
        return(
            <div className="CocktailList">
            <Cocktail />
            <Cocktail />
            <Cocktail />
            <Cocktail />
            <Cocktail />
            <Cocktail />
        </div>
        )      
    }
}

export default CocktailList;