import React, { Component } from 'react';
import Logo from './logo'
import SearchBar from './searchBar';

class Results extends Component {
    render() {
        return (
            <div>
                <div className='logo-results'>
                    <Logo size={200} />
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default Results;