import React from 'react';
import './Cocktail.css';
import { Link } from 'react-router-dom';


class Cocktail extends React.Component {

    render() {

        const { cocktail } = this.props;
        return (
        <div className="Cocktail">
            <div className="image-container">
                <Link to={`/viewcocktail/${cocktail.id}`}>
                    <img src={cocktail.imageSrc} alt='' />
                </Link>
            </div>
            <h2>{cocktail.name}</h2>
            <div className="Cocktail-information">
                <p>{cocktail.type}</p>
                {/* <p>{cocktail.glass}</p> */}
            </div>
        </div>
        )
    }
}

export default Cocktail;