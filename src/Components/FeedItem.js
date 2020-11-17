import React, { Component } from 'react';
import './feeditem.css';
class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, link} = this.props.feed;
    return (
      <div className="item">
        <a href={link} target="_blank" rel="noopener" title={title}>{title}</a>
      </div>
    )
  }
}

export default FeedItem;