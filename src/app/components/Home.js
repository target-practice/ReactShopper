import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  makeOlder() {
    this.age += 3;
    console.log('Current age', this.age);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <p>*** Home component</p>

        {/* Use single curly braces to execute valid JavaScript code */}
        {'Two plus Two = '}
        {2 + 2}

        {/* Use props to output dynamic data */}
        <p>
          Your name is {this.props.name}, age is {this.age}
        </p>
        <p>
          <button className="btn" onClick={this.makeOlder.bind(this)}>
            Make me older!
          </button>
        </p>
      </div>
    );
  }
}

/**
 * Define prop types for the Component
 */
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

// ERROR: Uncaught TypeError: Cannot read property 'string' of undefined
// FIX: Install 'prop-types' library separately... https://stackoverflow.com/a/44573437/2661028
