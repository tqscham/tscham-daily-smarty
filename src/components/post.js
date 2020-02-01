import React, { Component } from 'react';

class Post extends Component {

    renderLinks() {
        let links = this.props.post_links.map((link, index) => {
            return (
                <div className='post-link' key={index}>
                    <div className='post-link-box'>
                    </div>

                    <div className='post-link-link'>
                        <a href={link.link_url}>Userful Link #{index+1}</a>
                    </div>
                </div>
            )
        })
        return links
    }

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className='post-topic' key={index}>{topic}</span>
        })
        return topics;
    }

    render() {

        if (this.props.type === 'recent') {
            return (
                <li className="recent-post">
                    <div className='recent-post-title'>
                        {this.props.title}
                    </div>
    
                    <div className='recent-post-topics'>
                        {this.renderTopics()}
                    </div>
                </li>
            )
        } else if (this.props.type === 'result'){
            return (
                <li className='result-post'>
                <div className='result-post-title'>
                        {this.props.title}
                    </div>

                    <div className='result-post-topics'>
                        {this.renderTopics()}

                    </div>

                    <div className='result-post-links'>
                        {this.renderLinks()}
                    </div>
                </li>
            )
        }
    }
}

export default Post;