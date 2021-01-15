import React, { useEffect, useState } from 'react';

import './CocktailDetails.css';
import CocktailsDb from '../../Util/CocktailsDb';

const CocktailDetails = () => {

    const [cocktail, setCocktail] = useState({});
    const [isLoading, toggleLoader] = useState(false);


    useEffect(() => {
        let id = window.location.pathname.split("/")[2];
        toggleLoader(true);
        CocktailsDb.getCocktail(id).then(cocktail => {
            setCocktail(cocktail[0]);
            toggleLoader(false);
        });
    }, []);

    return (
        <div className="Cocktail-details">
            {isLoading ? (
                <img src="/Spinner-1s-200px.gif" />
            ) : (
                    <div className="cocktail-details-wrapper">
                        <h2>Recipe</h2>

                        <div className="cocktail-details-content">

                            <div className="cocktail-details-image-container">
                                <img src={cocktail.imageSrc} alt='' />
                            </div>
                            <div className="cocktail-details-text">
                                <h2>{cocktail.name}</h2>
                                <p>{cocktail.glass}</p>

                                <ul>
                                    <li>{cocktail.ingredients}</li>
                                </ul>
                                <h3>Instructions:</h3>
                                <p>{cocktail.instructions}</p>




                            </div>
                        </div>
                    </div>
                )}

        </div>
    )

};

export default CocktailDetails;