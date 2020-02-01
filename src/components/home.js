import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log('trying to handle submit for query', query);
    this.props.history.push('/results');
  }

  render() {


    return (
      <div className='app'>
        <div className="container">
          <div className='logo-home'>

            <Logo />
            
          </div>

          <div className="search">

            <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />

          </div>

          <div className="recent">

            <RecentPosts />

          </div>
        </div>
      </div>
    );
  }
}
