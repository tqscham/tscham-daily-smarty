import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

import * as actions from '../actions';



class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });

  }

  render() {


    return (
      <div className='home'>
        <div className='logo-home'>

          <Logo />
          
        </div>

        <div className="search-home">

          <SearchBar page={'home'} onSubmit={(query) => this.handleSearchBarSubmit(query)} />

        </div>

        <div className="recent">

          <RecentPosts />

        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
