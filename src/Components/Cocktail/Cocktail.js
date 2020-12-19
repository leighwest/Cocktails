import React from 'react';
import './Cocktail.css';



class Cocktail extends React.Component {
    render() {
        const { cocktail } = this.props;
        console.log({cocktail});
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