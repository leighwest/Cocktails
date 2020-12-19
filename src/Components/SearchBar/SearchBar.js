import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleSearch(event) {
        this.props.searchCocktails(this.state.term);
        event.preventDefault();  
    }

    render() {
        return(
        <div className="SearchBar">
            <div className="SearchBar-field">
                <input placeholder="Search for a Drink" onChange={this.handleTermChange}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
        </div>
        )

    }

}

export default SearchBar;