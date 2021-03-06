import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './logo'
import SearchBar from './searchBar';
import ResultsPosts from './results-posts';

import * as actions from '../actions';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return (
            <div>
                <div className='results'>
                    <Logo size={80} />
                    <SearchBar page='results' onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                    <ResultsPosts />
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(Results);