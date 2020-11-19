import React, { Component } from 'react';
import OptionTable from '../../Components/OptionTable';
import LocalStorageDataStore from '../../services/datastore.service';
class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: {}
    }
    this.dataStore = new LocalStorageDataStore('options');
  }

  componentDidMount() {
    this.dataStore.get('configs', 'sources', result => {
      this.setState(state => {
        return { sources: result['options.configs.sources'] };
      });
    });
  }

  handleNameChange = (name, value) => {
    this.setState(state => {
      const updated = state.sources.map(item => {
        if (item.name === name) {
          item.name = value;
        }
        return item;
      });
      return { sources: updated };
    });
  }

  handleSourceChange = (name, value) => {
    this.setState(state => {
      const updated = state.sources.map(item => {
        if (item.name === name) {
          item.src = value;
        }
        return item;
      });
      return { sources: updated };
    })
  }

  render() {
    return <OptionTable cols = {['Name', 'Source']} data = {this.state.sources}
    handleNameChange={this.handleNameChange}
    handleSourceChange={this.handleSourceChange} />;
  }
}

export default Options;