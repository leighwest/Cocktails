const apiKey = '1';

const CocktailsDb = {
    searchCocktailsDb(term) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.drinks) {
                return jsonResponse.drinks.map(cocktail => ({
                    id: cocktail.idDrink,
                    imageSrc: cocktail.strDrinkThumb,
                    name: cocktail.strDrink,
                    glass: cocktail.strGlass,
                    type: cocktail.strCategory
                }));
            }
        });
    },

    getCocktail(id) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.drinks) {
                return jsonResponse.drinks.map(cocktail => ({
                    id: cocktail.idDrink,
                    imageSrc: cocktail.strDrinkThumb,
                    name: cocktail.strDrink,
                    glass: cocktail.strGlass,
                    type: cocktail.strCategory,
                    instructions: cocktail.strInstructions,

                    ingredients: ([cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3, cocktail.strIngredient4, cocktail.strIngredient5]),
                }));
            }
        });
    }
}

export default CocktailsDb;