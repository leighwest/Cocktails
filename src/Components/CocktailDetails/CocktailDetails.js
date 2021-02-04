import React, { useEffect, useState } from 'react';

import './CocktailDetails.css';
import CocktailsDb from '../../Util/CocktailsDb';

const CocktailDetails = () => {

    const [cocktail, setCocktail] = useState({});
    const [isLoading, toggleLoader] = useState(true);


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
                <img src="/Spinner-1s-200px.gif" alt="spinner"/>
            ) : (
                    <div className="cocktail-details-wrapper">
                        <div>
                            <h2 className="cocktail-details-wrapper__heading">Recipe</h2>
                            <div className="cocktail-details-content">

                                <div className="cocktail-details-image-container">
                                    <img src={cocktail.imageSrc} alt='' className="cocktail-img"/>
                                </div>
                                <div className="cocktail-details-text">
                                    <h2 className="cocktail-details-text__heading">{cocktail.name}</h2>
                                    <p className="glass-type">{cocktail.glass}</p>

                                    <ul className="ingredients-list">
                                        {cocktail.ingredients.map((itm,idx) => (
                                            <>
                                                {itm && <li key={idx}>{itm}</li>}
                                            </>
                                        ))}
                                    </ul>
                                    <h3 className="instructions-heading">Instructions:</h3>
                                    <p className="instructions">{cocktail.instructions}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )}

        </div>
    )

};

export default CocktailDetails;