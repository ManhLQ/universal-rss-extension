import React, { Component } from 'react';
import OptionTable from '../../Components/OptionTable';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: {}
    }
  }

  componentDidMount() {
    this.fetchData().then(res => {
      this.setState(state => {
        return { sources: res };
      })
    });
  }

  fetchData = () => {
    const sampleData = [{
      name: 'VNE',
      src: 'https://vnexpress.net/rss/tin-xem-nhieu.rss'
    },
    {
      name: 'CafeF',
      src: 'https://cafef.vn/trang-chu.rss'
    },
    {
      name: 'Voz',
      src: 'https://voz.vn/f/diem-bao.33/index.rss'
    },
    ];
    return new Promise(resolve => {setTimeout(resolve(sampleData) ,1000)});
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