import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class StockList extends Component {
  render() {
    const { stocks } = this.props;
    return (
      <ListGroup style={{ listStyle: 'none' }}>
        <h1>All Stocks</h1>
        { stocks.map((stock, index) => (
          <ListGroupItem key={index}>
            <h3><a href={`/api/stock-quote/${stock.symbol}`}>{ stock.stock }</a></h3>
          </ListGroupItem>
        )) }
      </ListGroup>
    )
  }
}

export default StockList;