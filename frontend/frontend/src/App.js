import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StockQuotePage from './pages/StockQuotePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={HomePage} />
            <Route path="/api/stock-quote/:symbol" component={StockQuotePage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
