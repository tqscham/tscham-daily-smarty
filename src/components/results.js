import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './logo'
import SearchBar from './searchBar';

import * as actions from '../actions';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
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

export default connect(null, actions)(Results);