import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={HomePage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
