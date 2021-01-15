import React from 'react';
import './CocktailList.css';
import Cocktail from '../Cocktail/Cocktail';

class CocktailList extends React.Component {
    render() {
        return(
            <div className="CocktailList">
                {
                    this.props.cocktails.map(cocktail => {
                        return <Cocktail cocktail={cocktail} key={cocktail.id} logThis={this.props.logThis}/>
                    })
                }
            </div>
        );      
    }
}

export default CocktailList;