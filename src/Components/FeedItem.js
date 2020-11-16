import React, { Component } from 'react';

class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, link} = this.props.feed;
    return (
      <div className="item">
        <div className="item-title">
          <a href={link} target="_blank" rel="noopener">{title}</a>
        </div>
      </div>
    )
  }
}

export default FeedItem;