const apiKey = '1';

const CocktailsDb = {
    searchCocktailsDb(term) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
    ).then(response => {
        // console.log(response.json());
        return response.json();
    }).then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.drinks) {
            console.log("success!");
            return jsonResponse.drinks.map(cocktail => ({
                id: cocktail.idDrink,
                imageSrc: cocktail.strDrinkThumb,
                name: cocktail.strDrink,
                glass: cocktail.strGlass,
                type: cocktail.strCategory
               }));
            } 
        }); 
    }
};

export default CocktailsDb;