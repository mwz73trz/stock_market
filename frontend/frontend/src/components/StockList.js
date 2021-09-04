import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class StockList extends Component {
  render() {
    const { stocks } = this.props;
    return (
      <ListGroup>
        <h1>All Stocks</h1>
        { stocks.map((stock, index) => (
          <ListGroupItem key={index}>
            <h3><Link to={`/stock-quote/${stock.symbol}`}>{ stock.stock }</Link></h3>
          </ListGroupItem>
        )) }
      </ListGroup>
    )
  }
}

export default StockList;