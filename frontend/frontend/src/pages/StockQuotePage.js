import { Component } from "react";
import StockAPI from '../api/StockAPI';
import { Redirect } from 'react-router-dom';
import Quote from '../components/Quote';

class StockQuotePage extends Component {
  state = {
    quote: null,
    redirect: false
  };

  async componentDidMount() {
    try {
      const quoteJson = await StockAPI.getStockQuote(this.props.match.params.symbol)
      console.log('quoteJson:', quoteJson)
      this.setState({ quote: quoteJson })
    }catch (e) {
      console.error('error fetching quote: ', e)
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Stock Quote: {this.props.match.params.symbol}</h1>
        {this.state.quote ? <span>
          <Quote {...this.state.quote} />
        </span> :
        <span>404: Quote Not Found</span>
        }
      </div>
    )
  }
}

export default StockQuotePage;