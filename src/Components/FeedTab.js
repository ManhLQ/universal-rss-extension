import React, { Component } from 'react';
import FeedItem from './FeedItem';
import './feedtab.css';
class FeedTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  handleTabchange = (index, e) => {
    e.preventDefault();
    this.setState(state => ({
      active: index >= 0 ? index : 0
    }));
  }

  render() {
    const feeds = this.props.items;
    const tabNames = Object.keys(feeds);
    return (
      <>
      <div className="tabs is-medium tabs-fixed">
        <ul>
        { tabNames.map((item, index) =>
          <li key={index} className={this.state.active == index ? "is-active" : "" }>
            <a href="#" onClick={(e) => this.handleTabchange(index, e)}>{item}</a>
          </li>
        )}
        </ul>
      </div>
      {
        tabNames.map((item, index) =>
          <div key={index} className={"tab-content " + (this.state.active == index ? 'active' : '')}>
            {feeds[item].map((feed, idx) => <FeedItem key={idx} feed={feed} />)}
          </div>)
      }
      </>
    )
  }
}

export default FeedTab;