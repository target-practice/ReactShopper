import React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <p>*** Home component</p>

        {/* Use single curly braces to execute valid JavaScript code */}
        {'Two plus Two = '}
        {2 + 2}
      </div>
    );
  }
}
