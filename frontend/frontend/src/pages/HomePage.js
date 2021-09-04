import React, { Component } from 'react';
import StockList from "../components/StockList";
import StockAPI from '../api/StockAPI.js';

class HomePage extends Component {
  state = {
    stocks: []
  }

  async componentDidMount() {
    try {
      const stocksJson = await StockAPI.fetchStocks();
      this.setState({ stocks: stocksJson });
    }catch (e) {
      console.error('error fetching stocks:', e)
    }
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <StockList stocks={this.state.stocks} />
      </div>
    )
  }
}

export default HomePage;