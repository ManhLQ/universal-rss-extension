import React, { Component } from 'react';
import RequestClient from '../../utils/client';
import FeedTab from '../../Components/FeedTab';
import LocalStorageDataStore from '../../services/datastore.service';
import './popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: {}
    }
    this.dataStore = new LocalStorageDataStore('options');
  }

  componentDidMount() {
    const req = new RequestClient();
    this.dataStore.get('configs', 'sources', result => {
       const urls = result['options.configs.sources'];
       urls.forEach(async item => {
        const fetchedItems = await req.getFeeds(item.src);
        this.setState(state => {
          state.feeds[item.name] = fetchedItems;
          return {feeds: state.feeds};
        });
        this.dataStore.save('feeds', item.name, JSON.stringify(fetchedItems));
      });
    });
  }

  handleOpenOptionPage = () => {
    chrome.runtime.openOptionsPage();
  }

  render() {
    return (<>
    { this.state.feeds && <FeedTab items={this.state.feeds}/>}
    <button onClick={this.handleOpenOptionPage}>Option</button>
    </>);
  }
}

export default Popup;