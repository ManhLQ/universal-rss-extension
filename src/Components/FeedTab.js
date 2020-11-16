import React, {
  Component
} from 'react';
import FeedItem from './FeedItem';

class FeedTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const feeds = this.props.items || [];

    return (
      <>
        <article className="panel">
          <p className="panel-tabs">
            <a href="#">{this.props.name}</a>
          </p>
          <div className="panel-block">
            {feeds.map((item, index) => < FeedItem key = {index} feed = {item}/>)}
          </div>
        </article>
      </>
    )
  }
}

export default FeedTab;