import React, { Component } from 'react';
import RequestClient from '../../utils/client';
import * as CONS from '../../utils/constant';
import FeedTab from '../../Components/FeedTab';
import './popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: {}
    }
  }

  componentDidMount() {
    const req = new RequestClient();
    const urls = CONS.default.urls;
    const currentFeeds = this.state.feeds;

    urls.forEach(async item => {
      const fetchedItems = await req.getFeeds(item.src);
      currentFeeds[item.name] = fetchedItems;
      this.setState({
        feeds: currentFeeds
      });
    });
  }

  render() {
    return (
      <div className="holder pure-u-1">
        {Object.keys(this.state.feeds).map(key => <FeedTab key={key} name={key} items={this.state.feeds[key]} />)}
      </div>
    );
  }
}

export default Popup;