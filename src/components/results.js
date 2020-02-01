import React, { Component } from 'react';
import Logo from './logo'
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchBarSubmit(query) {
        console.log(query);
    }

    render() {
        return (
            <div>
                <div className='logo-results'>
                    <Logo size={200} />
                    <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                </div>
            </div>
        );
    }
}

export default Results;