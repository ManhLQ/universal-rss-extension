import axios from 'axios';

const instance = axios.create({});

class RequestClient {
  _get = async (url, config) => {
    return await instance.get(url, config).then(res => res.data).catch(err => console.log(`Err frm request ${err}`));
  }

  _isCdataElement = (raw) => {
    return raw.indexOf('<![CDATA[') >= 0;
  }

  _escapeCData = (raw) => {
    return raw.replace(/<!\[CDATA\[\s*/g, '').replace(/\s?]]>/g, '');
  }

  _parseItem = (raw) => {
    return this._isCdataElement(raw) ? this._escapeCData(raw) : raw;
  }

  getFeeds = async (url, config) => {
    return await this._get(url, config)
      .then(raw => new window.DOMParser().parseFromString(raw, "text/xml"))
      .then(data => data.querySelectorAll('item'))
      .then(item => Array.from(item))
      .then(item => item.map(itm => {
        const link = this._parseItem(itm.querySelector('link').innerHTML);
        const title = this._parseItem(itm.querySelector('title').innerHTML);
        return {
          link,
          title
        };
      }));
  }
}

export default RequestClient;