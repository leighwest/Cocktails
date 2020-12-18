import React from 'react';
import './Cocktail.css';

const cocktail = {
    imageSrc: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
    name: 'Blue Margarita',
    ingredients: ['1 1/2 oz Tequila', '1 oz Blue Curacao', '1 oz Lime juice', 'Coarse Salt'],
    type: 'Ordinary Drink',
    glass: 'Cocktail glass',
    instructions: 'Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.'
};

class Cocktail extends React.Component {
    render() {
        return (
        <div className="Cocktail">
            <div className="image-container">
                <img src={cocktail.imageSrc} alt='' />
            </div>
            <h2>{cocktail.name}</h2>
            <div className="Cocktail-information">
                <p>{cocktail.type}</p>
                <p>{cocktail.glass}</p>
            </div>
        </div>
        )
    }
}

export default Cocktail;