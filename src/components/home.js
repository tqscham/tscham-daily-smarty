import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div className="container">
          <div className='logo'>

            <Logo />
            
          </div>

          <div className="search">

            <SearchBar />

          </div>

          <div className="recent">

            <RecentPosts />

          </div>
        </div>
      </div>
    );
  }
}
