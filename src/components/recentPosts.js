import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions'



class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    
    render() {
        return (
            <div className="recent-posts-wrapper">
                <div className="recent-posts-heading">Recent Posts</div>
                <ul className="recent-posts-posts">
                    <li>post 1</li>
                    <li>post 2</li>
                    <li>post 3</li>
                </ul>
            </div>
        );
    }
}

export default connect(null, actions)(RecentPosts);