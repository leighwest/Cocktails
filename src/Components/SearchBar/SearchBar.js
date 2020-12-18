import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return(
        <div className="SearchBar">
            <div className="SearchBar-field">
                <input placeholder="Search for a Drink" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
        )

    }

}

export default SearchBar;