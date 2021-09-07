import React, { Component } from 'react';

class Quote extends Component {
  render() {
    const { c, d, dp, h, l, o, pc} = this.props;

    return (
      <div>
          <h3>Current Price: ${ c }</h3>
          <h3>Change: ${ d }</h3>
          <h3>Percent Change: { dp }%</h3>
          <h3>High for Day: ${ h }</h3>
          <h3>Low for Day: ${ l }</h3>
          <h3>Opening Price: ${ o }</h3>
          <h3>Previous Closing Price: ${ pc }</h3>
      </div>
    )
  }
}

export default Quote;