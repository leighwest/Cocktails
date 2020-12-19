import React from 'react';
import './CocktailList.css';
import Cocktail from '../Cocktail/Cocktail';

class CocktailList extends React.Component {
    render() {
        return(
            <div className="CocktailList">
                {
                    this.props.cocktails.map(cocktail => {
                        return <Cocktail cocktail={cocktail} key={cocktail.id} />
                    })
                    // <Cocktail cocktail={this.props.cocktails} />

                   
                }
            </div>
        );      
    }
}

export default CocktailList;