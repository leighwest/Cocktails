import React, {useState, useEffect} from 'react';
import './SearchBar.css';

const SearchBar = ({searchCocktails, value, changeVal}) => {

    const inputElementRef = React.createRef();

    useEffect(() => {
        inputElementRef.current.focus();
    },[]);

    const handleTermChange = (event) =>  {
        changeVal(event.target.value);
    }

    const handleSearch = (event) => {
        searchCocktails(value);
        event.preventDefault();  
    }

    return(
        <>
            <h1>Cocktails</h1>
            <div className="SearchBar">
                <div className="SearchBar-field">
                    <input placeholder="Search for a Drink" ref={inputElementRef} value={value} onChange={handleTermChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={handleSearch}>Let's Go</a>
                </div>
            </div>
        </>
    )

}

export default SearchBar;